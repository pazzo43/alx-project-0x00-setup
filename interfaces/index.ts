// interfaces for reusable components
export interface PillProps {
  title: string;
}

export interface ButtonProps {
  title: string;
  styles: string;
}

pages/landing.tsx
pages/about.tsx
pages/
 ├── api/
 ├── _app.tsx
 ├── _document.tsx
 ├── index.tsx
 ├── landing.tsx
 └── about.tsx

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
    </div>
  );
};

export default Landing;
const About: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">About Page</h1>
    </div>
  );
};

export default About;
npm run dev -- -p 3000
http://localhost:3000

