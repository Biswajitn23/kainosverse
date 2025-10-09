import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
// Using logo from public folder

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHome
          ? isScrolled
            ? "bg-primary/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
          : "bg-primary/90 backdrop-blur-md shadow-lg"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/kainoverselogo.png" alt="Kainosverse Logo" className="h-36 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`group relative inline-block py-1 text-primary-foreground hover:text-accent-foreground transition-colors font-medium ${
                  location.pathname === link.path ? "text-accent-foreground" : ""
                }`}
              >
                <span
                  className={`relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-accent-foreground after:w-full after:origin-left after:transition-transform after:duration-300 ${
                    location.pathname === link.path
                      ? "after:scale-x-100"
                      : "after:scale-x-0 group-hover:after:scale-x-100"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
            <a
              href="https://forms.gle/aoxXLX6uD7zSRTee9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg">
                Register Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`group block text-primary-foreground hover:text-accent-foreground transition-colors font-medium py-2 ${
                  location.pathname === link.path ? "text-accent-foreground" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span
                  className={`relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-accent-foreground after:w-full after:origin-left after:transition-transform after:duration-300 ${
                    location.pathname === link.path
                      ? "after:scale-x-100"
                      : "after:scale-x-0 group-hover:after:scale-x-100"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
            <a
              href="https://forms.gle/aoxXLX6uD7zSRTee9"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="hero" size="lg" className="w-full">
                Register Now
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
