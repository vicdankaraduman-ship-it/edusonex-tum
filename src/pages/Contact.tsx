import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:info@edusonex.com?subject=Edusonex İletişim Formu: ${formData.subject}&body=Ad Soyad: ${formData.name}%0D%0AE-posta: ${formData.email}%0D%0ATelefon: ${formData.phone}%0D%0A%0D%0AMesaj:%0D%0A${formData.message}`;

    window.location.href = mailtoLink;

    toast({
      title: "E-posta istemciniz açılıyor...",
      description: "Mesajınızı göndermek için açılan pencereden ilerleyebilirsiniz.",
    });

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-corporate">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              İletişim
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Sorularınız ve işbirliği fırsatları için bizimle iletişime geçin.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Bize Ulaşın
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Ad Soyad *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-posta *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+90 5XX XXX XX XX"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Konu *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Mesaj konusu"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mesajınız *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Mesajınızı buraya yazın..."
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                  <Send className="mr-2 h-4 w-4" />
                  Gönder
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                İletişim Bilgileri
              </h2>

              <Card className="border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    Adres
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Çakır Mah. Fevzipaşa Cad. No: 248<br />
                  03500 Sandıklı – Afyonkarahisar / Türkiye
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-secondary" />
                    </div>
                    Telefon & WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="tel:+905320674063"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +90 532 067 40 63
                  </a>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-secondary" />
                    </div>
                    E-posta
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:info@edusonex.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    info@edusonex.com
                  </a>
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
