import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, FileText, GraduationCap, Sparkles, Brain, Gamepad2, Globe, Layers, Users, TrendingUp, ExternalLink, Shield, Archive, BarChart3, FileCheck, Fingerprint, Video, Network, Glasses, Files, FlaskConical, CheckCircle, XCircle, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import Layout from "@/components/Layout";

const Index = () => {
  const [roiValue, setRoiValue] = useState([300000]);
  const annualFee = roiValue[0];
  const enterpriseCost = 597000; // yıllık Enterprise paketi
  const studentsNeeded = Math.ceil(enterpriseCost / annualFee * 10) / 10;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 py-2 px-4 text-sm bg-background/50 backdrop-blur-sm border-primary/20 text-primary animate-fade-in">
              🏆 Türkiye'nin AI Okul Kayıt Motoru
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 animate-fade-in [animation-delay:200ms]">
              Reklama Değil, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-secondary">
                Sisteme Yatırım Yapın
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto animate-fade-in [animation-delay:400ms]">
              Kendi markanızla çalışan yapay zeka altyapısıyla aday öğrencileri bulun, sıcak veli datası toplayın ve kayıtlarınızı artırın.
            </p>
            <p className="text-base text-primary font-semibold mb-10 animate-fade-in [animation-delay:500ms]">
              ✅ Sadece 1-2 yeni öğrenci kaydı, tüm yıllık yatırımı amorti eder.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:600ms]">
              <Link to="/iletisim">
                <Button size="lg" className="h-12 px-8 text-lg group">
                  VIP Demo Talep Et
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="#nasil-calisir">
                <Button size="lg" variant="outline" className="h-12 px-8 text-lg">
                  ▶ Nasıl Çalışır? (1 Dk İzle)
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Tek Platform</h3>
              <p className="mt-2 text-sm text-muted-foreground">Tüm eğitim süreçlerinizi tek bir noktadan yönetin.</p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground">Modüler Yapı</h3>
              <p className="mt-2 text-sm text-muted-foreground">İhtiyacınız olan modülleri seçin, kullandıkça ödeyin.</p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground">Okul Markası Güçlenir</h3>
              <p className="mt-2 text-sm text-muted-foreground">Okul markası ve alan adıyla çalışan sistemler ile dijital kimlik oluşur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Çözüm Section */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/10">
              ⚠️ Geleneksel Yöntemler Neden Çöktü?
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Kayıt Pazarlamasında Köklü Bir Değişim Zorunlu
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Veliler artık geleneksel yöntemlere körleşti. Edusonex bu oyunun kurallarını değiştiriyor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Geleneksel Yöntemler */}
            <div className="bg-card border border-destructive/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <XCircle className="h-5 w-5 text-destructive" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Geleneksel Yöntemler</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Billboard & sosyal medya reklamları → Veliler artık görmüyor",
                  "Bursluluk sınavları → Her okul aynısını yapıyor, değer kalmadı",
                  "Açık kapı günleri → Katılım her yıl düşüyor",
                  "Telefon satışları → 'Kim bu okul?' sorusuyla başlıyorsunuz",
                  "Öğrenci başına lisans → Okul büyüdükçe fatura katlanıyor",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Edusonex Yöntemi */}
            <div className="bg-card border border-primary/20 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Edusonex Yöntemi</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Veliler raporu almak için kendi numaralarını bırakır",
                  "'Okulumuzun AI Asistanı' → Kendi markanızla White-Label",
                  "Sıcak veli datası → Çocuğun güçlü/zayıf yönlerini biliyorsunuz",
                  "Satış değil, çözüm konuşması → Dönüşüm 3-4x artar",
                  "Sabit yıllık kiralama → Öğrenci sayısı arttıkça fatura artmaz",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Hesaplayıcı */}
      <section id="roi-hesapla" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">
              <Calculator className="h-3 w-3 mr-1 inline" /> Kendini Amorti Eden Yatırım
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              ROI Hesaplayıcı
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Okulunuzun ortalama yıllık kayıt ücretini seçin — kaç öğrenci kaydı yatırımı amorti ettiğini görün.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-card border border-border/50 rounded-2xl p-8 shadow-lg">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-semibold text-foreground">
                  Ortalama Yıllık Kayıt Ücreti
                </label>
                <span className="text-xl font-bold text-primary">
                  {(annualFee / 1000).toFixed(0)}.000 TL
                </span>
              </div>
              <Slider
                value={roiValue}
                onValueChange={setRoiValue}
                min={100000}
                max={600000}
                step={25000}
                className="mb-3"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>100.000 TL</span>
                <span>600.000 TL</span>
              </div>
            </div>

            {/* Sonuç Kutusu */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Enterprise Paketi Yıllık Maliyet</p>
              <p className="text-lg font-bold text-foreground mb-4">597.000 TL / yıl</p>
              <div className="w-px h-6 bg-border mx-auto mb-4" />
              <p className="text-sm text-muted-foreground mb-1">Yatırımı amorti etmek için gereken kayıt sayısı</p>
              <p className="text-5xl font-black text-primary my-3">
                {studentsNeeded.toFixed(1)}
              </p>
              <p className="text-sm font-semibold text-foreground">yeni öğrenci kaydı</p>
              <p className="text-xs text-muted-foreground mt-4 max-w-sm mx-auto">
                Bu kaydın üzerindeki <strong>tüm yeni öğrenciler</strong> kurumunuzun doğrudan net kârı olarak yazılır.
              </p>
            </div>

            <div className="mt-6 text-center">
              <Link to="/iletisim">
                <Button size="lg" className="w-full sm:w-auto px-8">
                  Ücretsiz Büyüme Analizi Al <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="nasil-calisir" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">
              ▶ Sistemi Canlı İzleyin
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              1 Dakikada Her Şeyi Anlayın
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Edusonex'in okullara nasıl yeni öğrenci, prestij ve kâr kazandırdığını izleyin.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-black">
              <iframe
                src="https://www.youtube.com/embed/c3l_dFLqwD4"
                title="Edusonex - Sistemi Nasıl Çalışır?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Edusonex Ekosistemi Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">
              🚀 Edusonex Evreni
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Bütünleşik Eğitim Teknolojileri Ekosistemi
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Okulunuzun dijital dönüşümü için ihtiyacınız olan her şey tek bir çatıda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {/* 1. ÖdevGPT */}
            <Card className="border-green-500/30 hover:border-green-500/50 transition-all hover:shadow-lg hover:shadow-green-500/10 bg-gradient-to-br from-card to-green-500/5 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Brain className="h-6 w-6 text-green-600" />
                  </div>
                  <Badge className="bg-green-500/10 text-green-600 border-green-500/20">✅ Aktif</Badge>
                </div>
                <CardTitle className="text-xl mb-1">ÖdevGPT</CardTitle>
                <div className="text-xs text-muted-foreground mb-2 font-mono">odev.</div>
                <CardDescription>Sokratik yapay zeka ile kişiselleştirilmiş ödev asistanı.</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://odev.edusonex.com.tr/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-green-500/20 hover:bg-green-500/10 hover:text-green-600 group-hover:border-green-500/40">
                    Projeye Git <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* 2. DokumanOS */}
            <Card className="border-blue-600/30 hover:border-blue-600/50 transition-all hover:shadow-lg hover:shadow-blue-600/10 bg-gradient-to-br from-card to-blue-600/5 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Files className="h-6 w-6 text-blue-700" />
                  </div>
                  <Badge className="bg-blue-600/10 text-blue-700 border-blue-600/20">✅ Aktif</Badge>
                </div>
                <CardTitle className="text-xl mb-1">DokumanOS</CardTitle>
                <div className="text-xs text-muted-foreground mb-2 font-mono">evrak.edusonex.com.tr</div>
                <CardDescription>Kurumsal hafıza ve doküman yönetim sistemi.</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://evrak.edusonex.com.tr/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-blue-600/20 hover:bg-blue-600/10 hover:text-blue-700 group-hover:border-blue-600/40">
                    Projeye Git <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* 3. LAB */}
            <Card className="border-indigo-500/30 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/10 bg-gradient-to-br from-card to-indigo-500/5 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FlaskConical className="h-6 w-6 text-indigo-600" />
                  </div>
                  <Badge className="bg-indigo-500/10 text-indigo-600 border-indigo-500/20">🚀 Yeni</Badge>
                </div>
                <CardTitle className="text-xl mb-1">Edusonex LAB</CardTitle>
                <div className="text-xs text-muted-foreground mb-2 font-mono">lab.edusonex.com.tr</div>
                <CardDescription>Yapay zeka Ar-Ge ve deneysel eğitim teknolojileri.</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://lab.edusonex.com.tr/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-indigo-500/20 hover:bg-indigo-500/10 hover:text-indigo-600 group-hover:border-indigo-500/40">
                    Projeye Git <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* 4. HEM */}
            <Card className="border-blue-500/30 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 bg-gradient-to-br from-card to-blue-500/5 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Archive className="h-6 w-6 text-blue-600" />
                  </div>
                  <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">✅ Aktif</Badge>
                </div>
                <CardTitle className="text-xl mb-1">HEM</CardTitle>
                <div className="text-xs text-muted-foreground mb-2 font-mono">hem.edusonex.com.tr</div>
                <CardDescription>Halk Eğitim Merkezleri için dijital kurs ve içerik yönetimi.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-blue-500/20 hover:bg-blue-500/10 hover:text-blue-600 group-hover:border-blue-500/40" disabled>
                  Yakında Yayında <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* HO - Hızlı Okuma */}
            <Card className="border-amber-500/30 hover:border-amber-500/50 transition-all hover:shadow-lg hover:shadow-amber-500/10 bg-gradient-to-br from-card to-amber-500/5 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TrendingUp className="h-6 w-6 text-amber-600" />
                  </div>
                  <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20">✅ Aktif</Badge>
                </div>
                <CardTitle className="text-xl mb-1">Hızlı Okuma</CardTitle>
                <div className="text-xs text-muted-foreground mb-2 font-mono">ho.edusonex.com.tr</div>
                <CardDescription>Adaptif hızlı okuma ve göz egzersizi platformu. RSVP, AI quiz ve oyunlaştırma sistemiyle okuma hızını bilimsel yöntemlerle artırır.</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://ho.edusonex.com.tr/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-amber-500/20 hover:bg-amber-500/10 hover:text-amber-600 group-hover:border-amber-500/40">
                    Projeye Git <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* 4. Anket */}
            <Card className="border-purple-500/30 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10 bg-gradient-to-br from-card to-purple-500/5 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <Badge className="bg-purple-500/10 text-purple-600 border-purple-500/20">✅ Aktif</Badge>
                </div>
                <CardTitle className="text-xl mb-1">Anket</CardTitle>
                <div className="text-xs text-muted-foreground mb-2 font-mono">anket.edusonex.com.tr</div>
                <CardDescription>Gerçek zamanlı oylama ve interaktif anket sistemi.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-purple-500/20 hover:bg-purple-500/10 hover:text-purple-600 group-hover:border-purple-500/40" disabled>
                  Yakında Yayında <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* 5. Sınav (Nebula) */}
            <Card className="border-orange-500/30 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/10 bg-gradient-to-br from-card to-orange-500/5 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FileCheck className="h-6 w-6 text-orange-600" />
                  </div>
                  <Badge className="bg-orange-500/10 text-orange-600 border-orange-500/20">🚧 Beta</Badge>
                </div>
                <CardTitle className="text-xl mb-1">Sınav Fabrikası</CardTitle>
                <div className="text-xs text-muted-foreground mb-2 font-mono">sinav.edusonex.com.tr</div>
                <CardDescription>Yapay zeka destekli sınırsız soru ve sınav üretim motoru.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-orange-500/20 hover:bg-orange-500/10 hover:text-orange-600 group-hover:border-orange-500/40" disabled>
                  Geliştiriliyor <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* 6. CRM */}
            <Card className="border-blue-500/30 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 bg-gradient-to-br from-card to-blue-500/5 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">✅ Aktif</Badge>
                </div>
                <CardTitle className="text-xl mb-1">Edusonex CRM</CardTitle>
                <div className="text-xs text-muted-foreground mb-2 font-mono">edusonex.com/kommo</div>
                <CardDescription>Kommo tabanlı öğrenci ve veli ilişkileri yönetimi.</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/kommo">
                  <Button variant="outline" className="w-full border-blue-500/20 hover:bg-blue-500/10 hover:text-blue-600 group-hover:border-blue-500/40">
                    Projeye Git <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* 7. NöroBil */}
            <Card className="border-indigo-600/30 hover:border-indigo-600/50 transition-all hover:shadow-lg hover:shadow-indigo-600/10 bg-gradient-to-br from-card to-indigo-600/5 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-indigo-600/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Fingerprint className="h-6 w-6 text-indigo-700" />
                  </div>
                  <Badge className="bg-indigo-600/10 text-indigo-700 border-indigo-600/20">✅ Aktif</Badge>
                </div>
                <CardTitle className="text-xl mb-1">NöroBil</CardTitle>
                <div className="text-xs text-muted-foreground mb-2 font-mono">norobil.edusonex.com.tr</div>
                <CardDescription>İnsan ve İlişki İşletim Sistemi. Psikolojik analiz ve gelişim platformu.</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://norobil.edusonex.com.tr/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-indigo-600/20 hover:bg-indigo-600/10 hover:text-indigo-700 group-hover:border-indigo-600/40">
                    Projeye Git <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* 8. Studio */}
            <Card className="border-pink-500/30 hover:border-pink-500/50 transition-all hover:shadow-lg hover:shadow-pink-500/10 bg-gradient-to-br from-card to-pink-500/5 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Video className="h-6 w-6 text-pink-600" />
                  </div>
                  <Badge className="bg-pink-500/10 text-pink-600 border-pink-500/20">✅ Aktif</Badge>
                </div>
                <CardTitle className="text-xl mb-1">Edusonex Studio</CardTitle>
                <div className="text-xs text-muted-foreground mb-2 font-mono">studio.edusonex.com.tr</div>
                <CardDescription>AI destekli video ve eğitim içeriği üretim stüdyosu.</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://studio.edusonex.com.tr/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-pink-500/20 hover:bg-pink-500/10 hover:text-pink-600 group-hover:border-pink-500/40">
                    Projeye Git <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* 9. Gamer */}
            <Card className="border-border/50 hover:border-primary/30 transition-colors group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Gamepad2 className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline">Planlanıyor</Badge>
                </div>
                <CardTitle className="text-xl mb-1">Edusonex Gamer</CardTitle>
                <CardDescription>Eğitimde oyunlaştırma ve e-spor modülleri.</CardDescription>
              </CardHeader>
            </Card>

            {/* 10. Akademi */}
            <Card className="border-border/50 hover:border-primary/30 transition-colors group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline">Planlanıyor</Badge>
                </div>
                <CardTitle className="text-xl mb-1">Edusonex Akademi</CardTitle>
                <CardDescription>Öğretmen ve veli eğitimleri, sertifika programları.</CardDescription>
              </CardHeader>
            </Card>

            {/* 11. Network */}
            <Card className="border-border/50 hover:border-primary/30 transition-colors group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Network className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline">Planlanıyor</Badge>
                </div>
                <CardTitle className="text-xl mb-1">Edusonex Network</CardTitle>
                <CardDescription>Eğitimciler ve okullar arası sosyal işbirliği ağı.</CardDescription>
              </CardHeader>
            </Card>

            {/* 12. Metaverse */}
            <Card className="border-border/50 hover:border-primary/30 transition-colors group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Glasses className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline">Planlanıyor</Badge>
                </div>
                <CardTitle className="text-xl mb-1">Edusonex Metaverse</CardTitle>
                <CardDescription>Sanal gerçeklik tabanlı sürükleyici eğitim ortamları.</CardDescription>
              </CardHeader>
            </Card>


          </div>

          <div className="text-center mt-16 p-8 bg-muted/50 rounded-xl border border-border/50">
            <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl mx-auto flex items-center justify-center gap-2">
              <Sparkles className="h-5 w-5 text-yellow-500" />
              Edusonex Evreni sürekli genişliyor. Yeni modüller çok yakında!
            </p>
          </div>
        </div>
      </section>

      {/* SSS Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">
              💬 Sık Sorulan Sorular
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Kurucuların En Çok Sorduğu Sorular
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Edusonex nedir ve kurumumuza nasıl bir avantaj sağlar?",
                a: "Edusonex, özel okullar ve kurs merkezleri için geliştirilmiş, kendi logonuzla kullanabileceğiniz bir \"Yapay Zeka Destekli Öğrenci Kayıt Motoru\"dur. Geleneksel reklam ve bursluluk sınavlarının aksine, okulunuza aday öğrencileri otomatik olarak çeker ve sıcak veli datası üretir."
              },
              {
                q: "Veliler testi çözerken Edusonex adını görecek mi?",
                a: "Hayır. Edusonex \"White-Label\" (beyaz etiket) bir altyapıdır. Veliler ve öğrenciler tüm süreci sizin okulunuzun kendi logosu ve markası altında deneyimler. Dışarıdan yazılım kiraladığınız belli olmaz."
              },
              {
                q: "Sistem üzerinden potansiyel velilere nasıl ulaşıyoruz?",
                a: "Çevrenizdeki potansiyel öğrencilere kendi markanızla bir \"Ücretsiz Akademik Potansiyel Analizi\" linki gönderirsiniz. Öğrenci testi tamamladığında veli, raporu almak için iletişim bilgisini bırakır. O an, kayıt-kabul ekranınıza \"Sıcak Müşteri (Hot Lead)\" olarak düşer."
              },
              {
                q: "Yatırım geri dönüşü (ROI) ne kadar sürede gerçekleşir?",
                a: "Kanca sistemi sayesinde ulaştığınız yüzlerce aday arasından sadece 1-2 yeni öğrenci kaydı aldığınızda, Edusonex'in 1 yıllık kiralama maliyeti anında amorti edilir. Bu sayının üzerindeki tüm kayıtlar kurumunuzun doğrudan net kârıdır."
              },
              {
                q: "Öğrenci başına ödeme yapıyor muyuz?",
                a: "Hayır. Öğrenci sayısından bağımsız olarak sabit bir yıllık kiralama bedeli ödenir. Okulunuz büyüdükçe yazılım faturanız artmaz. Bu \"Edu-RaaS\" modelinin en büyük avantajıdır."
              },
              {
                q: "Teknik altyapı kurmamız gerekiyor mu?",
                a: "Hayır. Sunucu kurulumu, barındırma ve API güncellemeleri tarafımızdan yönetilir. IT ekibine ihtiyaç duymadan, anahtar teslim olarak sistemi hemen kullanmaya başlarsınız."
              }
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/20 hover:shadow-md transition-all">
                <h3 className="font-semibold text-foreground mb-3 flex items-start gap-2">
                  <span className="text-primary font-bold text-lg leading-none mt-0.5">Q</span>
                  {item.q}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed pl-5">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Okulunuz İçin Ücretsiz Büyüme Analizi
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-3">
            30 dakikalık strateji görüşmesinde, Edusonex'in okulunuza kaç yeni kayıt getirebileceğini birlikte hesaplayalım.
          </p>
          <p className="text-sm text-primary-foreground/70 mb-10">
            🏆 İlk başvuran okullara özel kurulum avantajı geçerlidir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/iletisim">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto text-primary font-semibold hover:bg-white/90">
                VIP Demo Talep Et <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/referanslar">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10">
                Başarı Hikayelerini Gör <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
