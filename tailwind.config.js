import typographyPlugin from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "20px",
        lg: "2rem",
      },
    },
    extend: {
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-down": {
          from: { height: 0 },
          to: { height: "var(--slide-down-to)" },
        },
        "slide-up": {
          from: { height: "var(--slide-up-from)" },
          to: { height: 0 },
        },
        "slide-left-and-fade": {
          from: {
            opacity: 0,
            transform: "translateX(var(--left-distance, 6px))",
          },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        "slide-down-and-fade": {
          from: {
            opacity: 0,
            transform: "translateY(var(--bottom-distance, 6px))",
          },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "enter-from-left": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "enter-from-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "enter-from-top": {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateZ(0)" },
          to: { transform: "translate3d(-100%,0,0)" },
        },
        underline: {
          "0%": {
            transform: "scaleX(1)",
            transformOrigin: "right",
          },
          "50%": {
            transform: "scaleX(0)",
            transformOrigin: "right",
          },
          "51%": {
            transformOrigin: "left",
          },
          "100%": {
            transform: "scaleX(1)",
          },
        },
      },
      animation: {
        spin: "spin .5s linear infinite",
        marquee: "marquee var(--marquee-duration, 15s) linear infinite",
        underline: "underline 400ms linear",
        "fade-in": "fade-in var(--fade-in-duration, .5s) ease-in forwards",
        "slide-down":
          "slide-down var(--slide-down-duration, .3s) cubic-bezier(0.87, 0, 0.13, 1) forwards",
        "slide-up":
          "slide-up var(--slide-up-duration, .3s) cubic-bezier(0.87, 0, 0.13, 1) forwards",
        "slide-left-and-fade":
          "slide-left-and-fade var(--slide-left-and-fade-duration, .5s) cubic-bezier(.165,.84,.44,1) forwards",
        "slide-down-and-fade":
          "slide-down-and-fade var(--slide-down-and-fade-duration, .5s) cubic-bezier(.165,.84,.44,1) forwards",
        "enter-from-left":
          "enter-from-left var(--enter-from-left-duration, .3s) ease-out forwards",
        "enter-from-right":
          "enter-from-right var(--enter-from-right-duration, .3s) ease-out forwards",
        "enter-from-top":
          "enter-from-top var(--enter-from-top-duration, .3s) ease-out forwards",
      },
      borderWidth: {
        6: "6px",
      },
      colors: {
        body: "var(--color-text)",
        "body-subtle": "var(--color-text-subtle)",
        "body-inverse": "var(--color-text-inverse)",
        background: "var(--color-background)",
        line: "var(--color-line)",
        "line-subtle": "var(--color-line-subtle)",
      },
      outlineOffset: {
        3: "3px",
      },
      screens: {
        sm: "32em",
        md: "48em",
        lg: "64em",
        xl: "80em",
        "2xl": "96em",
        "sm-max": { max: "48em" },
        "sm-only": { min: "32em", max: "48em" },
        "md-only": { min: "48em", max: "64em" },
        "lg-only": { min: "64em", max: "80em" },
        "xl-only": { min: "80em", max: "96em" },
        "2xl-only": { min: "96em" },
      },
      spacing: {
        nav: "var(--height-nav)",
        screen: "var(--screen-height, 100vh)",
      },
      height: {
        screen:
          "calc(var(--screen-height, 100vh) - var(--initial-topbar-height))",
        "screen-no-nav":
          "calc(var(--screen-height, 100vh) - var(--height-nav) - var(--initial-topbar-height))",
        "screen-dynamic": "var(--screen-height-dynamic, 100vh)",
      },
      width: {
        mobileGallery: "calc(100vw - 3rem)",
        page: "var(--page-width, 1280px)",
      },
      maxWidth: {
        page: "var(--page-width, 1280px)",
        "prose-narrow": "45ch",
        "prose-wide": "80ch",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Arial", '"IBMPlexSerif"', "Palatino", "ui-serif"],
      },
      fontSize: {
        scale: [
          "calc(var(--min-size-px) + (var(--max-size) - var(--min-size)) * ((100vw - var(--wv-min-viewport-size, 320) * 1px) / (var(--wv-max-viewport-size, 1920) - var(--wv-min-viewport-size, 320))))",
          1,
        ],
        xs: ["calc(var(--body-base-size) * 0.75)", 1],
        sm: ["calc(var(--body-base-size) * 0.875)", 1.25],
        base: ["var(--body-base-size)", "var(--body-base-line-height)"],
        lg: ["calc(var(--body-base-size) * 1.125)", 1.75],
        xl: ["calc(var(--body-base-size) * 1.25)", 1.75],
        "2xl": ["calc(var(--body-base-size) * 1.5)", 2],
        "3xl": ["calc(var(--body-base-size) * 1.875)", 2.25],
        "4xl": ["calc(var(--body-base-size) * 2.25)", 2.5],
        "5xl": ["calc(var(--body-base-size) * 3)", 1],
        "6xl": ["calc(var(--body-base-size) * 3.75)", 1],
        "7xl": ["calc(var(--body-base-size) * 4.5)", 1],
        "8xl": ["calc(var(--body-base-size) * 6)", 1],
        "9xl": ["calc(var(--body-base-size) * 8)", 1],
      },
      lineHeight: {
        normal: "var(--body-base-line-height)",
      },
      letterSpacing: {
        normal: "var(--body-base-letter-spacing)",
      },
      boxShadow: {
        border: "inset 0px 0px 0px 1px rgb(var(--color-border) / 0.08)",
        header: "0 2px 5px #0000000f",
      },
      zIndex: {
        1: "1",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({ strategy: "class" }),
    typographyPlugin,
  ],
};
