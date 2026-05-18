import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function AboutPage() {
  // 设置页面标题
  useEffect(() => {
    document.title = '开元灯具批发城-集智能商照、家居灯饰、照明配件一站式采购综合体';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onSectionChange={() => {}} />

      {/* 关于开元部分 */}
      <section className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">KAIYUAN</h1>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">WHOLESALE MARKET</h2>
            <div className="w-32 h-1 bg-white mb-8"></div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">开元灯具批发城简介</h3>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-white">
            {/* 左侧文字 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed">
                开元灯具批发城创建于2010年，占地面积约20万平方米，是集智能商照、灯饰、配件一站式采购综合体，把整个中国灯都体量更大、现货更多、品类更全的灯饰照明批发市场。开元灯具批发城位于中山市古镇镇沙古公路与华廷路交汇处，距中江高速路口1.5公里，离广珠轻轨古镇站仅200米，交通便利，停车方便。
              </p>
              <p className="text-lg leading-relaxed">
                开元灯具批发城已容纳逾千家灯饰企业进驻经营，涵盖：商业照明\户外亮化\太阳能\酒店工程区、家居成品专区、照明配件专区、专线物流仓储区、餐饮娱乐服务区等。其中，成品灯饰涵盖了：整体家居、现代、轻奢、水晶、新中式\简式、美式、工业风、自然风、智能商照等十大品类；灯饰配件涵盖：光源、驱动电源、五金、螺丝、水晶、塑料、亚
              </p>
            </motion.div>

            {/* 右侧文字 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed">
                克力、打头、电线、布罩、木艺等一切灯饰所需配件，满足灯饰企业、经销商、设计师、消费者一站式采购需求。
              </p>
              <p className="text-lg leading-relaxed">
                自成立以来，开元灯具批发城一直致力于社会发展做贡献，响应行业发展需求，不断与时俱进、开拓创新，从最早的"中国灯都灯饰配件城"，到后来的"开元灯配城"，再到响应国家政策发展大趋，转型升级为"开元灯具批发城"，以"现货一条街，一交也能批发价"的理念，开创古镇灯饰照明的经营模式，并逐步完善了开元灯具批发城"现货灯饰，现货批发"的产业定位。
              </p>
              <p className="text-lg leading-relaxed">
                未来，开元灯具批发城将持续努力做好服务，为推动古镇灯饰照明行业创新发展贡献力量，为厂大客商、消费者打造"多、快、好、省"的灯饰照明采购平台，助力大众提升生活品质。
              </p>
            </motion.div>
          </div>
        </div>

        {/* 装饰云朵效果 */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      </section>

      {/* 第二张轮播图 */}
      <section className="py-0">
        <div className="w-full">
          <img
            src="https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/a2f81b1d27d8740b8b2e4d70eb2127c_20251215165850.png"
            alt="开元灯具批发城全景"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* 三大特色区域 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'fa-map-marker-alt',
                title: '地理位置优越',
                desc: '距中江高速2.5km，离广珠轻轨500m，交通便利'
              },
              {
                icon: 'fa-boxes',
                title: '品类齐全',
                desc: '商业照明、户外亮化、家居灯饰、配件等全品类'
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
                className="bg-gradient-to-br from-gray-50 to-white p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 rounded-lg"
              >
                <div className="w-14 h-14 bg-orange-100 flex items-center justify-center mb-6 rounded-lg">
                  <i className={`fas ${item.icon} text-2xl text-orange-500`}></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
