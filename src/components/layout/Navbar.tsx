
import { useState } from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { Button } from "@/components/ui/button";
import { Menu, Search, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  const { cartCount } = useShoppingCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
        
        {/* Logo */}
        <div className="mr-4 md:mr-6">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/a0a8b4a2-2ec3-492c-bf45-94c420fd6990.png" 
              alt="متجر المسعودي" 
              className="h-8"
            />
          </Link>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden space-x-4 space-x-reverse md:flex">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            الرئيسية
          </Link>
          <Link to="/products" className="text-sm font-medium transition-colors hover:text-primary">
            جميع المنتجات
          </Link>
          <Link to="/products?category=phones" className="text-sm font-medium transition-colors hover:text-primary">
            هواتف
          </Link>
          <Link to="/products?category=accessories" className="text-sm font-medium transition-colors hover:text-primary">
            إكسسوارات
          </Link>
        </nav>
        
        {/* Search */}
        <div className="flex-1 mx-6">
          <div className="relative">
            <Search className="absolute right-2.5 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input 
              type="search"
              placeholder="ابحث عن منتجات..."
              className="pl-4 pr-10 md:w-[300px] lg:w-[400px] rounded-md border-2 bg-background"
            />
          </div>
        </div>
        
        {/* Cart button */}
        <div className="ml-auto flex items-center gap-2">
          <Link to="/cart">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -left-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 bg-background">
          <nav className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="text-base font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              الرئيسية
            </Link>
            <Link 
              to="/products" 
              className="text-base font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              جميع المنتجات
            </Link>
            <Link 
              to="/products?category=phones" 
              className="text-base font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              هواتف
            </Link>
            <Link 
              to="/products?category=accessories" 
              className="text-base font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              إكسسوارات
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
