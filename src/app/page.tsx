"use client";

import React, { useEffect } from "react";
import { updatePrimaryColor } from "@/utils/colorTheme";

const Page = () => {
  const [primaryColor, setPrimaryColor] = React.useState("");

  useEffect(() => {
    updatePrimaryColor(primaryColor);
  }, [primaryColor]);

  return (
    <div>
      <h1 className="text-primary font-sans font-extrabold text-4xl">
        Dynamic Theme
      </h1>
      <p className="text-secondary">This text will change color dynamically.</p>
      <input
        type="color"
        onChange={(e) => {
          setPrimaryColor(e.target.value);
        }}
      />
    </div>
  );
};

export default Page;
