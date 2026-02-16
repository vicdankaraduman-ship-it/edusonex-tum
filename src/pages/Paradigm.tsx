import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    School,
    RefreshCw,
    Castle,
    Clock,
    Box,
    Cpu,
    CheckCircle2,
    ArrowRight,
    Play,
    Zap,
    TrendingUp,
    Globe,
    Glasses,
    Monitor,
    ShieldCheck,
    Crown,
    Sparkles
} from "lucide-react";

const Paradigm = () => {
    return (
        <Layout>
            <div className="min-h-screen bg-[#0a0a0F] text-white overflow-hidden relative">
                {/* Background Gradients */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-amber-500/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto px-4 py-24 relative z-10">

                    {/* 1. Top Icons & Sync Status */}
                    <div className="flex flex-col items-center justify-center mb-16 animate-fade-in">
                        <div className="flex items-center gap-12 md:gap-24 mb-8">
                            <div className="flex flex-col items-center gap-3 group text-gray-500 hover:text-white transition-colors">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-all">
                                    <School className="h-8 w-8" />
                                </div>
                                <span className="text-xs font-medium uppercase tracking-widest">Fiziksel Okul</span>
                            </div>

                            <div className="flex flex-col items-center gap-3">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-amber-500/20 blur-xl animate-pulse" />
                                    <RefreshCw className="h-6 w-6 text-amber-500 animate-spin [animation-duration:4s]" />
                                </div>
                                <span className="text-[10px] font-bold text-amber-500/80 uppercase tracking-[0.2em]">Senkronizasyon</span>
                            </div>

                            <div className="flex flex-col items-center gap-3 group text-amber-500">
                                <div className="w-20 h-20 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shadow-lg shadow-amber-500/10 group-hover:scale-105 transition-transform">
                                    <Castle className="h-10 w-10" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest">Dijital İkiz</span>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-center mb-6">
                            Okulunuzun Metaverse'deki İkizi
                        </h1>
                        <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto leading-relaxed">
                            Katman 7, sadece bir yazılım değil — okulunuzun dijital kopyasıdır. Fiziksel dünyadaki her veri, her etkinlik, her öğrenci burada yaşayan bir simülasyona dönüşür.
                        </p>
                    </div>

                    {/* 2. Quick Status Pills */}
                    <div className="flex flex-wrap justify-center gap-4 mb-24 animate-fade-in [animation-delay:200ms]">
                        {[
                            { icon: Clock, label: "Gerçek Zamanlı" },
                            { icon: Box, label: "3D Simülasyon" },
                            { icon: Cpu, label: "AI Destekli" }
                        ].map((pill, i) => (
                            <div key={i} className="flex items-center gap-2 px-6 py-3 bg-[#13131A] border border-amber-500/20 rounded-xl text-amber-500 font-bold text-sm hover:bg-amber-500/5 transition-colors cursor-default">
                                <pill.icon className="h-4 w-4" />
                                {pill.label}
                            </div>
                        ))}
                    </div>

                    {/* 3. Main Feature Block */}
                    <div className="max-w-6xl mx-auto mb-24 animate-fade-in [animation-delay:400ms]">
                        <div className="bg-[#13131A] border border-white/5 rounded-[40px] p-8 md:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 group">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none" />

                            <div className="flex-1 relative z-10">
                                <div className="flex items-center gap-2 text-amber-500 mb-4">
                                    <Crown className="h-5 w-5" />
                                    <span className="text-xs font-bold uppercase tracking-widest">Nihai Model</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                    Tüm Katmanların Birleştiği Nokta
                                </h2>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    Diğer 6 katman, bu dijital ikizin birer parçasıdır. Interface'den Network'e kadar her şey burada tek bir bütün halinde çalışır. Okulunuz artık sadece bir bina değil — yaşayan, öğrenen, evrilen bir dijital varlıktır.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Fiziksel okulla gerçek zamanlı senkronizasyon",
                                        "Öğrenci ve personel avatarları",
                                        "Sanal sınıflar ve etkinlik alanları"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex-1 w-full lg:w-auto relative">
                                <div className="relative aspect-square max-w-[400px] mx-auto flex items-center justify-center">
                                    {/* Abstract Visual for Platform */}
                                    <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
                                    <div className="relative z-10 w-48 h-48 bg-amber-500/10 border border-amber-500/30 rounded-3xl flex items-center justify-center shadow-2xl shadow-amber-500/20 group-hover:scale-110 transition-transform duration-500">
                                        <Castle className="h-20 w-20 text-amber-500" />
                                    </div>
                                    {/* Floating Orbits */}
                                    <div className="absolute w-[120%] h-[120%] border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
                                    <div className="absolute w-[150%] h-[150%] border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                                    {/* Orbits Points */}
                                    <div className="absolute top-[10%] left-[20%] w-2 h-2 rounded-full bg-blue-500/50" />
                                    <div className="absolute bottom-[20%] right-[10%] w-3 h-3 rounded-full bg-amber-500/50" />
                                    <div className="absolute top-[50%] right-0 w-2 h-2 rounded-full bg-purple-500/50" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Secondary Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-24 animate-fade-in [animation-delay:600ms]">
                        {[
                            { title: "Simülasyon & Tahmin", desc: "Gelecek senaryolarını dijital ikizde test edin.", icon: TrendingUp },
                            { title: "Sanal Turlar", desc: "Veliler ve öğrenciler okulu metaverse'de gezsin.", icon: Globe },
                            { title: "Veri Görselleştirme", desc: "Tüm okul verileri 3D ortamda canlı olarak.", icon: Monitor },
                            { title: "Uzaktan Yönetim", Okulu: "Okulu dünyanın her yerinden yönetin.", icon: Glasses }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#13131A] border border-white/5 p-6 rounded-2xl hover:bg-white/5 transition-colors group">
                                <h4 className="font-bold text-amber-500 mb-2">{item.title}</h4>
                                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* 5. Video Section */}
                    <div className="max-w-4xl mx-auto mb-24 animate-fade-in [animation-delay:700ms]">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl font-bold mb-4">Paradigm Tanıtım Videosu</h3>
                            <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full" />
                        </div>
                        <div className="relative aspect-video bg-black/50 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/QX-jsFuny-E"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* 6. Layers Connection */}
                    <div className="max-w-6xl mx-auto mb-24 text-center animate-fade-in [animation-delay:800ms]">
                        <h3 className="text-2xl font-bold mb-4">Bu İkizi Oluşturan Katmanlar</h3>
                        <p className="text-gray-500 text-sm mb-12">Her biri dijital ikizin bir parçası — detaylar için tıklayın</p>

                        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-4">
                            {[
                                { n: 1, name: "Interface", color: "border-blue-500/30 text-blue-400" },
                                { n: 2, name: "Core", color: "border-red-500/30 text-red-400" },
                                { n: 3, name: "Architecture", color: "border-purple-500/30 text-purple-400" },
                                { n: 4, name: "Dynamics", color: "border-green-500/30 text-green-400" },
                                { n: 5, name: "Intelligence", color: "border-yellow-500/30 text-yellow-400" },
                                { n: 6, name: "Network", color: "border-cyan-500/30 text-cyan-400" }
                            ].map((layer) => (
                                <div key={layer.n} className={`bg-[#13131A] border ${layer.color} p-4 rounded-xl flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-all cursor-pointer`}>
                                    <span className="text-xl font-bold mb-1">{layer.n}</span>
                                    <span className="text-[10px] uppercase tracking-tighter">{layer.name}</span>
                                </div>
                            ))}
                        </div>

                        <div className="w-full bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl flex items-center justify-center gap-3">
                            <Crown className="h-4 w-4 text-amber-500" />
                            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Katman 7: Paradigm — Tüm bu parçaların birleştiği nihai form</span>
                        </div>
                    </div>

                    {/* 7. Footer Banner */}
                    <div className="max-w-5xl mx-auto rounded-[32px] overflow-hidden relative group animate-fade-in [animation-delay:900ms]">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 to-blue-900/40 transition-all duration-500 group-hover:scale-105" />
                        <div className="relative z-10 p-12 md:p-20 text-center border border-white/10 rounded-[32px]">
                            <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-amber-500/30 group-hover:scale-110 transition-transform">
                                <Crown className="h-8 w-8 text-amber-500" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                EdusonEX Evreni'nin Zirvesi
                            </h2>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                                Dijital ikiziniz hazır olduğunda, okulunuz artık zaman ve mekandan bağımsız — her an, her yerde, sınırsız.
                            </p>
                            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-12 h-14 text-lg font-bold rounded-full group">
                                <Sparkles className="mr-2 h-5 w-5" />
                                Kemalât — Mükemmelliğin Dijital Formu
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default Paradigm;
