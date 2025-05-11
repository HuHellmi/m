
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/">
              <img 
                src="/lovable-uploads/a0a8b4a2-2ec3-492c-bf45-94c420fd6990.png" 
                alt="متجر المسعودي" 
                className="h-10 mb-4"
              />
            </Link>
            <p className="text-sm">
              متجرنا متخصص في بيع أحدث الهواتف الذكية والإكسسوارات بأفضل الأسعار وأعلى جودة.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4">روابط سريعة</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:underline">الرئيسية</Link>
              </li>
              <li>
                <Link to="/products" className="text-sm hover:underline">المنتجات</Link>
              </li>
              <li>
                <Link to="/cart" className="text-sm hover:underline">عربة التسوق</Link>
              </li>
              <li>
                <Link to="/admin" className="text-sm hover:underline">لوحة التحكم</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4">تواصل معنا</h2>
            <p className="text-sm">رقم الهاتف: 717400062-7782400062</p>
            <p className="text-sm">العنوان: صعدة - الشارع العام - أمام الصارم للصرافة</p>
            <Link to="/admin" className="text-sm hover:underline mt-2 block">تسجيل دخول المسؤول</Link>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-white/20 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} متجر المسعودي - جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
