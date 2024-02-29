export const textVariant = (delay) => {
    return {
      hidden: {
        y: -20,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.5,
          delay: delay,
        },
      },
    };
  };
  
  export const fadeIn = (direction, type, duration) => {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 40 : direction === "down" ? -80 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: 0.1,
          duration: duration,
          ease: "easeInOut",
        },
      },
    };
  };
  
  export const zoomIn = (delay, duration) => {
    return {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const slideIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };

  // Fade In and Out
export const fadeInOut = (delay, duration) => {
    return {
      hidden: {
        opacity: 0,
      },
      show: {
        opacity: 1,
        transition: {
          delay: delay,
          duration: duration,
        },
      },
      exit: {
        opacity: 0,
        transition: {
          duration: duration,
        },
      },
    };
  };
  
  // Rotate In
  export const rotateIn = (delay, duration) => {
    return {
      hidden: {
        rotate: -180,
        opacity: 0,
      },
      show: {
        rotate: 0,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  // Bounce
  export const bounce = (delay, duration) => {
    return {
      hidden: {
        y: 50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          delay: delay,
          duration: duration,
        },
      },
    };
  };
  
  // Scale In
  export const scaleIn = (delay, duration) => {
    return {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  // Flip
  export const flip = (delay, duration) => {
    return {
      hidden: {
        rotateY: 180,
        opacity: 0,
      },
      show: {
        rotateY: 0,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  

  // Slide Up
export const slideUp = (delay, duration) => {
    return {
      hidden: {
        y: 20,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  // Slide Down
  export const slideDown = (delay, duration) => {
    return {
      hidden: {
        y: -150,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };

  export const delay = (delay, duration) => {
    return {
      hidden: {
        y: 0,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  // Color Change
  export const colorChange = (fromColor, toColor, duration) => {
    return {
      hidden: {
        backgroundColor: fromColor,
      },
      show: {
        backgroundColor: toColor,
        transition: {
          type: "tween",
          duration: duration,
          ease: "easeInOut",
        },
      },
    };
  };
  
  // Shake
  export const shake = (duration) => {
    return {
      hidden: {},
      show: {
        x: [-10, 10, -10, 10, -5, 5, -2, 2, 0],
        transition: {
          duration: duration,
          ease: "easeInOut",
        },
      },
    };
  };
  
  // Elastic Scale
  export const elasticScale = (delay, duration) => {
    return {
      hidden: {
        scale: 0.8,
        opacity: 0,
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          delay: delay,
          duration: duration,
          bounce: 0.5,
        },
      },
    };
  };
  


  // Heartbeat
export const heartbeat = (delay, duration) => {
    return {
      hidden: {
        scale: 1,
      },
      show: {
        scale: 1.1,
        transition: {
          type: "spring",
          delay: delay,
          duration: duration,
          bounce: 0.5,
        },
      },
    };
  };
  
  // Rubber Band
  export const rubberBand = (delay, duration) => {
    return {
      hidden: {
        scale: 1,
      },
      show: {
        scale: 1.25,
        transition: {
          type: "spring",
          delay: delay,
          duration: duration,
          bounce: 0.3,
        },
      },
    };
  };
  
  // Tada
  export const tada = (delay, duration) => {
    return {
      hidden: {
        scale: 1,
        rotate: 0,
      },
      show: {
        scale: 1.1,
        rotate: 3,
        transition: {
          type: "spring",
          delay: delay,
          duration: duration,
          bounce: 0.5,
        },
      },
    };
  };
  
  // Flash
  export const flash = (delay, duration) => {
    return {
      hidden: {
        opacity: 1,
      },
      show: {
        opacity: 0,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          yoyo: Infinity,
        },
      },
    };
  };
  
  // Jello
  export const jello = (delay, duration) => {
    return {
      hidden: {
        scale: 1,
        rotate: 0,
      },
      show: {
        scale: 1.2,
        rotate: 10,
        transition: {
          type: "spring",
          delay: delay,
          duration: duration,
          bounce: 0.5,
        },
      },
    };
  };
  
  // Light Speed In
  export const lightSpeedIn = (direction, delay, duration) => {
    return {
      hidden: {
        x: direction === "right" ? "100%" : direction === "left" ? "-100%" : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  // Swirl In
  export const swirlIn = (delay, duration) => {
    return {
      hidden: {
        opacity: 0,
        scale: 0,
        rotate: 720,
      },
      show: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };

  export const floatingAnimation = (size, color, duration) => {
    return {
      hidden: {
        y: 0,
      },
      show: {
        y: [0, -10, 0, 10, 0], // Floating motion
        transition: {
          y: {
            repeat: Infinity,
            duration: duration,
            ease: "linear",
          },
        },
      },
    };
}
  