import { useEffect, useRef, useState } from "react";
import { BatteryCharging, Bike, ChevronLeft, ChevronRight, Clock, Instagram, MapPin, MessageCircle, Moon, PackageCheck, Phone, ShieldCheck, Star, Sun, Truck, Users } from "lucide-react";

import heroImage from "@/assets/megastore-storefront.webp";
import ecoxtremImage from "@/assets/ecoxtrem-armored-plus-2026.jpg.asset.json";
import bisonGtImage from "@/assets/bison-gt-1000w.jpg.asset.json";
import cooperTouringProImage from "@/assets/cooper-touring-pro-2026.png.asset.json";
import v20ProImage from "@/assets/v20-pro.png.asset.json";
import armoredPlus4000WImage from "@/assets/armored-plus-4000w.png.asset.json";
import puck7AhImage from "@/assets/puck-7ah.png.asset.json";
import kukirinG2Image from "@/assets/kukirin-g2.png.asset.json";
import dualtronPopImage from "@/assets/dualtron-pop.png.asset.json";
import maxwheelGt4Image from "@/assets/maxwheel-gt4.png.asset.json";
import tkCityProPlusImage from "@/assets/tk-city-pro-plus.png.asset.json";
import tkCityPlusImage from "@/assets/tk-city-plus.png.asset.json";

const phoneDisplay = "06 00 17 66 61";
const phoneHref = "tel:+212600176661";
const whatsappHref = "https://wa.me/c/212600848215";
const priceWhatsAppHref = "https://api.whatsapp.com/send/?phone=%2B212600114399&text&type=phone_number&app_absent=0&utm_source=ig";
const facebookHref = "https://www.facebook.com/MegaStore79";
const instagramHref = "https://www.instagram.com/megastore.79";
const mapsHref = "https://www.google.com/maps/search/?api=1&query=MegaStore%20734F%2B6M%20Sidi%20Slimane%20Morocco";
const reviewsHref = "https://bizniz.ma/fr/businessMorocco/sidi-slimane/magasin-de-velos-electriques/megastore-sidi-slimane-rabat-sale-kenitra-5500";

type Language = "fr" | "ar";

