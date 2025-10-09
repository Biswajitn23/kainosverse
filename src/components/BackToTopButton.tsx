import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { scrollToTop } from "@/lib/scroll-utils";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 400px from top
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    scrollToTop();
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleBackToTop}
      className="fixed bottom-24 right-6 z-50 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      aria-label="Back to top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default BackToTopButton;