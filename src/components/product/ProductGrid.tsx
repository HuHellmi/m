
import ProductCard from "./ProductCard";
import { Grid2X2, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  discount?: number;
  category?: string;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="space-y-4">
      <div className="flex justify-end space-x-2 space-x-reverse">
        <Button
          variant="outline"
          size="icon"
          className={cn(
            viewMode === 'grid' && "bg-accent text-accent-foreground"
          )}
          onClick={() => setViewMode('grid')}
        >
          <Grid2X2 className="h-4 w-4" />
          <span className="sr-only">عرض شبكي</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className={cn(
            viewMode === 'list' && "bg-accent text-accent-foreground"
          )}
          onClick={() => setViewMode('list')}
        >
          <List className="h-4 w-4" />
          <span className="sr-only">عرض قائمة</span>
        </Button>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-muted-foreground">لا توجد منتجات متاحة</p>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {products.map(product => (
            <div key={product.id} className="flex border rounded-lg overflow-hidden bg-card">
              <div className="w-32 h-32">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-1 p-4 justify-between items-center">
                <div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <div className="mt-1">
                    {product.discount ? (
                      <div className="flex items-center gap-2">
                        <span className="font-bold">${(product.price - (product.price * product.discount / 100)).toFixed(0)}</span>
                        <span className="text-muted-foreground line-through text-sm">${product.price.toFixed(0)}</span>
                      </div>
                    ) : (
                      <span className="font-bold">${product.price.toFixed(0)}</span>
                    )}
                  </div>
                </div>
                <Button onClick={() => {}}>إضافة للسلة</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
