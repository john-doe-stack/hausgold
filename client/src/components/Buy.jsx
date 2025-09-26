import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Buy = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOwner, setSelectedOwner] = useState(null);

  // Buy properties (latest full list from your input)
  const buyProperties = [
    {
      id: 1,
      title: "Modern Apartment in Berlin Mitte",
      price: 450000,
      description: "Beautiful modern apartment in the heart of Berlin Mitte. 120mÂ² with 3 bedrooms, balcony, and modern kitchen.",
      image_url: "https://res.cloudinary.com/dhvslqwtr/image/upload/v1758667250/dd7897cd6fa6622fb14fac8a55362f89-uncropped_scaled_within_1536_1152_oixskn.webp",
      location: "Berlin Mitte",
      bedrooms: 3,
      area: "120mÂ²"
    },
    {
      id: 2,
      title: "Luxury Villa in Munich",
      price: 1250000,
      description: "Stunning luxury villa in Munich with pool, garden, and panoramic views. 5 bedrooms, 3 bathrooms, garage.",
      image_url: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlsbGF8ZW58MHx8MHx8fDA%3D",
      location: "Munich",
      bedrooms: 5,
      area: "350mÂ²"
    },
    {
      id: 4,
      title: "Spacious Family Home in Frankfurt",
      price: 680000,
      description: "Spacious family home with large garden in a quiet neighborhood of Frankfurt. 4 bedrooms, 2 bathrooms.",
      image_url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80",
      location: "Frankfurt",
      bedrooms: 4,
      area: "220mÂ²"
    },
    {
      id: 6,
      title: "Historic Townhouse in Dresden",
      price: 320000,
      description: "Charming historic townhouse in Dresden with original features and modern updates.",
      image_url: "https://res.cloudinary.com/dhvslqwtr/image/upload/v1758667248/d11afbf88e5b1827123b9552437e55cf-cc_ft_768_b9r21z.webp",
      location: "Dresden",
      bedrooms: 3,
      area: "150mÂ²"
    },
    {
      id: 7,
      title: "Penthouse with City View in Stuttgart",
      price: 950000,
      description: "Luxurious penthouse with panoramic city views. High-end finishes, 3 bedrooms, 2 bathrooms.",
      image_url: "https://res.cloudinary.com/dhvslqwtr/image/upload/v1758667248/0903529dc1e2cc3c9d9c6b8f238d9897-uncropped_scaled_within_1536_1152_usband.webp",
      location: "Stuttgart",
      bedrooms: 3,
      area: "180mÂ²"
    },
    {
      id: 8,
      title: "Country Estate near Heidelberg",
      price: 850000,
      description: "Beautiful country estate with large garden and outbuildings. Perfect for those seeking peace and quiet.",
      image_url: "https://res.cloudinary.com/dhvslqwtr/image/upload/v1758667244/122f1fe4bd39164e27ad2b7c27126295-uncropped_scaled_within_1536_1152_hcrwae.webp",
      location: "Heidelberg",
      bedrooms: 4,
      area: "300mÂ²"
    },
    {
      id: 11,
      title: "Modern Townhouse in DÃ¼sseldorf",
      price: 550000,
      description: "Contemporary townhouse in a desirable neighborhood of DÃ¼sseldorf. 3 bedrooms, 2 bathrooms, garage.",
      image_url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80",
      location: "DÃ¼sseldorf",
      bedrooms: 3,
      area: "160mÂ²"
    },
    {
      id: 12,
      title: "Cozy Cottage in Bavarian Alps",
      price: 420000,
      description: "Charming cottage in the Bavarian Alps with mountain views. Perfect for vacation or permanent residence.",
      image_url: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80",
      location: "Bavarian Alps",
      bedrooms: 2,
      area: "90mÂ²"
    },
    {
      id: 14,
      title: "Modern Villa with Pool in Munich",
      price: 2100000,
      description: "Contemporary villa with infinity pool, home cinema, and smart home technology.",
      image_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80",
      location: "Munich",
      bedrooms: 6,
      area: "500mÂ²"
    },
    {
      id: 16,
      title: "Historic Building in Nuremberg",
      price: 750000,
      description: "Historic building in Nuremberg's old town, restored to preserve original features while adding modern comforts.",
      image_url: "https://res.cloudinary.com/dhvslqwtr/image/upload/v1758667243/4caf9f4d4580dd5fca4d63fd3c7ceda3-uncropped_scaled_within_1536_1152_sg62lx.webp",
      location: "Nuremberg",
      bedrooms: 4,
      area: "250mÂ²"
    },
    {
      id: 17,
      title: "Family Home with Large Garden in Bonn",
      price: 580000,
      description: "Spacious family home with large garden and play area. 4 bedrooms, 2 bathrooms, garage.",
      image_url: "https://res.cloudinary.com/dhvslqwtr/image/upload/v1758667244/6a39e2812edbaa76a1648a8ffe273a55-uncropped_scaled_within_1536_1152_pvndfo.webp",
      location: "Bonn",
      bedrooms: 4,
      area: "200mÂ²"
    },
    {
      id: 19,
      title: "Luxury Penthouse in Berlin",
      price: 3200000,
      description: "Ultra-luxury penthouse with 360-degree views of Berlin. Private elevator, rooftop terrace, concierge service.",
      image_url: "https://res.cloudinary.com/dhvslqwtr/image/upload/v1758667250/bd95fb0e8164a05db85f8995c6beacff-uncropped_scaled_within_1536_1152_ye6fsy.webp",
      location: "Berlin",
      bedrooms: 4,
      area: "300mÂ²"
    },
    {
      id: 20,
      title: "Charming Cottage in Black Forest",
      price: 380000,
      description: "Traditional Black Forest cottage with timber frame construction and modern interior.",
      image_url: "https://res.cloudinary.com/dhvslqwtr/image/upload/v1758667248/d11afbf88e5b1827123b9552437e55cf-cc_ft_768_b9r21z.webp",
      location: "Black Forest",
      bedrooms: 2,
      area: "110mÂ²"
    }
  ];

  useEffect(() => {
    setProperties(buyProperties);
    setLoading(false);
  }, []);

  const handleContactOwner = (property) => {
    const maleNames = ["Thomas Schmidt", "Michael Wagner", "Andreas Becker", "Markus Hoffmann", "Christian Schulz", "Daniel Meyer", "Stefan Weber", "Alexander Klein", "Matthias Braun", "Jan Fischer"];
    const randomName = maleNames[Math.floor(Math.random() * maleNames.length)];

    setSelectedOwner({
      name: randomName,
      phone: "+49 (0)40 635 5427",
      email: `agent${Math.floor(Math.random() * 100)}@hausgold.de`,
      address: "Jungfernstieg 24, 20354 Hamburg, Germany",
      property: property.title,
    });
  };

  const closePopup = () => setSelectedOwner(null);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading properties...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary mb-4">Properties for Sale</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Discover our exclusive selection of properties for sale across Germany.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-secondary mb-2">{properties.length}</div>
          <div className="text-gray-600">Properties Available</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-secondary mb-2">â‚¬{Math.min(...properties.map(p => p.price)).toLocaleString()}</div>
          <div className="text-gray-600">Starting Price</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-secondary mb-2">â‚¬{Math.max(...properties.map(p => p.price)).toLocaleString()}</div>
          <div className="text-gray-600">Luxury Properties</div>
        </div>
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {properties.map((prop) => (
          <div key={prop.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <img src={prop.image_url} alt={prop.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm">For Sale</span>
                <span className="text-xl font-bold text-primary">â‚¬{prop.price.toLocaleString()}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{prop.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{prop.description.substring(0, 80)}...</p>
              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <span>ðŸ›ï¸ {prop.bedrooms} beds</span>
                <span>ðŸ“ {prop.area}</span>
                <span>ðŸ“ {prop.location}</span>
              </div>
              <button
                onClick={() => handleContactOwner(prop)}
                className="w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Contact Owner
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Owner Info Modal */}
      {selectedOwner && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
            <button 
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-500 text-2xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4">Owner Information</h3>
            <p><strong>Name:</strong> {selectedOwner.name}</p>
            <p><strong>Phone:</strong> {selectedOwner.phone}</p>
            <p><strong>Email:</strong> {selectedOwner.email}</p>
            <p><strong>Address:</strong> {selectedOwner.address}</p>
            <p><strong>Property:</strong> {selectedOwner.property}</p>
            <button
              onClick={closePopup}
              className="mt-4 bg-secondary text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="mt-16 bg-primary text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
        <p className="mb-6">Our expert agents are ready to help you find the perfect property.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/contact')}
            className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Contact an Agent
          </button>
          <button
            onClick={() => navigate('/properties')}
            className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
          >
            View All Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buy;


