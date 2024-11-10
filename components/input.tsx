import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, className, ...props }: Props) {
  return (
    <label className="flex flex-col text-gray-200 m-1">
      {label}
      <input
        {...props}
        className={`bg-gray-700 rounded px-3 py-1 text-pink-100 hover:bg-pink-900 transition-colors ${className}`}
      />
    </label>
  );
}
