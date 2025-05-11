
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  discount?: number;
  category?: string;
}

export default function ProductCard({ id, name, price, image, discount, category }: ProductCardProps) {
  const { addToCart } = useShoppingCart();
  
  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
    toast.success("تمت إضافة المنتج إلى السلة");
  };
  
  const discountedPrice = discount ? price - (price * discount / 100) : price;
  
  return (
    <div className="group rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <Link to={`/products/${id}`} className="block">
        <div className="relative aspect-square">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
          {discount && (
            <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-bold">
              خصم {discount}%
            </div>
          )}
          {category && (
            <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-2 py-1 rounded-md text-xs">
              {category}
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/products/${id}`} className="block">
          <h3 className="text-lg font-semibold mb-1 truncate">{name}</h3>
        </Link>
        
        <div className="flex items-center justify-between mt-2">
          <div>
            {discount ? (
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg">${discountedPrice.toFixed(0)}</span>
                <span className="text-muted-foreground line-through text-sm">${price.toFixed(0)}</span>
              </div>
            ) : (
              <span className="font-bold text-lg">${price.toFixed(0)}</span>
            )}
          </div>
          
          <Button
            size="sm"
            onClick={handleAddToCart}
            className="rounded-full h-8 w-8 p-0"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="sr-only">إضافة إلى السلة</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
