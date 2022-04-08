import React, { FC, ReactNode } from "react";

interface TextProps {
  children: ReactNode;
}

const Text: FC<TextProps> = ({ children }) => {
  return (
    <h1>{children}</h1>
  );
}

export default Text;