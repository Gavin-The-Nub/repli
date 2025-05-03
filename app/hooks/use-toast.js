"use client";

import { useState } from "react";

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const toast = ({
    title,
    description,
    variant = "default",
    duration = 5000,
  }) => {
    const id = Math.random().toString(36).substring(2, 9);
    // Map variant to type for consistency with your component
    const type = variant === "destructive" ? "error" : variant;
    const newToast = { id, title, description, type, duration };

    setToasts((prevToasts) => [...prevToasts, newToast]);

    if (duration > 0) {
      setTimeout(() => {
        setToasts((prevToasts) =>
          prevToasts.filter((toast) => toast.id !== id)
        );
      }, duration);
    }

    return id;
  };

  const dismiss = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return {
    toast,
    dismiss,
    toasts,
  };
}
