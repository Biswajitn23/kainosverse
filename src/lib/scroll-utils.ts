// Scroll utility functions that work with Lenis
// Note: These functions assume Lenis is already initialized

// Function to smoothly scroll to a target element
export const scrollToElement = (target: string | HTMLElement, offset: number = 0) => {
  // Get the Lenis instance from the window if available
  const lenis = (window as any).lenis;
  if (lenis) {
    lenis.scrollTo(target, {
      offset,
      duration: 1.2,
    });
  } else {
    // Fallback to native scrolling if Lenis is not available
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (element) {
      const targetPosition = (element as HTMLElement).offsetTop + offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }
};

// Function to smoothly scroll to top
export const scrollToTop = () => {
  const lenis = (window as any).lenis;
  if (lenis) {
    lenis.scrollTo(0);
  } else {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
};

// Function to smoothly scroll by a certain amount
export const scrollBy = (distance: number) => {
  const lenis = (window as any).lenis;
  if (lenis) {
    lenis.scrollTo(window.scrollY + distance);
  } else {
    window.scrollBy({
      top: distance,
      behavior: 'smooth'
    });
  }
};