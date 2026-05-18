import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useEffect } from 'react';

interface Magazine {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  downloadUrl: string;
  fileName: string;
  category?: string;
  hasSubVersions?: boolean;
  parentId?: string;
  coverImage?: string;
}

const magazines: Record<string, Magazine> = {
  overseas_2023: {
    id: 'overseas_2023',
    title: '2023第一期海外版',
    description: '2023年第一期开元海外刊，深入了解国际合作和海外市场拓展。',
    icon: 'fa-globe',
    color: 'from-blue-50 to-blue-100',
    downloadUrl: 'http://cdn.kypfc.com/2023%E7%AC%AC%E4%B8%80%E6%9C%9F%E6%B5%B7%E5%A4%96%E7%89%88.pdf',
    fileName: '2023第一期海外版.pdf',
    category: 'overseas',
    coverImage: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/332763309314/attachment/3b3d74a9fd3a0dfc00dc558ff25c9f2c_20251223112540.png'
  },
  overseas_2024: {
    id: 'overseas_2024',
    title: '2024第二期海外版',
    description: '2024年第二期开元海外刊，最新的全球灯饰趋势和市场动态。',
    icon: 'fa-globe',
    color: 'from-blue-50 to-blue-100',
    downloadUrl: 'http://cdn.kypfc.com/2024%E7%AC%AC%E4%BA%8C%E6%9C%9F%E6%B5%B7%E5%A4%96%E7%89%88.pdf',
    fileName: '2024第二期海外版.pdf',
    category: 'overseas',
    coverImage: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/332763309314/attachment/c18b02a4e26c9869631d1a9910af8d72_20251223112428.png'
  },
  special_5: {
    id: 'special_5',
    title: '第5期开元特刊',
    description: '第5期开元特刊，专题报道开元灯具批发城的重大活动和新品发布。',
    icon: 'fa-star',
    color: 'from-orange-50 to-orange-100',
    downloadUrl: 'http://cdn.kypfc.com/%E7%AC%AC5%E6%9C%9F%E5%BC%80%E5%85%83%E7%89%B9%E5%88%8A.pdf',
    fileName: '第5期开元特刊.pdf',
    category: 'special',
    coverImage: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/332763309314/attachment/70048ad6f1cedb4ff154d66ca547c12b_20251223114315.png'
  },
  special_6: {
    id: 'special_6',
    title: '第6期开元特刊',
    description: '第6期开元特刊，专题报道开元灯具批发城的重大活动和新品发布。',
    icon: 'fa-star',
    color: 'from-orange-50 to-orange-100',
    downloadUrl: '',
    fileName: '第6期开元特刊.pdf',
    category: 'special',
    hasSubVersions: true,
    coverImage: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/332763309314/attachment/48270bb1ed310b1e5a3a7af3d32807c0_20251223114056.png'
  },
  special_6_a: {
    id: 'special_6_a',
    title: '第6期开元特刊A版',
    description: '第6期开元特刊A版，专题报道开元灯具批发城的重大活动和新品发布。',
    icon: 'fa-star',
    color: 'from-orange-50 to-orange-100',
    downloadUrl: 'http://cdn.kypfc.com/%E7%AC%AC6%E6%9C%9F%E5%BC%80%E5%85%83%E7%89%B9%E5%88%8AA%E7%89%88-1-54.pdf',
    fileName: '第6期开元特刊A版.pdf',
    category: 'special',
    parentId: 'special_6'
  },
  special_6_b: {
    id: 'special_6_b',
    title: '第6期开元特刊B版',
    description: '第6期开元特刊B版，专题报道开元灯具批发城的重大活动和新品发布。',
    icon: 'fa-star',
    color: 'from-orange-50 to-orange-100',
    downloadUrl: 'http://cdn.kypfc.com/%E7%AC%AC6%E6%9C%9F%E5%BC%80%E5%85%83%E7%89%B9%E5%88%8AB%E7%89%88-1-28.pdf',
    fileName: '第6期开元特刊B版.pdf',
    category: 'special',
    parentId: 'special_6'
  },
  special_7: {
    id: 'special_7',
    title: '第7期开元特刊',
    description: '第7期开元特刊，专题报道开元灯具批发城的重大活动和新品发布。',
    icon: 'fa-star',
    color: 'from-orange-50 to-orange-100',
    downloadUrl: 'http://cdn.kypfc.com/%E7%AC%AC7%E6%9C%9F%E5%BC%80%E5%85%83%E7%89%B9%E5%88%8A.pdf',
    fileName: '第7期开元特刊.pdf',
    category: 'special',
    coverImage: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/332763309314/attachment/9c898474efdfaca858c620281b31718d_20251223113516.png'
  },
  special_8: {
    id: 'special_8',
    title: '第8期开元特刊',
    description: '第8期开元特刊，专题报道开元灯具批发城的重大活动和新品发布。',
    icon: 'fa-star',
    color: 'from-orange-50 to-orange-100',
    downloadUrl: 'http://cdn.kypfc.com/%E7%AC%AC8%E6%9C%9F%E5%BC%80%E5%85%83%E7%89%B9%E5%88%8A.pdf',
    fileName: '第8期开元特刊.pdf',
    category: 'special',
    coverImage: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/332763309314/attachment/31309a11fed332e568e6028f4973e489_20251223113228.png'
  },
  special_9: {
    id: 'special_9',
    title: '第9期开元特刊',
    description: '第9期开元特刊，专题报道开元灯具批发城的重大活动和新品发布。',
    icon: 'fa-star',
    color: 'from-orange-50 to-orange-100',
    downloadUrl: 'http://cdn.kypfc.com/%E7%AC%AC9%E6%9C%9F%E5%BC%80%E5%85%83%E7%89%B9%E5%88%8A.pdf',
    fileName: '第9期开元特刊.pdf',
    category: 'special',
    coverImage: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/332763309314/attachment/748cf1b6b545d70bd754a3ea137c7c9e_20251223113005.png'
  },
  monthly_1: {
    id: 'monthly_1',
    title: '2025-第一期月刊',
    description: '2025年第一期开元月刊，每月更新的资讯、市场分析和商家风采展示。',
    icon: 'fa-calendar',
    color: 'from-green-50 to-green-100',
    downloadUrl: 'http://cdn.kypfc.com/2025-%E7%AC%AC%E4%B8%80%E6%9C%9F%E6%9C%88%E5%88%8A%20.pdf',
    fileName: '2025-第一期月刊.pdf',
    category: 'monthly',
    coverImage: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/332763309314/attachment/a97c8bcd3d08256955082ec384aa88cc_20251223115045.png'
  },
  monthly_2: {
    id: 'monthly_2',
    title: '2025-第二期月刊',
    description: '2025年第二期开元月刊，每月更新的资讯、市场分析和商家风采展示。',
    icon: 'fa-calendar',
    color: 'from-green-50 to-green-100',
    downloadUrl: 'http://cdn.kypfc.com/2025-%E7%AC%AC%E4%BA%8C%E6%9C%9F%E6%9C%88%E5%88%8A.pdf',
    fileName: '2025-第二期月刊.pdf',
    category: 'monthly',
    coverImage: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/332763309314/attachment/d58e978743e3c37a67b98704f5600d5d_20251223114756.png'
  },
  monthly_3: {
    id: 'monthly_3',
    title: '2025-第三期月刊',
    description: '2025年第三期开元月刊，每月更新的资讯、市场分析和商家风采展示。',
    icon: 'fa-calendar',
    color: 'from-green-50 to-green-100',
    downloadUrl: 'http://cdn.kypfc.com/2025-%E7%AC%AC%E4%B8%89%E6%9C%9F%E6%9C%88%E5%88%8A.pdf',
    fileName: '2025-第三期月刊.pdf',
    category: 'monthly',
    coverImage: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/332763309314/attachment/50099202dc4bb64e231039eacd9c609a_20251223114631.png'
  },
};

