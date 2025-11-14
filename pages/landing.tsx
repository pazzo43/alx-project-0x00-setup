import Card from "@/components/Card";

// pages/landing.tsx
import React from 'react';

const Landing: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-extralight">Landing Page</h1>

      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Landing;
npm run dev -- -p 3000
http://localhost:3000/landing

