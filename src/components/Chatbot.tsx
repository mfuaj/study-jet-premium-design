import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
  options?: string[];
  isWhatsApp?: boolean;
}

const WHATSAPP_NUMBER = "36705517102";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const FAQ_DATA: Record<string, { answer: string; followUp?: string[] }> = {
  greeting: {
    answer:
      "Hello! 👋 Welcome to Study Base Global! I'm here to help you with information about studying abroad. What would you like to know?",
    followUp: [
      "Available countries",
      "Admission process",
      "Tuition fees",
      "Scholarships",
      "Contact support",
    ],
  },
  countries: {
    answer:
      "🌍 We help students study in these countries:\n\n🇭🇺 Hungary\n🇨🇿 Czech Republic\n🇸🇰 Slovakia\n🇷🇸 Serbia\n🇲🇹 Malta\n🇳🇱 Netherlands\n🇰🇷 South Korea\n🇱🇹 Lithuania\n🇷🇴 Romania\n\nWould you like to know more about any specific country?",
    followUp: ["Admission process", "Tuition fees", "Scholarships", "Talk to an advisor"],
  },
  admission: {
    answer:
      "📋 Our admission process is simple:\n\n1️⃣ Free consultation & country selection\n2️⃣ Document preparation & review\n3️⃣ University application submission\n4️⃣ Offer letter & acceptance\n5️⃣ Visa application support\n6️⃣ Pre-departure guidance\n\nWe handle everything from start to finish!",
    followUp: ["Required documents", "Tuition fees", "Talk to an advisor"],
  },
  documents: {
    answer:
      "📄 Common required documents:\n\n• Valid passport\n• Academic transcripts & certificates\n• English proficiency test (IELTS/TOEFL)\n• Statement of Purpose (SOP)\n• Recommendation letters\n• CV / Resume\n• Passport-size photographs\n\nRequirements may vary by country and university.",
    followUp: ["Admission process", "Tuition fees", "Talk to an advisor"],
  },
  fees: {
    answer:
      "💰 Tuition fees vary by country and program:\n\n• Hungary: €1,500 – €7,000/year\n• Czech Republic: Free (in Czech) or €2,000 – €15,000/year (in English)\n• Slovakia: €1,000 – €7,000/year\n• Serbia: €500 – €5,000/year\n• Malta: €5,000 – €12,000/year\n• Netherlands: €6,000 – €15,000/year\n• South Korea: ₩2M – ₩8M/semester\n• Lithuania: €1,000 – €6,000/year\n• Romania: €2,000 – €7,000/year\n\nThese are approximate ranges. Contact us for exact figures!",
    followUp: ["Scholarships", "Admission process", "Talk to an advisor"],
  },
  scholarships: {
    answer:
      "🎓 Scholarship opportunities:\n\n• Stipendium Hungaricum (Hungary) – fully funded\n• Government scholarships in each country\n• University merit-based scholarships\n• Need-based financial aid\n• Study Base guidance on applications\n\nWe help you find and apply for the best scholarships!",
    followUp: ["Available countries", "Admission process", "Talk to an advisor"],
  },
  services: {
    answer:
      "🛠️ Our services include:\n\n✅ Free counseling & university selection\n✅ Complete application support\n✅ Document preparation & review\n✅ Visa application guidance\n✅ Pre-departure orientation\n✅ Accommodation assistance\n✅ Airport pickup arrangement\n✅ Post-arrival support\n\nAll consultations are FREE!",
    followUp: ["Admission process", "Available countries", "Talk to an advisor"],
  },
  visa: {
    answer:
      "🛂 Visa support includes:\n\n• Document checklist preparation\n• Application form guidance\n• Financial document review\n• Interview preparation tips\n• Embassy appointment booking help\n\nWe've maintained a 95%+ visa success rate!",
    followUp: ["Required documents", "Admission process", "Talk to an advisor"],
  },
  contact: {
    answer:
      "📞 Get in touch with us:\n\n📍 Office: 2/4 (4th Floor), Block-G, Lalmatia, Dhaka 1207\n🌐 Website: studybaseglobal.com\n📲 WhatsApp: +36 70 551 7102\n📧 Email: studybaseglobal@gmail.com\n\nOr tap below to chat with us on WhatsApp!",
    followUp: ["Talk to an advisor"],
  },
  whatsapp: {
    answer:
      "💬 Click the button below to chat with our advisor directly on WhatsApp. We typically respond within minutes!",
    followUp: [],
  },
  default: {
    answer:
      "I'm not sure I understand that question. Let me help you with something else! You can also talk to our advisor directly on WhatsApp for personalized assistance.",
    followUp: [
      "Available countries",
      "Admission process",
      "Tuition fees",
      "Scholarships",
      "Talk to an advisor",
    ],
  },
};

