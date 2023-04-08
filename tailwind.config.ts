import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green": {
          "400": "#75a99c"
        },
        "gray": {
          "100": "#F3F4F6",
          "800": "#343541",
          "900": "#202123",
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
