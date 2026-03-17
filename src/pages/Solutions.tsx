import { Building, GraduationCap, Users, Briefcase, Clock, Globe, TrendingDown, Layers, Shield, Sparkles, Brain, Database, Cpu, Lock, Search, MousePointerClick, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const techStack = [
  {
    icon: Database,
    title: "AI Veri Kancası",
    description: "Web sitenizde çalışan AI testleri, aday velilerin akademik beklentilerini ve iletişim verilerini organik olarak toplar."
  },
  {
    icon: Cpu,
    title: "Akademik Analiz Motoru",
    description: "Toplanan veriler, Edusonex LLM altyapısıyla işlenerek her öğrenci için kişiselleştirilmiş bir potansiyel haritasına dönüşür."
  },
  {
    icon: Brain,
    title: "Hazır Satış Argümanı",
    description: "AI, kayıt-kabul ekibinize her veliyi ikna edecek 'sıcak noktaları' ve özel çözüm önerilerini PDF raporu olarak sunar."
  }
];

const targetAudiences = [
  {
    icon: Building,
    title: "Okul Kurucuları",
    description: "Yayınevi ve dış yazılım bağımlılığını bitiren, okula ait kurumsal dijital varlık.",
    benefits: [
      "White-Label AI Altyapısı",
      "Sıfır Yayınevi Bağımlılığı",
      "Okul Markası Odaklı Büyüme",
      "Kapasite Bazlı Sabit Maliyet",
    ],
  },
  {
    icon: Users,
    title: "Kayıt-Kabul Ekipleri",
    description: "Soğuk arama yerine, elinde öğrencinin potansiyel raporuyla veliyi arayan profesyonel ekip.",
    benefits: [
      "3.2x Daha Yüksek Kayıt Oranı",
      "Hazır Veli Analiz Raporları",
      "Nitelikli Lead Listesi",
      "Veriye Dayalı İkna Süreci",
    ],
  },
  {
    icon: Briefcase,
    title: "Bilişim ve Teknoloji",
    description: "Sunucu, güvenlik veya API güncellemeleriyle uğraşmadan anahtar teslim AI ekosistemi.",
    benefits: [
      "GDPR / KVKK Uyumlu Altyapı",
      "Bulut Tabanlı Okul İşletim Sistemi",
      "Kesintisiz Teknik Destek",
      "Hızlı Entegrasyon",
    ],
  },
];

const Solutions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-background">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -z-10" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-1 rounded-full">
              🚀 Edusonex Çözüm Katmanları
            </Badge>
            <h1 className="text-4xl md:text-6xl font-black text-foreground leading-[1.1] mb-6">
                Okulunuzu <span className="text-primary italic">Yapay Zekâ Altyapısına</span> Kavuşturuyoruz
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
              Biz bir yazılım kiralama şirketi değiliz. Okulunuzun kendi markasıyla, kendi alan adıyla çalışan **Bütünleşik Kayıt ve Eğitim Teknolojileri** kuruyoruz.
            </p>
            <div className="flex flex-wrap gap-4">
                <Link to="/iletisim">
                    <Button size="lg" className="h-14 px-10 text-lg rounded-full">Strateji Görüşmesi Planla</Button>
                </Link>
                <Link to="/urunler">
                    <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-primary/20">Ürün Gamını İncele</Button>
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Process Flow */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Sistem Nasıl Çalışır?</h2>
                <p className="text-muted-foreground">Edusonex AI motorunun arka plandaki 3 aşamalı döngüsü</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-12" />
                
                {techStack.map((step, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                        <div className="w-20 h-20 rounded-2xl bg-background border border-border shadow-xl flex items-center justify-center mb-6 group-hover:border-primary/50 transition-all duration-500 group-hover:-translate-y-2">
                            <step.icon className="h-10 w-10 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed px-4">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Target Audiences Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4 px-4">Paydaş Çözümleri</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Okulunuzun Her Katmanında Verimlilik
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Edusonex, sadece kurucuyu değil, tüm okul ekosistemini dijital olarak güçlendirir.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {targetAudiences.map((audience) => (
              <Card key={audience.title} className="bg-card border-border/50 h-full hover:shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden group">
                <CardHeader className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <audience.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{audience.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {audience.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-0 mt-auto">
                  <ul className="space-y-4">
                    {audience.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3 text-[13px] font-medium text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* White-Label Focus */}
      <section className="py-20 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-32" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
                <Badge className="bg-white/10 text-white border-white/20 px-4 py-1">White-Label Avantajı</Badge>
                <h2 className="text-4xl md:text-5xl font-black">Sistem Sizin, <br />Başarı Sizin.</h2>
                <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0"><Globe className="h-5 w-5" /></div>
                        <div>
                            <h4 className="font-bold text-xl mb-1">Kendi Alan Adınız</h4>
                            <p className="text-primary-foreground/70">Veliler `ai.okulunadresi.com` üzerinden sisteme girer, Edusonex ismini görmez.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0"><Lock className="h-5 w-5" /></div>
                        <div>
                            <h4 className="font-bold text-xl mb-1">Veri Güvenliği</h4>
                            <p className="text-primary-foreground/70">Tüm veli datası okulun kendi izole bulut veritabanında saklanır, tamamen size aittir.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[40px] p-10 shadow-2xl relative">
                <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="h-4 w-2/3 bg-white/10 rounded" />
                    <div className="h-20 w-full bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 italic text-white/40">
                        [Okulunuzun Logosu]
                    </div>
                    <div className="space-y-2">
                        <div className="h-3 w-full bg-white/10 rounded" />
                        <div className="h-3 w-4/5 bg-white/10 rounded" />
                        <div className="h-3 w-1/2 bg-white/10 rounded" />
                    </div>
                    <div className="pt-6">
                        <div className="h-10 w-full bg-secondary rounded-lg" />
                    </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground px-6 py-4 rounded-2xl shadow-xl font-bold animate-bounce">
                    100% Sizin Markanız
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Altyapınızı Kurmaya Hazır mısınız?</h3>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto">Okulunuzun dijital geleceğini birlikte inşa edelim. Kurumsal çözüm ortaklığı için bir görüşme başlatalım.</p>
            <Link to="/iletisim">
                <Button size="lg" className="h-14 px-12 rounded-full text-lg shadow-xl shadow-primary/20">Hemen Tanışalım</Button>
            </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
