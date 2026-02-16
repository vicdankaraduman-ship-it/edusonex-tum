import { MessageCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const WhatsAppButton = () => {
    const phoneNumber = "905320674063";
    const message = "Merhaba, Edusonex hakkında bilgi almak istiyorum.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-[#25D366]/50 transition-all duration-300 group animate-in fade-in zoom-in slide-in-from-bottom-5"
                        aria-label="WhatsApp ile İletişime Geçin"
                    >
                        {/* Pulse Effect */}
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping group-hover:animate-none"></span>

                        {/* Icon */}
                        <MessageCircle className="relative h-8 w-8 fill-current" />
                    </a>
                </TooltipTrigger>
                <TooltipContent side="left" className="mr-2 bg-white text-black border-none shadow-xl">
                    <p className="font-medium">WhatsApp Destek Hattı</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default WhatsAppButton;
