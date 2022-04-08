import React, { FC, ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  as: any;
}

const Text: FC<TextProps> = ({ as = 'p', children }) => {
  const As = as;
  return (
    <As>{children}</As>
  );
}

export default Text;