import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, FileText, GraduationCap, Sparkles, Brain, Gamepad2, Globe, Layers, Users, TrendingUp, ExternalLink, Shield, Archive, BarChart3, FileCheck, Fingerprint, Video, Network, Glasses, Files, FlaskConical, CheckCircle, XCircle, Calculator, Zap, Play, ChevronRight, AlertTriangle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import Layout from "@/components/Layout";

const Index = () => {
  const [roiValue, setRoiValue] = useState([300000]);
  const annualFee = roiValue[0];
  const enterpriseCost = 597000;
  const studentsNeeded = Math.ceil(enterpriseCost / annualFee * 10) / 10;

  // Kanca Simülatörü State
  const [simStep, setSimStep] = useState(0); // 0=giriş, 1=soru, 2=blur, 3=telefon, 4=patlama
  const [simPhone, setSimPhone] = useState("");
  const [simAnswers, setSimAnswers] = useState<number[]>([]);

  const simQuestions = [
    { q: "Okulumuza yıllık kaç yeni öğrenci kayıt etmek istiyorsunuz?", opts: ["10-20", "20-50", "50-100", "100+"] },
    { q: "Şu an aylık ne kadarlık bir pazarlama bütçesi kullanıyorsunuz?", opts: ["50.000 TL altı", "50-150.000 TL", "150-500.000 TL", "500.000 TL+"] },
    { q: "Kaç yıldır eğitim sektöründesiniz?", opts: ["1-3 yıl", "3-7 yıl", "7-15 yıl", "15+ yıl"] },
  ];

  const handleSimAnswer = (ansIdx: number) => {
    const newAnswers = [...simAnswers, ansIdx];
    setSimAnswers(newAnswers);
    if (newAnswers.length >= simQuestions.length) {
      setSimStep(2); // blur
    }
  };

  const handleSimPhone = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Merhaba! Kanca Simülatöründen geliyorum. Okulumun büyüme raporunu WhatsApp'tan almak istiyorum.\nTelefon: ${simPhone}`);
    window.open(`https://wa.me/905320674063?text=${msg}`, "_blank");
    setSimStep(4); // patlama
  };

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

      {/* 🔴 ACİLİYET BARI */}
      <div className="bg-destructive/95 text-destructive-foreground py-2.5 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-sm font-medium">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
            <strong>Pilot Kontenjanı:</strong> Bu çeyrek için yalnızca <strong className="underline decoration-dotted">1 okul</strong> kabul edilecektir.
          </div>
          <span className="hidden sm:inline text-white/40">·</span>
          <Link to="/iletisim" className="underline font-bold hover:text-white/80 transition-colors">
            Yerinizi Hemen Ayırtın →
          </Link>
        </div>
      </div>

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

      {/* 🎯 KANCA SİMÜLATÖRÜ — Sihir Anı */}
      <section className="py-20 lg:py-28 bg-background border-y border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              <Zap className="h-4 w-4 mr-2 inline" /> Canlı Demo
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sistemimizin Velileri Nasıl Yakaladığını{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">Kendiniz Yaşayın</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Velileriniz bu akışı okulunuzun kendi markası altında yaşayacak. Siz de az sonra deneyimleyeceksiniz.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="bg-card border border-border/50 rounded-3xl shadow-2xl overflow-hidden">
              {/* Tarayıcı Çubuğu Simülasyonu */}
              <div className="bg-muted/60 px-4 py-3 flex items-center gap-3 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>
                <div className="flex-1 bg-background/50 rounded-md px-3 py-1 text-xs text-muted-foreground font-mono">
                  ai.<span className="text-primary font-semibold">okulunuz</span>.com.tr/kesfet
                </div>
                <Lock className="h-3 w-3 text-green-500" />
              </div>

              <div className="p-8">
                {/* ADIM 0 — Başlangıç */}
                {simStep === 0 && (
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Brain className="h-8 w-8 text-primary" />
                    </div>
                    <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">Okulunuzun Kendi Sistemi</Badge>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Ücretsiz Akademik Potansiyel & Öğrenme Stili Analizi
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      Çocuğunuzun gizli yeteneklerini 3 dakikada keşfedin. Ücretsiz yapay zeka raporunuzu alın.
                    </p>
                    <Button className="w-full" size="lg" onClick={() => setSimStep(1)}>
                      <Play className="h-4 w-4 mr-2" /> Analizi Başlat (Ücretsiz)
                    </Button>
                    <p className="text-xs text-muted-foreground mt-3">Kayıt gerekmez · 3 dakika</p>
                  </div>
                )}

                {/* ADIM 1 — Sorular */}
                {simStep === 1 && (() => {
                  const answeredCount = simAnswers.length;
                  const currentQ = simQuestions[answeredCount];
                  if (!currentQ) return null;
                  return (
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Soru {answeredCount + 1}/{simQuestions.length}</span>
                        <div className="flex gap-1">
                          {simQuestions.map((_, i) => (
                            <div key={i} className={`h-1.5 w-8 rounded-full transition-colors ${i <= answeredCount ? 'bg-primary' : 'bg-border'}`} />
                          ))}
                        </div>
                      </div>
                      <p className="font-semibold text-foreground mb-5 leading-snug">{currentQ.q}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {currentQ.opts.map((opt, i) => (
                          <button
                            key={i}
                            onClick={() => handleSimAnswer(i)}
                            className="p-3 text-sm text-left border border-border/60 rounded-xl hover:border-primary/40 hover:bg-primary/5 transition-all text-foreground"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })()}

                {/* ADIM 2 — Bulanık Rapor (Kırılma Noktası) */}
                {simStep === 2 && (
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4 text-center">Analiziniz Hazır!</p>
                    <div className="relative mb-6">
                      <div className="space-y-3 blur-sm select-none pointer-events-none">
                        {["Analitik Zeka: %78 (Üst Bant)", "Odaklanma Süresi: 22 dk (Geliştirilebilir)", "Görsel Öğrenme Baskın", "Sınav Kaygısı: Orta Seviye"].map((item, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                            <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-green-500' : i === 2 ? 'bg-primary' : 'bg-yellow-500'}`} />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm rounded-xl">
                        <Lock className="h-8 w-8 text-primary mb-3" />
                        <p className="text-sm font-bold text-foreground text-center">15 Sayfalık Tam Raporu Almak İçin<br />Telefon Numaranızı Girin</p>
                      </div>
                    </div>
                    <form onSubmit={handleSimPhone} className="space-y-3">
                      <input
                        type="tel"
                        placeholder="WhatsApp Numaran (5XX XXX XX XX)"
                        className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                        value={simPhone}
                        onChange={(e) => setSimPhone(e.target.value)}
                        required
                      />
                      <Button type="submit" className="w-full" size="lg">
                        Raporu WhatsApp'tan Al
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                      <p className="text-[10px] text-center text-muted-foreground">Bilgileriniz gizli tutulur · KVKK Uyumlu</p>
                    </form>
                  </div>
                )}

                {/* ADIM 4 — Konfeti Tebrik */}
                {simStep === 4 && (
                  <div className="text-center py-4">
                    <div className="text-5xl mb-4">🎉</div>
                    <h3 className="text-xl font-black text-foreground mb-3">Tebrikler!</h3>
                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 mb-5 text-left">
                      <p className="text-sm font-bold text-primary mb-2">Az önce neler oldu?</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />Kurumunuza sıcak bir lead bıraktınız</li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />Kayıt-kabul ekibinin CRM'ine ve WhatsApp'ına bildirim düştü</li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />Velileriniz okulunuzun markasıyla tam böyle numaralarını bırakıyor</li>
                      </ul>
                    </div>
                    <Link to="/iletisim">
                      <Button className="w-full" size="lg">
                        Okuluma Kur <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <button onClick={() => { setSimStep(0); setSimAnswers([]); setSimPhone(""); }} className="mt-3 text-xs text-muted-foreground hover:text-foreground transition-colors block w-full">
                      Baştan dene
                    </button>
                  </div>
                )}
              </div>
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
                  "Kapasite bazlı sabit paket → Öğrenci sayısı 2x artsa fatura 2x artmaz",
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

      {/* AI Growth Engine (Gelişmiş ROI Hesaplayıcı) */}
      <section id="roi-hesapla" className="py-20 lg:py-32 bg-background relative overflow-hidden">
        {/* Dekoratif Işıklar */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 px-4 py-1.5 rounded-full">
              <Calculator className="h-4 w-4 mr-2 inline" /> AI Finansal Projeksiyon
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-6">
              Büyüme <span className="text-primary italic">Motorunuzu</span> Test Edin
            </h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Edusonex AI altyapısının okulunuzun kârlılığını nasıl artırdığını finansal verilerle karşılaştırın.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
            
            {/* Sol Panel: Parametreler */}
            <div className="lg:col-span-5 space-y-10 bg-card/50 backdrop-blur-xl border border-border/50 rounded-[32px] p-8 md:p-10 shadow-2xl">
              
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="space-y-1">
                    <label className="text-base font-bold text-foreground">Yıllık Kayıt Ücreti</label>
                    <p className="text-xs text-muted-foreground">Ortalama eğitim + yemek ücreti</p>
                  </div>
                  <span className="text-2xl font-black text-primary">{(annualFee / 1000).toFixed(0)}k TL</span>
                </div>
                <Slider value={[annualFee]} onValueChange={(val) => setRoiValue(val)} min={100000} max={600000} step={10000} className="py-4" />
                <div className="flex justify-between text-[10px] font-medium text-muted-foreground uppercase tracking-wider mt-2">
                  <span>100k TL</span>
                  <span>600k TL</span>
                </div>
              </div>

              <div className="pt-4 border-t border-border/30">
                <div className="flex justify-between items-center mb-6">
                  <div className="space-y-1">
                    <label className="text-base font-bold text-foreground">Aylık Reklam Bütçesi</label>
                    <p className="text-xs text-muted-foreground">Billboard, Meta, Google harcamaları</p>
                  </div>
                  <span className="text-2xl font-black text-secondary">35k TL</span>
                </div>
                <Slider defaultValue={[35000]} min={10000} max={200000} step={5000} className="py-4 cursor-not-allowed opacity-50" />
                <div className="flex justify-between text-[10px] font-medium text-muted-foreground uppercase tracking-wider mt-2">
                  <span>Geleneksel Reklam Harcaması (Sabitlenmiş)</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                <h4 className="text-sm font-bold flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-primary" /> Stratejik Not:
                </h4>
                <p className="text-xs leading-relaxed text-muted-foreground">
                    Edusonex, reklam bütçenizi %60'a kadar azaltırken, oluşturduğu "Kanca Sistem" ile organik aday veri akışını 3 kat artırır.
                </p>
              </div>
            </div>

            {/* Sağ Panel: Sonuçlar */}
            <div className="lg:col-span-7 grid gap-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card border-border/50 overflow-hidden group hover:border-primary/30 transition-all duration-500">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <TrendingUp className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-sm font-bold text-muted-foreground">Aylık Yatırım</span>
                    </div>
                    <div className="flex items-end gap-3 mb-2">
                      <span className="text-4xl font-black text-foreground">49.750 TL</span>
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Enterprise AI Paketi</p>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground overflow-hidden relative group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-8 -mt-8" />
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6 text-primary-foreground/80">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-sm font-bold">Amorti Eşiği</span>
                    </div>
                    <div className="flex items-end gap-3 mb-2">
                      <span className="text-5xl font-black tracking-tighter">{studentsNeeded.toFixed(1)}</span>
                      <span className="text-lg font-bold mb-1">Kayıt / Yıl</span>
                    </div>
                    <p className="text-xs text-primary-foreground/70 uppercase tracking-widest font-bold">Yıllık Gider Karşılığı</p>
                  </CardContent>
                </Card>
              </div>

              {/* Büyük Karşılaştırma Kartı */}
              <Card className="bg-card/30 border-primary/20 backdrop-blur overflow-hidden group h-full">
                <CardHeader className="p-8 pb-4">
                  <CardTitle className="text-xl font-black flex items-center gap-3 text-foreground">
                    <BarChart3 className="h-6 w-6 text-primary" />
                    Büyüme Analizi
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-4">
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-2">
                        <span className="text-muted-foreground">Geleneksel Reklam Kaybı</span>
                        <span className="text-destructive">-165.000 TL / Ay</span>
                      </div>
                      <div className="h-2 w-full bg-border/50 rounded-full overflow-hidden">
                        <div className="h-full bg-destructive/60 w-[40%] rounded-full opacity-70" />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-2">
                        <span className="text-foreground">Edusonex AI Kazancı</span>
                        <span className="text-primary">+{(annualFee * 3 / 1000).toFixed(0)}k TL / Ay (Tahmin)</span>
                      </div>
                      <div className="h-3 w-full bg-primary/10 rounded-full overflow-hidden p-0.5">
                        <div className="h-full bg-primary w-[85%] rounded-full shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border/50 mt-6">
                        <p className="text-[13px] text-muted-foreground leading-relaxed italic">
                          "Tüm yıllık maliyetiniz sadece <strong>{studentsNeeded.toFixed(1)}</strong> öğrenci kaydıyla sıfırlanır. Sonraki her kayıt okulunuzun büyüme sermayesine dönüşür."
                        </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/iletisim">
              <Button size="lg" className="h-12 px-10 text-base rounded-full shadow-lg shadow-primary/20 group">
                AI Büyüme Analizini Başlat
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
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



            {/* 5. Sınav Fabrikası */}
            <Card className="border-orange-500/30 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/10 bg-gradient-to-br from-card to-orange-500/5 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FileCheck className="h-6 w-6 text-orange-600" />
                  </div>
                  <Badge className="bg-orange-500/10 text-orange-600 border-orange-500/20">✅ Aktif</Badge>
                </div>
                <CardTitle className="text-xl mb-1">Sınav Fabrikası</CardTitle>
                <div className="text-xs text-muted-foreground mb-2 font-mono">sf.edusonex.com.tr</div>
                <CardDescription>Yapay zeka destekli sınırsız soru ve sınav üretim motoru.</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://sf.edusonex.com.tr/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-orange-500/20 hover:bg-orange-500/10 hover:text-orange-600 group-hover:border-orange-500/40">
                    Projeye Git <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
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


            {/* 10. Akademi */}
            <Card className="border-indigo-500/30 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/10 bg-gradient-to-br from-card to-indigo-500/5 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <GraduationCap className="h-6 w-6 text-indigo-600" />
                  </div>
                  <Badge className="bg-indigo-500/10 text-indigo-600 border-indigo-500/20">✅ Aktif</Badge>
                </div>
                <CardTitle className="text-xl mb-1">Edusonex Akademi</CardTitle>
                <div className="text-xs text-muted-foreground mb-2 font-mono">akademi.edusonex.com.tr</div>
                <CardDescription>Öğretmen ve veli eğitimleri, sertifika programları.</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://akademi.edusonex.com.tr/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-indigo-500/20 hover:bg-indigo-500/10 hover:text-indigo-600 group-hover:border-indigo-500/40">
                    Projeye Git <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
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
                a: "Hayır, öğrenci başına ücret alınmaz. 3 aylık kapasite paketi vardır: Starter (100 öğrenciye kadar, 29.000 TL/ay), Growth (500'e kadar, 39.500 TL/ay), Enterprise (1.000'e kadar, 49.750 TL/ay). Klasik SaaS'ın aksine öğrenci sayınız 5 katına çıksa bile ödemeniz %71 artış gösterir, 5x değil."
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

      {/* 🛡️ GÜVEN KALKANI */}
      <section className="py-14 bg-muted/20 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-center text-xs font-bold text-muted-foreground uppercase tracking-widest mb-8">Hukuki & Teknik Güvenceler</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Shield, title: "%100 KVKK Uyumlu", desc: "Açık rıza ve aydınlatma metni süreçleri sisteme entegredir.", color: "text-green-600", bg: "bg-green-500/10" },
              { icon: CheckCircle, title: "İYS Entegrasyonu", desc: "Topladığınız veli verilerine güvenle SMS kampanyaları düzenleyin.", color: "text-blue-600", bg: "bg-blue-500/10" },
              { icon: Zap, title: "IT Ekibine Gerek Yok", desc: "Anahtar teslim bulut altyapısı. Kurulum ve bakım bizden.", color: "text-orange-600", bg: "bg-orange-500/10" },
              { icon: Lock, title: "Veriler Türkiye'de", desc: "Öğrenci verileri yurt dışında değil, Türkiye'deki izole alanlarda saklanır.", color: "text-purple-600", bg: "bg-purple-500/10" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start p-5 bg-card rounded-2xl border border-border/40 hover:border-primary/20 hover:shadow-sm transition-all">
                <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                </div>
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
