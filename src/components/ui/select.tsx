// src/components/ui/select.tsx
"use client";
import * as React from "react";

interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}

export function Select({ value, onValueChange, children }: SelectProps) {
  return (
    <select
      value={value}
      onChange={e => onValueChange(e.target.value)}
      className="border rounded p-2"
    >
      {children}
    </select>
  );
}

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
}

export function SelectItem({ value, children }: SelectItemProps) {
  return <option value={value}>{children}</option>;
}