const copy = {
  fr: {
    badge: "Trottinettes & vélos électriques",
    heroTitle: "MegaStore Sidi Slimane",
    heroText: "Vélos et trottinettes électriques à Sidi Slimane · دراجات وسكوترات كهربائية في سيدي سليمان",
    whatsapp: "WhatsApp",
    callNow: "Appeler maintenant",
    callHint: `Ou appelez : ${phoneDisplay}`,
    contact: "Contact",
    contactActions: [
      { label: "WhatsApp", href: whatsappHref, icon: MessageCircle },
      { label: "Appel", href: phoneHref, icon: Phone },
      { label: "Instagram", href: instagramHref, icon: Instagram },
      { label: "Facebook", href: facebookHref, icon: Users },
    ],
    products: [
      { name: "Vélos électriques", detail: "E-bikes et scooters pour travail, école, courses et déplacements à Sidi Slimane.", icon: Bike, href: whatsappHref },
      { name: "Conseil batterie", detail: "Aide rapide pour choisir l’autonomie, la charge et le modèle adapté à votre route.", icon: BatteryCharging, href: whatsappHref },
      { name: "Support local", detail: "Conseil, commande, livraison et réponses après-vente en contact direct.", icon: ShieldCheck, href: phoneHref },
    ],
    galleryBadge: "Photos produits",
    galleryTitle: "Glissez pour voir le catalogue mis à jour",
    askPrice: "Demander le prix",
    gallery: [
      { title: "COOPER TOURING PRO 2026", specs: "Vitesse max 70 km/h · Autonomie max 150 km · Batterie 72V 40Ah · Moteur 3000W", image: cooperTouringProImage.url },
      { title: "V20 PRO ⚡", specs: "Vitesse max 45 km/h · Autonomie max 50 km · Batterie 48V 20Ah · Moteur 1000W", image: v20ProImage.url },
      { title: "Armored Plus 4000W ⚡", specs: "Vitesse max 80 km/h · Autonomie max 70 km · Batterie 60V 24Ah · Double moteur 2000W x2", image: armoredPlus4000WImage.url },
      { title: "Puck 7Ah ⚡", specs: "Vitesse max 25 km/h · Autonomie max 25 km · Batterie 36V 7.6Ah · Moteur 700W", image: puck7AhImage.url },
      { title: "Kukirin G2", specs: "Vitesse max 45 km/h · Autonomie max 55 km · Batterie 48V 15Ah · Moteur 1600W", image: kukirinG2Image.url },
      { title: "Dualtron POP ⚡", specs: "Vitesse max 55 km/h · Autonomie max 40 km · Batterie 52V 14Ah · Moteur 1450W", image: dualtronPopImage.url },
      { title: "Maxwheel GT4", specs: "Vitesse max 56 km/h · Autonomie max 50 km · Batterie 48V 13Ah · Moteur 800W", image: maxwheelGt4Image.url },
      { title: "TK City Pro + ⚡", specs: "Vitesse max 35 km/h · Autonomie max 50 km · Batterie 36V 13Ah · Moteur 750W", image: tkCityProPlusImage.url },
      { title: "TK City + ⚡", specs: "Vitesse max 25 km/h · Autonomie max 35 km · Batterie 36V 10Ah · Moteur 500W", image: tkCityPlusImage.url },
      { title: "ECOXTREM ARMORED PLUS 2026", specs: "Trottinette électrique robuste · Moteur puissant · Autonomie longue distance", image: ecoxtremImage.url },
      { title: "PROMO BISON GT 1000W", specs: "Moteur 1000W · Pneus tout-terrain · LED bleue · Cadre robuste", image: bisonGtImage.url },
    ],
    serviceBadge: "Services",
    serviceTitle: "Une aide simple et claire avant l’achat.",
    services: [
      { title: "Livraison", text: "Livraison disponible à Sidi Slimane et alentours.", icon: Truck, href: whatsappHref },
      { title: "Conseil", text: "Choisissez rapidement le bon modèle.", icon: Users, href: phoneHref },
      { title: "Commande", text: "Confirmez le prix et réservez sur WhatsApp.", icon: PackageCheck, href: whatsappHref },
    ],
    directionsTitle: "Itinéraire vers MegaStore",
    directionsText: "Trouvez MegaStore à Sidi Slimane 14200, Maroc. Ouvrez l’itinéraire directement dans Google Maps.",
    mapsButton: "Ouvrir Google Maps",
    hours: "Horaires",
    days: "Lundi à dimanche",
    reviewsBadge: "Avis clients",
    reviewsTitle: "Les clients choisissent MegaStore pour le service et la qualité.",
    finalBadge: "Contact",
    finalTitle: "Demandez les prix, la disponibilité et le meilleur modèle pour votre trajet.",
    finalText: "Appelez ou envoyez un message à MegaStore pour les vélos électriques, batteries, livraison et directions.",
  },
  ar: {
    badge: "دراجات وسكوترات كهربائية",
    heroTitle: "ميغا ستور سيدي سليمان",
    heroText: "Vélos et trottinettes électriques à Sidi Slimane · دراجات وسكوترات كهربائية في سيدي سليمان",
    whatsapp: "واتساب",
    callNow: "اتصل الآن",
    callHint: `أو اتصل: ${phoneDisplay}`,
    contact: "تواصل",
    contactActions: [
      { label: "واتساب", href: whatsappHref, icon: MessageCircle },
      { label: "اتصال", href: phoneHref, icon: Phone },
      { label: "إنستغرام", href: instagramHref, icon: Instagram },
      { label: "فيسبوك", href: facebookHref, icon: Users },
    ],
    products: [
      { name: "دراجات كهربائية", detail: "دراجات وسكوترات للعمل، المدرسة، التسوق والتنقل اليومي في سيدي سليمان.", icon: Bike, href: whatsappHref },
      { name: "نصيحة البطارية", detail: "مساعدة سريعة لاختيار المدى، الشحن والموديل المناسب لطريقك.", icon: BatteryCharging, href: whatsappHref },
      { name: "مساعدة محلية", detail: "نصيحة، طلب، معلومات التوصيل وأجوبة ما بعد البيع بتواصل مباشر.", icon: ShieldCheck, href: phoneHref },
    ],
    galleryBadge: "صور المنتجات",
    galleryTitle: "مرّر لمشاهدة الكاتالوغ الجديد",
    askPrice: "سول على الثمن",
    gallery: [
      { title: "COOPER TOURING PRO 2026", specs: "السرعة القصوى 70 كم/س · المدى 150 كم · بطارية 72V 40Ah · محرك 3000W", image: cooperTouringProImage.url },
      { title: "V20 PRO ⚡", specs: "السرعة القصوى 45 كم/س · المدى 50 كم · بطارية 48V 20Ah · محرك 1000W", image: v20ProImage.url },
      { title: "Armored Plus 4000W ⚡", specs: "السرعة القصوى 80 كم/س · المدى 70 كم · بطارية 60V 24Ah · محركان 2000W x2", image: armoredPlus4000WImage.url },
      { title: "Puck 7Ah ⚡", specs: "السرعة القصوى 25 كم/س · المدى 25 كم · بطارية 36V 7.6Ah · محرك 700W", image: puck7AhImage.url },
      { title: "Kukirin G2", specs: "السرعة القصوى 45 كم/س · المدى 55 كم · بطارية 48V 15Ah · محرك 1600W", image: kukirinG2Image.url },
      { title: "Dualtron POP ⚡", specs: "السرعة القصوى 55 كم/س · المدى 40 كم · بطارية 52V 14Ah · محرك 1450W", image: dualtronPopImage.url },
      { title: "Maxwheel GT4", specs: "السرعة القصوى 56 كم/س · المدى 50 كم · بطارية 48V 13Ah · محرك 800W", image: maxwheelGt4Image.url },
      { title: "TK City Pro + ⚡", specs: "السرعة القصوى 35 كم/س · المدى 50 كم · بطارية 36V 13Ah · محرك 750W", image: tkCityProPlusImage.url },
      { title: "TK City + ⚡", specs: "السرعة القصوى 25 كم/س · المدى 35 كم · بطارية 36V 10Ah · محرك 500W", image: tkCityPlusImage.url },
      { title: "ECOXTREM ARMORED PLUS 2026", specs: "سكوتر كهربائي قوي · محرك قوي · مدى طويل", image: ecoxtremImage.url },
      { title: "عرض BISON GT 1000W", specs: "محرك 1000W · عجلات لجميع الطرق · إضاءة LED زرقاء · هيكل قوي", image: bisonGtImage.url },
    ],
    serviceBadge: "الخدمات",
    serviceTitle: "مساعدة واضحة وبسيطة قبل الشراء.",
    services: [
      { title: "التوصيل", text: "التوصيل متوفر في سيدي سليمان والنواحي.", icon: Truck, href: whatsappHref },
      { title: "النصيحة", text: "اختَر الموديل المناسب بسرعة.", icon: Users, href: phoneHref },
      { title: "الطلب", text: "أكد الثمن واحجز عبر واتساب.", icon: PackageCheck, href: whatsappHref },
    ],
    directionsTitle: "الاتجاه إلى ميغا ستور",
    directionsText: "اعثر على ميغا ستور في سيدي سليمان 14200، المغرب. افتح الطريق مباشرة في Google Maps.",
    mapsButton: "افتح Google Maps",
    hours: "أوقات العمل",
    days: "من الاثنين إلى الأحد",
    reviewsBadge: "آراء الزبناء",
    reviewsTitle: "الزبناء يختارون MegaStore للخدمة والجودة.",
    finalBadge: "تواصل",
    finalTitle: "اسأل على الأثمنة، التوفر وأفضل موديل لطريقك.",
    finalText: "اتصل أو أرسل رسالة إلى MegaStore للدراجات الكهربائية، البطاريات، التوصيل والاتجاهات.",
  },
};

