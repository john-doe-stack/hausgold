// client/src/components/About.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Hausgold</h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Germany's most trusted real estate platform, connecting buyers, renters, and sellers since 2025.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white rounded-xl shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-6">Our Mission</h2>
        <p className="text-gray-700 mb-4 text-lg">
          At Hausgold, we're revolutionizing the German real estate market by providing a transparent, user-friendly platform that connects property seekers with their perfect homes.
        </p>
        <p className="text-gray-700 mb-4 text-lg">
          We believe everyone deserves to find their ideal property without the stress and complexity traditionally associated with real estate transactions.
        </p>
        <p className="text-gray-700 text-lg">
          Our commitment to security, transparency, and exceptional customer service sets us apart in the industry.
        </p>
      </div>

      {/* Team Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-8 text-center">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#333300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Thomas Müller</h3>
              <p className="text-secondary font-medium mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm">
                With over 15 years of experience in German real estate, Thomas founded Hausgold to create a more transparent and user-friendly property market.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#333300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Sarah Becker</h3>
              <p className="text-secondary font-medium mb-2">CTO</p>
              <p className="text-gray-600 text-sm">
                Sarah leads our technology team, ensuring our platform is secure, reliable, and constantly evolving to meet our users' needs.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#333300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Michael Wagner</h3>
              <p className="text-secondary font-medium mb-2">Head of Operations</p>
              <p className="text-gray-600 text-sm">
                Michael ensures our day-to-day operations run smoothly, from customer service to property verification and listing management.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-8 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Trust & Security</h3>
            <p className="text-gray-600">
              We verify all properties and users to ensure a safe and trustworthy experience for everyone on our platform.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Transparency</h3>
            <p className="text-gray-600">
              No hidden fees, no misleading information. We believe in complete transparency in all our transactions.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-gray-600">
              We continuously improve our platform with cutting-edge technology to provide the best user experience possible.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
            <p className="text-gray-600">
              Our customers are at the heart of everything we do. We're committed to providing exceptional service and support.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Us in Transforming German Real Estate</h2>
        <p className="mb-6 text-lg">
          Whether you're looking to buy, rent, or sell a property, Hausgold is here to make the process simple, secure, and stress-free.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/properties')}
            className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Browse Properties
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

