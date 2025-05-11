
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { products } from "@/data/mockData";

const AdminDashboard = () => {
  // Calculate statistics
  const totalProducts = products.length;
  const totalPhones = products.filter(p => p.category === "هواتف").length;
  const totalAccessories = products.filter(p => p.category === "إكسسوارات").length;
  const outOfStock = products.filter(p => p.stock === 0).length;
  
  // Calculate total inventory value
  const inventoryValue = products.reduce((total, product) => {
    const price = product.discount 
      ? product.price - (product.price * product.discount / 100) 
      : product.price;
    return total + (price * product.stock);
  }, 0);
  
  return (
    <AdminLayout title="لوحة التحكم">
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">مرحباً بك في لوحة التحكم</h1>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                إجمالي المنتجات
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalProducts}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                الهواتف الذكية
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalPhones}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                الإكسسوارات
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalAccessories}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                قيمة المخزون
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">${inventoryValue.toFixed(0)}</div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>حالة المخزون</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="ml-4 h-2 w-2 rounded-full bg-green-500" />
                  <div className="flex-1">متوفر</div>
                  <div className="font-medium">{totalProducts - outOfStock}</div>
                </div>
                <div className="flex items-center">
                  <div className="ml-4 h-2 w-2 rounded-full bg-red-500" />
                  <div className="flex-1">غير متوفر</div>
                  <div className="font-medium">{outOfStock}</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>المنتجات حسب العلامة التجارية</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from(new Set(products.map(p => p.brand))).map((brand, index) => (
                  <div key={index} className="flex items-center">
                    <div className="ml-4 h-2 w-2 rounded-full bg-primary" />
                    <div className="flex-1">{brand}</div>
                    <div className="font-medium">
                      {products.filter(p => p.brand === brand).length}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>منتجات منخفضة المخزون</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {products
                  .filter(p => p.stock > 0 && p.stock <= 10)
                  .sort((a, b) => a.stock - b.stock)
                  .slice(0, 5)
                  .map(product => (
                    <div key={product.id} className="flex items-center justify-between">
                      <div className="truncate ml-2">{product.name}</div>
                      <div className={`font-medium ${product.stock <= 5 ? "text-red-500" : "text-amber-500"}`}>
                        {product.stock}
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
