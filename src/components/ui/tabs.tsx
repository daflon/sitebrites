"use client";

import { ReactNode, useState } from "react";

export function Tabs({
  defaultValue,
  children,
  className
}: {
  defaultValue: string;
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function TabsList({ children }: { children: ReactNode }) {
  return <div className="flex gap-2 mb-4">{children}</div>;
}

export function TabsTrigger({
  value,
  onClick,
  children
}: {
  value: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      className="px-4 py-2 bg-gray-100 rounded hover:bg-blue-100"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function TabsContent({
  value,
  children
}: {
  value: string;
  children: ReactNode;
}) {
  return <div>{children}</div>;
}
