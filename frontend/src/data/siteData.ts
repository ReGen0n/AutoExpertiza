import {
    Scale,
    Car,
    ShieldCheck,
    FileText,
    Phone,
    Mail,
    MapPin,
    MessageCircle,
    Calculator,
    Gavel,
    BadgeCheck,
    ClipboardCheck,
} from "lucide-react";

export const contacts = {
    name: "Парфьонов Олександр Олександрович",
    phone1: "(050) 607 44 30",
    phone2: "(096) 444 71 75",
    phone3: "(063) 539 15 70",
    phoneHref1: "tel:+380506074430",
    phoneHref2: "tel:+380964447175",
    phoneHref3: "tel:+380635391570",
    email: "avtoexpertiza7@gmail.com",
    address: "м. Київ, пр-т М. Бажана, 24/1",
};

export const services = [
    {
        icon: Car,
        title: "Автоекспертиза після ДТП",
        text: "Професійна експертиза автомобіля після дорожньо-транспортної пригоди.",
    },
    {
        icon: Calculator,
        title: "Визначення матеріального збитку",
        text: "Розрахунок вартості пошкоджень та матеріального збитку після ДТП.",
    },
    {
        icon: ClipboardCheck,
        title: "Оцінка автотранспорту",
        text: "Незалежна оцінка транспортних засобів для юридичних, страхових та майнових питань.",
    },
    {
        icon: Gavel,
        title: "Юридичний супровід у суді",
        text: "Професійний супровід справ, пов’язаних з ДТП, збитками та страховими спорами.",
    },
    {
        icon: ShieldCheck,
        title: "Спори зі страховими компаніями",
        text: "Допомога у вирішенні спорів зі страховими компаніями щодо виплат та компенсацій.",
    },
    {
        icon: Scale,
        title: "Юридична консультація",
        text: "Консультації щодо ДТП, оцінки збитків, страхових виплат та судових питань.",
    },
    {
        icon: FileText,
        title: "Автотехнічні експертизи",
        text: "Проведення автотехнічних експертиз для суду, страхових компаній та приватних осіб.",
    },
];

export const checks = [
    "Автоекспертиза після ДТП",
    "Визначення матеріального збитку",
    "Оцінка автотранспорту",
    "Юридичний супровід у суді",
    "Спори зі страховими компаніями",
    "Юридична консультація",
    "Автотехнічні експертизи",
    "Підготовка документів та висновків",
];

export const process = [
    "Ви звертаєтесь за консультацією",
    "Описуєте ситуацію або ДТП",
    "Проводиться огляд та аналіз документів",
    "Готується оцінка або експертний висновок",
    "Надається юридичний супровід за потреби",
];

export const benefits = [
    { icon: BadgeCheck, text: "Професійний досвід у автоекспертизі" },
    { icon: Scale, text: "Юридичний супровід у суді" },
    { icon: Calculator, text: "Розрахунок матеріального збитку" },
    { icon: ShieldCheck, text: "Допомога у спорах зі страховими" },
    { icon: FileText, text: "Підготовка документів" },
    { icon: MapPin, text: "Київ, пр-т М. Бажана, 24/1" },
];

export const contactCards = [
    {
        icon: Phone,
        label: "Телефон",
        value: contacts.phone1,
        href: contacts.phoneHref1,
    },
    {
        icon: Phone,
        label: "Телефон",
        value: contacts.phone2,
        href: contacts.phoneHref2,
    },
    {
        icon: Phone,
        label: "Телефон",
        value: contacts.phone3,
        href: contacts.phoneHref3,
    },
    {
        icon: Mail,
        label: "Email",
        value: contacts.email,
        href: `mailto:${contacts.email}`,
    },
    {
        icon: MapPin,
        label: "Адреса",
        value: contacts.address,
        href: "#contact",
    },
];