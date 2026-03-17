import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, ArrowRight, TrendingUp, Send, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const EXIT_POPUP_KEY = "edusonex_exit_popup_shown";

const ExitIntentPopup = () => {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", institution: "", phone: "" });
  const triggered = useRef(false);

  useEffect(() => {
    if (sessionStorage.getItem(EXIT_POPUP_KEY)) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < window.innerHeight * 0.10 && !triggered.current) {
        triggered.current = true;
        setVisible(true);
        sessionStorage.setItem(EXIT_POPUP_KEY, "1");
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 8000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const raporUrl = `${window.location.origin}/rapor/2026`;
    const msg = encodeURIComponent(
      `Merhaba! Ücretsiz rakip analizi raporu talep ediyorum.\nAd Soyad: ${form.name}\nKurum: ${form.institution}\nTelefon: ${form.phone}\n\n📊 Raporunuz burada: ${raporUrl}`
    );
    window.open(`https://wa.me/905320674063?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-fade-in"
      onClick={() => setVisible(false)}
    >
      <div
        className="relative bg-card border border-border rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Üst aksan çizgisi */}
        <div className="h-1 w-full bg-gradient-to-r from-destructive via-orange-500 to-yellow-400" />

        <div className="p-8">
          {/* Kapat */}
          <button
            onClick={() => setVisible(false)}
            className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors z-10"
          >
            <X className="h-4 w-4" />
          </button>

          {!submitted ? (
            <>
              {/* İkon + Etiket */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                </div>
                <span className="text-xs font-bold text-destructive uppercase tracking-widest">
                  Ücretsiz Rakip Analizi
                </span>
              </div>

              {/* Başlık */}
              <h2 className="text-xl md:text-2xl font-black text-foreground mb-3 leading-tight">
                Bölgenizdeki Rakipler Yeni Kayıtları Nasıl Kapıyor?
              </h2>

              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                Yapay zeka ile öğrenci kayıt sistemini benimseyen okullar kayıt sezonu bitmeden dolup taşıyor.{" "}
                <strong className="text-foreground">Ücretsiz PDF raporunuzu alın</strong> ve bölgenizdeki rekabeti
                bugünden anlayın.
              </p>

              {/* Aciliyet */}
              <div className="flex items-center gap-2 bg-destructive/5 border border-destructive/10 rounded-xl px-4 py-2 mb-5">
                <TrendingUp className="h-4 w-4 text-destructive" />
                <p className="text-xs text-muted-foreground">
                  <strong className="text-foreground">Pilot kontenjan:</strong> Bu ay için yalnızca{" "}
                  <strong className="text-destructive">1 okul</strong> kabul edilecektir.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Ad Soyadınız"
                  className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Okul / Kurum Adı"
                  className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                  value={form.institution}
                  onChange={(e) => setForm({ ...form, institution: e.target.value })}
                  required
                />
                <input
                  type="tel"
                  placeholder="WhatsApp No (Raporunuz anında iletilir)"
                  className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                />

                <Button type="submit" className="w-full font-bold py-3 rounded-xl" size="lg">
                  <Send className="h-4 w-4 mr-2" />
                  Raporu Ücretsiz Al
                </Button>

                <div className="flex items-center justify-between">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setVisible(false)}
                    className="text-muted-foreground text-xs"
                  >
                    Şimdi değil
                  </Button>
                  <p className="text-[10px] text-muted-foreground">
                    Spam yok · KVKK Uyumlu
                  </p>
                </div>
              </form>
            </>
          ) : (
            /* Teşekkür Ekranı */
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-black text-foreground mb-3">Başvurunuz Alındı! 🎉</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Ekibimiz en kısa sürede WhatsApp üzerinden sizinle iletişime geçecek.
                Bölgenizdeki rekabeti birlikte analiz edeceğiz.
              </p>
              <div className="flex gap-3">
                <Link to="/iletisim" className="flex-1" onClick={() => setVisible(false)}>
                  <Button className="w-full" size="sm">
                    Demo Randevusu Oluştur <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="sm" onClick={() => setVisible(false)} className="flex-1">
                  Kapat
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
