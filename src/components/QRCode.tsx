import { motion } from 'framer-motion';

export default function QRCode() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">关注我们</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white  shadow-lg p-8 max-w-5xl mx-auto"
        >
          <div className="flex flex-col items-center">
            <img 
              src="https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/社交6_20251215172651.jpg" 
              alt="开元批发城官方二维码" 
              className="w-full max-w-3xl h-auto  shadow-md"
            />
            <p className="mt-6 text-gray-600 text-center max-w-2xl">
              扫码关注开元批发城官方平台，获取最新的产品信息、促销活动和行业动态。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
