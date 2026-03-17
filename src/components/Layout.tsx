import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ScanLine } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-emerald-50 text-emerald-900 font-sans">
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-emerald-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-emerald-600 text-white p-2 rounded-lg group-hover:bg-emerald-700 transition-colors">
              <Leaf size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-emerald-950">
              EnzyTech <span className="text-emerald-600 font-light">AI</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex gap-6 text-sm font-medium text-emerald-700">
            <Link to="/" className="hover:text-emerald-900 transition-colors">Sản phẩm</Link>
            <Link to="/" className="hover:text-emerald-900 transition-colors">Công nghệ</Link>
            <Link to="/" className="hover:text-emerald-900 transition-colors">Về chúng tôi</Link>
          </nav>

          <button className="md:hidden p-2 text-emerald-700">
            <ScanLine />
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-emerald-900 text-emerald-100 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Leaf size={20} /> EnzyTech
            </h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Một số thành tựu ứng dụng Enzyme và AI vào đời sống.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Liên hệ</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Tổ Sinh học</li>
              <li>THPT Nguyễn Trãi</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Công nghệ</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>AI Chatbot Support</li>
              <li>QR Check-in</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-emerald-800 text-center text-xs opacity-60">
          © Được tạo và thiết kế bởi học sinh trường THPT Nguyễn Trãi.
        </div>
      </footer>
    </div>
  );
}
