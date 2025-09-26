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
      logout: "Logout",
      loadingProperties: "Loading properties...",
      propertyType: "Property Type",
      allTypes: "All Types",
      buy: "Buy",
      rent: "Rent",
      minPrice: "Min Price",
      maxPrice: "Max Price",
      location: "Location",
      cityOrRegion: "City or Region",
      forRent: "For Rent",
      forSale: "For Sale",
      contactOwner: "Contact Owner",
      noPropertiesFound: "No properties found matching your criteria.",
      clearFilters: "Clear Filters",
      contactAgent: "Contact Agent",
      name: "Name",
      phone: "Phone",
      email: "Email",
      address: "Address",
      property: "Property",
      close: "Close",
      findDreamProperty: "Find Your Dream Property in Germany",
      buySellRentTrust: "Buy, sell, or rent properties with trust and comfort",
      exploreProperties: "Explore Properties",
      contactUs: "Contact Us",
      luxuryVillas: "Luxury Villas in Prime Locations",
      exclusiveListings: "Exclusive listings in Germany's best neighborhoods",
      viewLuxury: "View Luxury Properties",
      scheduleConsultation: "Schedule Consultation",
      modernApartments: "Modern Apartments in City Centers",
      convenientLiving: "Convenient living in the heart of Germany's vibrant cities",
      cityApartments: "City Apartments",
      countryEstates: "Country Estates & Rural Retreats",
      peacefulProperties: "Peaceful properties away from the hustle and bustle",
      countryHomes: "Country Homes",
      learnMore: "Learn More",
      investmentProperties: "Investment Properties with High ROI",
      smartInvestments: "Smart investments in Germany's growing real estate market",
      getAdvice: "Get Advice",
      familyHomes: "Family Homes with Spacious Gardens",
      perfectForFamilies: "Perfect homes for growing families in safe neighborhoods",
      viewListings: "View Listings",
      historicProperties: "Historic Properties with Character",
      uniqueHomes: "Unique homes that tell a story in Germany's historic districts",
      historicHomes: "Historic Homes",
      tourProperties: "Tour Properties",
      waterfrontProperties: "Waterfront Properties with Stunning Views",
      stunningViews: "Beautiful homes along rivers, lakes, and coastal areas",
      waterfrontHomes: "Waterfront Homes",
      seeAvailability: "See Availability",
      modernTownhouses: "Modern Townhouses with Contemporary Design",
      sleekStylish: "Sleek, stylish homes perfect for urban professionals",
      townhouses: "Townhouses",
      bookViewing: "Book Viewing",
      penthouses: "Penthouses with Panoramic City Views",
      luxuryLiving: "Luxury living at the top with breathtaking vistas",
      featuredProperties: "Featured Properties",
      discoverTopListings: "Discover our top listings",
      viewAllProperties: "View All Properties",
      whyChooseHausgold: "Why Choose Hausgold?",
      trustGermanPlatform: "Trust Germany's leading real estate platform",
      security: "Security",
      verifiedProperties: "Verified properties and users for maximum safety",
      easySearch: "Easy Search",
      intuitiveFilters: "Intuitive filters for perfect results",
      directContact: "Direct Contact",
      communicateDirectly: "Communicate directly with owners and agents",
      startPropertySearch: "Start Your Property Search Today",
      thousandsWaiting: "Thousands of properties are waiting for you",
      registerFree: "Register for Free",
      cityZipAddress: "City, ZIP, or Address",
      apartment: "Apartment",
      house: "House",
      villa: "Villa",
      land: "Land",
      search: "Search"
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
    fallbackLng: 'de', // default to German if no language is detected
    interpolation: {
      escapeValue: false // React already escapes by default
    }
  });

export default i18n;
