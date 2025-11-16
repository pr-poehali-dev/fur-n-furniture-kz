import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";
import { useState, useMemo } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const [selectedCategory, setSelectedCategory] = useState<string>("Все");
  const [priceRange, setPriceRange] = useState<number[]>([0, 400000]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  const categories = [
    {
      title: "Диваны",
      icon: "Sofa",
      description: "Современные и уютные диваны",
      image: "https://cdn.poehali.dev/projects/62310398-9810-4af9-8113-9adcf8edad44/files/6b79b4bb-6762-4c0d-a679-7ed8e806ba11.jpg"
    },
    {
      title: "Столы и стулья",
      icon: "Armchair",
      description: "Обеденные группы для дома",
      image: "https://cdn.poehali.dev/projects/62310398-9810-4af9-8113-9adcf8edad44/files/66cdb643-880e-44b2-880b-6e99577c760c.jpg"
    },
    {
      title: "Спальни",
      icon: "Bed",
      description: "Комплекты для спальной комнаты",
      image: "https://cdn.poehali.dev/projects/62310398-9810-4af9-8113-9adcf8edad44/files/09a2db34-c222-483b-a691-cdab393aeff7.jpg"
    }
  ];

  const products = [
    {
      id: 1,
      name: "Диван «Модерн»",
      price: "250 000 ₸",
      priceValue: 250000,
      image: "https://cdn.poehali.dev/projects/62310398-9810-4af9-8113-9adcf8edad44/files/6b79b4bb-6762-4c0d-a679-7ed8e806ba11.jpg",
      category: "Диваны"
    },
    {
      id: 2,
      name: "Обеденная группа «Скандинавия»",
      price: "180 000 ₸",
      priceValue: 180000,
      image: "https://cdn.poehali.dev/projects/62310398-9810-4af9-8113-9adcf8edad44/files/66cdb643-880e-44b2-880b-6e99577c760c.jpg",
      category: "Столы и стулья"
    },
    {
      id: 3,
      name: "Спальный гарнитур «Комфорт»",
      price: "320 000 ₸",
      priceValue: 320000,
      image: "https://cdn.poehali.dev/projects/62310398-9810-4af9-8113-9adcf8edad44/files/09a2db34-c222-483b-a691-cdab393aeff7.jpg",
      category: "Спальни"
    },
    {
      id: 4,
      name: "Угловой диван «Релакс»",
      price: "290 000 ₸",
      priceValue: 290000,
      image: "https://cdn.poehali.dev/projects/62310398-9810-4af9-8113-9adcf8edad44/files/6b79b4bb-6762-4c0d-a679-7ed8e806ba11.jpg",
      category: "Диваны"
    },
    {
      id: 5,
      name: "Стол обеденный «Элит»",
      price: "95 000 ₸",
      priceValue: 95000,
      image: "https://cdn.poehali.dev/projects/62310398-9810-4af9-8113-9adcf8edad44/files/66cdb643-880e-44b2-880b-6e99577c760c.jpg",
      category: "Столы и стулья"
    },
    {
      id: 6,
      name: "Кровать «Престиж»",
      price: "210 000 ₸",
      priceValue: 210000,
      image: "https://cdn.poehali.dev/projects/62310398-9810-4af9-8113-9adcf8edad44/files/09a2db34-c222-483b-a691-cdab393aeff7.jpg",
      category: "Спальни"
    }
  ];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const categoryMatch = selectedCategory === "Все" || product.category === selectedCategory;
      const priceMatch = product.priceValue >= priceRange[0] && product.priceValue <= priceRange[1];
      return categoryMatch && priceMatch;
    });
  }, [selectedCategory, priceRange, products]);

  const allCategories = ["Все", ...categories.map(c => c.title)];

  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-r from-primary via-secondary to-accent py-6 px-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Armchair" size={32} className="text-white" />
            <h1 className="text-3xl font-bold text-white">Мебель KZ</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#catalog" className="text-white hover:text-white/80 transition">Каталог</a>
            <a href="#categories" className="text-white hover:text-white/80 transition">Категории</a>
            <a href="#contact" className="text-white hover:text-white/80 transition">Контакты</a>
          </nav>
          <Button variant="secondary" size="lg" className="hidden md:flex items-center gap-2">
            <Icon name="Phone" size={20} />
            +7 (777) 123-45-67
          </Button>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Современная мебель для вашего дома
              </h2>
              <p className="text-xl text-muted-foreground">
                Качественная мебель от производителя. Доставка по всему Казахстану. Гарантия 2 года.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Консультация
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Товаров</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">2000+</div>
                  <div className="text-sm text-muted-foreground">Клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">5 лет</div>
                  <div className="text-sm text-muted-foreground">На рынке</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/62310398-9810-4af9-8113-9adcf8edad44/files/6b79b4bb-6762-4c0d-a679-7ed8e806ba11.jpg" 
                alt="Современная мебель" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-xl shadow-xl">
                <div className="text-2xl font-bold">-30%</div>
                <div className="text-sm">на первый заказ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Категории мебели</h2>
            <p className="text-muted-foreground text-lg">Выберите категорию для просмотра товаров</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card key={category.title} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer border-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Icon name={category.icon as any} size={40} className="mb-2" />
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground">{category.description}</p>
                  <Button className="w-full mt-4" variant="outline">
                    Смотреть товары
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Популярные товары</h2>
            <p className="text-muted-foreground text-lg">Лучшие предложения месяца</p>
          </div>

          <Card className="mb-8 p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Label className="text-base font-semibold mb-3 block">
                  <Icon name="Filter" size={20} className="inline mr-2" />
                  Категория
                </Label>
                <div className="flex flex-wrap gap-2">
                  {allCategories.map((cat) => (
                    <Button
                      key={cat}
                      variant={selectedCategory === cat ? "default" : "outline"}
                      onClick={() => setSelectedCategory(cat)}
                      className="transition-all"
                    >
                      {cat}
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <Label className="text-base font-semibold mb-3 block">
                  <Icon name="DollarSign" size={20} className="inline mr-2" />
                  Цена: {priceRange[0].toLocaleString()} ₸ - {priceRange[1].toLocaleString()} ₸
                </Label>
                <Slider
                  min={0}
                  max={400000}
                  step={10000}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mt-4"
                />
                <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                  <span>0 ₸</span>
                  <span>400 000 ₸</span>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                <Icon name="Package" size={16} className="inline mr-1" />
                Найдено товаров: <span className="font-semibold text-foreground">{filteredProducts.length}</span>
              </div>
              <Button
                variant="ghost"
                onClick={() => {
                  setSelectedCategory("Все");
                  setPriceRange([0, 400000]);
                }}
                className="text-sm"
              >
                <Icon name="X" size={16} className="mr-1" />
                Сбросить фильтры
              </Button>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </div>
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map((star) => (
                        <Icon key={star} name="Star" size={16} className="text-secondary fill-secondary" />
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      В корзину
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="Heart" size={18} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="text-lg">
              Показать еще
              <Icon name="ChevronDown" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-muted-foreground text-lg">Оставьте заявку и мы перезвоним вам в течение 15 минут</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Введите имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Опишите что вас интересует"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </Card>
            <div className="space-y-6">
              <Card className="p-6 flex items-start gap-4 hover:shadow-lg transition">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (777) 123-45-67</p>
                  <p className="text-muted-foreground">+7 (701) 987-65-43</p>
                </div>
              </Card>
              <Card className="p-6 flex items-start gap-4 hover:shadow-lg transition">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Icon name="Mail" size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@mebel-kz.com</p>
                  <p className="text-muted-foreground">sales@mebel-kz.com</p>
                </div>
              </Card>
              <Card className="p-6 flex items-start gap-4 hover:shadow-lg transition">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Icon name="MapPin" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Адрес</h3>
                  <p className="text-muted-foreground">г. Алматы, пр. Абая 150</p>
                  <p className="text-muted-foreground">Пн-Вс: 10:00 - 20:00</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Armchair" size={28} />
                <span className="text-xl font-bold">Мебель KZ</span>
              </div>
              <p className="text-white/70">
                Качественная мебель для вашего дома. Доставка по всему Казахстану.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Категории</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition">Диваны</a></li>
                <li><a href="#" className="hover:text-white transition">Столы и стулья</a></li>
                <li><a href="#" className="hover:text-white transition">Спальни</a></li>
                <li><a href="#" className="hover:text-white transition">Кухни</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition">О компании</a></li>
                <li><a href="#" className="hover:text-white transition">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition">Оплата</a></li>
                <li><a href="#" className="hover:text-white transition">Гарантия</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-white/70">
                <li>+7 (777) 123-45-67</li>
                <li>info@mebel-kz.com</li>
                <li>г. Алматы, пр. Абая 150</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>&copy; 2024 Мебель KZ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;