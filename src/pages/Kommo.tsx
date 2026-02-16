import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Clock, ShieldCheck, Zap, ArrowRight, Play, CheckCircle2 } from "lucide-react";

const Kommo = () => {
    const project = {
        badge: "LAYER I / ETKİLEŞİM",
        title: "INTERFACE",
        subtitle: "Edusonex CRM",
        description: "Kommo tabanlı öğrenci ve veli ilişkileri yönetimi. Okulunuzun tüm iletişim süreçlerini tek bir merkezden yönetin, yapay zeka destekli asistanlarla operasyonel yükünüzü azaltın.",
        stats: [
            { icon: Clock, value: "15 dk", label: "Kurulum Süresi" },
            { icon: ShieldCheck, value: "%100", label: "Entegrasyon" },
            { icon: Zap, value: "Eşzamanlı", label: "Takip" }
        ],
        features: [
            "Kommo CRM Entegrasyonu",
            "Otomatik Veli Bilgilendirme",
            "Öğrenci Kayıt Yönetimi",
            "Yapay Zeka Destekli Chatbot",
            "Satış ve İletişim Hunisi"
        ],
        gradient: "from-blue-500/20 to-cyan-500/20",
        accentColor: "text-blue-400",
        buttonColor: "bg-blue-600 hover:bg-blue-700",
        bg: "bg-blue-500/20"
    };

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
                            <Button size="lg" className={`${project.buttonColor} text-white px-8 h-12 text-lg font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105`}>
                                <Play className="mr-2 h-5 w-5 fill-current" /> Demo Talep Et
                            </Button>
                            <Button size="lg" variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 h-12 text-lg font-medium">
                                Örnek Rapor
                            </Button>
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

                            <h3 className="text-2xl font-bold mb-2">CRM Integrated System</h3>
                            <p className="text-gray-400 text-sm mb-8">
                                {project.subtitle} ile okul süreçlerinizi otomatize edin.
                            </p>

                            <div className="relative aspect-video bg-black/50 rounded-xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all border border-white/5">
                                {/* Video Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className={`w-16 h-16 rounded-full ${project.buttonColor} flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform`}>
                                        <Play className="h-6 w-6 text-white fill-white ml-1" />
                                    </div>
                                </div>
                                {/* Background Pattern for Video */}
                                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://images.unsplash.com/photo-1557426272-fc759fbb7a8d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
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

export default Kommo;
