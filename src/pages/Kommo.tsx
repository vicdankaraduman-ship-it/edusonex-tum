import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    MessageCircle,
    Mail,
    Send,
    Instagram,
    Phone,
    Globe,
    TrendingDown,
    Search,
    Target,
    Cpu,
    Layers,
    ShieldCheck,
    Brain,
    CheckCircle2,
    ArrowRight,
    Play,
    Zap
} from "lucide-react";
import { useState } from "react";

const Kommo = () => {
    const [phone, setPhone] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        window.open(`https://wa.me/905320674063?text=Selam, okulun dijital karnesi için rapor almak istiyorum. Numaram: ${phone}`, '_blank');
    };

    return (
        <Layout>
            <div className="min-h-screen bg-[#0a0a0F] text-white overflow-hidden relative">

                {/* 1. Hero Section */}
                <section className="relative pt-32 pb-24 overflow-hidden">
                    {/* Floating Icons Background */}
                    <div className="absolute inset-0 pointer-events-none opacity-20">
                        <MessageCircle className="absolute top-[10%] left-[15%] h-12 w-12 text-green-500 animate-bounce [animation-duration:3s]" />
                        <Mail className="absolute top-[15%] right-[20%] h-10 w-10 text-blue-400 animate-pulse" />
                        <Send className="absolute top-[40%] left-[10%] h-10 w-10 text-cyan-500 -rotate-12" />
                        <Instagram className="absolute top-[20%] right-[10%] h-12 w-12 text-pink-500 animate-bounce [animation-duration:4s]" />
                        <Phone className="absolute bottom-[20%] left-[5%] h-10 w-10 text-orange-500 rotate-12" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <Badge variant="outline" className="mb-6 bg-blue-500/10 border-blue-500/20 text-blue-400 px-4 py-1.5 text-sm">
                            Eğitim Kurumları İçin Büyüme CRM'i
                        </Badge>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 max-w-5xl mx-auto leading-tight">
                            Eğitim kurumunuzu yönetmenizi sağlayacak <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">
                                tüm eşsiz yöntemler
                            </span> <br />
                            tek bir sistemde toplandı
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Rastgele reklamlar vermeyi bırakın. EdusonEX ile ölçülebilir, yapay zeka destekli ve sonuç garantili öğrenci kazanım sistemine geçin.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 h-14 text-lg font-semibold group rounded-full">
                                Ücretsiz Büyüme Analizi Alın
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 2. Problem Section */}
                <section className="py-24 bg-[#13131A]/50 relative">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <Badge variant="outline" className="mb-4 bg-red-500/10 border-red-500/20 text-red-400">
                                Tanıdık Geliyor mu?
                            </Badge>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                Eğitim Pazarlamasında 'Parçalanmışlık' <br />
                                Sizi Yavaşlatıyor mu?
                            </h2>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                Çoğu okul, dijital dünyada kaybolmuş durumda. Ayrı ayrı araçlar, koordinasyonsuz çalışmalar ve ölçülemeyen sonuçlar...
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    icon: Globe,
                                    title: "Web Siteniz Sadece Bir Broşür mü?",
                                    desc: "Statik, etkileşimsiz web siteleri ziyaretçileri potansiyel veliye dönüştüremiyor. Siteniz çalışmıyor, sadece var."
                                },
                                {
                                    icon: Phone,
                                    title: "Veli Telefonlarını Takip Edemiyor Musunuz?",
                                    desc: "Sosyal medyadan gelen sorular, kaçırılan aramalar, kayıp fırsatlar... Her gün potansiyel öğrenci kaybediyorsunuz."
                                },
                                {
                                    icon: TrendingDown,
                                    title: "Reklam Bütçeniz Boşa mı Gidiyor?",
                                    desc: "Hangi reklamın ne getirdiğini bilmiyorsunuz. Para harcıyorsunuz ama sonucu ölçemiyorsunuz."
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-[#1A1A23] border border-white/5 p-8 rounded-3xl hover:border-red-500/30 transition-all hover:-translate-y-1">
                                    <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6">
                                        <item.icon className="h-6 w-6 text-red-400" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-center mt-12 text-blue-400 font-medium tracking-wide italic">
                            Bu problemleri tek bir sistemle çözmenin zamanı geldi.
                        </p>
                    </div>
                </section>

                {/* 3. Solution Section */}
                <section className="py-24 relative overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <Badge variant="outline" className="mb-4 bg-blue-500/10 border-blue-500/20 text-blue-400">
                                Çözüm
                            </Badge>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                Biz Reklam Ajansı Değil, <span className="text-orange-500">Büyüme Motoruyuz</span>
                            </h2>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                                EdusonEX, okulunuzun dijital pazarlama süreçlerini tek bir platformda birleştirir. Parçalı çözümler yerine bütünleşik bir sistem.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
                            {[
                                { icon: Search, title: "Akıllı Kayıt Hunileri", desc: "Potansiyel veliyi yakalayan, bilgi toplayan ve otomatik takip eden özel tasarım landing page'ler." },
                                { icon: Zap, title: "Çok Kanallı Otomasyon", desc: "SMS, E-posta ve WhatsApp üzerinden otomatik bilgilendirme ve hatırlatma mesajları." },
                                { icon: Brain, title: "AI Destekli İçerik", desc: "EduBox yapay zeka altyapısı ile kişiselleştirilmiş iletişim ve içerik önerileri." },
                                { icon: Target, title: "Şeffaf CRM Paneli", desc: "Hangi reklamdan kaç öğrenci geldiğini, dönüşüm oranlarını anlık görün." },
                                { icon: MessageCircle, title: "Mesajlaşma Merkezi", desc: "Tüm sosyal medya mesajlarınızı tek bir yerden yönetin, hiçbir soruyu kaçırmayın." },
                                { icon: Layers, title: "Veli Takip Sistemi", desc: "Her velinin yolculuğunu baştan sona izleyin, doğru zamanda doğru mesajı gönderin." }
                            ].map((item, i) => (
                                <div key={i} className="bg-[#13131A] border border-white/5 p-6 rounded-2xl hover:border-blue-500/30 transition-all flex gap-4 items-start group">
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex-shrink-0 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                        <item.icon className="h-5 w-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Kommo Partner Banner */}
                        <div className="max-w-4xl mx-auto bg-blue-700/20 border border-blue-500/20 rounded-3xl p-8 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 blur-[80px] opacity-20 pointer-events-none" />
                            <h3 className="text-2xl font-bold mb-4">Kommo CRM Türkiye Resmi Partneri</h3>
                            <p className="text-gray-400 mb-8">
                                Dünya çapında 15.000+ işletmenin tercih ettiği Kommo CRM altyapısını eğitim sektörüne özel olarak Türkiye'de sunuyoruz.
                            </p>
                            <div className="flex justify-center gap-8 items-center flex-wrap opacity-80">
                                <div className="bg-white/10 px-6 py-3 rounded-xl border border-white/5 flex items-center gap-2">
                                    <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center font-bold text-white text-xs">K</div>
                                    <span className="font-bold tracking-tight">Kommo <span className="text-blue-400">partner</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Video & Detail Section */}
                <section className="py-24 bg-[#13131A]/30">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                            <div>
                                <h3 className="text-3xl font-bold mb-6">CRM Integrated System</h3>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    Edusonex CRM ile okul süreçlerinizi otomatize edin. Manuel takibi bırakın, yapay zekanın gücünü arkanıza alın.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "15 dakikada hızlı kurulum",
                                        "%100 bulut tabanlı erişim",
                                        "Esnek API entegrasyonu",
                                        "Gelişmiş analitik raporlama"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300">
                                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative aspect-video bg-black/50 rounded-3xl overflow-hidden shadow-2xl border border-white/5 group">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/992Nd7PtBiA"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. CTA Section (Lead Magnet) */}
                <section className="py-24 bg-blue-800/20 relative border-t border-white/5">
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-orange-500/20">
                            <Phone className="h-8 w-8 text-orange-500" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Okulunuzun Dijital Karnesini <br />
                            <span className="text-orange-500">Merak Ediyor Musunuz?</span>
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Sadece WhatsApp numaranızı girin, size eksiklerinizi ve fırsatlarınızı içeren 3 sayfalık ücretsiz bir rapor gönderelim.
                        </p>

                        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-[#1A1A23] p-2 rounded-2xl border border-white/10 flex flex-col sm:flex-row gap-2 shadow-2xl">
                            <input
                                type="tel"
                                placeholder="WhatsApp numaranız (Örn: 5XX XXX XX XX)"
                                className="flex-1 bg-transparent border-0 focus:ring-0 text-white px-4 py-3 placeholder:text-gray-500"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                            <Button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2">
                                <Send className="h-4 w-4" />
                                Gönder
                            </Button>
                        </form>
                        <p className="mt-4 text-xs text-gray-500">
                            Bilgileriniz gizli tutulacak ve sadece rapor göndermek için kullanılacaktır.
                        </p>
                    </div>

                    {/* Background Gradients */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-blue-500/10 blur-[120px]" />
                        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-orange-500/5 blur-[120px]" />
                    </div>
                </section>

            </div>
        </Layout>
    );
};

export default Kommo;
