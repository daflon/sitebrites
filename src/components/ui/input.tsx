import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="border border-gray-300 rounded-2xl px-3 py-2 w-full"
    />
  );
}
