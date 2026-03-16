import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight, Building2, Users, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

// Web3Forms access key — ücretsiz, Cloudflare Pages uyumlu

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    role: "",
    studentCount: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", institution: "", role: "", studentCount: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">
              🚀 Ücretsiz Strateji Görüşmesi
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              30 Dakikada{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                Büyüme Planınızı
              </span>{" "}
              Hazırlayalım
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Okulunuza kaç yeni kayıt getirebileceğimizi birlikte hesaplayalım.
              Pilot kontenjanlar sınırlıdır.
            </p>
          </div>
        </div>
      </section>

      {/* Avantajlar Bandı */}
      <section className="py-6 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {[
              "✅ Ücretsiz 30 dk strateji görüşmesi",
              "🏆 İlk pilot okullara özel indirim",
              "📊 Okulunuza özel ROI hesabı",
              "⚡ 24 saat içinde geri dönüş",
            ].map((item, i) => (
              <span key={i} className="text-sm font-medium text-foreground">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Bilgi */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">VIP Demo Talep Formu</h2>
              <p className="text-muted-foreground mb-8 text-sm">
                Formu doldurun, ekibimiz 24 saat içinde sizi arasın.
              </p>

              {status === "success" ? (
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center">
                  <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Talebiniz Alındı!</h3>
                  <p className="text-muted-foreground mb-6">
                    Ekibimiz en geç <strong>24 saat içinde</strong> sizi arayacak.
                    Pilot kontenjanlar dolmadan yerinizi ayırdığınız için teşekkürler.
                  </p>
                  <Link to="/">
                    <Button variant="outline">Ana Sayfaya Dön <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Ad & Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Ad Soyad *
                      </label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Adınız Soyadınız" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        E-posta *
                      </label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="ornek@okul.com" />
                    </div>
                  </div>

                  {/* Telefon & Unvan */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Telefon *
                      </label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required placeholder="+90 5XX XXX XX XX" />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-foreground mb-2">
                        Unvanınız *
                      </label>
                      <div className="relative">
                        <select
                          id="role"
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          required
                          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 appearance-none text-foreground"
                        >
                          <option value="">Seçiniz...</option>
                          <option value="Okul Kurucusu / Sahibi">Okul Kurucusu / Sahibi</option>
                          <option value="Genel Müdür">Genel Müdür</option>
                          <option value="Müdür">Müdür</option>
                          <option value="Pazarlama Müdürü">Pazarlama Müdürü</option>
                          <option value="IT Koordinatörü">IT Koordinatörü</option>
                          <option value="Diğer">Diğer</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Kurum & Öğrenci Sayısı */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="institution" className="block text-sm font-medium text-foreground mb-2">
                        Kurum Adı *
                      </label>
                      <Input id="institution" name="institution" value={formData.institution} onChange={handleChange} required placeholder="Okul / Kurs Merkezi adı" />
                    </div>
                    <div>
                      <label htmlFor="studentCount" className="block text-sm font-medium text-foreground mb-2">
                        Öğrenci Sayısı *
                      </label>
                      <div className="relative">
                        <select
                          id="studentCount"
                          name="studentCount"
                          value={formData.studentCount}
                          onChange={handleChange}
                          required
                          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 appearance-none text-foreground"
                        >
                          <option value="">Seçiniz...</option>
                          <option value="100'e kadar (Starter)">100'e kadar → Starter (29.000 TL/ay)</option>
                          <option value="500'e kadar (Growth)">500'e kadar → Growth (39.500 TL/ay)</option>
                          <option value="1.000'e kadar (Enterprise)">1.000'e kadar → Enterprise (49.750 TL/ay)</option>
                          <option value="1.000+ (Unlimited)">1.000+ → Unlimited (Özel Fiyat)</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Mesaj */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Sorunuz veya Notunuz
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Varsa özel bir sorunuz, beklentiniz veya mevcut durumunuzu kısaca paylaşın..."
                      rows={4}
                    />
                  </div>

                  {/* Honeypot */}
                  <input type="checkbox" name="botcheck" className="hidden" />

                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full sm:w-auto px-8 h-12 text-base"
                  >
                    {status === "sending" ? (
                      <>Gönderiliyor...</>
                    ) : (
                      <><Send className="mr-2 h-4 w-4" /> Demo Talep Et</>
                    )}
                  </Button>

                  {status === "error" && (
                    <p className="text-sm text-destructive">
                      Bir hata oluştu. Lütfen{" "}
                      <a href="mailto:info@edusonex.com" className="underline">info@edusonex.com</a>'a
                      doğrudan yazın.
                    </p>
                  )}
                </form>
              )}
            </div>

            {/* Sağ Taraf — İletişim + Neden Biz */}
            <div className="space-y-6">
              {/* Neden Biz */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-5">Görüşmede Neler Konuşacağız?</h3>
                <ul className="space-y-4">
                  {[
                    { icon: Building2, text: "OkuluNuzun mevcut kayıt sürecini analiz ederiz" },
                    { icon: Users, text: "Sistemi kaç potansiyel öğrenciye ulaşabileceğinizi hesaplarız" },
                    { icon: ArrowRight, text: "Size özel ROI hesabı ve amorti süresini gösteririz" },
                    { icon: CheckCircle, text: "Pilot kurulum planı ve indirimi sunarız" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <item.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* İletişim Kartları */}
              <Card className="border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-base">
                    <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Phone className="h-4 w-4 text-secondary" />
                    </div>
                    Telefon & WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:+905320674063" className="text-muted-foreground hover:text-foreground transition-colors font-mono">
                    +90 532 067 40 63
                  </a>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-base">
                    <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Mail className="h-4 w-4 text-secondary" />
                    </div>
                    E-posta
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:info@edusonex.com" className="text-muted-foreground hover:text-foreground transition-colors">
                    info@edusonex.com
                  </a>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-base">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    Adres
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  Çakır Mah. Fevzipaşa Cad. No: 248<br />
                  03500 Sandıklı – Afyonkarahisar / Türkiye
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
