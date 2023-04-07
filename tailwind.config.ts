import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark": "#343541",
        "aigreen": "#75a99c",
        "gray": {
          "900": "#202123",
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
