"use client";

import { useState, useEffect } from "react";

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (browser environment)
    if (typeof window !== "undefined") {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      // Initial check
      checkIsMobile();

      // Add event listener
      window.addEventListener("resize", checkIsMobile);

      // Clean up
      return () => {
        window.removeEventListener("resize", checkIsMobile);
      };
    }
  }, []);

  return isMobile;
}
