Complete Scaffolding Instructions for alx-project-0x00
1. Open VS Code

Start a new VS Code window.

Open the terminal:
Terminal → New Terminal

2. Navigate to your desired project directory

Example:
cd Desktop
cd projects

3. Run the CLI scaffolding command
IMPORTANT: Use the correct double-dash

--typescript
NOT
–typescript (this is an invalid long dash)

Run this exact command:
npx create-next-app@latest alx-project-0x00 --typescript

4. Answer the prompts exactly as required

When the CLI asks questions, choose:

✔ ESLint: Yes
✔ Tailwind CSS: Yes
✔ Import alias: Yes
❌ /src directory: No
❌ App Router: No

5. Navigate into your new project folder
   cd alx-project-0x00

6. Start the development server on port 3000
   npm run dev -- -p 3000
   this project will start at:
http://localhost:3000
