/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  prefix: `tw-`,
  content: ["*.{html,js,ts}"],
  important: false,
  theme: {
    extend: {
      backgroundImage: {
        "header-img": "url()",
      },
      content: {
        checkmark: `url("images/icon-check.svg")`,
      },
    },
    screens: {
      mobile: "340px",
      desktop: "600px",
    },
    colors: {
      /* primary */
      brightBlue: `hsl(220, 98%, 61%)`,
      cyan: `hsl(192, 100%, 67%)`,
      lightPurple: `hsl(280, 87%, 65%)`,
      /*light theme */
      lightM: {
        white: `hsl(0, 0%, 98%)`,
        gray200: `hsl(236, 33%, 92%)`,
        gray300: `hsl(233, 11%, 84%)`,
        gray400: `hsl(236, 9%, 61%)`,
        gray600: `hsl(235, 19%, 35%)`,
      },
      darkM: {
        darkBlue100: `hsl(235, 24%, 19%)`,
        darkBlue200: `hsl(235, 21%, 11%)`,
        gray200: `hsl(234, 39%, 85%)`,
        white: `hsl(236, 33%, 92%)`,
        darkGray100: `hsl(234, 11%, 52%)`,
        darkGray200: `hsl(233, 14%, 35%)`,
        darkGray300: `hsl(237, 14%, 26%)`,
      },
    },
    fontFamily: {},
    extend: {
      spacing: {},
      borderRadius: {},
    },
  },
};
