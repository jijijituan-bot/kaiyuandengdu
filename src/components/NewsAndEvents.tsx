import { motion } from 'framer-motion';
import { useState } from 'react';

export default function NewsAndEvents() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const newsItems = [
    {
      id: 1,
      title: '现金大奖、家电大奖惊喜连连，周日来开元买灯抽奖成行业共识',
      date: '2025年12月16日',
      category: '活动',
      image: 'https://space-static.coze.site/coze_space/7586578830757708059/upload/image_647x400.png?sign=1768983676-e588b50308-0-61f37b49d4e0b8053e4d017236a3a031cfc91033707dc83d14c5dd0ff382f9f0',
      link: 'https://mp.weixin.qq.com/s/kJtUaiIqk4P5xEX8MotpUQ'
    },
    {
      id: 2,
      title: '开元灯具批发城携手盈方传媒照明生态大会，助力灯饰行业出海共赢！',
      date: '2025年8月28日',
      category: '活动',
      image: 'https://space-static.coze.site/coze_space/7586578830757708059/upload/image_627x331.png?sign=1768984054-cf6af2acfa-0-c72d036e50730cf2817b279e3dbd7493610f0ade9bffa89a493a14a2de1e9583',
      link: 'https://mp.weixin.qq.com/s/9tjpYUmcjPmEIPoOZCz6TA'
    }
  ];

  const recentNews = [
    {
      id: 1,
      title: '源头好灯泡，远销欧美、东南亚，怎么做到的？',
      date: '2026年6月9日',
      category: '资讯',
      link: 'https://mp.weixin.qq.com/s/h37vY3FmnLseC7ecZR9p_Q'
    },
    {
      id: 2,
      title: '资产被收购！这个国际大牌要凉凉了吗？',
      date: '2026年6月9日',
      category: '资讯',
      link: 'https://mp.weixin.qq.com/s/_GwYyOoBo6D8jYB80mC7WQ'
    },
    {
      id: 3,
      title: '户外灯具定制的"专精特新"来啦！',
      date: '2026年6月2日',
      category: '资讯',
      link: 'https://mp.weixin.qq.com/s/AEfZWQlYSc49d5vMigFqsw'
    },
    {
      id: 4,
      title: '热烈庆祝灯怪照明盛大开业……',
      date: '2026年6月2日',
      category: '资讯',
      link: 'https://mp.weixin.qq.com/s/3tf-rTGOnIanxEdxSSqL6Q'
    },
    {
      id: 5,
      title: '石中美者不止玉也，用它做的灯美爆了！',
      date: '2026年5月26日',
      category: '资讯',
      link: 'https://mp.weixin.qq.com/s/sj0n6sRDtKiv-AoJSufbtw'
    },
    {
      id: 6,
      title: '爆单急发！赶船期！东方非遗藤编风靡海外',
      date: '2026年5月19日',
      category: '资讯',
      link: 'https://mp.weixin.qq.com/s/sEYvc8Cn879NPX8xeZum3Q'
    }
  ];

  return (
    <>
      {/* 新闻与活动横幅 */}
      <section className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-r from-blue-100 to-blue-50">
        <div className="absolute inset-0 bg-black/10 z-10"></div>
        <img
          src="https://lf-code-agent.coze.cn/obj/x-ai-cn/332763309314/attachment/51c82055299b9766f693c8d7ce5b1ccc_20251223102216.png"
          alt="新闻与活动"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            开元资讯
          </motion.h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* 标题 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
          </motion.div>

        {/* 主要内容区域 - 两个大卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* 左侧大卡片 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div 
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              onClick={() => {
                if (newsItems[0].link) {
                  window.open(newsItems[0].link, '_blank');
                }
              }}
            >
              <div className="absolute top-4 left-4 bg-gray-600 text-white px-3 py-1 text-sm rounded z-10">
                活动
              </div>
              <img
                src="https://lf-code-agent.coze.cn/obj/x-ai-cn/332763309314/attachment/image_20251223174713.png"
                alt={newsItems[0].title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{newsItems[0].title}</h3>
                <p className="text-sm text-gray-200">{newsItems[0].date}</p>
              </div>
            </div>
          </motion.div>

          {/* 右侧大卡片 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div 
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              onClick={() => {
                if (newsItems[1].link) {
                  window.open(newsItems[1].link, '_blank');
                }
              }}
            >
              <div className="absolute top-4 left-4 bg-gray-600 text-white px-3 py-1 text-sm rounded z-10">
                活动
              </div>
              <img
                src="https://lf-code-agent.coze.cn/obj/x-ai-cn/332763309314/attachment/3bb50de4cccfa525e4a9be8498a4db47_20251223102836.png"
                alt={newsItems[1].title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{newsItems[1].title}</h3>
                <p className="text-sm text-gray-200">{newsItems[1].date}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 最新资讯列表 - 下方全宽 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">资讯列表</h3>
          <div className="space-y-6 pl-8 border-l-4 border-orange-500">
            {recentNews
              .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
              .map((item, index) => (
                <motion.div 
                  key={item.id} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="cursor-pointer hover:translate-x-3 transition-transform duration-300 group"
                  onClick={() => {
                    if (item.link) {
                      window.open(item.link, '_blank');
                    }
                  }}
                >
                  <div className="flex items-start gap-6">
                    <span className="text-sm bg-orange-500 text-white px-4 py-2 rounded font-semibold whitespace-nowrap mt-1">
                      {item.category}
                    </span>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
          
          {/* 分页 */}
          {recentNews.length > itemsPerPage && (
            <div className="mt-8 flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border-2 border-orange-500 text-orange-500 font-semibold rounded hover:bg-orange-500 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                上一页
              </button>
              
              {Array.from({ length: Math.ceil(recentNews.length / itemsPerPage) }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 font-semibold rounded transition-all duration-300 ${
                    currentPage === page
                      ? 'bg-orange-500 text-white'
                      : 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(Math.min(Math.ceil(recentNews.length / itemsPerPage), currentPage + 1))}
                disabled={currentPage === Math.ceil(recentNews.length / itemsPerPage)}
                className="px-4 py-2 border-2 border-orange-500 text-orange-500 font-semibold rounded hover:bg-orange-500 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                下一页
              </button>
            </div>
          )}
        </motion.div>


        </div>
      </section>
    </>
  );
}
