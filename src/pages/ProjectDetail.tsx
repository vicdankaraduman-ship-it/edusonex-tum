import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Clock, ShieldCheck, Zap, ArrowRight, Play, CheckCircle2 } from "lucide-react";

// Proje verileri (Dummy Data - Gerçek verilerle güncellenebilir)
const projects = {
    "layer-2-core": {
        badge: "layer2.hero.badge",
        title: "CORE",
        subtitle: "Cevher / HumanOS",
        description: "Teknolojinin kalbindeki biyolojik cevher. Öğrencinin öğrenme profilini çıkaran, güçlü ve zayıf yönlerini gösteren, karar alırken güvenebileceğiniz öğrenme analitiği platformu.",
        stats: [
            { icon: Clock, value: "3 dk", label: "Analiz Süresi" },
            { icon: ShieldCheck, value: "%100", label: "Gizlilik" },
            { icon: Zap, value: "Anlık", label: "Öneriler" }
        ],
        features: [
            "Biyolojik Veri Analizi",
            "Kişiselleştirilmiş Öğrenme Yolu",
            "Yetenek Haritalama",
            "Duygu Durum Tespiti"
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Örnek video
        gradient: "from-red-500/20 to-orange-500/20",
        accentColor: "text-red-400",
        buttonColor: "bg-red-600 hover:bg-red-700",
        bg: "bg-red-500/20"
    },
    "layer-3-architecture": {
        badge: "layer3.hero.badge",
        title: "ARCHITECTURE",
        subtitle: "Tasavvur / Studio",
        description: "Yaratıcılığın sınırlarını zorlayın. Yapay zeka destekli içerik üretim stüdyosu ile eğitim materyallerini saniyeler içinde oluşturun.",
        stats: [
            { icon: Clock, value: "Saniyeler", label: "Üretim Hızı" },
            { icon: ShieldCheck, value: "4K", label: "Çözünürlük" },
            { icon: Zap, value: "Sınırsız", label: "Yaratıcılık" }
        ],
        features: [
            "Metinden Video Üretimi",
            "Otomatik Seslendirme",
            "Akıllı Montaj",
            "İçerik Zenginleştirme"
        ],
        videoUrl: "",
        gradient: "from-purple-500/20 to-pink-500/20",
        accentColor: "text-purple-400",
        buttonColor: "bg-purple-600 hover:bg-purple-700",
        bg: "bg-purple-500/20"
    },
    "layer-4-dynamics": {
        badge: "layer4.hero.badge",
        title: "DYNAMICS",
        subtitle: "Vecd / Gamer",
        description: "Eğitimi oyuna dönüştürün. Rekabet, işbirliği ve eğlenceyi bir araya getiren oyunlaştırma modülü.",
        stats: [
            { icon: Clock, value: "7/24", label: "Erişim" },
            { icon: ShieldCheck, value: "+%40", label: "Motivasyon" },
            { icon: Zap, value: "Canlı", label: "Skor Tablosu" }
        ],
        features: [
            "Rozet ve Puan Sistemi",
            "Liderlik Tabloları",
            "Takım Görevleri",
            "Sanal Ödüller"
        ],
        videoUrl: "https://www.youtube.com/embed/hxtcxpU8pEk",
        gradient: "from-green-500/20 to-emerald-500/20",
        accentColor: "text-green-400",
        buttonColor: "bg-green-600 hover:bg-green-700",
        bg: "bg-green-500/20"
    },
    "layer-5-intelligence": {
        badge: "layer5.hero.badge",
        title: "INTELLIGENCE",
        subtitle: "Hikmet / Akademi",
        description: "Sürekli gelişim merkezi. Öğretmenler, veliler ve yöneticiler için yapay zeka destekli eğitim programları.",
        stats: [
            { icon: Clock, value: "Modüler", label: "Eğitimler" },
            { icon: ShieldCheck, value: "Sertifikalı", label: "Programlar" },
            { icon: Zap, value: "Uzman", label: "Eğitmenler" }
        ],
        features: [
            "Online Seminerler",
            "Atölye Çalışmaları",
            "Kaynak Kütüphanesi",
            "Mentörlük Sistemi"
        ],
        videoUrl: "",
        gradient: "from-yellow-500/20 to-amber-500/20",
        accentColor: "text-yellow-400",
        buttonColor: "bg-yellow-600 hover:bg-yellow-700",
        bg: "bg-yellow-500/20"
    },
    "layer-6-network": {
        badge: "layer6.hero.badge",
        title: "NETWORK",
        subtitle: "Ülfet / Guild",
        description: "Birlikten kuvvet doğar. Okullar arası işbirliği, proje paylaşımı ve ortak etkinlik platformu.",
        stats: [
            { icon: Clock, value: "Global", label: "Ağ" },
            { icon: ShieldCheck, value: "Güvenli", label: "Paylaşım" },
            { icon: Zap, value: "Hızlı", label: "İletişim" }
        ],
        features: [
            "Proje Pazarı",
            "Ortak Etkinlikler",
            "Forumlar",
            "Haberleşme Ağı"
        ],
        videoUrl: "https://www.youtube.com/embed/zvbWO9-AnlI",
        gradient: "from-cyan-500/20 to-blue-500/20",
        accentColor: "text-cyan-400",
        buttonColor: "bg-cyan-600 hover:bg-cyan-700",
        bg: "bg-cyan-500/20"
    }
};

const ProjectDetail = () => {
    const { projectId } = useParams();
    const project = projects[projectId as keyof typeof projects];

    if (!project) {
        return (
            <Layout>
                <div className="min-h-screen flex items-center justify-center bg-[#0a0a0F] text-white">
                    <h1 className="text-2xl font-bold">Proje Bulunamadı</h1>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="min-h-screen bg-[#0a0a0F] text-white overflow-hidden relative">
                {/* Hero Background */}
                <div className={`absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b ${project.gradient} to-[#0a0a0F] opacity-30 pointer-events-none`} />

                <div className="container mx-auto px-4 py-24 relative z-10">

                    {/* Header Content */}
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-fade-in">
                        <Badge variant="outline" className="mb-6 bg-white/5 border-white/10 text-gray-300 px-3 py-1 text-xs tracking-widest uppercase">
                            {project.badge}
                        </Badge>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
                            {project.title}
                        </h1>

                        <p className={`text-2xl md:text-3xl font-light ${project.accentColor} mb-8`}>
                            {project.subtitle}
                        </p>

                        <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto mb-12">
                            {project.description}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-20">
                            <a href="https://wa.me/905320674063" target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
                                <Button size="lg" className={`${project.buttonColor} text-white px-8 h-12 text-lg font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full`}>
                                    <Play className="mr-2 h-5 w-5 fill-current" /> Demo Talep Et
                                </Button>
                            </a>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-6 w-full max-w-3xl mx-auto mb-24">
                            {project.stats.map((stat, index) => (
                                <div key={index} className="bg-[#13131A] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-[#1A1A23] transition-colors">
                                    <stat.icon className={`h-6 w-6 ${project.accentColor} mb-3`} />
                                    <span className="text-2xl font-bold text-white mb-1">{stat.value}</span>
                                    <span className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Features / Content Section */}
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        {/* Left Content */}
                        <div className="bg-[#13131A] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
                            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.gradient} opacity-20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2`} />

                            <h3 className="text-2xl font-bold mb-2">School Operating System</h3>
                            <p className="text-gray-400 text-sm mb-8">
                                {project.subtitle} vizyonunu ve okul işletim sistemi konseptini anlatan kısa tanıtım.
                            </p>

                            <div className="relative aspect-video bg-black/50 rounded-xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all border border-white/5">
                                {project.videoUrl ? (
                                    <iframe
                                        className="w-full h-full"
                                        src={project.videoUrl}
                                        title={project.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <>
                                        {/* Video Placeholder */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className={`w-16 h-16 rounded-full ${project.buttonColor} flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform`}>
                                                <Play className="h-6 w-6 text-white fill-white ml-1" />
                                            </div>
                                        </div>
                                        {/* Background Pattern for Video */}
                                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Right Features List */}
                        <div className="bg-[#13131A] border border-white/10 rounded-3xl p-8 md:p-12 h-full flex flex-col justify-center">
                            <h3 className="text-2xl font-bold mb-8">Öne Çıkan Özellikler</h3>
                            <ul className="space-y-6">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-4 group">
                                        <div className={`w-8 h-8 rounded-full ${project.bg || 'bg-white/10'} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                            <CheckCircle2 className={`h-5 w-5 ${project.accentColor}`} />
                                        </div>
                                        <span className="text-lg text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <ArrowRight className={`h-6 w-6 ${project.accentColor} mt-auto self-end opacity-50 group-hover:opacity-100 transition-opacity`} />
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default ProjectDetail;
