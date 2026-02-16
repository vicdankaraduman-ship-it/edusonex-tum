import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Sol - Marka */}
          <div className="space-y-4">
            <span className="text-2xl font-bold tracking-tight text-white">EDUSONEX</span>
            <p className="text-sm text-primary-foreground/80 leading-relaxed max-w-xs font-light">
              Okullara özel yapay zekâ destekli
              eğitim teknolojileri altyapıları.
            </p>
          </div>

          {/* Orta - Hızlı Bağlantılar */}
          <div>
            <h3 className="font-semibold mb-6 text-white text-lg">Hızlı Bağlantılar</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <Link to="/hakkimizda" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/universe" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                  Evren
                </Link>
              </li>
              <li>
                <Link to="/referanslar" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                  Referanslar
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Sağ - İletişim */}
          <div>
            <h3 className="font-semibold mb-6 text-white text-lg">İletişim</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3 group">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-white/70 group-hover:text-white transition-colors" />
                <span className="leading-relaxed">
                  Çakır Mah. Fevzipaşa Cad. No: 248<br />
                  03500 Sandıklı – Afyonkarahisar / Türkiye
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="h-5 w-5 shrink-0 text-white/70 group-hover:text-white transition-colors" />
                <a href="tel:+905320674063" className="hover:text-white transition-colors font-medium">
                  +90 532 067 40 63
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="h-5 w-5 shrink-0 text-white/70 group-hover:text-white transition-colors" />
                <a href="mailto:info@edusonex.com" className="hover:text-white transition-colors font-medium">
                  info@edusonex.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>© 2026 Edusonex. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <Link to="/gizlilik" className="hover:text-white transition-colors">
              Gizlilik Politikası
            </Link>
            <Link to="/kullanim-sartlari" className="hover:text-white transition-colors">
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
