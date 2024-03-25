import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "grid-col-2": "calc((2/24)*100vw)",
        "grid-col-3": "calc((3/24)*100vw)",
        "grid-col-4": "calc((4/24)*100vw)",
        "grid-col-5": "calc((5/24)*100vw)",
        "grid-col-6": "calc((6/24)*100vw)",
        "grid-col-7": "calc((7/24)*100vw)",
        "grid-col-8": "calc((8/24)*100vw)",
        "grid-col-9": "calc((9/24)*100vw)",
        "grid-col-10": "calc((10/24)*100vw)",
        "grid-col-11": "calc((11/24)*100vw)",
        "grid-col-12": "calc((12/24)*100vw)",
        "grid-col-13": "calc((13/24)*100vw)",
        "grid-col-14": "calc((14/24)*100vw)",
        "grid-col-15": "calc((15/24)*100vw)",
        "grid-col-16": "calc((16/24)*100vw)",
        "grid-col-17": "calc((17/24)*100vw)",
        "grid-col-18": "calc((18/24)*100vw)",
        "grid-col-19": "calc((19/24)*100vw)",
        "grid-col-20": "calc((20/24)*100vw)",
        "grid-col-21": "calc((21/24)*100vw)",
        "grid-col-22": "calc((22/24)*100vw)",
        "grid-col-23": "calc((23/24)*100vw)",
        "grid-col-24": "calc((24/24)*100vw)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
