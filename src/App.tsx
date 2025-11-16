import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Минималистичный диван',
    category: 'Гостиная',
    price: 245000,
    image: 'https://cdn.poehali.dev/projects/62310398-9810-4af9-8113-9adcf8edad44/files/6ba38782-bed1-456a-a00f-226671b49ad2.jpg',
    badge: 'Хит'
  },
  {
    id: 2,
    name: 'Обеденный стол',
    category: 'Кухня',
    price: 189000,
    image: 'https://cdn.poehali.dev/projects/62310398-9810-4af9-8113-9adcf8edad44/files/df96fe82-5b6d-41d2-9055-73fcde8602eb.jpg',
    badge: 'Новинка'
  },
  {
    id: 3,
    name: 'Кровать Premium',
    category: 'Спальня',
    price: 320000,
    image: 'https://cdn.poehali.dev/projects/62310398-9810-4af9-8113-9adcf8edad44/files/a42e8adc-4ef1-4efe-904e-91ff1984e923.jpg'
  }
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'catalog', label: 'Каталог', icon: 'LayoutGrid' },
    { id: 'about', label: 'О компании', icon: 'Building2' },
    { id: 'delivery', label: 'Доставка', icon: 'Truck' },
    { id: 'contacts', label: 'Контакты', icon: 'Phone' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Sofa" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-foreground">МебельКZ</h1>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map(item => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveSection(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        activeSection === item.id
                          ? 'bg-primary text-primary-foreground'
                          : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      <Icon name={item.icon as any} size={20} />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main>
        {activeSection === 'home' && (
          <>
            <section className="relative bg-gradient-to-br from-muted via-background to-muted py-20 md:py-32 overflow-hidden">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="animate-fade-in">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                      Мебель вашей мечты в <span className="text-primary">Казахстане</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8">
                      Современный дизайн, качественные материалы и доставка по всей стране
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button size="lg" className="text-lg" onClick={() => setActiveSection('catalog')}>
                        <Icon name="ShoppingBag" size={20} className="mr-2" />
                        Смотреть каталог
                      </Button>
                      <Button size="lg" variant="outline" className="text-lg" onClick={() => setActiveSection('contacts')}>
                        <Icon name="Phone" size={20} className="mr-2" />
                        Связаться с нами
                      </Button>
                    </div>
                  </div>
                  <div className="relative animate-scale-in">
                    <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
                    <img
                      src={products[0].image}
                      alt="Мебель"
                      className="relative rounded-2xl shadow-2xl w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="py-16 bg-background">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
                    <CardContent className="pt-8 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="Truck" size={32} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Доставка по Казахстану</h3>
                      <p className="text-muted-foreground">Быстрая и надежная доставка в любой город</p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg">
                    <CardContent className="pt-8 text-center">
                      <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="Shield" size={32} className="text-secondary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Гарантия качества</h3>
                      <p className="text-muted-foreground">Все товары сертифицированы</p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
                    <CardContent className="pt-8 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="CreditCard" size={32} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Удобная оплата</h3>
                      <p className="text-muted-foreground">Наличными или картой при получении</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </>
        )}

        {activeSection === 'catalog' && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="mb-12 animate-fade-in">
                <h2 className="text-4xl font-bold mb-4">Каталог мебели</h2>
                <p className="text-lg text-muted-foreground">Выберите мебель для вашего дома</p>
              </div>

              <div className="flex gap-4 mb-8 flex-wrap">
                <Button variant="default">Все товары</Button>
                <Button variant="outline">Гостиная</Button>
                <Button variant="outline">Спальня</Button>
                <Button variant="outline">Кухня</Button>
                <Button variant="outline">Офис</Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                  <Card 
                    key={product.id} 
                    className="group overflow-hidden border-2 hover:border-primary transition-all hover:shadow-xl animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative overflow-hidden aspect-[4/3]">
                      {product.badge && (
                        <Badge className="absolute top-4 left-4 z-10 bg-primary">{product.badge}</Badge>
                      )}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-3">{product.category}</Badge>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-2xl font-bold text-primary">
                          {product.price.toLocaleString('ru-KZ')} ₸
                        </span>
                        <Button size="sm">
                          <Icon name="ShoppingCart" size={18} className="mr-2" />
                          В корзину
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === 'about' && (
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold mb-8">О компании МебельКZ</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-6">
                    Мы — ведущий поставщик качественной мебели в Казахстане. Уже более 10 лет помогаем создавать уютные 
                    и стильные интерьеры для тысяч семей по всей стране.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <Icon name="Award" size={32} className="text-primary flex-shrink-0" />
                          <div>
                            <h3 className="font-bold text-lg mb-2">Качество</h3>
                            <p className="text-muted-foreground">Работаем только с проверенными производителями</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <Icon name="Users" size={32} className="text-secondary flex-shrink-0" />
                          <div>
                            <h3 className="font-bold text-lg mb-2">Опыт</h3>
                            <p className="text-muted-foreground">Более 10 лет на рынке мебели</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Наша миссия — сделать красивую и качественную мебель доступной для каждого дома в Казахстане.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'delivery' && (
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold mb-8">Доставка и оплата</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <Icon name="MapPin" size={32} className="text-primary flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-xl mb-3">География доставки</h3>
                          <p className="text-muted-foreground mb-2">
                            Мы осуществляем доставку по всем городам Казахстана:
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            <li>Алматы, Астана — 1-2 дня</li>
                            <li>Шымкент, Караганда, Актобе — 3-5 дней</li>
                            <li>Другие города — 5-7 дней</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <Icon name="Banknote" size={32} className="text-secondary flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-xl mb-3">Стоимость доставки</h3>
                          <p className="text-muted-foreground mb-2">
                            При заказе от 200 000 ₸ — доставка бесплатно!
                          </p>
                          <p className="text-muted-foreground">
                            При заказе до 200 000 ₸ — стоимость рассчитывается индивидуально
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <Icon name="CreditCard" size={32} className="text-primary flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-xl mb-3">Способы оплаты</h3>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            <li>Наличными курьеру при получении</li>
                            <li>Банковской картой при получении</li>
                            <li>Kaspi перевод (предоплата 50%)</li>
                            <li>Безналичный расчет для юридических лиц</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'contacts' && (
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold mb-8">Контакты</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <Icon name="Phone" size={24} className="text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="font-bold mb-2">Телефон</h3>
                            <p className="text-lg">+7 (777) 123-45-67</p>
                            <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <Icon name="Mail" size={24} className="text-secondary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="font-bold mb-2">Email</h3>
                            <p className="text-lg">info@mebelkz.kz</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <Icon name="MapPin" size={24} className="text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="font-bold mb-2">Адрес</h3>
                            <p className="text-muted-foreground">
                              г. Алматы, пр. Абая 150<br />
                              ТЦ "Мебельный рай", 2 этаж
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-xl mb-4">Напишите нам</h3>
                      <form className="space-y-4">
                        <div>
                          <input
                            type="text"
                            placeholder="Ваше имя"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <input
                            type="tel"
                            placeholder="Телефон"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <textarea
                            placeholder="Ваше сообщение"
                            rows={4}
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <Button className="w-full" size="lg">
                          <Icon name="Send" size={20} className="mr-2" />
                          Отправить сообщение
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-foreground text-background py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sofa" size={28} className="text-primary" />
                <h3 className="text-xl font-bold">МебельКZ</h3>
              </div>
              <p className="text-sm text-background/70">
                Качественная мебель для вашего дома
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>Гостиная</li>
                <li>Спальня</li>
                <li>Кухня</li>
                <li>Офис</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>О компании</li>
                <li>Доставка и оплата</li>
                <li>Гарантия</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>+7 (777) 123-45-67</li>
                <li>info@mebelkz.kz</li>
                <li>г. Алматы, пр. Абая 150</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
            <p>&copy; 2024 МебельКZ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
