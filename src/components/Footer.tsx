import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Sol - Marka */}
          <div>
            <span className="text-2xl font-bold tracking-tight">EDUSONEX</span>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
              Okullara özel yapay zekâ destekli
              eğitim teknolojileri altyapıları.
            </p>
          </div>

          {/* Orta - Hızlı Bağlantılar */}
          <div>
            <h3 className="font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link to="/" className="hover:text-primary-foreground transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/urunler" className="hover:text-primary-foreground transition-colors">
                  Ürünler
                </Link>
              </li>
              <li>
                <Link to="/cozumler" className="hover:text-primary-foreground transition-colors">
                  Çözümler
                </Link>
              </li>
              <li>
                <Link to="/hem-ai" className="hover:text-primary-foreground transition-colors">
                  HEM AI
                </Link>
              </li>
              <li>
                <Link to="/hakkimizda" className="hover:text-primary-foreground transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="hover:text-primary-foreground transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Sağ - İletişim */}
          <div>
            <h3 className="font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  Çakır Mah. Fevzipaşa Cad. No: 248<br />
                  03500 Sandıklı – Afyonkarahisar / Türkiye
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+905320674063" className="hover:text-primary-foreground transition-colors">
                  +90 532 067 40 63
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:info@edusonex.com" className="hover:text-primary-foreground transition-colors">
                  info@edusonex.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <p>© 2025 Edusonex. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-4">
            <Link to="/gizlilik" className="hover:text-primary-foreground transition-colors">
              Gizlilik Politikası
            </Link>
            <span className="text-primary-foreground/30">|</span>
            <Link to="/kullanim-sartlari" className="hover:text-primary-foreground transition-colors">
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
