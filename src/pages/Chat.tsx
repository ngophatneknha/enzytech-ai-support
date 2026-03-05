import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { GoogleGenAI, Chat } from '@google/genai';
import ReactMarkdown from 'react-markdown';
import { Send, ArrowLeft, Bot, User, Loader2, Sparkles } from 'lucide-react';

export default function ChatPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === productId);

  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (product) {
      const initChat = async () => {
        try {
          const genAI = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
          const chat = genAI.chats.create({
            model: "gemini-3-flash-preview",
            config: {
              systemInstruction: product.systemPrompt,
            },
          });
          setChatSession(chat);
          
          // Initial greeting
          const greeting = `Chào bạn! Mình là trợ lý AI của sản phẩm **${product.name}**. Bạn cần mình tư vấn gì về sản phẩm này không ạ?`;
          setMessages([{ role: 'model', text: greeting }]);
        } catch (error) {
          console.error("Error initializing chat:", error);
          setMessages([{ role: 'model', text: "Xin lỗi, hệ thống đang gặp sự cố kết nối. Vui lòng thử lại sau." }]);
        }
      };
      initChat();
    }
  }, [product]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !chatSession) return;

    const userMessage = input;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const result = await chatSession.sendMessage({ message: userMessage });
      const responseText = result.text;
      setMessages((prev) => [...prev, { role: 'model', text: responseText || "Xin lỗi, mình chưa hiểu ý bạn." }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [...prev, { role: 'model', text: "Đã có lỗi xảy ra khi xử lý câu hỏi của bạn." }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-emerald-50 text-emerald-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Sản phẩm không tồn tại</h2>
          <Link to="/" className="text-emerald-600 hover:underline">Quay lại trang chủ</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-emerald-50 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white border-b border-emerald-100 p-4 sticky top-0 z-10 shadow-sm">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-emerald-600 hover:bg-emerald-50 p-2 rounded-full transition-colors">
            <ArrowLeft size={24} />
          </Link>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              {product.logo && <img src={product.logo} alt="logo" className="w-6 h-6 object-contain" />}
              <h1 className="font-bold text-emerald-900 text-lg">{product.name}</h1>
            </div>
            <span className="text-xs text-emerald-500 flex items-center gap-1">
              <Sparkles size={12} /> AI Support
            </span>
          </div>
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-3xl mx-auto space-y-6 pb-20">
          {/* Product Info Card (Context) */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-emerald-100 flex gap-4 items-start mb-8 opacity-80 hover:opacity-100 transition-opacity">
            <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg" />
            <div>
              <h3 className="font-semibold text-emerald-900 text-sm">Thông tin nhanh</h3>
              <p className="text-xs text-emerald-600 mt-1 line-clamp-2">{product.description}</p>
            </div>
          </div>

          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'model' && (
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-1">
                  <Bot size={18} />
                </div>
              )}
              
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user'
                    ? 'bg-emerald-600 text-white rounded-br-none'
                    : 'bg-white text-emerald-900 border border-emerald-50 rounded-bl-none'
                }`}
              >
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </div>

              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white flex-shrink-0 mt-1">
                  <User size={18} />
                </div>
              )}
            </div>
          ))}
          
          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <Bot size={18} />
              </div>
              <div className="bg-white border border-emerald-50 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-2 text-emerald-500 text-sm">
                <Loader2 size={16} className="animate-spin" />
                Đang suy nghĩ...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-emerald-100 p-4 sticky bottom-0 w-full">
        <div className="max-w-3xl mx-auto relative flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Hỏi về thành phần, công dụng..."
            className="flex-1 bg-emerald-50 border-none rounded-full py-3 pl-5 pr-12 text-emerald-900 placeholder-emerald-400 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="p-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 disabled:opacity-50 disabled:hover:bg-emerald-600 transition-colors shadow-md shadow-emerald-200"
          >
            <Send size={20} />
          </button>
        </div>
        <div className="text-center mt-2">
           <p className="text-[10px] text-emerald-400">
             AI có thể mắc lỗi. Vui lòng kiểm tra lại thông tin quan trọng.
           </p>
        </div>
      </div>
    </div>
  );
}
