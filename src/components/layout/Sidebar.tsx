
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type Category = {
  id: string;
  name: string;
  brands: string[];
};

const categories: Category[] = [
  {
    id: "phones",
    name: "الهواتف الذكية",
    brands: ["آبل", "سامسونج", "شاومي", "هواوي", "ريلمي", "نوكيا"]
  },
  {
    id: "accessories",
    name: "الإكسسوارات",
    brands: ["سماعات", "أغطية", "شواحن", "بطاريات", "حامل هاتف"]
  }
];

const priceRanges = [
  { id: "under-100", name: "أقل من 100 دولار" },
  { id: "100-300", name: "100 - 300 دولار" },
  { id: "300-600", name: "300 - 600 دولار" },
  { id: "600-plus", name: "أكثر من 600 دولار" }
];

export default function Sidebar() {
  const location = useLocation();
  const [expandedCategory, setExpandedCategory] = useState<string | null>("phones");

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="w-full md:w-64 pr-1 pl-4">
      <div className="sticky top-20">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">الفئات</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="space-y-2">
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start text-right",
                      location.search.includes(`category=${category.id}`) && "bg-accent text-accent-foreground"
                    )}
                    onClick={() => toggleCategory(category.id)}
                  >
                    <span>{category.name}</span>
                    <span className="ml-auto">{expandedCategory === category.id ? "-" : "+"}</span>
                  </Button>
                  
                  {expandedCategory === category.id && (
                    <div className="mr-4 space-y-1">
                      {category.brands.map((brand) => (
                        <Link 
                          key={brand} 
                          to={`/products?category=${category.id}&brand=${encodeURIComponent(brand)}`}
                        >
                          <Button
                            variant="ghost"
                            className={cn(
                              "w-full justify-start text-right text-sm h-8",
                              location.search.includes(`brand=${encodeURIComponent(brand)}`) && 
                              "bg-accent/50 text-accent-foreground"
                            )}
                          >
                            {brand}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-semibold mb-2">نطاق السعر</h3>
            <div className="space-y-1">
              {priceRanges.map((range) => (
                <Link key={range.id} to={`/products?price=${range.id}`}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start text-right",
                      location.search.includes(`price=${range.id}`) && 
                      "bg-accent text-accent-foreground"
                    )}
                  >
                    {range.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
