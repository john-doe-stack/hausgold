import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useTranslation } from 'react-i18next';

const Properties = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({
    type: "",
    minPrice: "",
    maxPrice: "",
    location: "",
  });
  const [loading, setLoading] = useState(true);
  const [selectedOwner, setSelectedOwner] = useState(null);

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
        const res = await axios.get(`${backendUrl}/api/properties`, { params: filters });
        setProperties(res.data);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, [filters, backendUrl]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleContactOwner = (property) => {
    const ownerInfo = {
      name: getRandomName(),
      phone: "+49 (0)40 635 5427",
      email: `agent${Math.floor(Math.random() * 100)}@hausgold.de`,
      address: "Jungfernstieg 24, 20354 Hamburg, Germany",
      property: property.title,
    };
    setSelectedOwner(ownerInfo);
  };

  const closeOwnerPopup = () => setSelectedOwner(null);

  const getRandomName = () => {
    const maleNames = [
      "Thomas Schmidt",
      "Michael Wagner",
      "Andreas Becker",
      "Markus Hoffmann",
      "Christian Schulz",
      "Daniel Meyer",
      "Stefan Weber",
      "Alexander Klein",
      "Matthias Braun",
      "Jan Fischer",
    ];
    return maleNames[Math.floor(Math.random() * maleNames.length)];
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mx-auto"></div>
          <p className="mt-4 text-gray-600">{t('loadingProperties')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
        {t('properties')}
      </h2>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('propertyType')}
            </label>
            <select
              name="type"
              value={filters.type}
              onChange={handleFilterChange}
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary"
            >
              <option value="">{t('allTypes')}</option>
              <option value="buy">{t('buy')}</option>
              <option value="rent">{t('rent')}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('minPrice')}
            </label>
            <input
              name="minPrice"
              type="number"
              placeholder={t('minPrice')}
              value={filters.minPrice}
              onChange={handleFilterChange}
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('maxPrice')}
            </label>
            <input
              name="maxPrice"
              type="number"
              placeholder={t('maxPrice')}
              value={filters.maxPrice}
              onChange={handleFilterChange}
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('location')}
            </label>
            <input
              name="location"
              type="text"
              placeholder={t('cityOrRegion')}
              value={filters.location}
              onChange={handleFilterChange}
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary"
            />
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {properties.map((prop) => {
          const imageUrl = getFullImageUrl(prop.image_url);

          return (
            <div
              key={prop.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={imageUrl}
                alt={prop.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/640x360?text=Image+Not+Found";
                }}
              />
              <div className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-secondary text-white px-2 py-1 rounded-full text-xs">
                    {prop.type === "rent" ? t('forRent') : t('forSale')}
                  </span>
                  <span className="text-lg font-bold text-primary">
                    €{prop.price.toLocaleString()}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{prop.title}</h3>
                <p className="text-gray-600 mb-3 text-sm">
                  {prop.description?.substring(0, 80)}...
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">
                    📍 {prop.location}
                  </span>
                  <button
                    onClick={() => handleContactOwner(prop)}
                    className="text-secondary hover:text-primary transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </button>
                </div>
                <button
                  onClick={() => handleContactOwner(prop)}
                  className="w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors text-sm"
                >
                  {t('contactOwner')}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {properties.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            {t('noPropertiesFound')}
          </p>
          <button
            onClick={() => setFilters({ type: "", minPrice: "", maxPrice: "", location: "" })}
            className="mt-4 bg-secondary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            {t('clearFilters')}
          </button>
        </div>
      )}

      {/* Owner Info Popup */}
      {selectedOwner && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
            <button 
              onClick={closeOwnerPopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-4">{t('contactAgent')}</h3>
            <p><strong>{t('name')}:</strong> {selectedOwner.name}</p>
            <p><strong>{t('phone')}:</strong> {selectedOwner.phone}</p>
            <p><strong>{t('email')}:</strong> {selectedOwner.email}</p>
            <p><strong>{t('address')}:</strong> {selectedOwner.address}</p>
            <p><strong>{t('property')}:</strong> {selectedOwner.property}</p>
            <button
              onClick={closeOwnerPopup}
              className="mt-4 bg-primary text-white px-4 py-2 rounded-lg"
            >
              {t('close')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Properties;

