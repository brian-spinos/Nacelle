import React, { useEffect, useState, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Trigger fade-in effect on mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`w-full transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
