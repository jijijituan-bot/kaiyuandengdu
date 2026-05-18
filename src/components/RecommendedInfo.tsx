import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface RecommendedInfoProps {
  onSectionChange: (section: string) => void;
}

export default function RecommendedInfo({ onSectionChange }: RecommendedInfoProps) {
  const navigate = useNavigate();

  const handleClick = (section: string) => {
    if (section === 'about') {
      navigate('/about-page');
    } else {
      onSectionChange(section);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBrandClick = (brandSlug: string) => {
    navigate(`/brands/${brandSlug}`);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">推荐信息</h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto"></div>
        </motion.div>

        {/* 第一行：关于开元 + 优势 + 电子画册 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-10">
          {/* 左侧小卡片 - 关于开元 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onClick={() => handleClick('about')}
            className="relative h-[420px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group rounded-lg flex items-start justify-center"
          >
            <img 
              src="https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/c6766f_20251215165421.jpg"
              alt="关于开元"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 -translate-y-8"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-orange-300 to-orange-400 p-8">
              <h3 className="text-white text-2xl font-bold mb-2">关于开元</h3>
              <p className="text-white/95 text-sm">中国灯都批发城</p>
            </div>
          </motion.div>

          {/* 中间大卡片 - 三大战略发展目标 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            onClick={() => handleClick('advantages')}
            className="lg:col-span-2 relative h-[420px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group rounded-lg"
          >
            <img 
              src="https://lf-code-agent.coze.cn/obj/x-ai-cn/332763309314/attachment/生成高清图片_20251229155023.png"
              alt="三大战略发展目标"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-orange-300 to-orange-400 p-8">
              <h3 className="text-white text-3xl font-bold mb-3">三大战略发展目标</h3>
              <p className="text-white/95 text-base">区域领先、品牌拓展、国际化</p>
            </div>
          </motion.div>

          {/* 右侧小卡片 - 电子画册 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onClick={() => handleClick('magazines')}
            className="relative h-[420px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group bg-gray-50 flex items-center justify-center rounded-lg"
          >
            <img 
              src="https://lf-code-agent.coze.cn/obj/x-ai-cn/332763309314/attachment/45ac48e1a18018f633e4e43db3403932_20251223111932.png"
              alt="电子画册"
              className="w-11/12 h-auto object-contain group-hover:scale-105 transition-transform duration-300 -translate-y-12"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-orange-300 to-orange-400 p-8">
              <h3 className="text-white text-2xl font-bold mb-2">电子画册</h3>
              <p className="text-white/95 text-sm">海外刊、特刊、月刊</p>
            </div>
          </motion.div>
        </div>

        {/* 第二行：加盟品牌 + 联系我们 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10">
          {/* 左侧小卡片 - 加盟品牌 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onClick={() => handleClick('brands')}
            className="relative h-[420px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group rounded-lg"
          >
            <img 
              src="https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251215170218.png"
              alt="加盟品牌"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-orange-300 to-orange-400 p-8">
              <h3 className="text-white text-2xl font-bold mb-2">加盟品牌</h3>
              <p className="text-white/95 text-sm">千家灯饰企业</p>
            </div>
          </motion.div>

          {/* 右侧大卡片 - 联系我们 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            onClick={() => handleClick('contact')}
            className="lg:col-span-2 relative h-[420px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group rounded-lg"
          >
            <img 
              src="https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/a2f81b1d27d8740b8b2e4d70eb2127c_20251215165850.png"
              alt="联系我们"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-orange-300 to-orange-400 p-8">
              <h3 className="text-white text-3xl font-bold mb-3">联系我们</h3>
              <p className="text-white/95 text-base">欢迎咨询，专业服务</p>
            </div>
          </motion.div>
        </div>

        {/* 第三行：推荐商家 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">推荐商家</h3>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* 视康照明 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              onClick={() => handleBrandClick('shikang')}
              className="relative h-[420px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group rounded-lg bg-white"
            >
              <div className="h-3/4 overflow-hidden">
                <img 
                  src="https://lf-code-agent.coze.cn/obj/x-ai-cn/332763309314/attachment/6223ce31870b5097ed506eb322fc02a1_20251229153626.jpg"
                  alt="视康照明"
                  className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-gray-100 to-gray-200 p-6">
                <h4 className="text-gray-800 text-xl font-bold mb-2">视康照明</h4>
                <p className="text-gray-600 text-sm">专业LED照明产品研发、生产和销售企业</p>
              </div>
            </motion.div>

            {/* 三雄极光 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              onClick={() => handleBrandClick('sanxiong')}
              className="relative h-[420px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group rounded-lg bg-white"
            >
              <div className="h-3/4 overflow-hidden">
                <img 
                  src="https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217150721.png"
                  alt="三雄极光"
                  className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-gray-100 to-gray-200 p-6">
                <h4 className="text-gray-800 text-xl font-bold mb-2">三雄极光</h4>
                <p className="text-gray-600 text-sm">中国照明行业知名品牌</p>
              </div>
            </motion.div>

            {/* 意丞灯饰 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              onClick={() => handleBrandClick('yicheng')}
              className="relative h-[420px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group rounded-lg bg-white"
            >
              <div className="h-3/4 overflow-hidden">
                <img 
                  src="https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217150558.png"
                  alt="意丞灯饰"
                  className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-gray-100 to-gray-200 p-6">
                <h4 className="text-gray-800 text-xl font-bold mb-2">意丞灯饰</h4>
                <p className="text-gray-600 text-sm">艺术灯具设计与制造企业</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
