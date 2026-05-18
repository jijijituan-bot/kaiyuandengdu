import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">关于开�?/h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            中国灯都体量更大、现货更多、品类更全的灯饰照明批发市场
          </p>
        </motion.div>

        {/* 左图右文布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* 左侧图片 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden shadow-2xl">
              <img
                src="https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/c6766f_20251215165421.jpg"
                alt="开元灯具批发城"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 30%' }}
              />
            </div>
            {/* 装饰元素 */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/10 blur-3xl"></div>
          </motion.div>

          {/* 右侧文字 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">企业简�?/h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                创建�?010年，占地面积�?0万平方米，是集智能商照、灯饰、配件一站式采购综合体。已容纳逾千家灯饰企业进驻经营，是中国灯都体量更大、现货更多、品类更全的灯饰照明批发市场�?
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 border border-orange-200">
                <div className="text-4xl font-bold text-orange-500 mb-2">20�?/div>
                <p className="text-gray-700 font-medium">平方米占地面�?/p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 border border-blue-200">
                <div className="text-4xl font-bold text-blue-500 mb-2">1000+</div>
                <p className="text-gray-700 font-medium">灯饰企业进驻</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-check text-white text-sm"></i>
                </div>
                <p className="text-gray-700">产品齐全，一站式采购</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-check text-white text-sm"></i>
                </div>
                <p className="text-gray-700">源头直供，价格优�?/p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-check text-white text-sm"></i>
                </div>
                <p className="text-gray-700">现货充足，快速配�?/p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 三大特色区域 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: 'fa-map-marker-alt',
              title: '地理位置优越',
              desc: '距中江高�?.5km，离广珠轻轨�?00m，交通便�?
            },
            {
              icon: 'fa-boxes',
              title: '品类齐全',
              desc: '商业照明、户外亮化、家居灯饰、配件等全品�?
            },
            {
              icon: 'fa-handshake',
              title: '专业服务',
              desc: '完善配套、专业团队、贴心服务、一站式解决'
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-orange-100 flex items-center justify-center mb-6">
                <i className={`fas ${item.icon} text-2xl text-orange-500`}></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

