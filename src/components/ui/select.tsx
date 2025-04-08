"use client";

import { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ children, ...props }: SelectProps) {
  return (
    <select
      className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      {...props}
    >
      {children}
    </select>
  );
}

export function SelectItem({
  value,
  children
}: {
  value: string;
  children: React.ReactNode;
}) {
  return <option value={value}>{children}</option>;
}