const reviews = [
  { quote: "Excellent service, produits de qualité. Je recommande vivement !", name: "Hicham Draoui" },
  { quote: "Service et qualité le meilleur fl mghrib ⭐️", name: "abdessamad benh" },
  { quote: "Meilleur service 👏", name: "Oumaima Ben kajja" },
];

const Index = () => {
  const [language, setLanguage] = useState<Language>("fr");
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const saved = localStorage.getItem("megastore-theme");
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("megastore-theme", theme);
  }, [theme]);


  const t = copy[language];
  const isArabic = language === "ar";

  const scrollGallery = (dir: "next" | "prev") => {
    const el = galleryRef.current;
    if (!el) return;
    const step = el.clientWidth * 0.75;
    const delta = dir === "next" ? step : -step;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };


  return (
    <main className="min-h-screen bg-background text-foreground" dir={isArabic ? "rtl" : "ltr"} lang={language}>
      <section className="relative overflow-hidden bg-hero text-hero-foreground">
        <img src={heroImage} alt="MegaStore storefront with electric bikes and scooters" width={1920} height={1920} fetchPriority="high" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute bottom-0 left-0 h-1 w-full overflow-hidden bg-primary/30">
          <div className="h-full w-2/3 animate-pulse-line bg-gradient-warm motion-reduce:animate-none" />
        </div>

        <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-5">
          <a href="#top" className="text-2xl font-black tracking-tight">MegaStore</a>
          <div className="flex items-center gap-2">
            <div className="inline-flex rounded-full border border-hero-foreground/25 bg-card/12 p-1 backdrop-blur" aria-label="Language switcher">
              <button type="button" onClick={() => setLanguage("fr")} className={`rounded-full px-3 py-1.5 text-sm font-black transition focus:outline-none focus:ring-2 focus:ring-secondary ${language === "fr" ? "bg-background text-foreground" : "text-hero-foreground hover:bg-card/15"}`}>FR</button>
              <button type="button" onClick={() => setLanguage("ar")} className={`rounded-full px-3 py-1.5 text-sm font-black transition focus:outline-none focus:ring-2 focus:ring-secondary ${language === "ar" ? "bg-background text-foreground" : "text-hero-foreground hover:bg-card/15"}`}>العربية</button>
            </div>
            <button type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="inline-flex items-center gap-2 rounded-full bg-card/12 px-3 py-2 text-sm font-bold backdrop-blur transition hover:bg-card/20 focus:outline-none focus:ring-2 focus:ring-secondary" aria-label="Toggle dark mode">
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a href={phoneHref} className="hidden items-center gap-2 rounded-full bg-card/12 px-4 py-2 text-sm font-bold backdrop-blur transition hover:bg-card/20 focus:outline-none focus:ring-2 focus:ring-secondary sm:inline-flex">
              <Phone className="h-4 w-4" /> {phoneDisplay}
            </a>
          </div>
        </nav>

        <div id="top" className="relative z-10 mx-auto grid min-h-[88vh] max-w-6xl items-center gap-10 px-5 pb-16 pt-10">
          <div className="mx-auto max-w-3xl animate-soft-rise text-center">
            <a href={instagramHref} className="mb-5 inline-flex items-center gap-2 rounded-full bg-card/14 px-4 py-2 text-sm font-bold backdrop-blur transition hover:bg-card/22 focus:outline-none focus:ring-2 focus:ring-secondary">
              <Star className="h-4 w-4 fill-current" /> {t.badge}
            </a>
            <h1 className="text-balance text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">{t.heroTitle}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-hero-foreground/85 md:text-xl">{t.heroText}</p>
            <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-3">
              <a href={whatsappHref} className="inline-flex w-full items-center justify-center gap-3 rounded-md bg-gradient-cta px-8 py-5 text-lg font-black text-primary-foreground shadow-premium transition hover:-translate-y-0.5 hover:shadow-premium focus:outline-none focus:ring-2 focus:ring-secondary sm:text-xl">
                <MessageCircle className="h-5 w-5" /> {t.whatsapp}
              </a>
              <a href={phoneHref} className="inline-flex items-center justify-center gap-2 text-base font-black text-hero-foreground transition hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary">
                <Phone className="h-5 w-5" /> {t.callHint}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mega-grid bg-surface py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-5 md:grid-cols-3">
            {t.products.map(({ name, detail, icon: Icon, href }) => (
              <a href={href} key={name} className="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-soft transition hover:-translate-y-1 hover:shadow-premium focus:outline-none focus:ring-2 focus:ring-secondary">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-black">{name}</h2>
                <p className="mt-3 leading-7 text-muted-foreground">{detail}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-black text-secondary-foreground"><Bike className="h-4 w-4" /> {t.galleryBadge}</p>
              <h2 className="text-balance text-4xl font-black leading-tight md:text-5xl">{t.galleryTitle}</h2>
            </div>
            <a href={priceWhatsAppHref} className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-cta px-5 py-4 font-black text-primary-foreground shadow-soft transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-secondary"><MessageCircle className="h-5 w-5" /> {t.askPrice}</a>
          </div>
          <div className="relative">
            <button type="button" onClick={() => scrollGallery("prev")} className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-secondary" aria-label="Previous">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div ref={galleryRef} className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 [scrollbar-width:thin]">
              {t.gallery.map(({ title, specs, image }) => (
                <a href={priceWhatsAppHref} key={title} className="group min-w-[78%] snap-center overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-soft transition hover:-translate-y-1 hover:shadow-premium focus:outline-none focus:ring-2 focus:ring-secondary sm:min-w-[45%] lg:min-w-[31%]">
                  <img src={image} alt={`${title} available at MegaStore`} width={1200} height={1200} loading="lazy" decoding="async" className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="space-y-3 p-4">
                    <p className="text-lg font-black">{title}</p>
                    <p className="text-sm leading-6 text-muted-foreground">{specs}</p>
                    <div className="inline-flex items-center gap-2 font-black text-primary">
                      <MessageCircle className="h-5 w-5" /> {t.askPrice} (WhatsApp)
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <button type="button" onClick={() => scrollGallery("next")} className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-secondary" aria-label="Next">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-black text-secondary-foreground"><Truck className="h-4 w-4" /> {t.serviceBadge}</p>
            <h2 className="text-balance text-4xl font-black leading-tight md:text-5xl">{t.serviceTitle}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {t.services.map(({ title, text, icon: Icon, href }) => (
              <a href={href} key={title} className="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-soft transition hover:-translate-y-1 hover:shadow-premium focus:outline-none focus:ring-2 focus:ring-secondary">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-black">{title}</h2>
                <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16" id="directions">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 lg:grid-cols-3">
          <article className="rounded-lg border border-border bg-hero p-7 text-hero-foreground shadow-premium lg:col-span-2">
            <MapPin className="mb-4 h-8 w-8 text-secondary" />
            <h2 className="text-4xl font-black leading-tight md:text-5xl">{t.directionsTitle}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-hero-foreground/85">{t.directionsText}</p>
            <a href={mapsHref} className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-cta px-6 py-4 text-base font-black text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:shadow-premium focus:outline-none focus:ring-2 focus:ring-secondary"><MapPin className="h-5 w-5" /> {t.mapsButton}</a>
          </article>
          <article className="rounded-lg border border-border bg-card p-6 shadow-soft">
            <Clock className="mb-4 h-7 w-7 text-primary" />
            <h2 className="text-3xl font-black">{t.hours}</h2>
            <p className="mt-3 font-black">{t.days}</p>
            <p className="mt-2 leading-7 text-muted-foreground">11:30 AM–5:45 PM</p>
          </article>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-black text-secondary-foreground"><Star className="h-4 w-4 fill-current" /> {t.reviewsBadge}</p>
            <h2 className="text-balance text-4xl font-black leading-tight md:text-5xl">{t.reviewsTitle}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map(({ quote, name }) => (
              <a href={reviewsHref} key={name} className="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-soft transition hover:-translate-y-1 hover:shadow-premium focus:outline-none focus:ring-2 focus:ring-secondary">
                <div className="mb-4 flex gap-1 text-primary" aria-label="5 star review">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="leading-7 text-muted-foreground">“{quote}”</p>
                <p className="mt-5 font-black">{name}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-black text-secondary-foreground"><MessageCircle className="h-4 w-4" /> {t.finalBadge}</p>
            <h2 className="text-balance text-4xl font-black leading-tight md:text-5xl">{t.finalTitle}</h2>
          </div>
          <div className="rounded-lg bg-hero p-6 text-hero-foreground shadow-premium">
            <p className="text-lg leading-8 text-hero-foreground/85">{t.finalText}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappHref} className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-warm px-5 py-4 font-black text-secondary-foreground transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-secondary"><MessageCircle className="h-5 w-5" /> {t.whatsapp}</a>
              <a href={phoneHref} className="inline-flex items-center justify-center gap-2 rounded-md border border-hero-foreground/25 px-5 py-4 font-black transition hover:bg-card/10 focus:outline-none focus:ring-2 focus:ring-secondary"><Phone className="h-5 w-5" /> {t.callNow}</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
