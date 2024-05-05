import React from "react";

const Button = ({ title = "Button", ...rest }: any) => {
  return (
    <button className="bg-blue-500 rounded-md p-2 text-white" {...rest}>
      {title}
    </button>
  );
};

export default Button;
