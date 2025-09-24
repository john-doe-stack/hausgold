import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const resources = {
  de: {
    translation: {
      welcome: "Willkommen bei Hausgold",
      login: "Anmelden",
      register: "Registrieren",
      properties: "Immobilien",
      favorites: "Favoriten",
      messages: "Nachrichten",
      logout: "Abmelden"
    }
  },
  en: {
    translation: {
      welcome: "Welcome to Hausgold",
      login: "Login",
      register: "Register",
      properties: "Properties",
      favorites: "Favorites",
      messages: "Messages",
      logout: "Logout"
    }
  },
  fr: {
    translation: {
      welcome: "Bienvenue chez Hausgold",
      login: "Connexion",
      register: "S'inscrire",
      properties: "Propriétés",
      favorites: "Favoris",
      messages: "Messages",
      logout: "Déconnexion"
    }
  },
  es: {
    translation: {
      welcome: "Bienvenido a Hausgold",
      login: "Iniciar sesión",
      register: "Registrarse",
      properties: "Propiedades",
      favorites: "Favoritos",
      messages: "Mensajes",
      logout: "Cerrar sesión"
    }
  },
  tr: {
    translation: {
      welcome: "Hausgold'a Hoş Geldiniz",
      login: "Giriş Yap",
      register: "Kayıt Ol",
      properties: "Mülkler",
      favorites: "Favoriler",
      messages: "Mesajlar",
      logout: "Çıkış Yap"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
