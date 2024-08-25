/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2F80ED",
        gray: {
          DEFAULT: "#4F4F4F",
          light: "#828282",
          lightest: "#E0E0E0",
        },
        indicator: {
          tacao: "#F8B76B",
          slateBlue: "#8785FF",
          flamingo: "#EB5757",
          creamCan: "#F2C94C",
        },
        chats: {
          serenade: "#FCEED3",
          tulipTree: "#E5A443",
          magnolia: "#EEDCFF",
          mediumPurple: "#9B51E0",
          hummingBird: "#D2F2EA",
          seaGreen: "#43B78D",
          lightGray: "#F8F8F8",
        },
        stickers: {
          aliceBlue: "#E9F3FF",
          peach: "#FDCFA4",
          eggSour: "#F9E9C3",
          waterLeaf: "#AFEBDB",
          teaGreen: "#CBF1C2",
          lavender: "#CFCEF9",
          magnolia: "#F9E0FD",
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({
      nocompatible: true,
    }),
  ],
};
