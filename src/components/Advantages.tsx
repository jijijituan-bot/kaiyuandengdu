import { motion } from 'framer-motion';

export default function Advantages() {
  return (
    <>
      {/* 顶部图片 - 全宽 */}
      <section className="w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://lf-code-agent.coze.cn/obj/x-ai-cn/332763309314/attachment/image_20251225154308.png"
            alt="商照开元批发城灯饰"
            className="w-full h-auto"
          />
        </motion.div>
      </section>

      {/* 战略发展目标区域 */}
      <section className="py-32 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative py-20">
              {/* 标题区域 */}
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="inline-block"
                >
                  <h3 className="text-5xl md:text-6xl font-bold text-orange-400 mb-12">
                    开元灯具批发城全新战略发展目标
                  </h3>
                </motion.div>
              </div>

              {/* 三大目标 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative max-w-5xl mx-auto mb-20"
              >
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <span className="text-orange-400 font-bold text-2xl flex-shrink-0">01.</span>
                    <p className="text-gray-700 text-xl md:text-2xl leading-relaxed">
                      全力打造成珠三角城市群2小时核心圈5000万终端用户，<span className="text-orange-500 font-semibold">首选灯具采购基地</span>
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-orange-400 font-bold text-2xl flex-shrink-0">02.</span>
                    <p className="text-gray-700 text-xl md:text-2xl leading-relaxed">
                      努力发展全国各地灯饰卖场加盟开元灯具批发城品牌，<span className="text-orange-500 font-semibold">形成灯都战略总部</span>
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-orange-400 font-bold text-2xl flex-shrink-0">03.</span>
                    <p className="text-gray-700 text-xl md:text-2xl leading-relaxed">
                      深度培植具有国际影响力的<span className="text-orange-500 font-semibold">灯具批发国际俱乐部运营中心</span>
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-gray-300 my-12"></div>

                {/* 招商品类 */}
                <div className="text-center">
                  <h4 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">招商品类</h4>
                  <p className="text-gray-700 text-xl md:text-2xl leading-relaxed">
                    户外亮化、太阳能成品及配套、工程定制、商照配套<br />
                    家居灯饰、灯饰配件等全品类……
                  </p>
                </div>
              </motion.div>

              {/* 联系信息 */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center space-x-8 bg-white px-10 py-6 shadow-lg border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-phone-alt text-orange-500 text-xl"></i>
                    <span className="text-gray-700 font-medium">咨询热线：</span>
                    <span className="text-orange-500 font-bold text-xl">0760-22383888</span>
                  </div>
                  <div className="w-px h-8 bg-gray-300"></div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-map-marker-alt text-orange-500 text-xl"></i>
                    <span className="text-gray-700 text-base">广东·中山·古镇镇沙古公路与华廷路交汇处</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 商铺招商5大优势 */}
      <section className="py-32 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* 标题 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-yellow-300 mb-4">
              开元灯具批发城
            </h2>
            <p className="text-2xl md:text-3xl text-white mb-8">ATTRACT INVESTMENT</p>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <h3 className="text-4xl md:text-5xl font-bold text-yellow-300">商铺招商</h3>
              <span className="text-7xl md:text-8xl font-bold text-yellow-200">5</span>
              <h3 className="text-4xl md:text-5xl font-bold text-yellow-300">大优势</h3>
            </div>
            <p className="text-xl md:text-2xl text-white">
              灯都智能商照、灯饰、配件一站式采购综合体
            </p>
          </motion.div>

          {/* 5大优势卡片 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-6"
          >
            {[
              { num: '01', title: '古镇最大，占地约20万平' },
              { num: '02', title: '交通便利，地理位置优越' },
              { num: '03', title: '客流稳定，市场建立十余年' },
              { num: '04', title: '配套成熟，上千源头厂家入驻' },
              { num: '05', title: '持续引流，各种配套推广宣传服务' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-full px-8 py-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center space-x-6">
                  <span className="text-4xl font-bold text-red-600">{item.num}</span>
                  <p className="text-2xl md:text-3xl font-bold text-red-700">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* 底部联系方式 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-white text-xl mb-4">招商咨询热线：</p>
            <div className="flex items-center justify-center space-x-8 text-3xl md:text-4xl font-bold text-yellow-300">
              <span>18933302282</span>
              <span className="text-white">/</span>
              <span>18933372828</span>
            </div>
            <p className="text-white text-lg mt-2">（曾先生）</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
