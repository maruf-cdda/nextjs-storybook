import Image from "next/image";
import React from "react";

const Cover = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <Image src={src} alt={alt} height={500} width={500} objectFit="contain" />
  );
};

export default Cover;
