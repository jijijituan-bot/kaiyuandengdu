import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const sliderImages = [
    {
      url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/c6766f_20251215165421.jpg",
      alt: "开元灯具批发城全景"
    },
    {
      url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/a2f81b1d27d8740b8b2e4d70eb2127c_20251215165850.png",
      alt: "开元批发城全景"
    },
    {
      url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251215170218.png",
      alt: "开元灯具批发城区域分布图"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [sliderImages.length]);
  
  return (
    <section className="relative w-full overflow-hidden" style={{ aspectRatio: '1900/650' }}>
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      <div className="absolute inset-0 overflow-hidden bg-black">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url('${sliderImages[currentSlide].url}')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>
      
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        {/* 左箭头 */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 text-white p-4 rounded-full transition-all duration-300 pointer-events-auto"
          aria-label="上一张"
        >
          <i className="fas fa-chevron-left text-4xl"></i>
        </button>

        {/* 右箭头 */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % sliderImages.length)}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 text-white p-4 rounded-full transition-all duration-300 pointer-events-auto"
          aria-label="下一张"
        >
          <i className="fas fa-chevron-right text-4xl"></i>
        </button>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`切换到轮播图 ${index + 1}`}
            />
          ))}
        </div>
        
        <motion.div 
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </motion.div>
      </div>
    </section>
  );
}
