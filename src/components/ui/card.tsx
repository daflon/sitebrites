"use client";

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-white rounded-2xl shadow">{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-4">{children}</div>;
}
