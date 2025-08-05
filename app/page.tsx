"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { link } from "fs";

export default function ConstructionPortfolio() {
    const [selectedFilter, setSelectedFilter] = useState("all");

    const services = [
        {
            title: "General Construction",
            titleAr: "البناء العام",
            description:
                "Complete construction solutions from foundation to finish",
            descriptionAr: "حلول البناء الكاملة من الأساس إلى التشطيب",
            icon: Building,
        },
        {
            title: "Equipment Rental",
            titleAr: "تأجير المعدات",
            description:
                "Professional construction equipment for all project needs",
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
    ];

    const projects = [
        {
            id: 1,
            title: " فيلا سكنية حديثة",
            category: "construction",
            image: "/villa.jpg",
            link: "https://www.facebook.com/rw.t.alsahl.2025/posts/pfbid05s3VWSRLeY8TMowtoG3FYYWo7GMuf7w4iV2KewPSF6K7R6sPET1b1dtFZ8zfziZ1l",
        },
        {
            id: 2,
            title: "اعمال صبة عمدان",
            category: "construction",
            image: "/saba.jpg",
            link: "https://www.facebook.com/share/v/1RE1ZkQ5i9/",
        },
        {
            id: 3,
            title: " اعمال حداده السقف ",
            category: "construction",
            image: "/سقف.jpg",
            link: "https://www.facebook.com/rw.t.alsahl.2025/posts/pfbid02ZDyU8wwBWtGMpQG71bPYWXaTZnweVYrzoR2c3axWzTPEDz7MMKSkUQ8WUBTKd3J7l",
        },
        {
            id: 4,
            title: "اعمال مقاولات وتشطيب",
            category: "construction",
            image: "/constructre-2.jpg",
            link: "https://www.facebook.com/share/v/1BQk6U4vTa/",
        },
        {
            id: 5,
            title: "اعمال واجهات و مداخل",
            category: "other",
            image: "/waghat.jpg",
            link: "https://www.facebook.com/share/p/1BrzVafsYi/",
        },
        {
            id: 6,
            title: "سقالات",
            category: "other",
            image: "/skallat.jpg",
            link: "https://www.facebook.com/photo/?fbid=902177104583621&set=a.763889681745698",
        },
    ];

    const testimonials = [
        {
            name: "Ahmed Al-Rashid",
            nameAr: "أحمد الراشد",
            text: "Exceptional quality and professional service. They completed our villa construction on time and within budget.",
            textAr: "جودة استثنائية وخدمة مهنية. أكملوا بناء فيلتنا في الوقت المحدد وضمن الميزانية.",
            rating: 5,
        },
        {
            name: "ebrahim Al-Salem",
            nameAr: "ابراهيم السالم",
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
    ];

    const filteredProjects =
        selectedFilter === "all"
            ? projects
            : projects.filter((project) => project.category === selectedFilter);

    return (
        <div className="min-h-screen bg-gray-100 ">
            {/* Hero Section */}
            <section id="hero">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 ">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                        <div className="relative text-center max-w-4xl mx-auto px-4">
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                Building the Future Today
                                <br />
                                <span className="text-3xl md:text-4xl text-orange-400">
                                    نبني المستقبل اليوم
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 text-gray-800 max-w-2xl mx-auto">
                                Your trusted partner for all construction and
                                contracting needs
                                <br />
                                <span className="text-lg">
                                    شريكك الموثوق لجميع احتياجات البناء
                                    والمقاولات
                                </span>
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Badge
                                    variant="secondary"
                                    className="bg-orange-500 text-white px-4 py-2 text-sm"
                                >
                                    <Award className="w-4 h-4 mr-2" />
                                    15+ Years Experience | 15+ سنة خبرة
                                </Badge>
                                <Badge
                                    variant="secondary"
                                    className="bg-yellow-500 text-black px-4 py-2 text-sm"
                                >
                                    <Shield className="w-4 h-4 mr-2" />
                                    Certified Contractor | مقاول معتمد
                                </Badge>
                                <Badge
                                    variant="secondary"
                                    className="bg-green-500 text-white px-4 py-2 text-sm"
                                >
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    Free Site Visit | زيارة موقع مجانية
                                </Badge>
                            </div>
                        </div>

                        <div className="max-md:hidden">
                            <img
                                src="/hero.jpg"
                                className="object-cover"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section id="about" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            About Us | من نحن
                        </h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            With over 15 years of experience in the construction
                            industry, we have built our reputation on three core
                            values:
                            <strong className="text-orange-600">
                                {" "}
                                Trust, Quality, and Safety
                            </strong>
                            . Our team of skilled professionals is dedicated to
                            delivering exceptional construction services that
                            exceed our clients' expectations.
                        </p>
                        <p
                            className="text-lg text-gray-700 mb-8 leading-relaxed"
                            dir="rtl"
                        >
                            مع أكثر من 15 عامًا من الخبرة في صناعة البناء، بنينا
                            سمعتنا على ثلاث قيم أساسية:
                            <strong className="text-orange-600">
                                {" "}
                                الثقة والجودة والأمان
                            </strong>
                            . فريقنا من المهنيين المهرة مكرس لتقديم خدمات بناء
                            استثنائية تتجاوز توقعات عملائنا.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                            <div className="text-center">
                                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Shield className="w-8 h-8 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Trust | الثقة
                                </h3>
                                <p className="text-gray-600">
                                    Building lasting relationships through
                                    reliability and transparency
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-8 h-8 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Quality | الجودة
                                </h3>
                                <p className="text-gray-600">
                                    Delivering superior craftsmanship in every
                                    project
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <HardHat className="w-8 h-8 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Safety | الأمان
                                </h3>
                                <p className="text-gray-600">
                                    Maintaining the highest safety standards on
                                    every site
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our Services | خدماتنا
                        </h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We offer comprehensive construction services to meet
                            all your building needs
                            <br />
                            نقدم خدمات بناء شاملة لتلبية جميع احتياجاتك في
                            البناء
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
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
                                            <span className="text-sm text-gray-600 font-normal">
                                                {service.titleAr}
                                            </span>
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
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Projects Gallery Section */}
            <section id="projects" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our Projects | مشاريعنا
                        </h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                            Explore our portfolio of successful construction
                            projects
                            <br />
                            استكشف محفظة مشاريع البناء الناجحة لدينا
                        </p>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <Button
                                variant={
                                    selectedFilter === "all"
                                        ? "default"
                                        : "outline"
                                }
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
                                variant={
                                    selectedFilter === "construction"
                                        ? "default"
                                        : "outline"
                                }
                                onClick={() =>
                                    setSelectedFilter("construction")
                                }
                                className={
                                    selectedFilter === "construction"
                                        ? "bg-orange-500 hover:bg-orange-600"
                                        : "border-orange-500 text-orange-500 hover:bg-orange-50"
                                }
                            >
                                Construction | البناء
                            </Button>

                            <Button
                                variant={
                                    selectedFilter === "other"
                                        ? "default"
                                        : "outline"
                                }
                                onClick={() => setSelectedFilter("other")}
                                className={
                                    selectedFilter === "other"
                                        ? "bg-orange-500 hover:bg-orange-600"
                                        : "border-orange-500 text-orange-500 hover:bg-orange-50"
                                }
                            >
                                Other | أخرى
                            </Button>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProjects.map((project) => (
                            <Card
                                key={project.id}
                                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="relative h-48 ">
                                    <Image
                                        src={
                                            project.image || "/placeholder.svg"
                                        }
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <CardContent className="px-4  ">
                                    <h3 className="font-semibold text-gray-900">
                                        {project.title}
                                    </h3>
                                </CardContent>
                                <CardContent className="p-4">
                                    <Button
                                        variant="outline"
                                        className="w-full"
                                    >
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                        >
                                            View Details | عرض التفاصيل
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Client Testimonials | شهادات العملاء
                        </h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            What our satisfied clients say about our work
                            <br />
                            ما يقوله عملاؤنا الراضون عن عملنا
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <Card
                                key={index}
                                className="border-l-4 border-l-orange-500"
                            >
                                <CardContent className="p-6">
                                    <div className="flex mb-4">
                                        {[...Array(testimonial.rating)].map(
                                            (_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-5 h-5 text-yellow-400 fill-current"
                                                />
                                            )
                                        )}
                                    </div>
                                    <p className="text-gray-700 mb-4 leading-relaxed">
                                        "{testimonial.text}"
                                    </p>
                                    <p
                                        className="text-gray-700 mb-4 leading-relaxed text-sm"
                                        dir="rtl"
                                    >
                                        "{testimonial.textAr}"
                                    </p>
                                    <div className="border-t pt-4">
                                        <p className="font-semibold text-gray-900">
                                            {testimonial.name}
                                        </p>
                                        <p
                                            className="text-sm text-gray-600"
                                            dir="rtl"
                                        >
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
            <section id="contact" className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            Contact Us | اتصل بنا
                        </h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Ready to start your construction project? Get in
                            touch with us today
                            <br />
                            مستعد لبدء مشروع البناء الخاص بك؟ تواصل معنا اليوم
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div className="bg-green-600 p-6 rounded-lg text-center">
                            <MessageCircle className="w-12 h-12 text-white mx-auto mb-4" />
                            <h4 className="text-xl font-semibold mb-2">
                                WhatsApp Us | واتساب
                            </h4>
                            <p className="text-green-100 mb-4">
                                Get instant quotes and support
                            </p>
                            <Button className="bg-green-500 hover:bg-green-400 text-white">
                                <Link
                                    href="https://wa.me/966509177211"
                                    target="_blank"
                                >
                                    Chat Now | ابدأ الدردشة
                                </Link>
                            </Button>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6 text-orange-400">
                                    Get in Touch | تواصل معنا
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-orange-500 p-3 rounded-full">
                                            <Phone className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">
                                                Phone | الهاتف
                                            </p>
                                            <p className="text-gray-300 ">
                                                <span className="block">
                                                    (+966) 0509177211
                                                </span>
                                                <span className="block">
                                                    (+966) 0509289058
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-orange-500 p-3 rounded-full">
                                            <Mail className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">
                                                Email | البريد الإلكتروني
                                            </p>
                                            <p className="text-gray-300">
                                                yson715@hotmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-orange-500 p-3 rounded-full">
                                            <MapPin className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">
                                                Address | العنوان
                                            </p>
                                            <p className="text-gray-300">
                                                القحمة، المملكة العربية السعودية
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-orange-500 p-3 rounded-full">
                                            <Clock className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">
                                                Working Hours | ساعات العمل
                                            </p>
                                            <p className="text-gray-300">
                                                Sat-Fri: 8AM-6PM | السبت: 8ص-2م
                                            </p>
                                        </div>
                                    </div>
                                </div>
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
                            <h3 className="text-2xl font-bold text-orange-400 mb-4">
                                ConstructionCo | شركة البناء
                            </h3>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Your trusted partner for all construction and
                                contracting needs. Building dreams with quality,
                                safety, and reliability.
                            </p>
                            <p
                                className="text-gray-300 mb-6 leading-relaxed"
                                dir="rtl"
                            >
                                شريكك الموثوق لجميع احتياجات البناء والمقاولات.
                                نبني الأحلام بالجودة والأمان والموثوقية.
                            </p>
                            <div className="flex space-x-4">
                                <Link
                                    href="https://www.facebook.com/rw.t.alsahl.2025"
                                    target="_blank"
                                    className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors"
                                >
                                    <Facebook className="w-5 h-5 text-white" />
                                </Link>
                                <Link
                                    href="https://www.instagram.com/mhmoo/"
                                    target="_blank"
                                    className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors"
                                >
                                    <Instagram className="w-5 h-5 text-white" />
                                </Link>
                                <Link
                                    href="https://x.com/MwsstRw"
                                    target="_blank"
                                    className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors"
                                >
                                    <Twitter className="w-5 h-5 text-white" />
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-orange-400 mb-4">
                                Quick Links | روابط سريعة
                            </h4>
                            <ul className="space-y-2 text-gray-300">
                                <li>
                                    <Link
                                        href="#about"
                                        className="hover:text-orange-400 transition-colors"
                                    >
                                        About Us | من نحن
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#services"
                                        className="hover:text-orange-400 transition-colors"
                                    >
                                        Services | الخدمات
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#projects"
                                        className="hover:text-orange-400 transition-colors"
                                    >
                                        Projects | المشاريع
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#contact"
                                        className="hover:text-orange-400 transition-colors"
                                    >
                                        Contact | اتصل بنا
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-orange-400 mb-4">
                                Services | الخدمات
                            </h4>
                            <ul className="space-y-2 text-gray-300">
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-orange-400 transition-colors"
                                    >
                                        General Construction
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-orange-400 transition-colors"
                                    >
                                        Equipment Rental
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-orange-400 transition-colors"
                                    >
                                        Electrical Works
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-orange-400 transition-colors"
                                    >
                                        Plumbing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                        <p className="text-gray-400">
                            © {new Date().getFullYear()} .روعة الساحل All rights
                            reserved. | جميع الحقوق محفوظة
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