function matchIntent(input: string): string {
  const lower = input.toLowerCase();

  if (/^(hi|hello|hey|greetings|good morning|good evening|assalamualaikum|salam)/.test(lower))
    return "greeting";
  if (/countr|destination|where|location|hungary|czech|slovakia|serbia|malta|netherlands|south korea|lithuania|romania/.test(lower))
    return "countries";
  if (/admiss|apply|application|how to|process|step|enrol/.test(lower))
    return "admission";
  if (/document|paper|require|need|transcript|passport|ielts|toefl/.test(lower))
    return "documents";
  if (/fee|cost|tuition|price|expensive|cheap|afford|money|payment/.test(lower))
    return "fees";
  if (/scholar|fund|free|stipend|financial|aid|grant/.test(lower))
    return "scholarships";
  if (/service|offer|help|what do you|provide|support/.test(lower))
    return "services";
  if (/visa|embassy|permit|immigration/.test(lower))
    return "visa";
  if (/contact|office|address|email|phone|call|reach|whatsapp|talk|advisor|agent|human|person/.test(lower))
    return "contact";

  return "default";
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  let msgId = useRef(0);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage("greeting");
    }
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const addBotMessage = (intent: string, delay = 600) => {
    setIsTyping(true);
    setTimeout(() => {
      const data = FAQ_DATA[intent] || FAQ_DATA["default"];
      const newMsg: Message = {
        id: ++msgId.current,
        text: data.answer,
        sender: "bot",
        options: data.followUp,
        isWhatsApp: intent === "whatsapp" || intent === "contact",
      };
      setMessages((prev) => [...prev, newMsg]);
      setIsTyping(false);
    }, delay);
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: Message = {
      id: ++msgId.current,
      text: trimmed,
      sender: "user",
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const intent = matchIntent(trimmed);
    addBotMessage(intent);
  };

  const handleOptionClick = (option: string) => {
    const userMsg: Message = {
      id: ++msgId.current,
      text: option,
      sender: "user",
    };
    setMessages((prev) => [...prev, userMsg]);

    const optionMap: Record<string, string> = {
      "Available countries": "countries",
      "Admission process": "admission",
      "Tuition fees": "fees",
      "Scholarships": "scholarships",
      "Contact support": "contact",
      "Required documents": "documents",
      "Talk to an advisor": "whatsapp",
      "Our services": "services",
      "Visa support": "visa",
    };

    addBotMessage(optionMap[option] || matchIntent(option));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 ${
          isOpen
            ? "bg-destructive text-destructive-foreground"
            : "bg-primary text-primary-foreground animate-pulse-glow"
        }`}
        aria-label="Toggle chatbot"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden shadow-card border border-border flex flex-col bg-card animate-fade-up"
          style={{ height: "500px", maxHeight: "calc(100vh - 8rem)" }}
        >
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">Study Base Assistant</h3>
              <p className="text-xs opacity-80 font-body">Ask us anything about studying abroad</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/30">
            {messages.map((msg) => (
              <div key={msg.id}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm font-body whitespace-pre-line ${
                    msg.sender === "bot"
                      ? "bg-card text-card-foreground rounded-bl-sm shadow-sm"
                      : "bg-primary text-primary-foreground rounded-br-sm ml-auto"
                  }`}
                >
                  {msg.text}
                </div>

                {/* WhatsApp button */}
                {msg.isWhatsApp && msg.sender === "bot" && (
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full text-sm font-body font-medium hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                )}

                {/* Quick reply options */}
                {msg.options && msg.options.length > 0 && msg.sender === "bot" && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {msg.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleOptionClick(opt)}
                        className="px-3 py-1.5 text-xs font-body rounded-full border border-border bg-card text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-card px-4 py-3 shadow-sm">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border bg-card flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your question..."
              className="flex-1 px-4 py-2 rounded-full bg-muted text-foreground text-sm font-body placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring"
            />
            <Button
              size="icon"
              onClick={handleSend}
              disabled={!input.trim()}
              className="rounded-full w-10 h-10 shrink-0"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
