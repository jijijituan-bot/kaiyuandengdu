import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface NavbarProps {
  onSectionChange?: (section: string) => void;
}

export default function Navbar({ onSectionChange }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  
  // 监听滚动，改变导航栏样式
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // 处理导航点击
  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    setActiveSection(id);
    
    // 如果点击"简介"，直接导航到关于开元详情页
    if (id === 'about') {
      navigate('/about');
      return;
    }
    
    // 如果在首页，直接调用 onSectionChange
    if (location.pathname === '/') {
      if (onSectionChange) {
        onSectionChange(id);
      }
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // 如果不在首页，先导航到首页，然后设置 section
      navigate('/', { state: { section: id } });
    }
  };
  
  // 监听路由变化，处理从其他页面返回首页时的 section 设置
  useEffect(() => {
    if (location.pathname === '/about') {
      setActiveSection('about');
    } else if (location.pathname === '/' && location.state?.section) {
      setActiveSection(location.state.section);
      if (onSectionChange) {
        onSectionChange(location.state.section);
      }
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (location.pathname === '/') {
      setActiveSection('home');
    }
  }, [location, onSectionChange]);
  
  // 导航项组件
  const NavItem = ({ id, label }: { id: string; label: string }) => (
    <button 
      onClick={() => handleNavClick(id)}
      className={`font-medium cursor-pointer transition-all duration-300 px-3 py-2 text-sm ${
        activeSection === id 
          ? 'text-orange-500 font-semibold border-b-2 border-orange-500' 
          : 'text-gray-700 hover:text-orange-500'
      }`}
      aria-label={`跳转到${label}部分`}
    >
      {label}
    </button>
  );
  
  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 shadow-md'}`}>
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="https://lf-code-agent.coze.cn/obj/x-ai-cn/332763309314/attachment/开元灯具批发城-logo-02_20251223115939.jpg" 
            alt="开元灯具批发城" 
            className="h-10 md:h-12 w-auto" 
            onClick={() => handleNavClick('home')}
            style={{ cursor: 'pointer' }}
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          <NavItem id="home" label="首页" />
          <NavItem id="about" label="简介" />
          <NavItem id="magazines" label="电子画册" />
          <NavItem id="brands" label="品牌" />
          <NavItem id="contact" label="联系我们" />
          <button 
            className="bg-orange-500 text-white px-6 py-2  hover:bg-orange-600 transition-all duration-300 shadow-md ml-4 font-medium"
            onClick={() => toast('招商电话：0760-22383888', { 
              description: '欢迎咨询招商详情',
              duration: 5000
            })}
          >
            咨询招商
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2  text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label={isMenuOpen ? "关闭菜单" : "打开菜单"}
          >
            <i className={cn("fas text-xl", isMenuOpen ? "fa-times" : "fa-bars")}></i>
          </button>
        </div>
      </div>
      
       {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => handleNavClick('home')}
                className={`text-left py-2 px-4  transition-colors ${
                  activeSection === 'home' ? 'text-orange-500 font-semibold bg-orange-50' : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                首页
              </button>
              <button 
                onClick={() => handleNavClick('about')}
                className={`text-left py-2 px-4  transition-colors ${
                  activeSection === 'about' ? 'text-orange-500 font-semibold bg-orange-50' : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                简介
              </button>
              <button 
                onClick={() => handleNavClick('magazines')}
                className={`text-left py-2 px-4  transition-colors ${
                  activeSection === 'magazines' ? 'text-orange-500 font-semibold bg-orange-50' : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                电子画册
              </button>
              <button 
                onClick={() => handleNavClick('brands')}
                className={`text-left py-2 px-4  transition-colors ${
                  activeSection === 'brands' ? 'text-orange-500 font-semibold bg-orange-50' : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                品牌
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className={`text-left py-2 px-4  transition-colors ${
                  activeSection === 'contact' ? 'text-orange-500 font-semibold bg-orange-50' : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                联系我们
              </button>
              <button 
                className="bg-orange-500 text-white px-6 py-2  hover:bg-orange-600 transition-colors w-full mt-3 font-medium"
                onClick={() => toast('招商电话：0760-22383888', { 
                  description: '欢迎咨询招商详情',
                  duration: 5000
                })}
              >
                咨询招商
              </button>
            </div>
          </div>
        )}
    </nav>
  );
}
