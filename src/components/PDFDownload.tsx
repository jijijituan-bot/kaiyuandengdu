import { motion } from 'framer-motion';
import { toast } from 'sonner';

// PDF下载组件属性接�?interface PDFDownloadProps {
  title: string;
  description: string;
  fileName: string;
  pdfUrl: string;
  buttonText?: string;
  fileSize?: string; // 可选的文件大小信息
}

/**
 * PDF文件下载组件
 * 用于提供PDF文件的下载功�? */
export default function PDFDownload({ 
  title, 
  description, 
  fileName, 
  pdfUrl,
  buttonText = "下载PDF",
  fileSize = "�?MB" // 默认文件大小
}: PDFDownloadProps) {
  
  // 处理PDF下载
  const handleDownload = async () => {
    try {
      // 显示准备下载提示
      toast('准备下载文件', {
        description: `正在准备 ${fileName}`,
        duration: 2000,
      });
      
      // 检查URL是否有效
      if (!pdfUrl || pdfUrl === 'https://example.com/') {
        throw new Error('PDF文件地址未设置或无效');
      }
      
      // 创建一个临时的a标签用于下载
      const link = document.createElement('a');
      
      // 检查是否是完整的URL
      let finalUrl = pdfUrl;
      if (!pdfUrl.startsWith('http://') && !pdfUrl.startsWith('https://')) {
        // 如果不是完整URL，假设是相对路径
        finalUrl = `/${pdfUrl.replace(/^\//, '')}`;
      }
      
      link.href = finalUrl;
      link.download = fileName;
      
      // 模拟点击下载
      document.body.appendChild(link);
      link.click();
      
      // 延迟移除元素，确保下载过程不受影�?      setTimeout(() => {
        document.body.removeChild(link);
      }, 100);
      
      // 显示下载成功提示
      toast('下载已开�?, {
        description: `正在下载 ${fileName}`,
        duration: 3000,
      });
    } catch (error) {
      // 显示下载失败提示
      toast('下载失败', {
        description: error instanceof Error ? error.message : '无法下载文件，请确保PDF文件地址正确',
        duration: 3000,
        type: 'error'
      });
      
      // 打印错误信息到控制台
      console.error('PDF下载失败:', error);
    }
  };
  
  // 检查是否使用的是示例URL
  const isExampleUrl = pdfUrl === 'https://example.com/' || pdfUrl.includes('example.com');
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-blue-50 to-indigo-50  shadow-lg p-6 md:p-8 border border-blue-100"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <button
        onClick={handleDownload}
        className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-3  text-lg font-medium transition-all duration-300 flex items-center justify-center w-full sm:w-auto hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          isExampleUrl ? 'opacity-70 cursor-not-allowed' : ''
        }`}
        disabled={isExampleUrl}
      >
        <i className="fas fa-file-pdf mr-2"></i>
        {buttonText}
      </button>
      
      {isExampleUrl && (
        <div className="mt-3 text-sm text-yellow-600 bg-yellow-50 p-3 ">
          <i className="fas fa-info-circle mr-1"></i>
          注意：当前使用的是示例地址。要启用下载功能，请将代码中的`pdfUrl`替换为您实际的PDF文件地址�?        </div>
      )}
      
      <div className="mt-4 text-xs text-gray-500 text-center">
        文件格式: PDF | 大小: {fileSize}
      </div>
    </motion.div>
  );
}
