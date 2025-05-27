import flowbitePlugin from "flowbite/plugin";

module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",       // Remix app files
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Components directory
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",     // Pages directory
    "./node_modules/flowbite/**/*.js",      // Flowbite components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D91448",
        beige: "#FDE6BD",
        dark: "#0D0D0D",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        raleway: ["Raleway", "system-ui", "sans-serif"],
        nunito: ["Nunito", "system-ui", "sans-serif"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "fade-in": "fadeIn 1s ease-in-out",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),        // Plugin para animaciones
    flowbitePlugin,                       // Carga estilos y scripts automáticamente
  ],
};