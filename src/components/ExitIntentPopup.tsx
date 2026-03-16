import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const EXIT_POPUP_KEY = "edusonex_exit_popup_shown";

const ExitIntentPopup = () => {
  const [visible, setVisible] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    // Daha önce gösterdik mi?
    if (sessionStorage.getItem(EXIT_POPUP_KEY)) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Fare viewport'un üst %15'ine girince → çıkış niyeti
      if (e.clientY < window.innerHeight * 0.15 && !triggered.current) {
        triggered.current = true;
        setVisible(true);
        sessionStorage.setItem(EXIT_POPUP_KEY, "1");
      }
    };

    // 5 saniye sonra bağla (sayfayı yeni açmışken tetiklenmesin)
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={() => setVisible(false)}
    >
      <div
        className="relative bg-card border border-border rounded-2xl shadow-2xl max-w-lg w-full p-8 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Kapat */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* İkon */}
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
          <Rocket className="h-7 w-7 text-primary" />
        </div>

        {/* Başlık */}
        <h2 className="text-2xl font-bold text-foreground mb-3">
          Durun! Bölgenizdeki Rakipler Öğrencileri Nasıl Kapıyor?
        </h2>
        <p className="text-muted-foreground mb-2 text-sm leading-relaxed">
          Ücretsiz PDF raporu indirin:{" "}
          <strong className="text-foreground">
            "2026 Özel Okul Kayıt Pazarlaması ve AI Kanca Sistemi Rehberi"
          </strong>
        </p>
        <p className="text-xs text-muted-foreground mb-6">
          Pilot kontenjanlar dolmadan yerinizi ayırın — ilk 3 okula özel kurulum avantajı geçerlidir.
        </p>

        {/* CTA Butonları */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/iletisim" className="flex-1" onClick={() => setVisible(false)}>
            <Button className="w-full" size="lg">
              Strateji Görüşmesi Al <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            onClick={() => setVisible(false)}
            className="flex-1 text-muted-foreground"
          >
            Şimdi Değil
          </Button>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4">
          Spam yok. İstediğiniz zaman iptal.
        </p>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
