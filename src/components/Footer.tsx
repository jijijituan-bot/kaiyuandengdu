import { useNavigate, useLocation } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (id: string) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { section: id } });
        } else {
            // 在首页上，直接导航到相应的 section
            navigate('/', { state: { section: id } });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col min-h-0">
                        <h3 className="text-lg font-bold mb-3">开元灯具批发城</h3>
                        <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">灯饰照明一站式采购平台，汇聚千家品牌，产品齐全，现货充足。</p>
                        <div className="flex space-x-4 mt-auto">
                            <a
                                href="https://www.douyin.com/user/MS4wLjABAAAArqqyYNdZrtYSZ3unYD_navfy3cLmI8u9ezeRUBGPJqRxp5rs_-bpGzFBolMmx3iR?previous_page=app_code_link"
                                className="hover:scale-110 transition-transform duration-200 flex items-center justify-center"
                                title="抖音号">
                                <img
                                    src="https://lf-code-agent.coze.cn/obj/x-ai-cn/332763309314/attachment/抖音_20251223100624.png"
                                    alt="抖音号"
                                    className="w-10 h-10 object-contain rounded-lg shadow-md hover:shadow-lg" />
                              </a>
                            <a
                                href="https://weibo.com/u/7753889156"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform duration-200 flex items-center justify-center"
                                title="微博">
                                <img
                                    src="https://lf-code-agent.coze.cn/obj/x-ai-cn/332763309314/attachment/新浪微博_20251223101147.png"
                                    alt="微博"
                                    className="w-10 h-10 object-contain rounded-lg shadow-md hover:shadow-lg" />
                            </a>
                            <a
                                href="https://xhslink.com/m/5UWrekcdS8c"
                                className="hover:scale-110 transition-transform duration-200 flex items-center justify-center"
                                title="小红书号">
                                <img
                                    src="https://lf-code-agent.coze.cn/obj/x-ai-cn/332763309314/attachment/小红书-copy_20251223100806.png"
                                    alt="小红书号"
                                    className="w-10 h-10 object-contain rounded-lg shadow-md hover:shadow-lg" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-lg font-bold mb-3">快速链接</h3>
                        <ul className="space-y-2 flex-grow text-sm">
                            <li><button onClick={() => navigate('/')} className="text-gray-400 hover:text-orange-500 transition-colors text-left">首页</button></li>
                            <li><button onClick={() => navigate('/magazines')} className="text-gray-400 hover:text-orange-500 transition-colors text-left">电子画册</button></li>
                            <li><button onClick={() => handleNavClick('advantages')} className="text-gray-400 hover:text-orange-500 transition-colors text-left">优势</button></li>
                            <li><button onClick={() => handleNavClick('brands')} className="text-gray-400 hover:text-orange-500 transition-colors text-left">品牌</button></li>
                            <li><button onClick={() => handleNavClick('contact')} className="text-gray-400 hover:text-orange-500 transition-colors text-left">联系我们</button></li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-lg font-bold mb-3">联系我们</h3>
                        <ul className="space-y-3 flex-grow text-sm">
                            <li className="flex items-start space-x-3">
                                <i className="fas fa-map-marker-alt text-orange-500 mt-1 flex-shrink-0"></i>
                                <span className="text-gray-400 leading-relaxed">广东·中山·古镇镇沙古公路与华廷路交汇处</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <i className="fas fa-phone text-orange-500 flex-shrink-0"></i>
                                <span className="text-gray-400">0760-22383888</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <i className="fas fa-envelope text-orange-500 flex-shrink-0"></i>
                                <span className="text-gray-400">info@kaiyuan-lighting.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
                    <p>© {new Date().getFullYear()} 开元灯具批发城. 保留所有权利</p>
                </div>
            </div>
        </footer>
    );
}
