
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useShoppingCart();
  
  const handleCheckout = () => {
    // Calculate total price
    const total = getTotalPrice().toFixed(0);
    
    // Create message for WhatsApp
    let message = `*طلب جديد من متجر المسعودي*%0a%0a`;
    message += `%0a*المنتجات المطلوبة:*%0a`;
    
    cartItems.forEach((item) => {
      message += `• ${item.name} - الكمية: ${item.quantity} - السعر: $${(item.price * item.quantity).toFixed(0)}%0a`;
    });
    
    message += `%0a*المجموع:* $${total}`;
    
    // Open WhatsApp with the message
    const whatsappLink = `https://wa.me/967782400062?text=${message}`;
    window.open(whatsappLink, "_blank");
    
    // Clear the cart
    clearCart();
    toast.success("تم إرسال طلبك بنجاح");
  };
  
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-12 text-center">
        <div className="mb-8">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-24 w-24 mx-auto text-muted-foreground/50" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-4">سلة التسوق فارغة</h2>
        <p className="text-muted-foreground mb-6">لم تقم بإضافة أي منتجات إلى سلة التسوق بعد.</p>
        <Link to="/products">
          <Button>استعرض المنتجات</Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto py-8">
      <div className="mb-6">
        <Link to="/products" className="text-primary hover:underline flex items-center">
          <ArrowLeft className="ml-1 h-4 w-4" />
          العودة إلى المنتجات
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-8">سلة التسوق</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center py-4 border-b">
              <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mr-4 flex-1">
                <Link to={`/products/${item.id}`}>
                  <h3 className="font-semibold hover:text-primary">{item.name}</h3>
                </Link>
                <div className="text-muted-foreground text-sm mt-1">
                  ${item.price.toFixed(0)} × {item.quantity}
                </div>
              </div>
              
              <div className="flex items-center mr-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-r-none"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="h-8 w-8 flex items-center justify-center border-y">
                  {item.quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-l-none"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
              
              <div className="mr-4 text-left font-semibold">
                ${(item.price * item.quantity).toFixed(0)}
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                className="flex-shrink-0"
                onClick={() => removeFromCart(item.id)}
              >
                <Trash2 className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
          ))}
        </div>
        
        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6 bg-card">
            <h2 className="text-xl font-bold mb-4">ملخص الطلب</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">المجموع الفرعي:</span>
                <span className="font-semibold">${getTotalPrice().toFixed(0)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">التوصيل:</span>
                <span>حسب المنطقة</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>المجموع:</span>
                <span>${getTotalPrice().toFixed(0)}</span>
              </div>
            </div>
            
            <Button 
              className="w-full"
              onClick={handleCheckout}
            >
              إتمام الطلب عبر واتساب
            </Button>
            
            <p className="text-sm text-muted-foreground text-center mt-4">
              سيتم تحويلك إلى واتساب لإكمال الطلب
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
