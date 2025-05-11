
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { products } from "@/data/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { ArrowLeft, Minus, Plus, ShoppingCart } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useShoppingCart();
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  
  // Find the product by ID
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto py-8 text-center">
          <h2 className="text-2xl font-bold mb-4">المنتج غير موجود</h2>
          <Link to="/products">
            <Button>العودة إلى المنتجات</Button>
          </Link>
        </div>
      </Layout>
    );
  }
  
  // Generate multiple images for the carousel (in a real app, product would have multiple images)
  const productImages = [product.image];
  for (let i = 0; i < 2; i++) {
    // Just duplicate the same image for demo purposes
    productImages.push(product.image);
  }
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      });
    }
    toast.success(`تمت إضافة ${quantity} ${quantity > 1 ? 'وحدات' : 'وحدة'} إلى السلة`);
  };
  
  const handleDecreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };
  
  const handleIncreaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="mb-6">
          <Link to="/products" className="text-primary hover:underline flex items-center">
            <ArrowLeft className="ml-1 h-4 w-4" />
            العودة إلى المنتجات
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg border">
              <img
                src={productImages[currentImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto">
              {productImages.map((img, index) => (
                <div 
                  key={index}
                  className={`border rounded cursor-pointer w-20 h-20 flex-shrink-0 ${
                    currentImage === index ? "border-primary" : ""
                  }`}
                  onClick={() => setCurrentImage(index)}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} thumbnail ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="mb-4">
              {product.discount ? (
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold">
                    ${(product.price - (product.price * product.discount / 100)).toFixed(0)}
                  </span>
                  <span className="text-muted-foreground line-through text-lg">
                    ${product.price.toFixed(0)}
                  </span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-semibold">
                    خصم {product.discount}%
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-bold">${product.price.toFixed(0)}</span>
              )}
            </div>
            
            <p className="text-muted-foreground mb-6">{product.description}</p>
            
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <span className="ml-3">الكمية:</span>
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleDecreaseQuantity}
                    disabled={quantity <= 1}
                    className="h-9 w-9 rounded-r-none"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="w-12 h-9 flex items-center justify-center border-l border-r">
                    {quantity}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleIncreaseQuantity}
                    className="h-9 w-9 rounded-l-none"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <Button
                className="w-full"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="ml-2 h-4 w-4" />
                إضافة إلى السلة
              </Button>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>العلامة التجارية:</span>
                <span className="font-medium">{product.brand}</span>
              </div>
              <div className="flex justify-between">
                <span>التصنيف:</span>
                <span className="font-medium">{product.category}</span>
              </div>
              <div className="flex justify-between">
                <span>التوفر:</span>
                <span className={`font-medium ${product.stock > 0 ? "text-green-600" : "text-red-500"}`}>
                  {product.stock > 0 ? "متوفر في المخزون" : "غير متوفر"}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="description">الوصف</TabsTrigger>
            <TabsTrigger value="features">المواصفات</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-4">
            <div className="prose max-w-none">
              <p>{product.description}</p>
            </div>
          </TabsContent>
          <TabsContent value="features" className="mt-4">
            <ul className="list-disc list-inside space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-muted-foreground">{feature}</li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ProductDetail;
