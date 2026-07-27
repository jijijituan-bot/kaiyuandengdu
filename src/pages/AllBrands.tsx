import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Advantages from "../components/Advantages";
import MagazinesSection from "../components/MagazinesSection";
import Contact from "../components/Contact";
import { useEffect } from "react";

const allBrands = [{
    id: "1",
    name: "视康照明",
    slug: "shikang",
    logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251215175127.png"
}, {
    id: "2",
    name: "超华水晶",
    slug: "chaohua",
    logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251215174715.png"
}, {
    id: "3",
    name: "美乎灯饰",
    slug: "meihu",
    logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251215174719.png"
}, {
    id: "5",
    name: "问界台灯",
    slug: "wenjie",
    logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216163729.png"
}, {
    id: "6",
    name: "运行光学外壳",
    slug: "yunxing",
    logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216163831.png"
}, {
    id: "7",
    name: "天泰照明",
    slug: "tiantai",
    logoUrl: "https://i.ibb.co/hxRCFt24/1a2d6254bee5.png"
}, {
    id: "8",
    name: "美尔佳-赣艺",
    slug: "meiergai",
    logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216164213.png"
}, {
    id: "9",
    name: "江云水晶灯艺",
    slug: "jiangyun",
    logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216164252.png"
}, {
    id: "10",
    name: "昂克赛斯",
    slug: "angkesaisi",
    logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217150403.png"
}, {
    id: "11",
    name: "敬业灯饰",
    slug: "jingye",
    logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217150444.png"
}, {
    id: "12",
    name: "TEE NA Lighting",
    slug: "teena",
    logoUrl: "https://i.ibb.co/990KpzHK/801278b9a6e1.png"
}, {
    id: "14",
    name: "伊戈尔",
    slug: "yigeer",
    logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217150658.png"
}, {
    id: "15",
    name: "三雄极光",
    slug: "sanxiong",
    logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251217150721.png"
}, {
    id: "16",
    name: "杰品6988灯饰",
    slug: "jiepin",
    logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216164404.png"
}, {
    id: "17",
    name: "权达水晶",
    slug: "quanda",
    logoUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/288100166146/attachment/image_20251216164513.png"
}];

const getRandomBgColor = () => {
    const colors = [
        "bg-blue-50",
        "bg-indigo-50",
        "bg-purple-50",
        "bg-pink-50",
        "bg-red-50",
        "bg-orange-50",
        "bg-yellow-50",
        "bg-green-50",
        "bg-teal-50",
        "bg-cyan-50"
    ];

    return colors[Math.floor(Math.random() * colors.length)];
};

export default function AllBrands() {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('brands');

    // 设置页面标题
    useEffect(() => {
      document.title = '开元灯具批发城-集智能商照、家居灯饰、照明配件一站式采购综合体';
    }, []);

    const handleBrandClick = (slug: string) => {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });

        localStorage.setItem("forceScrollToTop", "true");

        setTimeout(() => {
            navigate(`/brands/${slug}`);
        }, 0);
    };

    const handleNavigation = (section: string) => {
        setActiveSection(section);
        if (section === 'brands') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar onSectionChange={handleNavigation} />
            
            {/* 根据activeSection显示不同内容 */}
            {activeSection === 'brands' && (
                <>
                    <section className="relative py-16 overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center z-0 transform scale-x-110"
                            style={{
                                backgroundImage: "url('/bg4.jpg')",
                                filter: "brightness(0.95)",
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}></div>
                        <div
                            className="absolute inset-0 bg-gradient-to-b from-black/10 to-white/80 z-10"></div>
                        <div className="container mx-auto px-4 relative z-20">
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    duration: 0.6
                                }}
                                className="text-center">
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">开元灯具批发城 - 热门加盟品牌</h1>
                                <p
                                    className="text-gray-600 max-w-2xl mx-auto"
                                    style={{
                                        fontSize: "24px",
                                        fontFamily: "DOUYINSANSBOLD-GB",
                                        fontWeight: "bold",
                                        color: "#EF4444"
                                    }}>开元灯具批发城目前已容纳逾千家灯饰企业进驻经营，为广大客商、消费者打造"多、快、好、省"的灯饰照明采购平台。</p>
                            </motion.div>
                        </div>
                    </section>
                    <section className="py-16">
                        <div className="container mx-auto px-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                {allBrands.map((brand, index) => (
                                    <motion.div
                                        key={brand.id}
                                        initial={{
                                            opacity: 0,
                                            scale: 0.9
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.05
                                        }}
                                        whileHover={{
                                            y: -5,
                                            transition: {
                                                duration: 0.2
                                            }
                                        }}
                                        className={`${getRandomBgColor()} border border-gray-100  shadow-md p-6 flex flex-col items-center h-60 cursor-pointer`}
                                        onClick={() => handleBrandClick(brand.slug)}>
                                        <div className="w-full h-3/5 flex items-center justify-center">
                                            {brand.logoUrl ? (
                                                <img
                                                    src={brand.logoUrl}
                                                    alt={brand.name}
                                                    className="max-w-[80%] max-h-[80%] object-contain" />
                                            ) : (
                                                <div className="w-24 h-24 bg-white  flex items-center justify-center shadow-sm">
                                                    <i className="fas fa-lightbulb text-4xl text-blue-500 opacity-70"></i>
                                                </div>
                                            )}
                                        </div>
                                        <div className="w-full h-1/5 flex items-center justify-center mt-3">
                                            <span className="text-lg font-semibold text-gray-800 text-center">{brand.name}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <motion.div
                                initial={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: 1
                                }}
                                className="text-center mt-12">
                                <button
                                    onClick={() => navigate("/")}
                                    className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2  text-lg font-medium transition-colors shadow-md">
                                    <i className="fas fa-arrow-left mr-2"></i>返回首页
                                </button>
                            </motion.div>
                        </div>
                    </section>
                </>
            )}
            {activeSection === 'advantages' && <Advantages />}
            {activeSection === 'magazines' && <MagazinesSection />}
            {activeSection === 'contact' && <Contact />}
            
            <Footer />
        </div>
    );
}
