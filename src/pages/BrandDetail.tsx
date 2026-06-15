import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface BrandInfo {
  name: string;
  logoUrl: string;
  description: string;
  history: string;
  products: string[];
  advantages: string[];
  contactInfo: {
    address: string;
    phone: string;
  };
}

const brandData: Record<string, BrandInfo> = {
  shikang: {
    name: "视康照明",
    logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251215175127.png",
    description: "专业LED照明产品研发、生产和销售企业",
    history: "深耕健康照明赛道多年，视康照明始终以健康照明为核心，开创并领跑全场景护眼照明、人因节律照明、情绪照明等细分领域。从点亮全屋家居的天际吸顶灯，到守护孩子学习的阳光书桌灯，再到兼顾实用与舒适的风扇灯，让每一处光影都贴合人的需求。",
    products: ["LED商业照明", "LED家居照明", "LED户外照明", "智能照明系统"],
    advantages: ["自主研发团队", "严格品质管理", "完善售后服务", "持续技术创新"],
    contactInfo: {
      address: "广东省中山市古镇镇开元灯具批发城A区101-105卡",
      phone: "13318296126"
    }
  },
  chaohua: {
    name: "超华水晶",
    logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251215174715.png",
    description: "专注埃及进口爱世福品牌水晶代理销售",
    history: "埃及爱世福水晶，创立于1961年，已有60多年的品牌发展历史。埃及爱世福水晶含铅量达30%，质地纯净净光润、晶莹、硬度高，是性价比更高的高端优质水晶。",
    products: ["水晶吊灯", "水晶台灯", "水晶壁灯", "水晶配件定制"],
    advantages: ["优质水晶材料", "精湛手工工艺", "独特设计风格", "完善定制服务"],
    contactInfo: {
      address: "开元批发城G区127-129卡的超华水晶",
      phone: "13702450815"
    }
  },
  meihu: {
    name: "美乎灯饰",
    logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251215174719.png",
    description: "现代简约风格灯饰设计与制造",
    history: "美乎灯饰依托自身先进的亚克力生产加工厂，通过自制模具一体成型，批量生产亚克力灯罩、配件等，搭配高品质五金配件、LED光源，让灯光在亚克力灯罩的折射和透射下，散发出绚丽的光芒，让生活更加多姿多彩。",
    products: ["亚克力配件", "户外露营灯具", "触摸式充电台灯"],
    advantages: ["独特设计理念", "高品质材料", "精湛制造工艺", "完善售后服务"],
    contactInfo: {
      address: "开元批发城E224-226卡",
      phone: "13902592271"
    }
  },
  pinze: {
    name: "品泽外壳",
    logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251215174723.png",
    description: "照明灯具外壳研发、设计和生产企业",
    history: "自2012年创立以来，品泽高举高打，以做品牌的思路做配件，以高品质、低价格为企业核心竞争力，不断研发创新，在注重产品品质的同时，优化生产工艺，并通过标准化和批量化生产降低客户的进货成本，从而吸引了全行业的关注迅速发展壮大，成为行业内响当当的品牌。",
    products: ["LED灯具外壳", "散热器", "透镜配件", "灯具支架"],
    advantages: ["专业设计团队", "先进生产工艺", "严格质量控制", "个性化定制"],
    contactInfo: {
      address: "古镇开元批发城N区129-146卡",
      phone: "0760-22384988"
    }
  },
  wenjie: {
    name: "问界台灯",
    logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216163729.png",
    description: "高品质护眼台灯研发与生产",
    history: "问界台灯自创立以来，严格遵循'严谨、务实、创新、超越'的经营理念，秉承'保诚信而铸品质，求务实更求创新，满意客户之需求，以达永续之经营'的质量方针，以雄厚的技术力量和务实创新的团队精神赢得客户好评。",
    products: ["飞碟系列台灯", "竹艺系列台灯", "半圆系列台灯"],
    advantages: ["无蓝光危害技术", "智能调光系统", "长寿命LED光源"],
    contactInfo: {
      address: "开元批发城H区149-150卡",
      phone: "13823246536"
    }
  },
  yunxing: {
    name: "运行光学外壳",
    logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216163831.png",
    description: "光学级灯具外壳研发、设计和生产",
    history: "极简主义盛行下号称'见光不见灯'的无主灯商业照明装修风格依托智能家居的东风，呈现出快速发展的趋势。作为智能商照行业的领军企业，运行光学外壳旗舰店举办主题为'以无主灯视角，来定义商业照明'的新产品发布会，发布2款重磅新品，吹响智能商照科技创新号角，为行业带来颠覆性的改变！",
    products: ["浪琴筒灯系列", "天蓬明装系列", "核心配件系列"],
    advantages: ["专业光学设计", "先进模具制造", "严格光学性能测试"],
    contactInfo: {
      address: "开元批发城N113-116",
      phone: "0760-22369355"
    }
  },
  tiantai: {
    name: "天泰照明",
    logoUrl: "https://i.ibb.co/hxRCFt24/1a2d6254bee5.png",
    description: "源头好灯泡，信赖选天泰!",
    history: "自2007年创立以来，天泰照明始终扎根光源制造领域，深耕行业近二十载，见证照明行业的迭代升级。品牌起步之初专注卤素灯珠、灯杯生产，凭借扎实的工艺和稳定的品质积累口碑。",
    products: ["家居照明", "酒店工程", "商业照明"],
    advantages: ["满足客户多元化需求", "品类丰富", "款式齐全"],
    contactInfo: {
      address: "中山市古镇镇开元灯具批发城F区151卡",
      phone: "18861321639"
    }
  },
  meiergai: {
    name: "美尔佳-赣艺",
    logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216164213.png",
    description: "高品质艺术灯饰设计与制造",
    history: "为弘扬民族优良传统，传承非遗手工技艺，创立于2011年的美尔家·藤艺灯饰把竹编、藤编等传统手工艺与灯饰结合，利用天然环保可再生资源:竹、木、藤等材料，挖掘并发扬民间能工巧匠的编织技艺，打造出一系列精美绝伦的艺术灯饰。产品被广泛运用于民宿、旅游景区、特色餐饮连锁、文化古镇、高档休闲会所等领域，让中国传统手工艺在灯具中发光发热，永续流传。",
    products: ["艺术吊灯", "工艺台灯", "装饰壁灯", "古典风格灯具"],
    advantages: ["独特艺术设计", "精湛手工工艺", "高品质材料选用"],
    contactInfo: {
      address: "开元批发城J区129-130卡",
      phone: "18925349205"
    }
  },
  jiangyun: {
    name: "江云水晶灯艺",
    logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216164252.png",
    description: "高品质水晶灯具设计、制造和销售",
    history: "江云(文鸿)水晶灯艺自2003年创立于'中国水晶之都'浙江浦江，专注拔插式无极调光楼梯灯配件及成品，深耕行业22年，将工匠精神注入每一件产品，成就非凡品质。",
    products: ["匠心工艺", "气泡水晶吊灯", "楼梯灯系列"],
    advantages: ["优质水晶材料", "精湛手工工艺", "独特设计风格"],
    contactInfo: {
      address: "开元批发城T区117-121卡",
      phone: "15728668578、13726114873"
    }
  },
  jiepin: {
    name: "杰品6988灯饰",
    logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216164404.png",
    description: "现代简约风格灯饰设计与制造",
    history: "杰品6988灯饰创立于2016年，快速成为消费者信赖品牌",
    products: ["司南系列", "北斗系列", "明月系列", "新月系列壁灯"],
    advantages: ["现代简约设计", "高性价比产品", "优质售后服务"],
    contactInfo: {
      address: "广东省中山市古镇镇开元灯具批发城L区101-108卡",
      phone: "0760-23458901"
    }
  },
  quanda: {
    name: "权达水晶",
    logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216164513.png",
    description: "高品质水晶灯具研发、生产和销售",
    history: "权达水晶创立于2004年，依托浙江浦江水晶产业链",
    products: ["家居水晶茶具", "水晶摆件", "琉璃摆件", "车用水晶饰品"],
    advantages: ["优质水晶材料", "精湛手工工艺", "独特设计风格"],
    contactInfo: {
      address: "开元批发城K225-226",
      phone: "13758918658"
    }
  },
  angkesaisi: {
    name: "昂克赛斯",
    logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217150403.png",
    description: "高品质LED照明产品研发与制造",
    history: "昂克赛斯灯饰创立于2008年，专注石膏灯产品",
    products: ["石膏灯天花", "石膏壁灯", "圆形石膏吸顶灯", "复古风格吊灯"],
    advantages: ["专业研发团队", "严格质量控制", "完善售后服务"],
    contactInfo: {
      address: "开元批发城G108-109",
      phone: "13286329999"
    }
  },
  jingye: {
    name: "敬业灯饰",
    logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217150444.png",
    description: "灯饰五金黑胚件研发、生产和销售",
    history: "敬业灯配饰品创立于2009年，专注灯饰五金配件",
    products: ["灯饰配品", "灯饰五金黑胚件"],
    advantages: ["先进生产设备", "激光切割焊接", "定制标准件"],
    contactInfo: {
      address: "开元灯具批发城T176-091",
      phone: "13411685639"
    }
  },
  teena: {
    name: "TEE NA Lighting",
    logoUrl: "https://i.ibb.co/990KpzHK/801278b9a6e1.png",
    description: "以差异化为核心竞争力的TEE NA Lighting,以"专精特新"为发展内核",
    history: "专业、专注是TEE NALighting始终坚守的发展理念，企业从创立伊始一直深耕户外照明领域，品牌精选优质铝材、玻璃、亚克力等耐用材质;光源优选普瑞、科锐等行业知名品牌，并标配防水驱动电源，全系列产品均达到IP65级防水防尘标准，并通过CE、BIS、ROHS等多项国际权威认证，严苛品质经得起全球市场检哈。",
    products: ["庭院", "别墅", "商业", "景观"],
    advantages: ["精准定制", "多元场景需求", "避免同质化竟争"],
    contactInfo: {
      address: "中山市古镇镇开元灯具批发城L区145-146卡",
      phone: "18125209206"
    }
  },
  yicheng: {
    name: "意丞灯饰",
    logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217150558.png",
    description: "艺术灯具设计与制造企业",
    history: "意丞灯饰成立于2009年，专注原创铜木新中式灯饰",
    products: ["艺术吊灯", "新中式灯具", "创意台灯", "壁灯", "落地灯"],
    advantages: ["独特设计风格", "精湛手工工艺", "优质材料选择"],
    contactInfo: {
      address: "开元批发城D101-104卡、E101-202",
      phone: "18933369865"
    }
  },
  yigeer: {
    name: "伊戈尔",
    logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217150658.png",
    description: "电气设备和照明产品研发、生产和销售",
    history: "伊协电业创立于2007年，专注LED驱动电源销售和服务",
    products: ["LED驱动电源", "照明灯具", "配电变压器", "智能控制系统"],
    advantages: ["强大研发能力", "先进生产工艺", "完善质量体系"],
    contactInfo: {
      address: "开元批发城T137-146",
      phone: "13925376249"
    }
  },
  sanxiong: {
    name: "三雄极光",
    logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217150721.png",
    description: "中国照明行业知名品牌",
    history: "三雄极光成立于1991年，2017年在深交所上市",
    products: ["LED照明产品", "商业照明", "家居照明", "户外照明", "智能照明"],
    advantages: ["品牌知名度高", "产品种类齐全", "研发实力雄厚"],
    contactInfo: {
      address: "广东省中山市古镇镇开元灯具批发城",
      phone: "0760-22383888"
    }
  }
};

