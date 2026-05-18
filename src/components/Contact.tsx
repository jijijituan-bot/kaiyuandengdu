import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/xwvekzpa', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        toast('提交成功', { description: '感谢您的咨询，我们将尽快联系您' });
        form.reset();
      } else {
        const payload = await res.json().catch(() => null);
        const msg = payload?.errors?.[0]?.message || payload?.message || '提交失败，请稍后再试';
        toast('提交失败', { description: msg });
      }
    } catch {
      toast('网络异常', { description: '请检查网络后重试' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">联系我们</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            欢迎咨询，我们将为您提供专业的服务和支持
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* 左侧：联系表单 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white p-10 border border-gray-200 shadow-lg"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">发送咨询</h3>
            <form action="https://formspree.io/f/xwvekzpa" method="POST" onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">姓名</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="请输入您的姓名"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">电话</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="请输入您的联系电话"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">邮箱</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="请输入您的邮箱"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">留言</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                  placeholder="请输入您的咨询内容"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-70 disabled:cursor-not-allowed text-white px-6 py-4 font-semibold transition-all shadow-lg hover:shadow-xl text-lg"
              >
                {submitting ? '提交中...' : '提交咨询'}
              </button>
            </form>
          </motion.div>

          {/* 右侧：联系信息 + 图片 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* 联系信息卡片 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-10 border-2 border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">联系方式</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <i className="fas fa-map-marker-alt text-xl text-orange-500"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">地址</h4>
                    <p className="text-gray-700">广东·中山·古镇镇沙古公路与华廷路交汇处</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <i className="fas fa-phone text-xl text-orange-500"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">电话</h4>
                    <p className="text-gray-700">0760-22383888</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <i className="fas fa-envelope text-xl text-orange-500"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">邮箱</h4>
                    <p className="text-gray-700">info@kaiyuan-lighting.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <i className="fas fa-clock text-xl text-orange-500"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">营业时间</h4>
                    <p className="text-gray-700">周一至周日 8:00 - 19:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 地图/图片占位符 */}
            <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden shadow-lg">
              <img
                src="https://lf-code-agent.coze.cn/obj/x-ai-cn/332763309314/attachment/c5ebbecf52f4e43bedc31e0ac37caf5c_20251223094033.png"
                alt="地址位置"
                className="w-full h-full object-cover"
              />
              <button 
                className="absolute bottom-4 right-4 bg-white hover:bg-orange-50 text-orange-500 px-6 py-2 font-semibold flex items-center space-x-2 transition-all shadow-lg hover:shadow-xl"
                onClick={() => {
                  window.open('https://map.baidu.com/search/开元批发城/@12601399.089388955,2567759.1544124996,18.55z?querytype=s&da_src=shareurl&wd=开元批发城&c=187&src=0&wd2=中山市&pn=0&sug=1&l=13&b=(12595959,2614163;12657143,2644499)&from=webmap&biz_forward=%7B"scaler":1,"styles":"pl"%7D&device_ratio=1', '_blank');
                }}
              >
                <i className="fas fa-map-marker-alt"></i>
                <span>查看地图</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* 底部社交媒体二维码 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-white p-2 md:p-6 rounded-xl shadow-lg border border-gray-100">
            <img 
              src="https://lf-code-agent.coze.cn/obj/x-ai-cn/332763309314/attachment/69ef2cb8cf15e904f5366f36d4cce7e7_20251223103628.png" 
              alt="关注开元灯具批发城" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
