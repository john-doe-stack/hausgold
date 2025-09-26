// client/src/components/Rent.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Rent = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOwner, setSelectedOwner] = useState(null); // âœ… popup state

  const rentProperties = [
    {
      id: 1,
      title: "Elegant Apartment in Berlin Mitte",
      price: 1850,
      description: "Spacious 2-bedroom apartment in Berlin Mitte. Modern kitchen, balcony, and excellent transport connections.",
      image_url: "https://res.cloudinary.com/dhvslqwtr/image/upload/v1758667246/acc36baf42b414ad5c16fa8c15b671d4-uncropped_scaled_within_1536_1152_wnatio.webp",
      location: "Berlin Mitte",
      bedrooms: 2,
      area: "95mÂ²"
    },
    {
      id: 2,
      title: "Luxury Loft with River View in Hamburg",
      price: 2200,
      description: "Industrial-style loft with stunning views of the Elbe. High ceilings, open plan, perfect for professionals.",
      image_url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      location: "Hamburg HafenCity",
      bedrooms: 2,
      area: "120mÂ²"
    },
    {
      id: 3,
      title: "Modern Studio in Munich Schwabing",
      price: 1100,
      description: "Bright and stylish studio in Munichâ€™s lively Schwabing district. Close to cafes, shops, and public transport.",
      image_url: "https://res.cloudinary.com/dhvslqwtr/image/upload/v1758667244/75f8e716d67dae145e2f100de33be766-uncropped_scaled_within_1536_1152_dikyya.webp",
      location: "Munich Schwabing",
      bedrooms: 1,
      area: "48mÂ²"
    },
    {
      id: 4,
      title: "Cozy Family Apartment in Cologne",
      price: 1350,
      description: "Renovated 3-bedroom apartment in Cologne Ehrenfeld. Family-friendly neighborhood with schools and parks nearby.",
      image_url: "https://res.cloudinary.com/dhvslqwtr/image/upload/v1758667243/08e4989775d3e9ab60750cb5f7ebfa23-uncropped_scaled_within_1536_1152_zuy96f.webp",
      location: "Cologne Ehrenfeld",
      bedrooms: 3,
      area: "105mÂ²"
    },
    {
      id: 5,
      title: "Stylish Flat in Frankfurt Westend",
      price: 1600,
      description: "Modern 2-bedroom flat in Frankfurtâ€™s Westend. Great location for professionals, near finance district.",
      image_url: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80",
      location: "Frankfurt Westend",
      bedrooms: 2,
      area: "88mÂ²"
    },
    {
      id: 6,
      title: "Penthouse with Skyline View in Stuttgart",
      price: 2500,
      description: "Exclusive penthouse in Stuttgart with panoramic views. Spacious terrace, luxury interior design.",
      image_url: "https://res.cloudinary.com/dhvslqwtr/image/upload/v1758667243/3ef93a63d73c0f08b5bdb2a457c9d927-uncropped_scaled_within_1536_1152_j9l1eo.webp",
      location: "Stuttgart",
      bedrooms: 3,
      area: "150mÂ²"
    }
  ];

  useEffect(() => {
    setProperties(rentProperties);
    setLoading(false);
  }, []);

  const handleContactOwner = (property) => {
    const names = [
      "Thomas Schmidt", "Michael Wagner", "Andreas Becker",
      "Claudia Fischer", "Markus Hoffmann", "Daniela Weber",
      "Christian Schulz", "Stefan Klein", "Matthias Braun", "Laura Schneider"
    ];
    const randomName = names[Math.floor(Math.random() * names.length)];

    setSelectedOwner({
      name: randomName,
      phone: "+49 (0)30 123 4567",
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
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary mb-4">Homes & Apartments for Rent in Germany</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Discover premium rental properties across Germany â€” from luxury penthouses in Berlin to cozy studios in Munich. 
          Find your perfect match with Hausgold.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-secondary mb-2">{properties.length}</div>
          <div className="text-gray-600">Available Properties</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-secondary mb-2">
            â‚¬{Math.min(...properties.map(p => p.price)).toLocaleString()}/mo
          </div>
          <div className="text-gray-600">Starting From</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-secondary mb-2">
            â‚¬{Math.max(...properties.map(p => p.price)).toLocaleString()}/mo
          </div>
          <div className="text-gray-600">Luxury Rentals</div>
        </div>
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((prop) => (
          <div key={prop.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <img
              src={prop.image_url}
              alt={prop.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm">For Rent</span>
                <span className="text-xl font-bold text-primary">â‚¬{prop.price.toLocaleString()}/mo</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{prop.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{prop.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
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

      {/* âœ… Contact Owner Popup */}
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
              className="mt-4 bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary-dark"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-16 bg-primary text-white rounded-xl p-8 text-center shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Need Help Finding the Right Place?</h2>
        <p className="mb-6">Our rental specialists are ready to guide you through the German property market.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/contact')}
            className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Speak to a Specialist
          </button>
          <button
            onClick={() => navigate('/properties?type=rent')}
            className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
          >
            View All Rentals
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rent;

