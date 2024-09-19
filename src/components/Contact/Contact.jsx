import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faClock, faEnvelope, faPhoneAlt, faComments } from "@fortawesome/free-solid-svg-icons";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Button from "../Button/Button";

// Fix for missing default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Contact = () => {
  const iconColor = "#3048AC";
  const location = "Saranga Compact Homes, F-108, Walajabad Road, Padappai, Karanaithangal, Tamil Nadu 602105";
  const lat = 12.8698317;
  const lng = 79.9750436;

  // Provided Google Maps URL
  const googleMapsUrl = 'https://maps.app.goo.gl/kda8VPaUxb1nxWnJ7';

  return (
    <div className="container mx-auto py-16 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-5xl font-bold">Get in Touch</h2>
        <p className="text-2xl text-gray-600 mt-2">Expand your network with us</p>
      </div>
      
      <div className="flex flex-col lg:flex-row lg:space-x-12 space-y-12 lg:space-y-0">
        
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col gap-3">
            {/* Geo map location */}
            <div>
              <h2>Location Map</h2>
              <MapContainer 
                center={[lat, lng]} 
                zoom={15} 
                style={{ height: '300px', width: '100%' }} 
                className="rounded-lg shadow-lg"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[lat, lng]}>
                  <Popup>
                    {location} <br />
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>

            {/* Office Address */}
            <div className="flex items-center bg-gray-90 p-1 rounded-lg shadow-md border border-gray-300 space-y-1">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl" style={{ color: iconColor }} aria-label="Map Marker" />
              <div className="ml-4">
                <h3 className="text-2xl font-semibold" style={{ color: iconColor }}>
                  Office Address
                </h3>
                <span className="text-base-grey font-normal">Chennai, TamilNadu</span>
              </div>
            </div>
            
            {/* Timing */}
            <div className="flex items-center bg-gray-90 p-1 rounded-lg shadow-md border border-gray-300 space-y-1">
              <FontAwesomeIcon icon={faClock} className="text-2xl" style={{ color: iconColor }} aria-label="Clock" />
              <div className="ml-4">
                <h3 className="text-2xl font-semibold" style={{ color: iconColor }}>
                  Timing
                </h3>
                <span className="text-base-grey font-normal">Mon - Fri: 9:00 AM - 9:00 PM</span>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-center bg-gray-90 p-1 rounded-lg shadow-md border border-gray-300 space-y-1">
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl" style={{ color: iconColor }} aria-label="Email" />
              <div className="ml-4">
                <h3 className="text-2xl font-semibold" style={{ color: iconColor }}>
                  Email
                </h3>
                <span className="text-base-grey font-normal">sales@altapulse.in</span>
              </div>
            </div>
            
            {/* Phone Number */}
            <div className="flex items-center bg-gray-90 p-1 rounded-lg shadow-md border border-gray-300 space-y-1">
              <FontAwesomeIcon icon={faPhoneAlt} className="text-2xl" style={{ color: iconColor }} aria-label="Phone" />
              <div className="ml-4">
                <h3 className="text-2xl font-semibold" style={{ color: iconColor }}>
                  Phone No.
                </h3>
                <span className="text-base-gray font-normal">733-879-2315</span>
              </div>
            </div>
            
            {/* Live Chat */}
            <div className="flex items-center bg-gray-90 p-1 rounded-lg shadow-md border border-gray-300 space-y-1">
              <FontAwesomeIcon icon={faComments} className="text-2xl" style={{ color: iconColor }} aria-label="Live Chat" />
              <div className="ml-4">
                <h3 className="text-2xl font-semibold" style={{ color: iconColor }}>
                  Live Chat
                </h3>
                <span className="text-base-gray font-normal">+91 80563 92136</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-lg border border-black/50">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-2xl font-medium text-gray-700" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-2 p-3 border rounded-lg w-full focus:ring focus:ring-blue-200 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-2xl font-medium text-gray-700" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="mt-2 p-3 border rounded-lg w-full focus:ring focus:ring-blue-200 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-2xl font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-2 p-3 border rounded-lg w-full focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-2xl font-medium text-gray-700" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="mt-2 p-3 border rounded-lg w-full focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-2xl font-medium text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="mt-2 p-3 border rounded-lg w-full h-32 focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;