export default function Magazines() {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const magazine = type ? magazines[type] : null;

  // 设置页面标题
  useEffect(() => {
    document.title = '开元灯具批发城-集智能商照、家居灯饰、照明配件一站式采购综合体';
  }, []);

  const handleDownload = (url: string, fileName: string) => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
        toast.success(`${fileName} 下载成功！`);
      })
      .catch(() => {
        window.open(url, '_blank');
        toast.success(`${fileName} 已打开，请右键保存`);
      });
  };

  // 详情页面
  if (magazine) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* 导航栏 */}
        <div className="bg-white shadow-md sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-orange-500 hover:text-orange-600 transition-colors"
            >
              <i className="fas fa-arrow-left"></i>
              <span>返回首页</span>
            </button>
            <h1 className="text-2xl font-bold text-gray-800">{magazine.title}</h1>
            <div className="w-20"></div>
          </div>
        </div>

        {/* 内容区域 */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              {/* 左侧：封面展示 */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/3 flex-shrink-0"
              >
                <div className="relative aspect-[3/4] w-full max-w-[340px] mx-auto shadow-2xl rounded-r-xl rounded-l-sm overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                  {magazine.coverImage ? (
                    <div className="absolute inset-0 bg-white">
                      <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
                      <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-white/20 z-10"></div>
                      <img 
                        src={magazine.coverImage} 
                        alt={magazine.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none"></div>
                    </div>
                  ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${magazine.color}`}>
                    <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
                    <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-white/20 z-10"></div>
                    <div className="p-8 h-full flex flex-col relative z-0">
                      <div className="flex justify-between items-start mb-8">
                        <i className={`fas ${magazine.icon} text-4xl text-white/40`}></i>
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-gray-700">PDF</span>
                      </div>
                      <h1 className="text-4xl font-serif font-bold text-gray-800 leading-tight mb-4 drop-shadow-sm">
                        {magazine.title.replace('开元', '')}
                      </h1>
                      <div className="h-1 w-16 bg-gray-800 mb-6"></div>
                      <div className="mt-auto border-t border-black/10 pt-6 flex justify-between items-end">
                        <div>
                          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">PUBLISHED BY</p>
                          <p className="text-sm font-serif text-gray-800">KaiYuan Lighting</p>
                        </div>
                        <i className="fas fa-barcode text-3xl text-gray-400/50"></i>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none"></div>
                  </div>
                  )}
                </div>
                <div className="w-[80%] h-6 bg-black/20 blur-xl rounded-full mx-auto mt-6"></div>
              </motion.div>

              {/* 右侧：信息与下载 */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1"
              >
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{magazine.title}</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">{magazine.description}</p>
                  </div>

                  {magazine.hasSubVersions ? (
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">选择版本下载</h3>
                      <div className="space-y-3">
                        {Object.values(magazines)
                          .filter(mag => mag.parentId === magazine.id)
                          .map(subMag => (
                            <button
                              key={subMag.id}
                              onClick={() => handleDownload(subMag.downloadUrl, subMag.fileName)}
                              className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-lg font-bold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-between group"
                            >
                              <span>{subMag.title}</span>
                              <i className="fas fa-download text-gray-300 group-hover:text-orange-500 transition-colors"></i>
                            </button>
                          ))}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-center justify-between p-6 bg-gray-50 rounded-xl border border-gray-100 mb-6">
                        <div className="flex items-center space-x-4">
                          <i className="fas fa-file-pdf text-4xl text-red-500"></i>
                          <div>
                            <p className="font-bold text-gray-800">{magazine.fileName}</p>
                            <p className="text-sm text-gray-500">PDF 文档</p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDownload(magazine.downloadUrl, magazine.fileName)}
                          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center space-x-2"
                        >
                          <i className="fas fa-download"></i>
                          <span>立即下载</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* 其他画册 */}
            <div className="mt-24">
              <div className="flex items-center space-x-4 mb-12">
                <div className="h-8 w-1 bg-orange-500 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-800">更多推荐</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {Object.values(magazines).map((mag) => (
                  mag.id !== magazine.id && !mag.parentId && (
                    <motion.div
                      key={mag.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      onClick={() => navigate(`/magazines/${mag.id}`)}
                      className="group cursor-pointer"
                    >
                      <div className="relative aspect-[3/4] mb-4 transition-all duration-300 transform group-hover:-translate-y-2">
                         {mag.coverImage ? (
                           <div className="absolute inset-0 bg-white shadow-lg rounded-r-md rounded-l-sm overflow-hidden border-l border-white/20">
                             <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/10 z-10"></div>
                             <img 
                               src={mag.coverImage} 
                               alt={mag.title}
                               className="w-full h-full object-cover"
                             />
                           </div>
                         ) : (
                         <div className={`absolute inset-0 bg-gradient-to-br ${mag.color} shadow-lg rounded-r-md rounded-l-sm overflow-hidden border-l border-white/20`}>
                            <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/10"></div>
                            <div className="p-4 flex flex-col h-full">
                              <h4 className="text-lg font-bold text-gray-800 leading-tight">{mag.title}</h4>
                            </div>
                         </div>
                         )}
                      </div>
                      <p className="text-sm font-medium text-gray-600 text-center group-hover:text-orange-500 transition-colors">{mag.title}</p>
                    </motion.div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 列表页面
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* 导航栏 */}
      <div className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-orange-500 hover:text-orange-600 transition-colors"
          >
            <i className="fas fa-arrow-left"></i>
            <span>返回首页</span>
          </button>
          <h1 className="text-2xl font-bold text-gray-800">电子画册</h1>
          <div className="w-20"></div>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">开元电子画册</h2>
          <p className="text-gray-600 text-lg">浏览开元灯具批发城的最新资讯</p>
        </motion.div>

        {/* 电子画册书架展示 */}
        {['overseas', 'special', 'monthly'].map((category) => {
          const categoryTitles: Record<string, string> = {
            'overseas': '海外专刊 / OVERSEAS',
            'special': '特别企划 / SPECIAL',
            'monthly': '每月快讯 / MONTHLY'
          };
          
          const categoryMags = Object.values(magazines)
            .filter(mag => mag.category === category && !mag.parentId)
            .sort((a, b) => {
               if(category === 'special') {
                 const numA = parseInt(a.id.split('_')[1]);
                 const numB = parseInt(b.id.split('_')[1]);
                 return numB - numA;
               }
               return a.id > b.id ? -1 : 1;
            });

          if (categoryMags.length === 0) return null;

          return (
            <div key={category} className="mb-24 relative">
               <div className="flex items-center mb-12">
                 <div className="w-2 h-8 bg-orange-500 mr-4"></div>
                 <h3 className="text-2xl font-bold text-gray-800 tracking-wide">{categoryTitles[category]}</h3>
                 <div className="flex-grow ml-6 h-px bg-gray-200"></div>
               </div>

               <div className="relative bg-[#f0e6d2] px-8 pt-12 pb-4 rounded-lg shadow-inner border border-[#e0d6c2]">
                  <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-6 bg-[#dcbfa3] border-t border-[#c5a88d] shadow-md transform translate-y-2 rounded-b-lg z-0"></div>

                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10 relative z-10">
                    {categoryMags.map((mag, index) => (
                      <motion.div
                        key={mag.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        onClick={() => navigate(`/magazines/${mag.id}`)}
                        className="group cursor-pointer flex flex-col items-center"
                      >
                        <div className="relative w-full aspect-[3/4] mb-4 perspective-1000 transition-transform duration-300 transform group-hover:-translate-y-4 group-hover:rotate-1 origin-bottom">
                          <div className={`absolute inset-0 ${mag.coverImage ? 'bg-white' : `bg-gradient-to-br ${mag.color}`} rounded-r-md rounded-l-sm shadow-xl border-l border-white/30 overflow-hidden`}>
                             <div className="absolute left-0 top-0 bottom-0 w-3 bg-black/10 z-10"></div>
                             <div className="absolute left-3 top-0 bottom-0 w-[1px] bg-white/30 z-10"></div>
                             
                             {mag.coverImage ? (
                               <img 
                                 src={mag.coverImage} 
                                 alt={mag.title}
                                 className="w-full h-full object-cover"
                               />
                             ) : (
                             <div className="p-3 h-full flex flex-col relative z-0">
                                <div className="flex justify-between items-start mb-2">
                                  <i className={`fas ${mag.icon} text-lg text-gray-800/40`}></i>
                                  <span className="text-[8px] font-bold text-gray-500 border border-gray-400/30 px-1 rounded">PDF</span>
                                </div>
                                <h4 className="text-lg font-serif font-bold text-gray-800 leading-tight mb-2 line-clamp-3">
                                  {mag.title.replace(/开元|版|期/g, '')}
                                </h4>
                                <div className="mt-auto pt-2 border-t border-black/5">
                                  <p className="text-[10px] text-gray-600 line-clamp-2 leading-tight opacity-80">{mag.description}</p>
                                </div>
                             </div>
                             )}
                             <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none"></div>
                          </div>
                          <div className="absolute top-[1px] bottom-[1px] right-0 w-[4px] bg-white transform translate-x-[2px] translate-z-[-2px] skew-y-1 shadow-sm"></div>
                        </div>
                        <div className="w-[80%] h-3 bg-black/20 blur-md rounded-full transition-all duration-300 group-hover:w-[90%] group-hover:blur-lg"></div>
                        <div className="mt-4 text-center w-full">
                          <h4 className="text-sm font-bold text-gray-800 mb-2 truncate px-1 group-hover:text-orange-600 transition-colors">{mag.title}</h4>
                          <button 
                            className="text-xs bg-white border border-gray-300 text-gray-600 px-3 py-1 rounded-full hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all shadow-sm flex items-center justify-center mx-auto gap-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (!mag.hasSubVersions) {
                                handleDownload(mag.downloadUrl, mag.fileName);
                              }
                            }}
                          >
                            <i className={`fas ${mag.hasSubVersions ? 'fa-folder-open' : 'fa-download'} text-[10px]`}></i>
                            <span>{mag.hasSubVersions ? '查看' : '下载'}</span>
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
