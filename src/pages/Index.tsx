import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { featuredProducts, banners } from "@/data/mockData";
import ProductCard from "@/components/product/ProductCard";
import { CarouselWithAutoplay } from "@/components/ui/carousel-custom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <>
      {/* Hero Banner Carousel */}
      <section className="container mx-auto mb-12">
        <CarouselWithAutoplay className="w-full">
          {banners.map((banner) => (
            <div key={banner.id} className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/50 to-transparent rounded-lg" />
              <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-16 text-white">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">{banner.title}</h2>
                <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 max-w-md">{banner.description}</p>
                <div>
                  <Link to={banner.link}>
                    <Button className="bg-primary hover:bg-primary/90 text-white">{banner.buttonText}</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </CarouselWithAutoplay>
      </section>

      {/* Categories */}
      <section className="container mx-auto mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">الفئات</h2>
          <Link to="/products" className="text-primary hover:underline flex items-center">
            عرض الكل <ArrowRight className="mr-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/products?category=phones">
            <div className="relative h-32 md:h-40 rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?q=80&w=3164&auto=format&fit=crop"
                alt="هواتف ذكية"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-lg md:text-xl font-bold">هواتف ذكية</h3>
              </div>
            </div>
          </Link>
          
          <Link to="/products?category=accessories&brand=سماعات">
            <div className="relative h-32 md:h-40 rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=3570&auto=format&fit=crop"
                alt="سماعات"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-lg md:text-xl font-bold">سماعات</h3>
              </div>
            </div>
          </Link>
          
          <Link to="/products?category=accessories&brand=شواحن">
            <div className="relative h-32 md:h-40 rounded-lg overflow-hidden group">
              <img
                src="https://case-mate.com/cdn/shop/products/cmi_Fuel_USB_C_Power_Adapter_30Watt_FL047992_10_1_1.jpg?v=1642454178&width=3000"
                alt="شواحن"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-lg md:text-xl font-bold">شواحن</h3>
              </div>
            </div>
          </Link>
          
          <Link to="/products?category=accessories&brand=أغطية">
            <div className="relative h-32 md:h-40 rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?q=80&w=3164&auto=format&fit=crop"
                alt="أغطية حماية"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-lg md:text-xl font-bold">أغطية حماية</h3>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">منتجات مميزة</h2>
          <Link to="/products" className="text-primary hover:underline flex items-center">
            عرض الكل <ArrowRight className="mr-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              discount={product.discount}
              category={product.category}
            />
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="container mx-auto mb-12">
        <div className="relative rounded-lg overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXS7HsdDeB5toYPiF9r7PZ18J5CYEK8vnGQ&s"
            alt="تسوق من مكانك"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-6">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">سنصل إليك إلى مكانك</h2>
            <p className="text-white/90 mb-6 max-w-md">يوجد لدينا خدمة توصيل مع ضمان إرجاع في حالة عدم مطابقة حالة ومواصفات الجهاز لما هو مذكور في الموقع</p>
            <Link to="/products?discount=true">
              <Button className="bg-white text-primary hover:bg-white/90 transition-colors">تسوق الآن</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">ضمان جودة المنتجات</h3>
            <p className="text-muted-foreground">نفحص بشكل دقيق حالة كل جهاز ونضمن لكم مطابقته للحالة والمواصفات</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">أسعار تنافسية</h3>
            <p className="text-muted-foreground">أفضل الأسعار مع خصومات دورية وعروض خاصة لعملائنا</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">دعم فني متميز</h3>
            <p className="text-muted-foreground">فريق دعم وصيانة جاهز لمساعدتك والإجابة على استفساراتك في أي وقت</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
