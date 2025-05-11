
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";
import Sidebar from "@/components/layout/Sidebar";

const Products = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  // Filter products based on URL parameters
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    const category = searchParams.get("category");
    if (category) {
      result = result.filter(product => 
        product.category?.toLowerCase() === category.toLowerCase() ||
        (category === "phones" && product.category === "هواتف") ||
        (category === "accessories" && product.category === "إكسسوارات")
      );
    }
    
    // Filter by brand
    const brand = searchParams.get("brand");
    if (brand) {
      result = result.filter(product => product.brand === brand);
    }
    
    // Filter by price range
    const price = searchParams.get("price");
    if (price) {
      switch (price) {
        case "under-100":
          result = result.filter(product => product.price < 100);
          break;
        case "100-300":
          result = result.filter(product => product.price >= 100 && product.price <= 300);
          break;
        case "300-600":
          result = result.filter(product => product.price > 300 && product.price <= 600);
          break;
        case "600-plus":
          result = result.filter(product => product.price > 600);
          break;
        default:
          break;
      }
    }
    
    // Filter by discount
    const discount = searchParams.get("discount");
    if (discount === "true") {
      result = result.filter(product => product.discount && product.discount > 0);
    }
    
    setFilteredProducts(result);
  }, [location.search]);

  return (
    <Layout>
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">منتجاتنا</h1>
          <p className="text-muted-foreground">
            استعرض تشكيلتنا الواسعة من الهواتف الذكية والإكسسوارات بأفضل الأسعار
          </p>
        </div>
        
        {/* Mobile filter button */}
        <div className="mb-6 flex md:hidden justify-between items-center">
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={() => setShowMobileFilters(true)}
          >
            <Filter className="h-4 w-4" /> الفلاتر
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile sidebar overlay */}
          {showMobileFilters && (
            <div className="fixed inset-0 bg-background z-50 md:hidden overflow-y-auto">
              <div className="p-4 flex justify-between items-center border-b">
                <h2 className="font-semibold text-lg">الفلاتر</h2>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setShowMobileFilters(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="p-4">
                <Sidebar />
              </div>
            </div>
          )}
          
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-64">
            <Sidebar />
          </aside>
          
          {/* Products */}
          <div className="flex-1">
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