export default function BrandDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // 设置页面标题
  useEffect(() => {
    document.title = '开元灯具批发城-集智能商照、家居灯饰、照明配件一站式采购综合体';
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  
  const brand = brandData[slug || ''];
  
  if (!brand) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">品牌不存在</h1>
          <p className="text-xl text-gray-600 mb-8">您访问的品牌信息不存在或已被移除</p>
          <button 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium transition-colors"
            onClick={() => navigate('/all-brands')}
          >
            返回热门加盟品牌
          </button>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between"
          >
            <div className="flex items-center mb-6 md:mb-0">
              <div className="w-32 h-32 bg-white shadow-md flex items-center justify-center mr-6 overflow-hidden">
                <img 
                  src={brand.logoUrl} 
                  alt={brand.name} 
                  className="w-24 h-24 object-contain" 
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{brand.name}</h1>
                <p className="text-gray-600 mt-2">{brand.description}</p>
              </div>
            </div>
            <button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-lg font-medium transition-colors"
              onClick={() => navigate('/all-brands')}
            >
              返回热门加盟品牌
            </button>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1 bg-white shadow-md p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">品牌历史</h2>
              <p className="text-gray-700 leading-relaxed mb-8">{brand.history}</p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">联系方式</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-map-marker-alt text-orange-500 mt-1 mr-3 flex-shrink-0"></i>
                  <p className="text-gray-700">{brand.contactInfo.address}</p>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone text-orange-500 mr-3 flex-shrink-0"></i>
                  <p className="text-gray-700">{brand.contactInfo.phone}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-white shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">产品系列</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {brand.products.map((product, index) => (
                    <div 
                      key={index} 
                      className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-10 h-10 bg-orange-100 flex items-center justify-center mr-4 text-orange-500">
                        <i className="fas fa-lightbulb"></i>
                      </div>
                      <p className="text-gray-700 font-medium">{product}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">品牌优势</h2>
                <div className="space-y-4">
                  {brand.advantages.map((advantage, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index + 0.6 }}
                      className="flex items-start"
                    >
                      <div className="w-8 h-8 bg-orange-500 flex items-center justify-center mr-4 text-white flex-shrink-0 mt-1">
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-700">{advantage}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* 品牌形象展示 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">品牌形象展示</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(() => {
              switch (brand.name) {
                case "视康照明":
                  return [
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251215164736.png", alt: "智能吸顶灯展示", title: "智能吸顶灯系列", description: "现代简约设计，智能调光调色，打造舒适家居环境" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251215164754.png", alt: "品牌展厅参观", title: "品牌展厅", description: "专业团队为客户讲解产品特性和技术优势" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251215164802.png", alt: "情绪氛围灯", title: "情绪氛围灯", description: "多色温调节，营造不同场景氛围，提升生活品质" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251215164812.png", alt: "人因节律照明系统", title: "人因节律照明系统", description: "模拟自然光变化，符合人体生物钟规律，呵护健康" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251215164820.png", alt: "展厅灯光效果", title: "灯光体验空间", description: "沉浸式灯光体验，感受不同照明方案的实际效果" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251215164830.png", alt: "护眼学习灯", title: "儿童护眼学习灯", description: "无蓝光危害，无频闪，为孩子提供健康的学习光线" }
                  ];
                case "权达水晶":
                  return [
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217144603.png", alt: "水晶烟灰缸系列", title: "水晶烟灰缸系列", description: "精选优质水晶，精湛的手工工艺，打造奢华典雅的家居饰品" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217144604.png", alt: "水晶包灯", title: "水晶包灯", description: "独特的包包造型设计，结合水晶材质，既实用又美观" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217144608.png", alt: "水晶摆件", title: "水晶摆件", description: "精选优质水晶制作的精美摆件，为家居空间增添优雅与艺术气息" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217144611.png", alt: "水晶酒具套装", title: "水晶酒具套装", description: "高档水晶酒具，为您的品酒体验增添奢华感" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217144615.png", alt: "水晶工艺品制作", title: "水晶工艺品制作", description: "专业的水晶工艺品制作过程，每一件都是匠心之作" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217144618.png", alt: "水晶酒具展示", title: "水晶酒具展示", description: "丰富多样的水晶酒具系列，满足不同客户需求" }
                  ];
                case "意丞灯饰":
                  return [
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217170057.png", alt: "新中式吊灯与家具搭配", title: "新中式风格吊灯", description: "精致铜木结合，传统花纹装饰，彰显东方美学" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217170105.png", alt: "酒店大堂吊灯", title: "酒店工程吊灯", description: "多层设计，适合大型空间，展现奢华大气" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217170114.png", alt: "云石材质灯罩细节", title: "天然云石灯罩", description: "精选天然云石，光线柔和均匀，质感温润" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217170127.png", alt: "意丞灯饰旗舰店外观", title: "意丞灯饰旗舰店", description: "开元批发城D区101-104卡、E区201-202卡" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217170138.png", alt: "中式客厅吊灯", title: "客厅中式吊灯", description: "多层设计，铜质灯体，云石灯罩，彰显品质" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217170149.png", alt: "新中式餐厅吊灯", title: "餐厅吊灯组合", description: "银杏叶装饰，铜木结合，适合现代中式风格" }
                  ];
                case "昂克赛斯":
                  return [
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217155038.png", alt: "石膏灯天花安装效果", title: "石膏灯天花安装效果", description: "见光不见灯的设计理念，让光线自然融入空间" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217155044.png", alt: "石膏壁灯装饰效果", title: "石膏壁灯装饰效果", description: "独特的拱形设计，为墙面增添艺术气息" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217155048.png", alt: "圆形石膏吸顶灯", title: "圆形石膏吸顶灯", description: "波浪纹理设计，光线柔和均匀，营造温馨氛围" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217155057.png", alt: "石膏灯制作工艺", title: "石膏灯制作工艺", description: "每一件石膏灯都经过精心制作，确保品质与美观" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217155107.png", alt: "复古风格吊灯", title: "复古风格吊灯", description: "结合传统元素与现代设计，打造独特的光影效果" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217155114.png", alt: "高端商业空间应用", title: "高端商业空间应用", description: "昂克赛斯石膏灯在高端商业空间的实际应用效果" }
                  ];
                case "敬业灯饰":
                  return [
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217161442.png", alt: "灯饰配品展示", title: "灯饰配品展示", description: "专业的灯饰五金黑胚件，质量稳定可靠" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217161456.png", alt: "生产工艺展示", title: "生产工艺展示", description: "先进的激光切割焊接技术，精密制造" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217161458.png", alt: "产品质量检测", title: "产品质量检测", description: "严格的质量控制，确保每一件产品的品质" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217161508.png", alt: "定制标准件", title: "定制标准件", description: "灵活的定制服务，满足不同客户需求" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217161515.png", alt: "生产设备", title: "现代化生产设备", description: "先进的生产设备，提高生产效率和产品质量" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217161523.png", alt: "产品展示", title: "产品展示", description: "丰富的产品系列，满足各种灯饰配件需求" }
                  ];
                case "TEE NA Lighting":
                  return [
                    { url: "https://i.ibb.co/xWT8PCN/c8123f808cce.png", alt: "专业、专注是始终坚守的发展理念", title: "专业、专注是始终坚守的发展理念", description: "企业从创立伊始一直深耕户外照明领域，品牌精选优质铝材、玻璃、亚克力等耐用材质;光源优选普瑞、科锐等行业知名品牌，并标配防水驱动电源" },
                    { url: "https://i.ibb.co/cK1pxPj3/093b2458f992.png", alt: "专注小而精产品的企业", title: "专注"小而精"产品的企业", description: "TEENALighting深耕非标定制赛道，避免同质化竟争，可根据客尸需求实现产品外观定制" },
                    { url: "https://i.ibb.co/ZzQ5RdTQ/007fb1267849.png", alt: "创新是品牌立足的核心动力", title: "创新是品牌立足的核心动力", description: "TEENALighting以原创设计打破行业局限，持续引领户外照明美学潮流" },
                    { url: "https://i.ibb.co/WNN58k4w/2f3dfe15ecb9.png", alt: "十余载匠心沉淀", title: "十余载匠心沉淀", description: "TEENALighting不仅以硬实力立足，更以专业形象走向全球" },
                    { url: "https://i.ibb.co/rGfM6jS5/e03655652632.png", alt: "坚持技术创新与设计升级双轮驱动", title: "坚持技术创新与设计升级双轮驱动", description: "TEENALighting将继续深耕户外非标定制领域" },
                    { url: "https://i.ibb.co/HLY8DkDh/394097602bc5.png", alt: "材质稳定性有着严苛要求", title: "材质稳定性有着严苛要求", description: "近年来，随着旅游产业的火爆，景观亮化、户外照明行业迎来持续发展。区别于普通室内灯具，户外灯具需长期经受风雨、高低温、灰尘侵蚀，对外观设计、防水性" },
                    { url: "https://i.ibb.co/VWGgZpNX/b2c3cd0a5ef2.png", alt: "收获全球客户的高度信赖", title: "收获全球客户的高度信赖", description: "用硬核实力与定制化服务，成为非标定制户外灯具领域的优质品牌，产品远销欧洲、中东等多个国家和地区" }
                  ];
                case "杰品6988灯饰":
                  return [
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217141957.png", alt: "司南系列", title: "司南系列", description: "现代简约设计，高性价比产品" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217141954.png", alt: "北斗系列", title: "北斗系列", description: "创新设计，为家居增添亮点" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217142004.png", alt: "明月系列", title: "明月系列", description: "温暖舒适，营造温馨氛围" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217142002.png", alt: "新月系列壁灯", title: "新月系列壁灯", description: "精致设计，装饰效果显著" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217142007.png", alt: "产品质量展示", title: "产品质量展示", description: "优质的材料和工艺，确保产品品质" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217142009.png", alt: "售后服务", title: "优质售后服务", description: "完善的售后服务，让您放心购买" }
                  ];
                case "江云水晶灯艺":
                  return [
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217134944.png", alt: "匠心工艺", title: "匠心工艺", description: "精湛的手工工艺，每一件都是艺术品" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217134951.png", alt: "气泡水晶吊灯", title: "气泡水晶吊灯", description: "独特的气泡设计，光线效果绚丽" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217134955.png", alt: "楼梯灯系列", title: "楼梯灯系列", description: "为楼梯增添光彩，提升整体效果" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217135009.png", alt: "水晶材料展示", title: "优质水晶材料", description: "精选优质水晶，确保产品品质" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217135015.png", alt: "设计风格展示", title: "独特设计风格", description: "融合传统与现代，打造独特美感" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217135029.png", alt: "定制服务", title: "完善定制服务", description: "根据您的需求，提供个性化定制" }
                  ];
                case "美尔佳-赣艺":
                  return [
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216180547.png", alt: "竹编灯具展示", title: "竹编灯具", description: "传统竹编工艺与现代设计的完美融合，彰显手工艺力" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216180601.png", alt: "艺术吊灯系列", title: "艺术吊灯系列", description: "独特的吊灯设计，温暖的灯光效果，为空间增添艺术气息" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216180611.png", alt: "天然材料灯具", title: "天然材料灯具", description: "采用竹、藤、木等天然环保材料，打造生态和谐的产品" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216180618.png", alt: "田园风格灯具", title: "田园风格灯具", description: "编织田园家居，享受低碳生活，传承传统保留念" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216180632.png", alt: "创意鱼形灯具", title: "创意鱼形灯具", description: "独特的鱼形设计，结合传统手工工艺，展现艺术美感" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216180642.png", alt: "美尔佳-赣艺展厅", title: "美尔佳-赣艺展厅", description: "开元批发城J区129-130卡，联系电话：18925349205" }
                  ];
                case "运行光学外壳":
                  return [
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216172844.png", alt: "浪琴筒灯系列", title: "浪琴筒灯系列", description: "专业光学设计，光线效果优异" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216172853.png", alt: "天蓬明装系列", title: "天蓬明装系列", description: "创新设计，安装便捷" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216172920.png", alt: "核心配件系列", title: "核心配件系列", description: "高品质配件，确保产品性能" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216172934.png", alt: "光学设计展示", title: "专业光学设计", description: "先进的光学技术，光线均匀柔和" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216172949.png", alt: "模具制造工艺", title: "先进模具制造", description: "精密的模具制造，确保产品精度" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216173001.png", alt: "性能测试", title: "严格性能测试", description: "每一件产品都经过严格的光学性能测试" }
                  ];
                case "问界台灯":
                  return [
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216171012.png", alt: "飞碟系列台灯", title: "飞碟系列台灯", description: "独特的飞碟造型，科技感十足" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216171020.png", alt: "竹艺系列台灯", title: "竹艺系列台灯", description: "环保竹材，自然清新" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216171023.png", alt: "半圆系列台灯", title: "半圆系列台灯", description: "简洁优雅，适合各种家居风格" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216171029.png", alt: "护眼技术展示", title: "无蓝光护眼技术", description: "保护眼睛，健康照明" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216171035.png", alt: "智能调光系统", title: "智能调光系统", description: "灵活调节，满足不同需求" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216171039.png", alt: "长寿命LED光源", title: "长寿命LED光源", description: "节能环保，使用寿命长" }
                  ];
                case "美乎灯饰":
                  return [
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216145318.png", alt: "亚克力配件", title: "亚克力配件", description: "透光性好，设计灵活" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216145339.png", alt: "户外露营灯具", title: "户外露营灯具", description: "便携耐用，户外必备" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216145342.png", alt: "触摸式充电台灯", title: "触摸式充电台灯", description: "智能触摸，充电便捷" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216145350.png", alt: "现代简约设计", title: "现代简约设计", description: "简洁大气，适合现代家居" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216145400.png", alt: "高品质材料", title: "高品质材料", description: "精选材料，品质保证" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216145410.png", alt: "完善售后服务", title: "完善售后服务", description: "专业团队，贴心服务" }
                  ];
                case "超华水晶":
                  return [
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251215180652.png", alt: "水晶吊灯", title: "水晶吊灯", description: "奢华典雅，光线绚丽" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251215180656.png", alt: "水晶台灯", title: "水晶台灯", description: "精致优雅，装饰效果显著" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251215180701.png", alt: "水晶壁灯", title: "水晶壁灯", description: "为墙面增添光彩" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251215180704.png", alt: "水晶落地灯", title: "水晶落地灯", description: "大气磅礴，彰显品味" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251215180709.png", alt: "水晶配件定制", title: "水晶配件定制", description: "根据需求，提供定制服务" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251215180713.png", alt: "品质把控", title: "严格品质把控", description: "每一件都是精品" }
                  ];
                case "品泽外壳":
                  return [
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216162756.png", alt: "LED灯具外壳", title: "LED灯具外壳", description: "高品质外壳，散热性能优异" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216162800.png", alt: "散热器", title: "高效散热器", description: "先进的散热设计，延长灯具寿命" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216162804.png", alt: "透镜配件", title: "透镜配件", description: "精密透镜，光线效果优异" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216162807.png", alt: "灯具支架", title: "灯具支架", description: "坚固耐用，安装便捷" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216162812.png", alt: "定制化外壳设计", title: "定制化外壳设计", description: "根据需求，提供个性化设计" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216162817.png", alt: "生产工艺展示", title: "先进生产工艺", description: "精密制造，品质卓越" }
                  ];
                case "伊戈尔":
                  return [
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217171845.png", alt: "伊戈尔LED驱动电源特写", title: "LED驱动电源特写", description: "高品质LED驱动电源，高效稳定，安全可靠" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217171856.png", alt: "伊戈尔代理授权牌", title: "独家代理授权", description: "中山市伊协电业有限公司是伊戈尔电源在中山、江门的独家代理商" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217171901.png", alt: "伊戈尔展厅参观场景", title: "展厅参观场景", description: "客户参观伊戈尔展厅，了解产品性能和应用" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217171910.png", alt: "伊戈尔工厂生产车间", title: "现代化生产车间", description: "先进的生产设备和严格的质量控制，确保产品品质" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217171917.png", alt: "伊戈尔展厅内部环境", title: "专业展厅环境", description: "整洁明亮的展厅，展示全系列LED驱动电源产品" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217171925.png", alt: "伊戈尔展厅和产品细节", title: "展厅与产品细节", description: "齐全的产品系列和完善的服务，满足不同客户需求" }
                  ];
                case "天泰照明":
                  return [
                    { url: "https://i.ibb.co/PshxhQF7/bf7430968949.png", alt: "二十年匠心沉淀", title: "二十年匠心沉淀", description: "打造高性价比LED光源产品" },
                    { url: "https://i.ibb.co/pj0TrxRn/d955914da5d6.png", alt: "深耕行业近二十载", title: "深耕行业近二十载", description: "见证照明行业的迭代升级" },
                    { url: "https://i.ibb.co/Fkvf2YB5/00f5d4d8156e.png", alt: "顺势转型升级", title: "顺势转型升级", description: "全力布局LED光源生产赛道，紧跟行业节能" },
                    { url: "https://i.ibb.co/JR2tJp7b/eaacda7ecd98.png", alt: "主营产品涵盖", title: "主营产品涵盖", description: "G4、G9、GU10、E14、E27等全球主流接口类型灯泡" },
                    { url: "https://i.ibb.co/Fq4YLmk7/aaff01e360cf.png", alt: "跨境领域实力商家", title: "跨境领域实力商家", description: "天泰照明坚持以品质打通全球市场" },
                    { url: "https://i.ibb.co/vx9r454K/c05e1deee459.png", alt: "二十年匠心坚守", title: "二十年匠心坚守", description: "以现货多、品质稳、交期快、可定制等优势，赢得海内外客户的一致认可与长期信赖" }
                  ];
                case "三雄极光":
                  return [
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217172704.png", alt: "三雄极光门店外观", title: "三雄极光门店", description: "绿色主题的三雄极光品牌门店，股票代码300625" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217172715.png", alt: "LED灯带产品", title: "高品质LED灯带", description: "三雄极光优质LED灯带，光线均匀，节能耐用" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217172721.png", alt: "三雄极光产品展示墙", title: "产品展示墙", description: "多样化的照明产品展示，满足不同场景需求" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217172728.png", alt: "三雄极光展厅内部", title: "现代展厅环境", description: "明亮整洁的展厅，展示三雄极光全系列照明产品" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217172735.png", alt: "三雄极光产品应用案例", title: "产品应用案例", description: "三雄极光产品在各种场景中的应用效果展示" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217172745.png", alt: "开元批发城E区101-103-卡", title: "开元批发城E区", description: "三雄极光位于开元批发城E区101-103-卡" }
                  ];
                default:
                  return [
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251215164736.png", alt: "智能吸顶灯展示", title: "智能吸顶灯系列", description: "现代简约设计，智能调光调色，打造舒适家居环境" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251215164754.png", alt: "品牌展厅参观", title: "品牌展厅", description: "专业团队为客户讲解产品特性和技术优势" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251215164802.png", alt: "情绪氛围灯", title: "情绪氛围灯", description: "多色温调节，营造不同场景氛围，提升生活品质" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251215164812.png", alt: "人因节律照明系统", title: "人因节律照明系统", description: "模拟自然光变化，符合人体生物钟规律，呵护健康" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251215164820.png", alt: "展厅灯光效果", title: "灯光体验空间", description: "沉浸式灯光体验，感受不同照明方案的实际效果" },
                    { url: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251215164830.png", alt: "护眼学习灯", title: "儿童护眼学习灯", description: "无蓝光危害，无频闪，为孩子提供健康的学习光线" }
                  ];
              }
            })().map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{image.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{image.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
