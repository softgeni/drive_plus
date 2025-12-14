export const fadeIn = (position: string, delay: number = 0.5) => {
  return {
    hidden: {
      y: position === "bottom" ? -80 : 0,
      x: position === "right" ? 80 : 0,
      opacity: 0,
      transition: {
        type: "tween" as const,
        duration: 0.5,
        delay: 0.5,
        ease: "easeInOut" as const,
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween" as const,
        duration: 1.4,
        delay,
        ease: "easeOut" as const,
      },
    },
  };
};
