import { Link } from "react-router-dom";
import { ArrowRight, Building2, FileText, GraduationCap, Sparkles, Brain, Gamepad2, Globe, Layers, Users, TrendingUp, ExternalLink, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - 4 Katmanlı Yapı */}
      <section className="relative py-20 lg:py-32 bg-corporate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl">
            {/* H1 - Ana Başlık */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight animate-fade-in">
              Okullar için özel dijital üretim sistemleri.
              <br />
              <span className="text-secondary">Her okul kendi markasıyla, yapay zekâ destekli altyapılarla büyür.</span>
            </h1>
            
            {/* H2 - Alt Başlık */}
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed animate-slide-up animation-delay-100">
              CRM'den sınavlara, dokümandan üretken yapay zekâ araçlarına kadar okullar için uçtan uca dijital altyapılar kuruyoruz.
            </p>
            
            {/* Vurgu Bandı / Badge */}
            <div className="mt-8 animate-slide-up animation-delay-200">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 border border-secondary/30 text-secondary rounded-lg text-sm font-medium">
                <Layers className="h-4 w-4" />
                Hazır yazılım değil — okulunuza özel dijital fabrika
              </div>
              <div className="mt-4 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-md">
                  <Globe className="h-4 w-4 text-secondary" />
                  <span className="font-mono text-sm text-primary-foreground">sinav.okuladi.com</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-md">
                  <Globe className="h-4 w-4 text-secondary" />
                  <span className="font-mono text-sm text-primary-foreground">doc.okuladi.com</span>
                </div>
              </div>
            </div>

            {/* CTA Butonları */}
            <div className="mt-10 flex flex-wrap gap-4 animate-slide-up animation-delay-300">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link to="/iletisim">
                  Okulum İçin Görüşme Talep Et
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/urunler">
                  Ürünleri İncele
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Kommo Official Partner Section */}
      <section className="py-12 lg:py-16 border-b border-border/50 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 mb-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                <Shield className="h-7 w-7 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Resmi Partner</p>
                <h3 className="text-xl font-bold text-foreground">Kommo CRM</h3>
              </div>
            </div>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl text-center md:text-left leading-relaxed">
              Edusonex CRM, dünyanın önde gelen CRM platformlarından <strong className="text-foreground">Kommo</strong> altyapısı üzerine inşa edilmiştir. Eğitim kurumları için güvenilir, ölçeklenebilir ve kurumsal süreç yönetimi sunar.
            </p>
            <a
              href="https://www.kommo.com/tr/partnerler/bir-partner-bulun/edusonex-egitim-teknolojileri/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-secondary/30 rounded-lg bg-secondary/5 hover:bg-secondary/10 transition-colors text-sm font-medium text-muted-foreground hover:text-foreground shrink-0"
            >
              Edusonex Partner Sayfası
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* Kommo Referansları */}
          <div className="border-t border-border/50 pt-8">
            <p className="text-xs text-muted-foreground text-center mb-6">Kommo kullanan dünya genelindeki başarı hikayeleri</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-card border border-border/50 rounded-lg text-center">
                <p className="text-2xl font-bold text-secondary">1M$</p>
                <p className="text-xs text-muted-foreground mt-1">Gelir artışı</p>
                <p className="text-xs text-foreground/70 mt-2">King Invest Solutions</p>
              </div>
              <div className="p-4 bg-card border border-border/50 rounded-lg text-center">
                <p className="text-2xl font-bold text-secondary">6x</p>
                <p className="text-xs text-muted-foreground mt-1">Yanıt hızı</p>
                <p className="text-xs text-foreground/70 mt-2">B Entertained</p>
              </div>
              <div className="p-4 bg-card border border-border/50 rounded-lg text-center">
                <p className="text-2xl font-bold text-secondary">3x</p>
                <p className="text-xs text-muted-foreground mt-1">Satış artışı</p>
                <p className="text-xs text-foreground/70 mt-2">Ruebush Group</p>
              </div>
              <div className="p-4 bg-card border border-border/50 rounded-lg text-center">
                <p className="text-2xl font-bold text-secondary">%100</p>
                <p className="text-xs text-muted-foreground mt-1">Süreç kontrolü</p>
                <p className="text-xs text-foreground/70 mt-2">Wedding.net</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vizyon Güçlendirme Section */}
      <section className="py-16 lg:py-24 bg-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Bütünleşik Yapay Zeka Destekli
              <br />
              <span className="text-secondary">Eğitim Teknolojileri Ekosistemi</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Yayınevlerine bağımlılığı azaltan, öğretmenlerin iş yükünü hafifleten ve okul markasını güçlendiren bütünleşik dijital çözümler sunuyoruz.
            </p>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground">Yayınevi Bağımlılığı Azalır</h3>
                <p className="mt-2 text-sm text-muted-foreground">Sınırsız deneme sınavı üretimi ile dışa bağımlılık sona erer.</p>
              </div>
              <div className="flex flex-col items-center p-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground">Öğretmen İş Yükü Hafifler</h3>
                <p className="mt-2 text-sm text-muted-foreground">Öğretmen iş yükünü azaltan çözümler ile verimlilik artar.</p>
              </div>
              <div className="flex flex-col items-center p-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground">Okul Markası Güçlenir</h3>
                <p className="mt-2 text-sm text-muted-foreground">Okul markası ve alan adıyla çalışan sistemler ile dijital kimlik oluşur.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ürünler Önizleme Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Okullara Özel Dijital Altyapı Çözümleri
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Yapay zekâ destekli eğitim teknolojileri ekosistemimizle okulunuzun dijital dönüşümünü birlikte gerçekleştiriyoruz.
            </p>
          </div>

          {/* Kurumsal */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/10">Kurumsal</Badge>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border/50 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Edusonex CRM</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Kommo altyapısı üzerine kurulu, eğitim kurumları için müşteri, veli, öğrenci ve süreç yönetimi sistemi.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-border/50 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Edusonex DokumanOS</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Öğretmenlerin doküman, planlama ve içerik üretim süreçlerini sadeleştiren sistem.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Hibrit */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary">Hibrit</Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-border/50 hover:border-secondary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">Edusonex Sınav</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Okula özel alan adıyla çalışan, sınırsız deneme sınavı üretimine odaklı yapay zekâ destekli sistem.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-secondary font-medium">Yayınevi bağımlılığını azaltır.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* AI / Creator */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="outline" className="border-secondary text-secondary">AI / Creator</Badge>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border/50 hover:border-secondary/50 transition-colors bg-gradient-to-br from-card to-secondary/5">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">Edusonex Studio</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Yaratıcı içerik üretimi için yapay zekâ destekli stüdyo ortamı.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-border/50 hover:border-secondary/50 transition-colors bg-gradient-to-br from-card to-secondary/5">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">HEM AI</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Sektörel yapay zekâ eğitimleri ve uygulamalı AI çözümleri.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-border/50 hover:border-secondary/50 transition-colors bg-gradient-to-br from-card to-secondary/5">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-4">
                    <Gamepad2 className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">Edusonex Gamer</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Eğitimde oyunlaştırma ve interaktif öğrenme deneyimleri.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Alt Mesaj */}
          <div className="text-center mt-16 p-8 bg-muted/50 rounded-xl">
            <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl mx-auto">
              Okulu teknolojik, üretken ve öğrenci dostu bir ortama dönüştürür.
            </p>
          </div>
        </div>
      </section>

      {/* Aktif Projeler Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-500/10 text-green-600 border-green-500/20 hover:bg-green-500/10">
              🚀 Aktif Projeler
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Şu Anda Canlıda Olan Platformlar
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Edusonex evrenindeki bu projeler şu anda aktif olarak kullanılmaktadır. Her biri kendi subdomain'inde çalışmaktadır.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* ÖdevGPT */}
            <Card className="border-green-500/30 hover:border-green-500/50 transition-all hover:shadow-lg hover:shadow-green-500/10 bg-gradient-to-br from-card to-green-500/5">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/10 flex items-center justify-center">
                    <Brain className="h-6 w-6 text-green-600" />
                  </div>
                  <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                    ✅ Aktif
                  </Badge>
                </div>
                <CardTitle className="text-xl flex items-center gap-2">
                  ÖdevGPT
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Sokratik AI ile ödev asistanı. Öğrenciler fotoğraf yükleyerek adım adım öğrenir. XP oyunlaştırma, öğretmen paneli ve veli raporları.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Globe className="h-4 w-4 text-green-600" />
                    <code className="font-mono text-xs bg-muted px-2 py-1 rounded">odev.edusonex.com.tr</code>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Groq Llama 3.3</Badge>
                    <Badge variant="outline" className="text-xs">React + Supabase</Badge>
                    <Badge variant="outline" className="text-xs">%95 Tamamlandı</Badge>
                  </div>
                  <a
                    href="https://odev.edusonex.com.tr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-500/10 hover:bg-green-500/20 text-green-600 rounded-lg transition-colors text-sm font-medium mt-2"
                  >
                    Projeye Git
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* HEM */}
            <Card className="border-blue-500/30 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 bg-gradient-to-br from-card to-blue-500/5">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                  </div>
                  <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">
                    ✅ Aktif
                  </Badge>
                </div>
                <CardTitle className="text-xl flex items-center gap-2">
                  HEM AI
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Halk Eğitim Merkezi için AI eğitim platformu. Kurs yönetimi, ön kayıt sistemi, blog ve haberler. Canlı oylama entegrasyonu.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Globe className="h-4 w-4 text-blue-600" />
                    <code className="font-mono text-xs bg-muted px-2 py-1 rounded">hem.edusonex.com.tr</code>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">React + Vite</Badge>
                    <Badge variant="outline" className="text-xs">Supabase</Badge>
                    <Badge variant="outline" className="text-xs">%90 Tamamlandı</Badge>
                  </div>
                  <a
                    href="https://hem.edusonex.com.tr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 rounded-lg transition-colors text-sm font-medium mt-2"
                  >
                    Projeye Git
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Anket */}
            <Card className="border-purple-500/30 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10 bg-gradient-to-br from-card to-purple-500/5">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-500/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <Badge className="bg-purple-500/10 text-purple-600 border-purple-500/20">
                    ✅ Aktif
                  </Badge>
                </div>
                <CardTitle className="text-xl flex items-center gap-2">
                  Anket Sistemi
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Canlı oylama ve interaktif anketler. "İlk 5 Dakika" özelliği ile ders başında öğrenci katılımı. WebSocket tabanlı realtime sonuçlar.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Globe className="h-4 w-4 text-purple-600" />
                    <code className="font-mono text-xs bg-muted px-2 py-1 rounded">anket.edusonex.com.tr</code>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">WebSocket</Badge>
                    <Badge variant="outline" className="text-xs">Realtime</Badge>
                    <Badge variant="outline" className="text-xs">%80 Tamamlandı</Badge>
                  </div>
                  <a
                    href="https://anket.edusonex.com.tr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 rounded-lg transition-colors text-sm font-medium mt-2"
                  >
                    Projeye Git
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Sınav (Nebula) */}
            <Card className="border-orange-500/30 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/10 bg-gradient-to-br from-card to-orange-500/5">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-500/10 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-orange-600" />
                  </div>
                  <Badge className="bg-orange-500/10 text-orange-600 border-orange-500/20">
                    🚧 Beta
                  </Badge>
                </div>
                <CardTitle className="text-xl flex items-center gap-2">
                  Sınav Fabrikası (Nebula)
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  AI destekli soru üretim fabrikası. LangChain workflow, SymPy doğrulama ve öğretmen onay sistemi. Sınırsız deneme sınavı üretimi.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Globe className="h-4 w-4 text-orange-600" />
                    <code className="font-mono text-xs bg-muted px-2 py-1 rounded">sinav.edusonex.com.tr</code>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">FastAPI + LangChain</Badge>
                    <Badge variant="outline" className="text-xs">SymPy</Badge>
                    <Badge variant="outline" className="text-xs">%60 Tamamlandı</Badge>
                  </div>
                  <a
                    href="https://sinav.edusonex.com.tr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-orange-500/10 hover:bg-orange-500/20 text-orange-600 rounded-lg transition-colors text-sm font-medium mt-2"
                  >
                    Projeye Git
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Deployment Info */}
          <div className="mt-12 p-6 bg-muted/50 border border-border/50 rounded-xl max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                <Globe className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Subdomain Mimarisi</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Her proje kendi subdomain'inde bağımsız çalışır. Ana platform <code className="bg-muted px-1.5 py-0.5 rounded text-xs">edusonex.com.tr</code> Cloudflare Pages'de, 
                  diğer projeler Vercel veya Cloudflare'de deploy edilir. DNS yönetimi Cloudflare üzerinden yapılır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Okulunuz İçin Dijital Altyapı Kuralım
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Yapay zekâ destekli eğitim teknolojileri ekosistemimizle tanışın. Okulunuzun ihtiyaçlarına özel çözümler için birlikte çalışalım.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <Link to="/iletisim">
              Görüşme Talep Et
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
