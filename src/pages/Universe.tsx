import Layout from "@/components/Layout";
import { ArrowRight, Brain, Cpu, Gamepad2, Globe, GraduationCap, Layers, Server, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const tiers = [
    {
        layer: "LAYER I",
        category: "LEAD GEN",
        title: "Interface",
        subtitle: "AI Asistan & Veli Kanca Sistemi",
        description: "Okulun kendi markasıyla çalışan AI asistanı, 7/24 akademik potansiyel analizi yaparak velilerin telefon numarasını ve e-postasını toplar. Reklamdan değil, değer vererek lead.",
        icon: Brain,
        href: "/kommo",
        active: true,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        badge: "bg-blue-500/20 text-blue-300"
    },
    {
        layer: "LAYER II",
        category: "ANALİZ",
        title: "Core",
        subtitle: "Akademik Potansiyel Haritası",
        description: "Öğrencinin güçlü ve zayıf alanlarını ölçen yapay zeka motoru. Veliye kişisel rapor — \"Çocuğunuz Fen'de %78 üst banda yakın\" — satın alma güdüsünü tetikler.",
        icon: Cpu,
        href: "https://norobil.edusonex.com.tr/",
        active: true,
        color: "text-indigo-400",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20",
        badge: "bg-indigo-500/20 text-indigo-300"
    },
    {
        layer: "LAYER III",
        category: "MARKA",
        title: "Architecture",
        subtitle: "White-Label Altyapı & Alan Adı",
        description: "Tüm sistem okulun kendi markası ve alan adıyla çalışır (ai.okulunuz.com.tr). Veli sistemi okula ait sanır — güven 3 kata, dönüşüm oranı 2 kata çıkar.",
        icon: Sparkles,
        href: "/urunler",
        active: true,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        badge: "bg-purple-500/20 text-purple-300"
    },
    {
        layer: "LAYER IV",
        category: "CRM",
        title: "Dynamics",
        subtitle: "Aday Öğrenci Lead Paneli",
        description: "Kommo CRM entegrasyonuyla sistem, toplanan tüm lead'leri otomatik kayıt satış hunisine sokar. Kim nerede, kim sıcak, kim soğuk — tek ekranda.",
        icon: Gamepad2,
        href: "/referanslar",
        active: true,
        color: "text-green-400",
        bg: "bg-green-500/10",
        border: "border-green-500/20",
        badge: "bg-green-500/20 text-green-300"
    },
    {
        layer: "LAYER V",
        category: "İLETİŞİM",
        title: "Intelligence",
        subtitle: "WhatsApp Veli AI Asistanı",
        description: "Kayıt sonrası velilerle birebir iletişim kuran otomatik WhatsApp asistanı. Sorulara anında cevap, yoklama bildirimi, sınav hatırlatıcısı — personel maliyeti olmadan.",
        icon: GraduationCap,
        href: "/urunler",
        active: true,
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/20",
        badge: "bg-yellow-500/20 text-yellow-300"
    },
    {
        layer: "LAYER VI",
        category: "ANALİTİK",
        title: "Network",
        subtitle: "PDR & Yönetim Dashboard",
        description: "Okul yöneticileri için gerçek zamanlı kayıt hunisi, lead kaynağı ve dönüşüm analitiği. Hangi kanal kaç öğrenci getiriyor — reklam bütçesi kararlarını veriye dayandırın.",
        icon: Globe,
        href: "/urunler",
        active: false,
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20",
        badge: "bg-cyan-500/20 text-cyan-300"
    },
    {
        layer: "LAYER VII",
        category: "ÖLÇEK",
        title: "Paradigm",
        subtitle: "Edu-RaaS Büyüme Modeli",
        description: "Kapasite bazlı fiyat modeli: öğrenci 10'a katlanırsa fatura %71 artar, 10 kat değil. Okulun büyümesi sistemin büyümesi demek — sabit maliyet, sınırsız ölçek.",
        icon: Layers,
        href: "/urunler#fiyatlandirma",
        active: true,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
        badge: "bg-amber-500/20 text-amber-300"
    }
];

const Universe = () => {
    return (
        <Layout>
            <div className="min-h-screen bg-[#0a0a0F] text-white py-24 relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
                        <p className="text-xs font-bold tracking-widest text-primary/80 mb-4 uppercase">Platform Mimarisi</p>
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6">
                            7 Katmanlı AI Okul Altyapısı
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            Lead toplamaktan kayıt takibine, veli iletişiminden yönetim analitiğine —
                            her katman okulunuzun büyümesine somut katkı sağlar.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {tiers.map((tier, index) => (
                            <div
                                key={tier.title}
                                className={`
                  group relative p-8 rounded-2xl border ${tier.border} bg-[#13131A] 
                  hover:bg-[#1A1A23] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-${tier.color}/10
                  animate-fade-in
                `}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-3">
                                        <span className={`text-xs font-bold tracking-widest ${tier.color}`}>
                                            {tier.layer}
                                        </span>
                                        <Badge variant="outline" className={`${tier.badge} border-0 text-[10px] px-2 py-0.5 tracking-wider`}>
                                            {tier.category}
                                        </Badge>
                                    </div>
                                    <tier.icon className={`h-6 w-6 ${tier.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                                </div>

                                {/* Content */}
                                <div className="mb-8">
                                    <h3 className="text-3xl font-bold text-white mb-2">{tier.title}</h3>
                                    <p className={`text-sm font-medium ${tier.color} mb-4`}>{tier.subtitle}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {tier.description}
                                    </p>
                                </div>

                                {/* Footer / Action */}
                                <div className="mt-auto">
                                    {tier.active ? (
                                        tier.href.startsWith("http") ? (
                                            <a href={tier.href} target="_blank" rel="noopener noreferrer" className="block w-full">
                                                <Button variant="ghost" className={`w-full justify-between hover:bg-white/5 ${tier.color} group-hover:pl-4 transition-all`}>
                                                    <span className="text-sm font-medium">Platforma Git</span>
                                                    <ArrowRight className="h-4 w-4" />
                                                </Button>
                                            </a>
                                        ) : (
                                            <Link to={tier.href} className="block w-full">
                                                <Button variant="ghost" className={`w-full justify-between hover:bg-white/5 ${tier.color} group-hover:pl-4 transition-all`}>
                                                    <span className="text-sm font-medium">Platforma Git</span>
                                                    <ArrowRight className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                        )
                                    ) : (
                                        <Link to={tier.href} className="block w-full">
                                            <Button variant="ghost" className="w-full justify-between hover:bg-white/5 text-gray-400 group-hover:text-white group-hover:pl-4 transition-all">
                                                <span className="text-sm font-medium">Keşfetmek için tıklayın</span>
                                                <ArrowRight className="h-4 w-4" />
                                            </Button>
                                        </Link>
                                    )}
                                </div>

                                {/* Hover Glow Effect */}
                                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 bg-gradient-to-br from-${tier.color}/5 to-transparent`} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-24 text-center relative z-10">
                    <div className="inline-block bg-white/5 border border-white/10 rounded-2xl px-10 py-8 max-w-xl mx-auto">
                        <p className="text-white font-bold text-xl mb-2">Sistemi Okulunuzda Deneyin</p>
                        <p className="text-gray-400 text-sm mb-6">Pilot kontenjanlar sınırlıdır. 30 dakikalık görüşmede tüm katmanları birlikte inceleyelim.</p>
                        <Link to="/iletisim">
                            <Button className="bg-primary hover:bg-primary/90 text-white px-8">
                                Ücretsiz Demo Al <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Universe;
