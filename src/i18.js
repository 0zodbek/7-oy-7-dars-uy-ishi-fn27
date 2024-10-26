import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Get Started for free",
      greeting: "Sign up for your free 14 day trial now!",
      header1: "Templates",
      header2: "Features",
      header3: "Pricing",
      header4: "Resources",
      heroTitle: "Say Hello! We’re always here to help.",
      heroSubtitle:
        "Interested in learning more about SmartMoving? Give us a call or send an email and one of our team members will be happy to assist you.",
      waitlistTitle: "Contact Us",
      waitlistDescription: "CALL US",
      emailPlaceholder: "Email Us",
      joinButton: "HEADQUARTERS",
      darkMode: "Dark Mode",
      lightMode: "Light Mode",
    },
  },
  uz: {
    translation: {
      welcome: "Bepul boshlang",
      greeting: "14 kunlik bepul sinov uchun hozir roʻyxatdan oʻting!",
      header1: "Shablonlar",
      header2: "Xususiyatlari",
      header3: "Narxlash",
      header4: "Resurslar",
      heroTitle: "Salom ayting! Biz har doim yordam berish uchun shu yerdamiz.",
      heroSubtitle:
        "SmartMoving haqida ko'proq bilishni xohlaysizmi? Bizga qo'ng'iroq qiling yoki elektron pochta xabarini yuboring va jamoamiz a'zolaridan biri sizga yordam berishdan xursand bo'ladi.",
      waitlistTitle: "Biz bilan bog'lanish",
      waitlistDescription: "BIZGA QO'ng'iroq qiling",
      emailPlaceholder: "Bizga elektron pochta",
      joinButton: "Shtab-kvartira",
      darkMode: "Qorong'u rejim",
      lightMode: "Yorug' rejim",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
