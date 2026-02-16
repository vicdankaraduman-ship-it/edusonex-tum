import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Ekosistem", href: "/" },
  { name: "Ürünler", href: "/urunler" },
  { name: "Çözümler", href: "/cozumler" },
  { name: "HEM AI", href: "/hem-ai" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "İletişim", href: "/iletisim" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold tracking-tight text-primary">
            EDUSONEX
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-muted ${
                location.pathname === item.href
                  ? "text-primary bg-muted"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Official Kommo Partner */}
        <a
          href="https://www.kommo.com/tr/partnerler/bir-partner-bulun/edusonex-egitim-teknolojileri/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 px-4 py-2 border border-secondary/30 rounded-md bg-secondary/5 hover:bg-secondary/10 transition-colors group"
        >
          <div className="w-6 h-6 rounded bg-secondary/20 flex items-center justify-center">
            <span className="text-xs font-bold text-secondary">K</span>
          </div>
          <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground">
            Official Partner
          </span>
          <ExternalLink className="h-3 w-3 text-muted-foreground" />
        </a>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-3 text-base font-medium rounded-md transition-colors ${
                  location.pathname === item.href
                    ? "text-primary bg-muted"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-border">
              <a
                href="https://www.kommo.com/tr/partnerler/bir-partner-bulun/edusonex-egitim-teknolojileri/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 border border-secondary/30 rounded-md bg-secondary/5"
              >
                <div className="w-6 h-6 rounded bg-secondary/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-secondary">K</span>
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  Official Kommo Partner
                </span>
                <ExternalLink className="h-3 w-3 text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
