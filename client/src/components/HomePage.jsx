import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const backendUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:10000';

  const getFullImageUrl = (url) => {
    if (!url) return "https://via.placeholder.com/640x360?text=No+Image";
    const cleanUrl = url.trim();
    if (cleanUrl.startsWith('http')) {
      return cleanUrl;
    }
    return backendUrl + cleanUrl;
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${backendUrl}/api/properties`);
        setFeaturedProperties(res.data);
      } catch (err) {
        console.error(err);
        setFeaturedProperties([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 10);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % 10);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + 10) % 10);

  // Cleaned carousel images (no extra spaces)
  const carouselImages = [
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://plus.unsplash.com/premium_photo-1661436649813-e85c50916418?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFwcHklMjBmYW1pbHklMjB3aXRoJTIwa2V5fGVufDB8fDB8fHww",
    "https://res.cloudinary.com/dhvslqwtr/image/upload/v1758667243/897bffb4d441787c584116ff3eb21b3c-uncropped_scaled_within_1536_1152_ssshkh.webp",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1593714604578-d9e41b00c6c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://res.cloudinary.com/dhvslqwtr/image/upload/v1758667243/2677be5041b405d016cfe22bc63c7917-uncropped_scaled_within_1536_1152_tt0inj.webp",
    "https://res.cloudinary.com/dhvslqwtr/image/upload/v1758667250/dd7897cd6fa6622fb14fac8a55362f89-uncropped_scaled_within_1536_1152_oixskn.webp",
    "https://res.cloudinary.com/dhvslqwtr/image/upload/v1758667250/bd95fb0e8164a05db85f8995c6beacff-uncropped_scaled_within_1536_1152_ye6fsy.webp",
    "https://res.cloudinary.com/dhvslqwtr/image/upload/v1758667251/f6eccd867df09e33fe713cbf1b37ed46-cc_ft_768_jvztzm.webp",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  ];

  const slides = [
    { title: t('findDreamProperty'), subtitle: t('buySellRentTrust'), cta1: t('exploreProperties'), cta2: t('contactUs'), img: carouselImages[0] },
    { title: t('luxuryVillas'), subtitle: t('exclusiveListings'), cta1: t('viewLuxury'), cta2: t('scheduleConsultation'), img: carouselImages[1] },
    { title: t('modernApartments'), subtitle: t('convenientLiving'), cta1: t('cityApartments'), cta2: t('contactAgent'), img: carouselImages[2] },
    { title: t('countryEstates'), subtitle: t('peacefulProperties'), cta1: t('countryHomes'), cta2: t('learnMore'), img: carouselImages[3] },
    { title: t('investmentProperties'), subtitle: t('smartInvestments'), cta1: t('investmentProperties'), cta2: t('getAdvice'), img: carouselImages[4] },
    { title: t('familyHomes'), subtitle: t('perfectForFamilies'), cta1: t('familyHomes'), cta2: t('viewListings'), img: carouselImages[5] },
    { title: t('historicProperties'), subtitle: t('uniqueHomes'), cta1: t('historicHomes'), cta2: t('tourProperties'), img: carouselImages[6] },
    { title: t('waterfrontProperties'), subtitle: t('stunningViews'), cta1: t('waterfrontHomes'), cta2: t('seeAvailability'), img: carouselImages[7] },
    { title: t('modernTownhouses'), subtitle: t('sleekStylish'), cta1: t('townhouses'), cta2: t('bookViewing'), img: carouselImages[8] },
    { title: t('penthouses'), subtitle: t('luxuryLiving'), cta1: t('penthouses'), cta2: t('contactUs'), img: carouselImages[9] }
  ];

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mx-auto"></div>
            <p className="mt-4 text-gray-600">{t('loadingProperties')}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero Carousel */}
      <section className="relative overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="bg-gradient-to-r from-primary/90 to-secondary/80"></div>
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container mx-auto px-4 text-center text-white">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6">{slide.title}</h1>
                <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-8">{slide.subtitle}</p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                  <button
                    onClick={() => navigate('/properties')}
                    className="bg-white text-primary px-4 sm:px-6 md:px-8 py-2 md:py-3 md:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
                  >
                    {slide.cta1}
                  </button>
                  <button
                    onClick={() => navigate('/contact')}
                    className="border-2 border-white text-white px-4 sm:px-6 md:px-8 py-2 md:py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-sm md:text-base"
                  >
                    {slide.cta2}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Carousel Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50 hover:bg-opacity-100'
              }`}
            ></button>
          ))}
        </div>

        {/* Nav Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-30 p-2 md:p-3 rounded-full hover:bg-opacity-50 transition-colors hidden sm:block"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-30 p-2 md:p-3 rounded-full hover:bg-opacity-50 transition-colors hidden sm:block"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </section>

      {/* Search Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 -mt-8 md:-mt-16 mx-2 md:mx-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('location')}</label>
                <input
                  type="text"
                  placeholder={t('cityZipAddress')}
                  className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('maxPrice')}</label>
                <input
                  type="number"
                  placeholder={t('maxPrice')}
                  className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('propertyType')}</label>
                <select className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary">
                  <option>{t('allTypes')}</option>
                  <option>{t('apartment')}</option>
                  <option>{t('house')}</option>
                  <option>{t('villa')}</option>
                  <option>{t('land')}</option>
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => navigate('/properties')}
                  className="w-full bg-secondary text-white p-2 md:p-3 rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  {t('search')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 md:mb-4">{t('featuredProperties')}</h2>
            <p className="text-gray-600">{t('discoverTopListings')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {featuredProperties.length > 0 ? (
              featuredProperties.map((prop) => {
                const imageUrl = getFullImageUrl(prop.image_url);

                return (
                  <div
                    key={prop.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                    onClick={() => navigate('/properties')}
                  >
                    <img
                      src={imageUrl}
                      alt={prop.title}
                      className="w-full h-40 md:h-48 object-cover"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/640x360?text=Image+Not+Found";
                      }}
                    />
                    <div className="p-4 md:p-6">
                      <div className="flex justify-between items-start mb-3 md:mb-4">
                        <span className="bg-secondary text-white px-2 py-1 rounded-full text-xs md:text-sm">
                          {prop.type === 'rent' ? t('forRent') : t('forSale')}
                        </span>
                        <span className="text-lg md:text-xl font-bold text-primary">
                          €{prop.price.toLocaleString()}
                        </span>
                      </div>
                      <h3 className="text-base md:text-lg font-semibold mb-2">{prop.title}</h3>
                      <p className="text-gray-600 mb-3 md:mb-4 text-sm">{prop.description?.substring(0, 60)}...</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs md:text-sm text-gray-500">{prop.location || 'Germany'}</span>
                        <button className="text-secondary hover:text-primary transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 text-center py-8">
                <p className="text-gray-500">{t('noPropertiesFound')}</p>
              </div>
            )}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <button
              onClick={() => navigate('/properties')}
              className="bg-primary text-white px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              {t('viewAllProperties')}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 md:mb-4">{t('whyChooseHausgold')}</h2>
            <p className="text-gray-600">{t('trustGermanPlatform')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center p-4 md:p-6">
              <div className="w-12 md:w-16 h-12 md:h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{t('security')}</h3>
              <p className="text-gray-600 text-sm md:text-base">{t('verifiedProperties')}</p>
            </div>

            <div className="text-center p-4 md:p-6">
              <div className="w-12 md:w-16 h-12 md:h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{t('easySearch')}</h3>
              <p className="text-gray-600 text-sm md:text-base">{t('intuitiveFilters')}</p>
            </div>

            <div className="text-center p-4 md:p-6">
              <div className="w-12 md:w-16 h-12 md:h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{t('directContact')}</h3>
              <p className="text-gray-600 text-sm md:text-base">{t('communicateDirectly')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{t('startPropertySearch')}</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8">{t('thousandsWaiting')}</p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button
              onClick={() => navigate('/register')}
              className="bg-secondary text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              {t('registerFree')}
            </button>
            <button
              onClick={() => navigate('/properties')}
              className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              {t('exploreProperties')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;


