import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Brands() {
    const navigate = useNavigate();
    
    // 显示12个品牌（从AllBrands中选取）
    const brands = [
        {
            name: "视康照明",
            logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/attachment/2904257071426108/视康照明_20251118142648.jpg",
            slug: "shikang"
        },
        {
            name: "超华水晶",
            logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/6965926c35124928465eead4d6e3472a_20251215173308.png",
            slug: "chaohua"
        },
        {
            name: "美乎灯饰",
            logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251215173639.png",
            slug: "meihu"
        },
        {
            name: "问界台灯",
            logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216163729.png",
            slug: "wenjie"
        },
        {
            name: "运行光学外壳",
            logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216163831.png",
            slug: "yunxing"
        },
        {
            name: "天泰照明",
            logoUrl: "https://i.ibb.co/hxRCFt24/1a2d6254bee5.png",
            slug: "tiantai"
        },
        {
            name: "美尔佳-赣艺",
            logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216164213.png",
            slug: "meiergai"
        },
        {
            name: "江云水晶灯艺",
            logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216164252.png",
            slug: "jiangyun"
        },
        {
            name: "昂克赛斯",
            logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217150403.png",
            slug: "angkesaisi"
        },
        {
            name: "敬业灯饰",
            logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217150444.png",
            slug: "jingye"
        },
        {
            name: "TEE NA Lighting",
            logoUrl: "https://i.ibb.co/990KpzHK/801278b9a6e1.png",
            slug: "teena"
        }
    ];

    return (
        <section id="brands" className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.6
                    }}
                    viewport={{
                        once: true
                    }}
                    className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">已加盟品牌</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">汇聚千家灯饰企业，品牌齐全</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                    {brands.map((brand, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.05
                            }}
                            viewport={{
                                once: true
                            }}
                            whileHover={{
                                y: -8,
                                transition: {
                                    duration: 0.2
                                }
                            }}
                            onClick={() => navigate(`/brands/${brand.slug}`)}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center justify-center h-72 cursor-pointer border border-gray-200 group"
                        >
                            <div className="w-full flex-1 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                                {brand.logoUrl ? (
                                    <div
                                        className="w-full h-full flex items-center justify-center"
                                        style={{
                                            backgroundImage: `url(${brand.logoUrl})`,
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "center"
                                        }}></div>
                                ) : (
                                    <span className="text-lg font-bold text-gray-800">{brand.name}</span>
                                )}
                            </div>
                            <div className="w-full text-center border-t border-gray-200 pt-6">
                                <span className="text-sm font-semibold text-gray-800">{brand.name}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            
                {/* 查看更多按钮 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                 >
                  <button
                    onClick={() => navigate('/all-brands')}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-2 text-lg"
                  >
                    <span>查看更多商家</span>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </motion.div>
            </div>
        </section>
    );
}
