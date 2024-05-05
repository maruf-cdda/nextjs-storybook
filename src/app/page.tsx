"use client";

import React, { useEffect, useState } from "react";
import { updatePrimaryColor } from "@/utils/colorTheme";
import Button from "@/stories/Button/Button";

const Page = () => {
  const [primaryColor, setPrimaryColor] = useState("");
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    updatePrimaryColor(primaryColor);
    if (navigator.onLine) {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }
  }, [primaryColor]);

  return (
    <>
      <div>
        <h1 className="text-primary font-sans font-extrabold text-4xl">
          Dynamic Theme
        </h1>
        <p className="text-secondary">
          This text will change color dynamically.
        </p>
        <input
          type="color"
          onChange={(e) => {
            setPrimaryColor(e.target.value);
          }}
        />
      </div>
      <div>
        <p className="text-secondary">
          You are currently {isOnline ? "online" : "offline"}.
        </p>
      </div>
      <Button />
    </>
  );
};

export default Page;
