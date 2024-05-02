import { lightenColor } from "./lightenColor";

// utils/colorTheme.js
export const updatePrimaryColor = (color: any) => {
  if (typeof window !== "undefined") {
    const root = window.document.documentElement;

    console.log("color", lightenColor(color, 90));

    // Update primary color and shades
    root.style.setProperty("--primary-color", color);
    root.style.setProperty("--primary-50", lightenColor(color, 90));
    root.style.setProperty("--primary-100", lightenColor(color, 80));
    root.style.setProperty("--primary-200", lightenColor(color, 70));
    root.style.setProperty("--primary-300", lightenColor(color, 60));
    root.style.setProperty("--primary-400", lightenColor(color, 50));
    root.style.setProperty("--primary-500", lightenColor(color, 40));
    root.style.setProperty("--primary-600", lightenColor(color, 30));
    root.style.setProperty("--primary-700", lightenColor(color, 20));
    root.style.setProperty("--primary-800", lightenColor(color, 10));
    root.style.setProperty("--primary-900", color);
  }
};

export const updateSecondaryColor = (color: any) => {
  if (typeof window !== "undefined") {
    const root = window.document.documentElement;
    root.style.setProperty("--secondary-color", color);
  }
};

export const updateFontFamily = (fontFamily: any) => {
  if (typeof window !== "undefined") {
    const root = window.document.documentElement;
    root.style.setProperty("--font-family", fontFamily);
  }
};
