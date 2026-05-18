import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import RecommendedInfo from '../components/RecommendedInfo';
import Advantages from '../components/Advantages';
import MagazinesSection from '../components/MagazinesSection';
import Brands from '../components/Brands';
import Contact from '../components/Contact';
import NewsAndEvents from '../components/NewsAndEvents';
import Footer from '../components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  // 设置页面标题
  useEffect(() => {
    document.title = '开元灯具批发城-集智能商照、家居灯饰、照明配件一站式采购综合体';
  }, []);

  // 监听路由状态变化
  useEffect(() => {
    if (location.state?.section) {
      setActiveSection(location.state.section);
      // 延迟滚动，确保组件已渲染
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      setActiveSection('home');
    }
  }, [location]);

  // 监听URL变化或导航栏点击
  useEffect(() => {
    const handleNavigation = (e: CustomEvent) => {
      setActiveSection(e.detail.section);
    };

    window.addEventListener('navigationChange', handleNavigation as EventListener);
    return () => window.removeEventListener('navigationChange', handleNavigation as EventListener);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onSectionChange={setActiveSection} />
      
      {/* Hero - 只在首页显示 */}
      {activeSection === 'home' && <Hero />}

      {/* RecommendedInfo - 只在首页显示 */}
      {activeSection === 'home' && <RecommendedInfo onSectionChange={setActiveSection} />}

      {/* NewsAndEvents - 只在首页显示 */}
      {activeSection === 'home' && <NewsAndEvents />}

      {/* 根据activeSection显示不同内容 */}
      {activeSection === 'advantages' && <Advantages />}
      {activeSection === 'magazines' && <MagazinesSection />}
      {activeSection === 'brands' && <Brands />}
      {activeSection === 'contact' && <Contact />}

      <Footer />
    </div>
  );
}
