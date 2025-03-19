import { useState, useEffect } from "react";

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return isMobile;
}

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const updateScrollPosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    
    window.addEventListener("scroll", updateScrollPosition);
    
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);
  
  return scrollPosition;
}