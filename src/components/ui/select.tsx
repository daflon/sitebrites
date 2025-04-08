"use client";

import { ChangeEvent, ReactNode } from "react";

type SelectProps = {
  value: string;
  onValueChange: (value: string) => void;
  children: ReactNode;
};

export function Select({ value, onValueChange, children }: SelectProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onValueChange(e.target.value);
  };

  return (
    <select
      value={value}
      onChange={handleChange}
      className="border border-gray-300 rounded-2xl px-3 py-2 w-full"
    >
      {children}
    </select>
  );
}

type SelectItemProps = {
  value: string;
  children: ReactNode;
};

export function SelectItem({ value, children }: SelectItemProps) {
  return <option value={value}>{children}</option>;
}
