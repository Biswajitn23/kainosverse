import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div>
            <img src="/kainoverselogo.png" alt="Kainosverse" className="h-16 w-auto mb-4" />
            <p className="text-primary-foreground/80 text-sm">
              Empowering students to build, test, and launch — not just learn.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="mailto:kainosverse@gmail.com"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-accent-foreground transition-colors"
              >
                <Mail size={18} />
                <span className="text-sm">kainosverse@gmail.com</span>
              </a>
              <a
                href="tel:+919770950823"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-accent-foreground transition-colors"
              >
                <Phone size={18} />
                <span className="text-sm">+91 97709 50823</span>
              </a>
              <a
                href="https://www.google.com/maps?q=MIG%2026%2C%20Near%20Sahyog%20Park%2C%20New%20Purena%2C%20Mahaveer%20Nagar%2C%20Tikrapara%2C%20Raipur%2C%20Chhattisgarh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-2 text-primary-foreground/80 hover:text-accent-foreground transition-colors"
              >
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm underline underline-offset-2">
                  MIG 26, Near Sahyog Park, New Purena, Mahaveer Nagar, Tikrapara, Raipur, Chhattisgarh
                </span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/kainosverse/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-3 rounded-full hover:bg-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/kainosverse/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-3 rounded-full hover:bg-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Kainosverse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
