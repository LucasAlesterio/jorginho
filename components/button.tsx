import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ className, ...props }: Props) {
  return (
    <button
      {...props}
      className={`bg-pink-700 m-1 rounded px-3 py-1 text-pink-100 hover:bg-pink-900 transition-colors ${className}`}
    />
  );
}
