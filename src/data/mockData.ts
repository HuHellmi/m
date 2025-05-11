
export const products = [
  {
    id: 1,
    name: "آيفون 15 برو ماكس",
    price: 1199,
    discount: 5,
    image: "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_White_Titanium_PDP_Image_Position-1__en-IN.jpg?v=1694757668&width=1445",
    category: "هواتف",
    brand: "آبل",
    description: "أحدث هاتف من آبل بشاشة 6.7 بوصة وكاميرا متطورة بدقة 48 ميجابكسل، يمنحك تجربة تصوير احترافية.",
    features: [
      "معالج A17 Pro",
      "شاشة Super Retina XDR",
      "كاميرا بدقة 48 ميجابكسل",
      "مقاوم للماء والغبار",
      "تقنية التعرف على الوجه Face ID"
    ],
    stock: 15
  },
  {
    id: 2,
    name: "سامسونج جالاكسي S23 ألترا",
    price: 1099,
    discount: 10,
    image: "data:image/jpeg;base64,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",
    category: "هواتف",
    brand: "سامسونج",
    description: "هاتف قوي بكاميرا فائقة الدقة 200 ميجابكسل وشاشة Dynamic AMOLED 2X، مع بطارية تدوم طوال اليوم.",
    features: [
      "معالج Snapdragon 8 Gen 2",
      "كاميرا بدقة 200 ميجابكسل",
      "ذاكرة وصول عشوائي 12 جيجا",
      "بطارية 5000 مللي أمبير",
      "شحن سريع 45 واط"
    ],
    stock: 10
  },
  {
    id: 3,
    name: "شاومي 14 ألترا",
    price: 899,
    discount: 0,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2971&auto=format&fit=crop",
    category: "هواتف",
    brand: "شاومي",
    description: "هاتف متطور بتصميم أنيق وكاميرا ليكا متطورة، يوفر أداءً استثنائياً بسعر منافس.",
    features: [
      "معالج Snapdragon 8 Gen 3",
      "كاميرا ليكا بدقة 50 ميجابكسل",
      "شاشة AMOLED بمعدل تحديث 144 هرتز",
      "بطارية 5500 مللي أمبير",
      "شحن سريع 120 واط"
    ],
    stock: 8
  },
  {
    id: 4,
    name: "سماعات آبل إيربودز برو 2",
    price: 249,
    discount: 15,
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=3570&auto=format&fit=crop",
    category: "إكسسوارات",
    brand: "آبل",
    description: "سماعات لاسلكية فائقة الجودة مع خاصية إلغاء الضوضاء النشطة وجودة صوت استثنائية.",
    features: [
      "إلغاء الضوضاء النشطة",
      "وضع الشفافية",
      "مقاومة للماء والعرق",
      "عمر بطارية يصل إلى 6 ساعات",
      "الصوت المكاني"
    ],
    stock: 20
  },
  {
    id: 5,
    name: "غطاء حماية لآيفون 15 برو",
    price: 49,
    discount: 0,
    image: "https://images.unsplash.com/photo-1603313011825-458e568eab26?q=80&w=3570&auto=format&fit=crop",
    category: "إكسسوارات",
    brand: "سماعات",
    description: "غطاء حماية فاخر من السيليكون بتصميم أنيق، يوفر حماية قصوى لهاتفك من الصدمات والخدوش.",
    features: [
      "مصنوع من السيليكون عالي الجودة",
      "مقاوم للصدمات",
      "تصميم نحيف ومتناسب",
      "فتحات دقيقة للمنافذ",
      "متوافق مع الشحن اللاسلكي"
    ],
    stock: 35
  },
  {
    id: 6,
    name: "شاحن سريع سامسونج 45 واط",
    price: 39.99,
    discount: 20,
    image: "https://images.unsplash.com/photo-1583863788434-e62af471d391?q=80&w=3571&auto=format&fit=crop",
    category: "إكسسوارات",
    brand: "شواحن",
    description: "شاحن سريع لهواتف سامسونج يدعم قوة شحن تصل إلى 45 واط، يشحن هاتفك من 0% إلى 50% في 30 دقيقة فقط.",
    features: [
      "قدرة شحن 45 واط",
      "منفذ USB-C",
      "متوافق مع جميع أجهزة سامسونج الحديثة",
      "تقنية الشحن الذكي",
      "حماية من ارتفاع الحرارة"
    ],
    stock: 25
  },
  {
    id: 7,
    name: "هواوي بي 60 برو",
    price: 899,
    discount: 0,
    image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=3580&auto=format&fit=crop",
    category: "هواتف",
    brand: "هواوي",
    description: "هاتف متطور بنظام كاميرات متفوق من لايكا، يوفر تجربة تصوير احترافية وأداء استثنائي.",
    features: [
      "نظام كاميرات لايكا",
      "بطارية 5000 مللي أمبير",
      "شاشة OLED 6.8 بوصة",
      "تصميم أنيق مقاوم للماء",
      "معالج Kirin 9000s"
    ],
    stock: 7
  },
  {
    id: 8,
    name: "نوكيا XR21",
    price: 549,
    discount: 12,
    image: "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?q=80&w=3570&auto=format&fit=crop",
    category: "هواتف",
    brand: "نوكيا",
    description: "هاتف متين يجمع بين القوة والجمالية، مثالي للاستخدام في الظروف القاسية مع بطارية طويلة العمر.",
    features: [
      "مقاوم للصدمات والسقوط",
      "شهادة IP68 للحماية من الماء والغبار",
      "شاشة Corning Gorilla Glass Victus",
      "بطارية تدوم ليومين",
      "كاميرا مزدوجة بدقة 64 ميجابكسل"
    ],
    stock: 15
  },
  {
    id: 9,
    name: "حامل هاتف للسيارة",
    price: 24.99,
    discount: 0,
    image: "https://images.unsplash.com/photo-1642033588201-147755bd3b8a?q=80&w=3570&auto=format&fit=crop",
    category: "إكسسوارات",
    brand: "حامل هاتف",
    description: "حامل هاتف مغناطيسي يثبت بسهولة على فتحة التهوية في سيارتك، يحمل هاتفك بأمان أثناء القيادة.",
    features: [
      "تثبيت مغناطيسي قوي",
      "دوران 360 درجة",
      "سهل التركيب والإزالة",
      "متوافق مع جميع الهواتف الذكية",
      "تصميم متين وأنيق"
    ],
    stock: 40
  },
  {
    id: 10,
    name: "باور بنك 20000 مللي أمبير",
    price: 59.99,
    discount: 25,
    image: "https://images.unsplash.com/photo-1564410267841-915d8e4d71ea?q=80&w=3387&auto=format&fit=crop",
    category: "إكسسوارات",
    brand: "بطاريات",
    description: "شاحن متنقل بسعة كبيرة يمكنه شحن هاتفك عدة مرات، مثالي للرحلات الطويلة.",
    features: [
      "سعة 20000 مللي أمبير",
      "منفذين USB ومنفذ USB-C",
      "الشحن السريع",
      "شاشة LED لعرض مستوى البطارية",
      "حماية متعددة للشحن الآمن"
    ],
    stock: 18
  },
  {
    id: 11,
    name: "ريلمي GT 5 Pro",
    price: 649,
    discount: 8,
    image: "https://images.unsplash.com/photo-1678911820864-e5a2b7e50fdf?q=80&w=3570&auto=format&fit=crop",
    category: "هواتف",
    brand: "ريلمي",
    description: "هاتف متطور بأداء عالي وسعر منافس، مثالي لمحبي الألعاب والتطبيقات الثقيلة.",
    features: [
      "معالج Snapdragon 8 Gen 2",
      "شاشة AMOLED بمعدل تحديث 144 هرتز",
      "نظام تبريد متطور للألعاب",
      "بطارية 5500 مللي أمبير",
      "شحن سريع 100 واط"
    ],
    stock: 12
  },
  {
    id: 12,
    name: "واقي شاشة زجاجي لسامسونج S23",
    price: 14.99,
    discount: 0,
    image: "https://images.unsplash.com/photo-1636376242456-a10caa4fa87f?q=80&w=3570&auto=format&fit=crop",
    category: "إكسسوارات",
    brand: "أغطية",
    description: "واقي شاشة من الزجاج المقوى سهل التركيب، يوفر حماية فائقة لشاشة هاتفك من الخدوش والكسر.",
    features: [
      "سمك 0.33 مم",
      "مقاومة عالية للخدوش (9H)",
      "طلاء مضاد للبصمات",
      "شفافية بنسبة 99.9%",
      "حواف مستديرة 2.5D"
    ],
    stock: 50
  }
];

