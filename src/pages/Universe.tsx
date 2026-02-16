import Layout from "@/components/Layout";
import { ArrowRight, Brain, Cpu, Gamepad2, Globe, GraduationCap, Layers, Server, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const tiers = [
    {
        layer: "LAYER I",
        category: "ETKİLEŞİM",
        title: "Interface",
        subtitle: "Suret / Edubot",
        description: "Kullanıcı ile yapay zeka arasındaki ilk temas noktası. Sokratik diyalog ve kişiselleştirilmiş asistan deneyimi.",
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
        category: "ÇEKİRDEK",
        title: "Core",
        subtitle: "Cevher / HumanOS",
        description: "Öğrencinin dijital ikizi. Performans analizi, yetenek haritası ve biyolojik verilerin işlendiği merkezi işletim sistemi.",
        icon: Cpu,
        href: "/universe/layer-2-core",
        active: false,
        color: "text-red-400",
        bg: "bg-red-500/10",
        border: "border-red-500/20",
        badge: "bg-red-500/20 text-red-300"
    },
    {
        layer: "LAYER III",
        category: "SENTEZ",
        title: "Architecture",
        subtitle: "Tasavvur / Studio",
        description: "Yaratıcı zekanın merkezi. Multimedya içerik üretimi, video sentezi ve sanatsal ifade alanı.",
        icon: Sparkles,
        href: "/universe/layer-3-architecture",
        active: false,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        badge: "bg-purple-500/20 text-purple-300"
    },
    {
        layer: "LAYER IV",
        category: "AKIŞ",
        title: "Dynamics",
        subtitle: "Vecd / Gamer",
        description: "Oyunlaştırma ve motivasyon katmanı. Öğrenme sürecini rekabetçi ve eğlenceli hale getiren dinamik yapı.",
        icon: Gamepad2,
        href: "/universe/layer-4-dynamics",
        active: false,
        color: "text-green-400",
        bg: "bg-green-500/10",
        border: "border-green-500/20",
        badge: "bg-green-500/20 text-green-300"
    },
    {
        layer: "LAYER V",
        category: "İRFAN",
        title: "Intelligence",
        subtitle: "Hikmet / Akademi",
        description: "Derin öğrenme ve akademik gelişim. Öğretmenler ve veliler için sürekli eğitim ve sertifikasyon merkezi.",
        icon: GraduationCap,
        href: "/universe/layer-5-intelligence",
        active: false,
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/20",
        badge: "bg-yellow-500/20 text-yellow-300"
    },
    {
        layer: "LAYER VI",
        category: "EKOSİSTEM",
        title: "Network",
        subtitle: "Ülfet / Guild",
        description: "Sosyal işbirliği ağı. Okullar, öğretmenler ve öğrenciler arasındaki etkileşim ve paylaşım platformu.",
        icon: Globe,
        href: "/universe/layer-6-network",
        active: false,
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20",
        badge: "bg-cyan-500/20 text-cyan-300"
    },
    {
        layer: "LAYER VII",
        category: "NİHAİ MODEL",
        title: "Paradigm",
        subtitle: "Kemalât / Kolej",
        description: "Ölçme, değerlendirme ve mükemmellik. Sınav sistemleri ve başarı standartlarının belirlendiği zirve.",
        icon: Layers,
        href: "/universe/layer-7-paradigm",
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
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6">
                            Edusonex Evreni
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            Sistemimizin derinliklerinde yatan mimariyi keşfedin.
                            Her katman, mükemmelliğe giden yolda bir basamak.
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
            </div>
        </Layout>
    );
};

export default Universe;
