
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="container mx-auto py-16 text-center">
      <div className="mb-8">
        <h1 className="text-9xl font-bold text-gray-200">404</h1>
      </div>
      <h2 className="text-3xl font-bold mb-4">الصفحة غير موجودة</h2>
      <p className="text-xl text-muted-foreground mb-8">عذراً، الصفحة التي تبحث عنها غير موجودة</p>
      <Link to="/">
        <Button>العودة إلى الصفحة الرئيسية</Button>
      </Link>
    </div>
  );
};

export default NotFound;
