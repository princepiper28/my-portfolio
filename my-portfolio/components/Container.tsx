import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
};
