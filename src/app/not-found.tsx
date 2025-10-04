'use client'
import Link from 'next/link'
import { FiAlertTriangle } from 'react-icons/fi'

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
            <div className="text-center max-w-md mx-auto">
                {/* أيقونة التحذير */}
                <div className="mx-auto w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6">
                    <FiAlertTriangle className="w-10 h-10 text-red-500 dark:text-red-400" />
                </div>

                {/* العنوان الرئيسي */}
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3">404</h1>
                
                {/* الرسالة */}
                <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                الصفحة غير موجودة
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها. ربما تكون الصفحة قد تم نقلها أو حذفها.
                </p>

                {/* أزرار الإجراءات */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
                    >
                        العودة للصفحة الرئيسية
                    </Link>
                    
                    <Link
                        href="/contact"
                        className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors duration-200"
                    >
                        اتصل بنا
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound