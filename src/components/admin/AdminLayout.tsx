
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LogOut, Package, Settings } from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function AdminLayout({ children, title }: AdminLayoutProps) {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(true); // In a real app, this would be from auth context
  
  // Redirect if not logged in
  if (!isAdmin) {
    navigate("/admin");
    return null;
  }

  const handleLogout = () => {
    // In a real app, this would call auth logout
    setIsAdmin(false);
    navigate("/admin");
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col bg-sidebar border-l">
        <div className="p-6">
          <Link to="/admin/dashboard">
            <h1 className="text-xl font-bold text-sidebar-foreground">لوحة الإدارة</h1>
          </Link>
        </div>
        
        <Separator />
        
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/admin/dashboard">
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="ml-2 h-5 w-5" />
              الرئيسية
            </Button>
          </Link>
          <Link to="/admin/products">
            <Button variant="ghost" className="w-full justify-start">
              <Package className="ml-2 h-5 w-5" />
              المنتجات
            </Button>
          </Link>
        </nav>
        
        <div className="p-4">
          <Button
            variant="outline" 
            className="w-full justify-start"
            onClick={handleLogout}
          >
            <LogOut className="ml-2 h-5 w-5" />
            تسجيل الخروج
          </Button>
        </div>
      </aside>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="border-b bg-background/95 backdrop-blur">
          <div className="flex h-16 items-center px-6">
            {/* Mobile menu button would go here */}
            <h1 className="text-lg font-semibold">{title}</h1>
          </div>
        </header>
        
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
