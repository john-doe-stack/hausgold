// client/src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

import Login from './components/Login';
import Register from './components/Register';
import Properties from './components/Properties';
import Buy from './components/Buy';
import Rent from './components/Rent';
import About from './components/About';
import Contact from './components/Contact';
import HomePage from './components/HomePage';

import './i18n';
import './stylesheet.css';

// ✅ Dynamically set API base URL
// ✅ Dynamically set API base URL
const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:10000';
axios.defaults.baseURL = baseURL;

const App = () => {
  const [user, setUser] = useState(null);
  const { t, i18n } = useTranslation();
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
    { code: 'tr', name: 'Türkçe' }
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUser(payload);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      } catch (e) {
        localStorage.removeItem('token');
        setUser(null);
      }
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-primary text-white shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <img
                    src="/logo.png"
                    alt="Hausgold Logo"
                    className="h-[40px] mr-2"
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-6">
                <Link to="/properties" className="hover:text-secondary transition-colors">Properties</Link>
                <Link to="/buy" className="hover:text-secondary transition-colors">Buy</Link>
                <Link to="/rent" className="hover:text-secondary transition-colors">Rent</Link>
                <Link to="/about" className="hover:text-secondary transition-colors">About Us</Link>
                <Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link>
              </div>

              <div className="flex items-center space-x-4">
                <select
                  onChange={(e) => changeLanguage(e.target.value)}
                  value={i18n.language}
                  className="bg-secondary text-white p-1 rounded text-sm hidden md:block"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))}
                </select>

                {user ? (
                  <div className="flex items-center space-x-4">
                    <span className="text-sm hidden md:block">👋 {user.email}</span>
                    <button onClick={handleLogout} className="btn-secondary text-sm">
                      {t('logout')}
                    </button>
                  </div>
                ) : (
                  <div className="space-x-2 hidden md:flex">
                    <Link to="/login" className="hover:text-secondary transition-colors text-sm">
                      {t('login')}
                    </Link>
                    <Link to="/register" className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors text-sm">
                      {t('register')}
                    </Link>
                  </div>
                )}

                {/* Mobile Menu Button */}
                <button
                  onClick={toggleMobileMenu}
                  className="md:hidden text-white p-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden bg-primary py-4 px-4 mt-2 rounded-lg">
                <div className="flex flex-col space-y-4">
                  <div className="flex justify-between items-center">
                    <select
                      onChange={(e) => changeLanguage(e.target.value)}
                      value={i18n.language}
                      className="bg-secondary text-white p-2 rounded text-sm"
                    >
                      {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                          {lang.name}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={toggleMobileMenu}
                      className="text-white p-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>

                  <div className="font-hagrid font-extrabold">
                    <Link to="/properties" className="text-white hover:text-secondary py-2 border-b border-gray-600" onClick={toggleMobileMenu}>
                      Properties
                    </Link>
                    <Link to="/buy" className="text-white hover:text-secondary py-2 border-b border-gray-600" onClick={toggleMobileMenu}>
                      Buy
                    </Link>
                    <Link to="/rent" className="text-white hover:text-secondary py-2 border-b border-gray-600" onClick={toggleMobileMenu}>
                      Rent
                    </Link>
                    <Link to="/about" className="text-white hover:text-secondary py-2 border-b border-gray-600" onClick={toggleMobileMenu}>
                      About Us
                    </Link>
                    <Link to="/contact" className="text-white hover:text-secondary py-2 border-b border-gray-600" onClick={toggleMobileMenu}>
                      Contact
                    </Link>
                  </div>

                  {user ? (
                    <>
                      <span className="text-sm text-white py-2">👋 {user.email}</span>
                      <button
                        onClick={() => {
                          handleLogout();
                          toggleMobileMenu();
                        }}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded text-sm"
                      >
                        {t('logout')}
                      </button>
                    </>
                  ) : (
                    <div className="flex flex-col space-y-2">
                      <Link to="/login" className="text-white hover:text-secondary py-2 border-b border-gray-600" onClick={toggleMobileMenu}>
                        {t('login')}
                      </Link>
                      <Link to="/register" className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors text-sm text-center" onClick={toggleMobileMenu}>
                        {t('register')}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-hagrid font-bold text-secondary text-2xl mb-4">
                  HAUSGOLD LTD.
                </h3>
                <p className="text-gray-200">Germany's trusted real estate platform</p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Discover</h4>
                <ul className="space-y-2">
                  <li><Link to="/buy" className="text-gray-200 hover:text-secondary transition-colors">Buy</Link></li>
                  <li><Link to="/rent" className="text-gray-200 hover:text-secondary transition-colors">Rent</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><Link to="/about" className="text-gray-200 hover:text-secondary transition-colors">About Us</Link></li>
                  <li><Link to="/contact" className="text-gray-200 hover:text-secondary transition-colors">Contact</Link></li>
                  <li><Link to="/privacy" className="text-gray-200 hover:text-secondary transition-colors">Privacy</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-gray-200">
                  <p>
                    <i className="fas fa-envelope mr-2"></i>
                    info@hausgoldltd.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-2"></i>
                    +49 (0)40 635 5427
                  </p>
                  <p>
                    <i className="fab fa-telegram-plane mr-2"></i>
                    +1 (862) 955 2387
                  </p>
                  <p>
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    Jungfernstieg 24, 20354 Hamburg, Germany
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-400 mt-8 pt-8 text-center text-gray-200">
              <p>&copy; 2025 Hausgold Ltd. | Jungfernstieg 24, 20354 Hamburg, Germany</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;/ /   R e b u i l d   t r i g g e r   0 9 / 2 5 / 2 0 2 5   2 3 : 3 1 : 0 4  
 