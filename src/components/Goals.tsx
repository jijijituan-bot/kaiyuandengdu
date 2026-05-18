import { motion } from 'framer-motion';

export default function Goals() {
  return (
    <section id="goals" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* 战略发展目标区域 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* 背景装饰 */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50 -z-10 transform -skew-y-1"></div>
          
          <div className="relative py-16">
            {/* 标题区域 */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  战略发展目标
                </h3>
                <div className="w-32 h-1.5 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
              </motion.div>
            </div>

            {/* 图片展示区域 - 带阴影和边框效果 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative max-w-6xl mx-auto"
            >
              {/* 装饰性背景元素 */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
              
              {/* 主图片容器 */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-100 hover:border-orange-200 transition-all duration-500 group">
                <img 
                  src="https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251223134940.png"
                  alt="开元灯具批发城战略发展目标"
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* 渐变遮罩效果 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* 底部信息卡片 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold">01</span>
                    </div>
                    <h4 className="text-xl font-bold">区域领先</h4>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    打造三角洲市场群2小时核心圈5000万终端用户，首选灯具采购基地
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold">02</span>
                    </div>
                    <h4 className="text-xl font-bold">品牌拓展</h4>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    努力发展全国各地灯饰卖场加盟开元灯具批发城品牌，形成灯都战略总部
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold">03</span>
                    </div>
                    <h4 className="text-xl font-bold">国际化</h4>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    深度培植具有国际影响力的灯具批发国际俱乐部运营中心
                  </p>
                </div>
              </motion.div>

              {/* 联系信息 */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 text-center"
              >
                <div className="inline-flex items-center space-x-6 bg-white rounded-full px-8 py-4 shadow-lg border border-gray-200">
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-phone-alt text-orange-500"></i>
                    <span className="text-gray-700 font-medium">咨询热线：</span>
                    <span className="text-orange-500 font-bold text-lg">0760-22383888</span>
                  </div>
                  <div className="w-px h-6 bg-gray-300"></div>
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-map-marker-alt text-orange-500"></i>
                    <span className="text-gray-700">广东·中山·古镇镇沙古公路与华廷路交汇处</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
