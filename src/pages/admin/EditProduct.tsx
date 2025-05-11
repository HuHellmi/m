
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { products } from "@/data/mockData";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

interface ProductFormValues {
  name: string;
  description: string;
  category: string;
  brand: string;
  price: string;
  discount: string;
  stock: string;
  image: string;
}

const EditProduct = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ProductFormValues>({
    defaultValues: {
      name: "",
      description: "",
      category: "",
      brand: "",
      price: "",
      discount: "",
      stock: "",
      image: ""
    }
  });
  
  // Get product data
  useEffect(() => {
    const product = products.find(p => p.id === Number(id));
    
    if (product) {
      form.reset({
        name: product.name,
        description: product.description,
        category: product.category || "",
        brand: product.brand,
        price: product.price.toString(),
        discount: product.discount ? product.discount.toString() : "",
        stock: product.stock.toString(),
        image: product.image
      });
    } else {
      // Redirect if product not found
      toast.error("المنتج غير موجود");
      navigate("/admin/products");
    }
  }, [id, navigate, form]);
  
  const handleSubmit = (values: ProductFormValues) => {
    setIsSubmitting(true);
    
    // In a real app, we would send this data to an API
    setTimeout(() => {
      toast.success("تم تحديث المنتج بنجاح");
      setIsSubmitting(false);
      navigate("/admin/products");
    }, 1000);
  };
  
  return (
    <AdminLayout title="تعديل المنتج">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            size="sm"
            className="ml-2"
            onClick={() => navigate("/admin/products")}
          >
            <ArrowLeft className="ml-1 h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold">تعديل المنتج</h1>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>اسم المنتج <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="أدخل اسم المنتج"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>رابط الصورة <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="أدخل رابط الصورة"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>التصنيف <span className="text-red-500">*</span></FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="اختر التصنيف" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="هواتف">هواتف</SelectItem>
                        <SelectItem value="إكسسوارات">إكسسوارات</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="brand"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>العلامة التجارية <span className="text-red-500">*</span></FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="اختر العلامة التجارية" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="آبل">آبل</SelectItem>
                        <SelectItem value="سامسونج">سامسونج</SelectItem>
                        <SelectItem value="شاومي">شاومي</SelectItem>
                        <SelectItem value="هواوي">هواوي</SelectItem>
                        <SelectItem value="ريلمي">ريلمي</SelectItem>
                        <SelectItem value="نوكيا">نوكيا</SelectItem>
                        <SelectItem value="سماعات">سماعات</SelectItem>
                        <SelectItem value="أغطية">أغطية</SelectItem>
                        <SelectItem value="شواحن">شواحن</SelectItem>
                        <SelectItem value="بطاريات">بطاريات</SelectItem>
                        <SelectItem value="حامل هاتف">حامل هاتف</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>السعر <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input 
                        type="number"
                        placeholder="أدخل السعر"
                        required
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="discount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الخصم (%)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number"
                        min="0"
                        max="100"
                        placeholder="أدخل نسبة الخصم (اختياري)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>المخزون <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input 
                        type="number"
                        min="0"
                        placeholder="أدخل كمية المخزون"
                        required
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>الوصف <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="أدخل وصف المنتج"
                      rows={5}
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex items-center justify-end gap-4">
              <Button
                variant="outline"
                onClick={() => navigate("/admin/products")}
                disabled={isSubmitting}
                type="button"
              >
                إلغاء
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "جاري التحديث..." : "تحديث المنتج"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </AdminLayout>
  );
};

export default EditProduct;
