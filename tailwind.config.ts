import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        noir: {
          950: "#061D18",
          900: "#0C2D26",
          800: "#123B32",
          700: "#1B4A3F",
        },
        gold: {
          DEFAULT: "#C5A059",
          bright: "#D4AF37",
          soft: "#E4C98A",
        },
        cream: "#F9F6F0",
        muted: "#8A9A96",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        display: ["var(--font-cinzel)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      boxShadow: {
        "gold-glow": "0 0 15px rgba(197,160,89,0.3)",
        "gold-glow-lg": "0 0 35px rgba(197,160,89,0.45)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        bounceDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
      animation: {
        shimmer: "shimmer 2.4s linear infinite",
        bounceDown: "bounceDown 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
