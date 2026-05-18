import { Routes, Route, useLocation } from "react-router-dom";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import { useState, useEffect } from "react";
import { AuthContext } from '@/contexts/authContext';
import BrandDetail from '@/pages/BrandDetail';
import AllBrands from '@/pages/AllBrands';
import Magazines from '@/pages/Magazines';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  const logout = () => {
    setIsAuthenticated(false);
  };

  // 路由变化时禁用滚动行为
  useEffect(() => {
    // 立即设置滚动位置为 0
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    // 备用方案：直接设置 DOM 属性
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/advantages" element={<Home />} />
        <Route path="/goals" element={<Home />} />
        <Route path="/brands" element={<Home />} />
        <Route path="/brands/:slug" element={<BrandDetail />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/magazines" element={<Magazines />} />
        <Route path="/magazines/:type" element={<Magazines />} />
        <Route path="/other" element={<div className="text-center text-xl">Other Page - Coming Soon</div>} />
        <Route path="/all-brands" element={<AllBrands />} />
      </Routes>
    </AuthContext.Provider>
  );
}
