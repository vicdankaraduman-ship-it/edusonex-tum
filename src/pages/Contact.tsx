import { useState } from "react";
import { Phone, MapPin, Mail, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

const WHATSAPP_NUMBER = "905320674063";

const Contact = () => {
  const [name, setName] = useState("");
  const [institution, setInstitution] = useState("");

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Merhaba, ben ${name}${institution ? ` (${institution})` : ""}. Edusonex hakkında bilgi almak ve demo talep etmek istiyorum.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">
              💬 Hızlı İletişim
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              30 Saniyede{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                WhatsApp'tan
              </span>{" "}
              Ulaşın
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              En hızlı yol: adınızı yazın, mesajınız hazır gelsin — gönderin.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Bilgi */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

            {/* WhatsApp Formu */}
            <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Demo Talep Et</h2>
                  <p className="text-sm text-muted-foreground">WhatsApp üzerinden bağlanalım</p>
                </div>
              </div>

              <form onSubmit={handleWhatsApp} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Adınız *
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Adınız Soyadınız"
                    className="h-12 text-base"
                  />
                </div>

                <div>
                  <label htmlFor="institution" className="block text-sm font-medium text-foreground mb-2">
                    Kurum Adı <span className="text-muted-foreground font-normal">(isteğe bağlı)</span>
                  </label>
                  <Input
                    id="institution"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    placeholder="Okul veya Kurs Merkezi adı"
                    className="h-12 text-base"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-base bg-green-600 hover:bg-green-700 text-white mt-2"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp'ta Mesaj Gönder
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Mesaj otomatik hazırlanır, siz sadece gönderin. Genellikle aynı gün dönüş yapılır.
              </p>
            </div>

            {/* Sağ Taraf — İletişim Bilgileri */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground mb-4">İletişim Bilgileri</h2>

              <Card
                className="border-border/50 hover:border-green-500/30 hover:shadow-md transition-all cursor-pointer"
                onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank")}
              >
                <CardHeader className="pb-2 pt-5">
                  <CardTitle className="flex items-center gap-3 text-base">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-green-500" />
                    </div>
                    WhatsApp & Telefon
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground font-mono pb-5">
                  +90 532 067 40 63
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader className="pb-2 pt-5">
                  <CardTitle className="flex items-center gap-3 text-base">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    E-posta
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-5">
                  <a
                    href="mailto:info@edusonex.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@edusonex.com
                  </a>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader className="pb-2 pt-5">
                  <CardTitle className="flex items-center gap-3 text-base">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-secondary" />
                    </div>
                    Adres
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground pb-5">
                  Çakır Mah. Fevzipaşa Cad. No: 248<br />
                  03500 Sandıklı – Afyonkarahisar / Türkiye
                </CardContent>
              </Card>

              {/* Pilot bilgisi */}
              <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-5 mt-2">
                <p className="text-sm font-semibold text-foreground mb-1">🚀 Pilot Kontenjanı Açık</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  İlk 3 pilot okula özel kurulum avantajı geçerlidir.
                  WhatsApp'tan ulaşın, 30 dakikada büyüme planınızı hazırlayalım.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
