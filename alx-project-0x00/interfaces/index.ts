1. Create the Button interface

Create a new file (if it doesn’t exist) for interfaces or add to interfaces/index.ts:
export interface ButtonProps {
  title: string;
  className?: string; // optional styles
}
2. Create the Button component

Create a new file:
components/Button.tsx
Add the following code:
import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, className }) => {
  return (
    <button className={`px-4 py-2 bg-blue-500 text-white font-semibold ${className}`}>
      {title}
    </button>
  );
};

export default Button;
Open:
pages/landing.tsx

Import the Button:
import Button from "@/components/Button";

Ad some button instances under the <Card /> components:
<div className="mt-4 flex gap-2 flex-wrap">
  <Button title="Small Rounded" className="text-sm rounded-sm" />
  <Button title="Medium Rounded" className="text-base rounded-md" />
  <Button title="Large Rounded" className="text-lg rounded-full" />
</div>
Run your development server
npm run dev -- -p 3000

Check the landing page
http://localhost:3000/landing

