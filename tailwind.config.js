/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    // Remove Tailwind's preflight to avoid conflicts with MUI's CssBaseline if needed,
    // but usually it's better to keep it and adjust.
    // For now, we keep it enabled as we want Tailwind's reset.
    preflight: true,
  },
};
