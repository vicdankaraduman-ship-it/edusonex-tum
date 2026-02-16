import { Building2, FileText, GraduationCap, Sparkles, Brain, Gamepad2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

const corporateProducts = [
  {
    icon: Building2,
    name: "Edusonex CRM",
    description: "Kommo altyapısı üzerine kurulu, eğitim kurumları için müşteri, veli, öğrenci ve süreç yönetimi sistemi.",
    note: "Bu ürün white-label değildir.",
  },
  {
    icon: FileText,
    name: "Edusonex DokumanOS",
    description: "Öğretmenlerin doküman, planlama ve içerik üretim süreçlerini sadeleştiren okula özel sistem.",
  },
];

const hybridProducts = [
  {
    icon: GraduationCap,
    name: "Edusonex Sınav",
    description: "Okula özel alan adıyla çalışan, sınırsız deneme sınavı üretimine odaklı yapay zekâ destekli sistem.",
    highlight: "Yayınevi bağımlılığını azaltır.",
  },
];

const aiProducts = [
  {
    icon: Sparkles,
    name: "Edusonex Studio",
    description: "Yaratıcı içerik üretimi için yapay zekâ destekli stüdyo ortamı.",
  },
  {
    icon: Brain,
    name: "HEM AI",
    description: "Sektörel yapay zekâ eğitimleri ve uygulamalı AI çözümleri.",
  },
  {
    icon: Gamepad2,
    name: "Edusonex Gamer",
    description: "Eğitimde oyunlaştırma ve interaktif öğrenme deneyimleri.",
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-corporate">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Okullara Özel Dijital Üretim Sistemleri
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Her okulun ihtiyacına göre özelleştirilen, kendi markası ve alan adıyla çalışan yapay zekâ destekli eğitim teknolojileri.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Products */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-10">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">Kurumsal</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Kurumsal Çözümler
            </h2>
            <p className="mt-2 text-muted-foreground">
              Eğitim kurumlarının idari ve operasyonel süreçleri için güvenilir altyapılar.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {corporateProducts.map((product) => (
              <Card key={product.name} className="border-border/50 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <product.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                {product.note && (
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground italic">
                      {product.note}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hybrid Products */}
      <section className="py-16 lg:py-20 bg-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-10">
            <Badge className="mb-4 bg-secondary text-secondary-foreground hover:bg-secondary">Hibrit</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Hibrit Çözümler
            </h2>
            <p className="mt-2 text-muted-foreground">
              Kurumsal yapı ile yapay zekâ teknolojilerinin bütünleşik gücü.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hybridProducts.map((product) => (
              <Card key={product.name} className="border-border/50 hover:border-secondary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <product.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                {product.highlight && (
                  <CardContent className="pt-0">
                    <p className="text-sm text-secondary font-medium">
                      {product.highlight}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Products */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-10">
            <Badge variant="outline" className="mb-4 border-secondary text-secondary">AI / Creator</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              AI & Yaratıcı Araçlar
            </h2>
            <p className="mt-2 text-muted-foreground">
              Yapay zekâ destekli üretken ve yaratıcı eğitim teknolojileri.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiProducts.map((product) => (
              <Card key={product.name} className="border-border/50 hover:border-secondary/50 transition-colors bg-gradient-to-br from-card to-secondary/5">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-4">
                    <product.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Message */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Okulu teknolojik, üretken ve öğrenci dostu bir ortama dönüştürür.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
