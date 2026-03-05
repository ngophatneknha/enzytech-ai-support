import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { QrCode, ArrowRight, Leaf, ShieldCheck, Zap } from 'lucide-react';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-emerald-950 sm:text-5xl md:text-6xl">
          Công nghệ <span className="text-emerald-600">Enzyme</span> & <span className="text-emerald-600">AI</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-emerald-700">
          Giải pháp xanh cho cuộc sống hiện đại. Quét mã QR để trải nghiệm tư vấn thông minh từ AI.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button 
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-emerald-600 text-white px-6 py-3 rounded-full font-medium hover:bg-emerald-700 transition-colors flex items-center gap-2 shadow-lg shadow-emerald-200"
          >
            <QrCode size={20} />
            Quét mã ngay
          </button>
          <button className="bg-white text-emerald-700 border border-emerald-200 px-6 py-3 rounded-full font-medium hover:bg-emerald-50 transition-colors">
            Tìm hiểu thêm
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 flex flex-col items-center text-center">
          <div className="bg-emerald-100 p-3 rounded-full mb-4 text-emerald-600">
            <Leaf size={32} />
          </div>
          <h3 className="text-lg font-bold text-emerald-900 mb-2">Thành phần tự nhiên</h3>
          <p className="text-emerald-600 text-sm">Chiết xuất từ vỏ bưởi và các loại thảo mộc thiên nhiên.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 flex flex-col items-center text-center">
          <div className="bg-emerald-100 p-3 rounded-full mb-4 text-emerald-600">
            <ShieldCheck size={32} />
          </div>
          <h3 className="text-lg font-bold text-emerald-900 mb-2">An toàn tuyệt đối</h3>
          <p className="text-emerald-600 text-sm">Không hóa chất độc hại, an toàn cho da nhạy cảm.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 flex flex-col items-center text-center">
          <div className="bg-emerald-100 p-3 rounded-full mb-4 text-emerald-600">
            <Zap size={32} />
          </div>
          <h3 className="text-lg font-bold text-emerald-900 mb-2">Tương tác AI</h3>
          <p className="text-emerald-600 text-sm">Chatbot thông minh giải đáp mọi thắc mắc về sản phẩm 24/7.</p>
        </div>
      </div>

      <h2 id="products" className="text-2xl font-bold text-emerald-900 mb-8 text-center">Sản phẩm chủ đạo</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-emerald-100 group max-w-2xl w-full">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-white p-2 rounded-xl shadow-md">
                <QrCode size={48} className="text-emerald-900" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white text-lg font-medium">{product.description}</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-emerald-900 mb-3">{product.name}</h3>
              <p className="text-emerald-600 text-base mb-6">{product.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-emerald-700 bg-emerald-50 p-4 rounded-xl">
                 <div>
                    <span className="font-semibold block mb-1">Thành phần:</span>
                    Chiết xuất vỏ bưởi, Enzyme sinh học...
                 </div>
                 <div>
                    <span className="font-semibold block mb-1">Công dụng:</span>
                    Giảm rụng tóc, kích thích mọc tóc...
                 </div>
              </div>

              <div className="flex items-center justify-between mt-6 pt-6 border-t border-emerald-50">
                <div className="flex items-center gap-2 text-emerald-500 text-sm font-medium uppercase tracking-wider">
                  <QrCode size={20} />
                  Scan & Chat
                </div>
                <Link 
                  to={`/chat/${product.id}`}
                  className="bg-emerald-600 text-white px-6 py-3 rounded-xl text-base font-medium hover:bg-emerald-700 transition-colors flex items-center gap-2 shadow-lg shadow-emerald-200"
                >
                  Tư vấn ngay <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