export const featuredProducts = [
  products[0], // iPhone 15 Pro Max
  products[1], // Samsung Galaxy S23 Ultra
  products[3], // AirPods Pro 2
  products[6]  // Huawei P60 Pro
];

export const banners = [
  {
    id: 1,
    title: "تشكيلة جديدة من الهواتف الذكية",
    description: "استكشف أحدث الهواتف بتقنيات متطورة وأسعار منافسة",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbtWG6BFb3pRmz-WIKpVm2bEp9UlHpDdDfqQ&s",
    link: "/products?category=phones",
    buttonText: "تسوق الآن"
  },
  {
    id: 2,
    title: "خصومات على الإكسسوارات",
    description: "وفر حتى 30% على شواحن وسماعات وأغطية حماية",
    image: "https://images.unsplash.com/photo-1585386179565-6db7feb53258?q=80&w=3174&auto=format&fit=crop",
    link: "/products?category=accessories",
    buttonText: "اكتشف العروض"
  },
  {
    id: 3,
    title: "هواتف الفئة الاقتصادية",
    description: "تجربة استخدام رائعة بسعر مناسب للجميع",
    image: "https://images.unsplash.com/photo-1521939094609-93ded75a7fe4?q=80&w=3474&auto=format&fit=crop",
    link: "/products?price=under-100",
    buttonText: "تسوق الآن"
  }
];
