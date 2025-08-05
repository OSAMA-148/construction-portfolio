"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Hammer,
  Truck,
  Zap,
  Droplets,
  Home,
  Palette,
  HardHat,
  Building,
  Settings,
  Layers,
  Square,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Award,
  Clock,
  Shield,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ConstructionPortfolio() {
  const [selectedFilter, setSelectedFilter] = useState("all")

  const services = [
    {
      title: "General Construction",
      titleAr: "البناء العام",
      description: "Complete construction solutions from foundation to finish",
      descriptionAr: "حلول البناء الكاملة من الأساس إلى التشطيب",
      icon: Building,
    },
    {
      title: "Equipment Rental",
      titleAr: "تأجير المعدات",
      description: "Professional construction equipment for all project needs",
      descriptionAr: "معدات البناء المهنية لجميع احتياجات المشاريع",
      icon: Truck,
    },
    {
      title: "Carpentry",
      titleAr: "النجارة",
      description: "Custom woodwork and carpentry solutions",
      descriptionAr: "أعمال النجارة والخشب المخصصة",
      icon: Hammer,
    },
    {
      title: "Ironworks",
      titleAr: "أعمال الحديد",
      description: "Steel fabrication and ironwork installations",
      descriptionAr: "تصنيع الصلب وتركيب أعمال الحديد",
      icon: Settings,
    },
    {
      title: "Masonry",
      titleAr: "البناء بالحجر",
      description: "Stone and brick construction services",
      descriptionAr: "خدمات البناء بالحجر والطوب",
      icon: Square,
    },
    {
      title: "Plastering",
      titleAr: "اللياسة",
      description: "Professional wall finishing and plastering",
      descriptionAr: "تشطيب الجدران واللياسة المهنية",
      icon: Layers,
    },
    {
      title: "Gypsum Decor",
      titleAr: "ديكور الجبس",
      description: "Decorative gypsum work and ceiling designs",
      descriptionAr: "أعمال الجبس الزخرفية وتصاميم الأسقف",
      icon: Home,
    },
    {
      title: "Painting",
      titleAr: "الدهان",
      description: "Interior and exterior painting services",
      descriptionAr: "خدمات الدهان الداخلي والخارجي",
      icon: Palette,
    },
    {
      title: "Electrical Works",
      titleAr: "الأعمال الكهربائية",
      description: "Complete electrical installation and maintenance",
      descriptionAr: "التركيب والصيانة الكهربائية الكاملة",
      icon: Zap,
    },
    {
      title: "Plumbing",
      titleAr: "السباكة",
      description: "Water systems and plumbing installations",
      descriptionAr: "أنظمة المياه وتركيبات السباكة",
      icon: Droplets,
    },
    {
      title: "Roof Tiling (Qarmid)",
      titleAr: "تبليط الأسطح (قرميد)",
      description: "Traditional and modern roof tiling solutions",
      descriptionAr: "حلول تبليط الأسطح التقليدية والحديثة",
      icon: HardHat,
    },
    {
      title: "Steel Hangers",
      titleAr: "الهناجر الصلب",
      description: "Industrial steel structure construction",
      descriptionAr: "بناء الهياكل الصلبة الصناعية",
      icon: Building,
    },
    {
      title: "Tiling",
      titleAr: "البلاط",
      description: "Floor and wall tiling installations",
      descriptionAr: "تركيب بلاط الأرضيات والجدران",
      icon: Square,
    },
  ]

  const projects = [
    {
      id: 1,
      title: "Modern Villa Construction",
      category: "construction",
      image: "/placeholder.svg?height=300&width=400",
    },
    { id: 2, title: "Commercial Building", category: "construction", image: "/placeholder.svg?height=300&width=400" },
    { id: 3, title: "Custom Carpentry Work", category: "carpentry", image: "/placeholder.svg?height=300&width=400" },
    { id: 4, title: "Steel Structure Hangar", category: "ironworks", image: "/placeholder.svg?height=300&width=400" },
    { id: 5, title: "Luxury Interior Painting", category: "painting", image: "/placeholder.svg?height=300&width=400" },
    { id: 6, title: "Electrical Installation", category: "electrical", image: "/placeholder.svg?height=300&width=400" },
    { id: 7, title: "Plumbing System", category: "plumbing", image: "/placeholder.svg?height=300&width=400" },
    { id: 8, title: "Roof Tiling Project", category: "roofing", image: "/placeholder.svg?height=300&width=400" },
  ]

  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      nameAr: "أحمد الراشد",
      text: "Exceptional quality and professional service. They completed our villa construction on time and within budget.",
      textAr: "جودة استثنائية وخدمة مهنية. أكملوا بناء فيلتنا في الوقت المحدد وضمن الميزانية.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      nameAr: "سارة جونسون",
      text: "Outstanding craftsmanship in our office renovation. Highly recommend their services.",
      textAr: "حرفية متميزة في تجديد مكتبنا. أوصي بشدة بخدماتهم.",
      rating: 5,
    },
    {
      name: "Mohammed Hassan",
      nameAr: "محمد حسن",
      text: "Professional team with excellent attention to detail. Great experience working with them.",
      textAr: "فريق محترف مع اهتمام ممتاز بالتفاصيل. تجربة رائعة في العمل معهم.",
      rating: 5,
    },
  ]

  const filteredProjects =
    selectedFilter === "all" ? projects : projects.filter((project) => project.category === selectedFilter)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-orange-600 to-orange-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Construction site"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Badge variant="secondary" className="bg-orange-500 text-white px-4 py-2 text-sm">
              <Award className="w-4 h-4 mr-2" />
              15+ Years Experience | 15+ سنة خبرة
            </Badge>
            <Badge variant="secondary" className="bg-yellow-500 text-black px-4 py-2 text-sm">
              <Shield className="w-4 h-4 mr-2" />
              Certified Contractor | مقاول معتمد
            </Badge>
            <Badge variant="secondary" className="bg-green-500 text-white px-4 py-2 text-sm">
              <CheckCircle className="w-4 h-4 mr-2" />
              Free Site Visit | زيارة موقع مجانية
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building the Future Today
            <br />
            <span className="text-3xl md:text-4xl text-orange-200">نبني المستقبل اليوم</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Your trusted partner for all construction and contracting needs
            <br />
            <span className="text-lg">شريكك الموثوق لجميع احتياجات البناء والمقاولات</span>
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
            Get a Quote | احصل على عرض سعر
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us | من نحن</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With over 15 years of experience in the construction industry, we have built our reputation on three core
              values:
              <strong className="text-orange-600"> Trust, Quality, and Safety</strong>. Our team of skilled
              professionals is dedicated to delivering exceptional construction services that exceed our clients'
              expectations.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed" dir="rtl">
              مع أكثر من 15 عامًا من الخبرة في صناعة البناء، بنينا سمعتنا على ثلاث قيم أساسية:
              <strong className="text-orange-600"> الثقة والجودة والأمان</strong>. فريقنا من المهنيين المهرة مكرس لتقديم
              خدمات بناء استثنائية تتجاوز توقعات عملائنا.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Trust | الثقة</h3>
                <p className="text-gray-600">Building lasting relationships through reliability and transparency</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality | الجودة</h3>
                <p className="text-gray-600">Delivering superior craftsmanship in every project</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HardHat className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety | الأمان</h3>
                <p className="text-gray-600">Maintaining the highest safety standards on every site</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services | خدماتنا</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive construction services to meet all your building needs
              <br />
              نقدم خدمات بناء شاملة لتلبية جميع احتياجاتك في البناء
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-orange-500"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {service.title}
                      <br />
                      <span className="text-sm text-gray-600 font-normal">{service.titleAr}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600 leading-relaxed">
                      {service.description}
                      <br />
                      <span className="text-sm" dir="rtl">
                        {service.descriptionAr}
                      </span>
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Projects | مشاريعنا</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Explore our portfolio of successful construction projects
              <br />
              استكشف محفظة مشاريع البناء الناجحة لدينا
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                variant={selectedFilter === "all" ? "default" : "outline"}
                onClick={() => setSelectedFilter("all")}
                className={
                  selectedFilter === "all"
                    ? "bg-orange-500 hover:bg-orange-600"
                    : "border-orange-500 text-orange-500 hover:bg-orange-50"
                }
              >
                All Projects | جميع المشاريع
              </Button>
              <Button
                variant={selectedFilter === "construction" ? "default" : "outline"}
                onClick={() => setSelectedFilter("construction")}
                className={
                  selectedFilter === "construction"
                    ? "bg-orange-500 hover:bg-orange-600"
                    : "border-orange-500 text-orange-500 hover:bg-orange-50"
                }
              >
                Construction | البناء
              </Button>
              <Button
                variant={selectedFilter === "carpentry" ? "default" : "outline"}
                onClick={() => setSelectedFilter("carpentry")}
                className={
                  selectedFilter === "carpentry"
                    ? "bg-orange-500 hover:bg-orange-600"
                    : "border-orange-500 text-orange-500 hover:bg-orange-50"
                }
              >
                Carpentry | النجارة
              </Button>
              <Button
                variant={selectedFilter === "electrical" ? "default" : "outline"}
                onClick={() => setSelectedFilter("electrical")}
                className={
                  selectedFilter === "electrical"
                    ? "bg-orange-500 hover:bg-orange-600"
                    : "border-orange-500 text-orange-500 hover:bg-orange-50"
                }
              >
                Electrical | كهربائي
              </Button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900">{project.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials | شهادات العملاء</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What our satisfied clients say about our work
              <br />
              ما يقوله عملاؤنا الراضون عن عملنا
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm" dir="rtl">
                    "{testimonial.textAr}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600" dir="rtl">
                      {testimonial.nameAr}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contact Us | اتصل بنا</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Ready to start your construction project? Get in touch with us today
              <br />
              مستعد لبدء مشروع البناء الخاص بك؟ تواصل معنا اليوم
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-xl">Send us a message | أرسل لنا رسالة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name | اسمك"
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                  <Input
                    placeholder="Phone Number | رقم الهاتف"
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                <Input
                  placeholder="Email | البريد الإلكتروني"
                  type="email"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
                <Input
                  placeholder="Service Type | نوع الخدمة"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
                <Textarea
                  placeholder="Your Message | رسالتك"
                  rows={4}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Send Message | إرسال الرسالة
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-orange-400">Get in Touch | تواصل معنا</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-500 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone | الهاتف</p>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-500 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Email | البريد الإلكتروني</p>
                      <p className="text-gray-300">info@constructionco.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-500 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Address | العنوان</p>
                      <p className="text-gray-300">123 Construction Ave, Building City</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-500 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Working Hours | ساعات العمل</p>
                      <p className="text-gray-300">Mon-Fri: 8AM-6PM | السبت: 8ص-2م</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="bg-green-600 p-6 rounded-lg text-center">
                <MessageCircle className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">WhatsApp Us | واتساب</h4>
                <p className="text-green-100 mb-4">Get instant quotes and support</p>
                <Button className="bg-green-500 hover:bg-green-400 text-white">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">ConstructionCo | شركة البناء</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Your trusted partner for all construction and contracting needs. Building dreams with quality, safety,
                and reliability.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed" dir="rtl">
                شريكك الموثوق لجميع احتياجات البناء والمقاولات. نبني الأحلام بالجودة والأمان والموثوقية.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors">
                  <Facebook className="w-5 h-5 text-white" />
                </Link>
                <Link href="#" className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors">
                  <Instagram className="w-5 h-5 text-white" />
                </Link>
                <Link href="#" className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors">
                  <Linkedin className="w-5 h-5 text-white" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-orange-400 mb-4">Quick Links | روابط سريعة</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    About Us | من نحن
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Services | الخدمات
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Projects | المشاريع
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Contact | اتصل بنا
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-orange-400 mb-4">Services | الخدمات</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    General Construction
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Equipment Rental
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Electrical Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Plumbing
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} ConstructionCo. All rights reserved. | جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
