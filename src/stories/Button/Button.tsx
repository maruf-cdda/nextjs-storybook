import React from "react";

const Button = ({ title = "Button" }: { title: string }) => {
  return <button>{title}</button>;
};

export default Button;
