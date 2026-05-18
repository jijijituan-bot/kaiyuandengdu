import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function MagazinesSection() {
  const navigate = useNavigate();

  const magazines = [
    {
      id: 'overseas',
      title: '开元海外刊',
      desc: '国际合作与海外市场拓展',
      icon: 'fa-globe',
      color: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      bgColor: 'bg-blue-500',
      image: 'https://via.placeholder.com/400x300?text=海外刊'
    },
    {
      id: 'special',
      title: '开元特刊',
      desc: '重大活动与新品发布',
      icon: 'fa-star',
      color: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-200',
      bgColor: 'bg-orange-500',
      image: 'https://via.placeholder.com/400x300?text=特刊'
    },
    {
      id: 'monthly',
      title: '开元月刊',
      desc: '每月资讯与市场分析',
      icon: 'fa-calendar',
      color: 'from-green-50 to-green-100',
      borderColor: 'border-green-200',
      bgColor: 'bg-green-500',
      image: 'https://via.placeholder.com/400x300?text=月刊'
    }
  ];

  return (
    <section id="magazines" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">电子画册</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            浏览开元灯具批发城的最新资讯和行业动态
          </p>
        </motion.div>

        {/* 电子画册展示 - 拟物化书架风格 */}
        <div className="max-w-6xl mx-auto mb-16 px-4">
          {/* 装饰性架子背景 */}
          <div className="hidden md:block absolute left-0 right-0 h-4 bg-gradient-to-b from-gray-200 to-gray-300 mt-[22rem] -z-10 shadow-inner"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {magazines.map((mag, idx) => (
              <motion.div
                key={mag.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                onClick={() => navigate('/magazines')}
                className="group cursor-pointer relative flex flex-col items-center"
              >
                {/* 杂志封面主体 */}
                <div className="relative w-full max-w-[280px] aspect-[3/4] transition-all duration-500 transform group-hover:-translate-y-4 group-hover:rotate-1 z-10">
                  {/* 封面内容 */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${mag.color} shadow-2xl rounded-r-lg rounded-l-sm overflow-hidden border-r-4 border-b-4 border-gray-900/5`}>
                    
                    {/* 书脊效果 */}
                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/20 to-transparent z-20"></div>
                    <div className="absolute left-3 top-0 bottom-0 w-[1px] bg-white/20 z-20"></div>

                    {/* 封面设计 */}
                    <div className="h-full flex flex-col p-6 relative">
                      {/* 顶部Logo区 */}
                      <div className="flex justify-between items-start mb-8">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-sm">
                          <i className={`fas ${mag.icon} text-2xl ${mag.bgColor.replace('bg-', 'text-')}`}></i>
                        </div>
                        <div className="text-xs font-bold text-gray-500 bg-white/80 px-2 py-1 rounded">VOL.2025</div>
                      </div>

                      {/* 标题区 */}
                      <div className="mb-auto">
                        <h3 className="text-3xl font-serif font-bold text-gray-800 leading-tight mb-2 tracking-wide">
                          {mag.title.replace('开元', '')}
                        </h3>
                        <div className="h-1 w-12 bg-gray-800 mb-4"></div>
                        <p className="text-sm text-gray-600 font-medium leading-relaxed">
                          {mag.desc}
                        </p>
                      </div>

                      {/* 底部装饰 */}
                      <div className="mt-4 pt-4 border-t border-gray-900/10 flex justify-between items-center">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest">KaiYuan Lighting</span>
                        <i className="fas fa-barcode text-2xl text-gray-400"></i>
                      </div>
                    </div>

                    {/* 光泽效果 */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30 pointer-events-none"></div>
                  </div>
                </div>

                {/* 阴影效果 */}
                <div className="w-[80%] h-4 bg-black/20 blur-lg rounded-full mt-4 transition-all duration-500 group-hover:w-[90%] group-hover:bg-black/10 group-hover:blur-xl"></div>

                {/* 悬停提示 */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-orange-500 font-medium flex items-center gap-2">
                    点击阅读 <i className="fas fa-book-open"></i>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 查看全部按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={() => navigate('/magazines')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4  font-semibold transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-2 text-lg"
          >
            <i className="fas fa-book"></i>
            <span>查看全部电子画册</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
