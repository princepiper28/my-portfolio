import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  full?: boolean; // allow disabling width limit
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  full = false,
}) => {
  return (
    <div
      className={`
        w-full
        ${full ? "" : "max-w-6xl"}
        mx-auto
        px-4
        sm:px-6
        md:px-8
        ${className}
      `}
    >
      {children}
    </div>
  );
};
