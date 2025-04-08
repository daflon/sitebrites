"use client";

import { ReactNode } from "react";

type TabsProps = {
  defaultValue: string;
  children: ReactNode;
  className?: string;
};

export function Tabs({ children, className = "" }: TabsProps) {
  return <div className={className}>{children}</div>;
}

export function TabsList({ children }: { children: ReactNode }) {
  return <div className="flex space-x-2 mb-4">{children}</div>;
}

type TabsTriggerProps = {
  value: string;
  onClick: () => void;
  children: ReactNode;
};

export function TabsTrigger({ onClick, children }: TabsTriggerProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-gray-200 rounded-2xl hover:bg-gray-300"
    >
      {children}
    </button>
  );
}

export function TabsContent({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
