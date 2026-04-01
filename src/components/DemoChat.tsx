import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

// Mock senaryolar (API girilmezse çalışacak simülasyon)
const MOCK_SCENARIO = [
  { trigger: "fiyat", response: "Kayıt ücretlerimiz öğrencilerimizin sınıf seviyesine göre değişiklik göstermektedir. Detaylı bilgilendirme ve size özel burs oranlarını hesaplayabilmem için telefon numaranızı paylaşabilir misiniz? Sizi kayıt birimimize yönlendireceğim." },
  { trigger: "burs", response: "Okulumuzda %10 ile %100 arasında değişen oranlarda akademik başarı bursları verilmektedir. Çocuğunuzun not ortalaması nedir?" },
  { trigger: "etkinlik", response: "Okulumuzda robotik kodlama, kış sporları, ileri seviye İngilizce münazara kulübü ve sanat atölyeleri bulunmaktadır. Çocuğunuzun özel ilgi alanları nelerdir?" }
];

export default function DemoChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Merhaba! Ben okulumuzun Yapay Zeka Veli Asistanı. Kayıt ücretleri, burslar veya eğitim kadromuz hakkında ne öğrenmek istersiniz?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Simülasyon Gecikmesi
    setTimeout(() => {
      let botResponse = "Harika bir soru! Size daha detaylı yardımcı olabilmem için çocuğunuzun kaçıncı sınıfa geçeceğini öğrenebilir miyim?";
      
      const lowerInput = userMessage.content.toLowerCase();
      const matchedScenario = MOCK_SCENARIO.find(s => lowerInput.includes(s.trigger));
      
      if (matchedScenario) {
        botResponse = matchedScenario.response;
      }

      setMessages((prev) => [...prev, { id: Date.now().toString(), role: "assistant", content: botResponse }]);
      setLoading(false);
    }, 1500);
  };

  return (
    <Card className="flex flex-col h-[500px] w-full max-w-md mx-auto border-border/50 shadow-2xl relative overflow-hidden bg-card/95 backdrop-blur-xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-b border-border/50 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full"></span>
          </div>
          <div>
            <h3 className="font-bold text-sm text-foreground flex items-center gap-2">
              White-label AI Asistan
              <Badge variant="secondary" className="text-[10px] px-1.5 py-0">Demo</Badge>
            </h3>
            <p className="text-xs text-muted-foreground">Kendi logunuzla çalışır</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
      >
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-secondary' : 'bg-primary/20'}`}>
                {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4 text-primary" />}
              </div>
              <div className={`p-3 rounded-2xl text-sm ${
                msg.role === 'user' 
                  ? 'bg-primary text-primary-foreground rounded-tr-sm' 
                  : 'bg-muted text-foreground rounded-tl-sm border border-border/50 shadow-sm'
              }`}>
                {msg.content}
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex w-full justify-start">
            <div className="flex gap-2 max-w-[80%]">
              <div className="w-8 h-8 rounded-full bg-primary/20 shrink-0 flex items-center justify-center">
                <Bot className="h-4 w-4 text-primary" />
              </div>
              <div className="p-4 rounded-2xl bg-muted rounded-tl-sm border border-border/50 flex gap-1 items-center">
                <span className="w-2 h-2 rounded-full bg-primary/40 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                <span className="w-2 h-2 rounded-full bg-primary/80 animate-bounce" style={{ animationDelay: '0.4s' }}></span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSend} className="p-3 bg-background border-t border-border/50 flex gap-2">
        <Input 
          disabled={loading}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Örn: Fiyatlarınız nedir?"
          className="flex-1 rounded-full bg-muted/50 border-transparent focus-visible:ring-1 focus-visible:ring-primary"
        />
        <Button 
          type="submit" 
          disabled={loading || !input.trim()} 
          size="icon"
          className="rounded-full shrink-0 h-10 w-10"
        >
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </Card>
  );
}
