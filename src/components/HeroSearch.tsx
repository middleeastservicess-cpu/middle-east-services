'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { services, cities } from '@/data';

export default function HeroSearch() {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedService && selectedCity) {
      router.push(`/${selectedService}-${selectedCity}/`);
    } else if (selectedService) {
      router.push(`/services/${selectedService}/`);
    } else if (selectedCity) {
      router.push(`/cities/${selectedCity}/`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-2 animate-slide-up animate-delay-300"
      id="hero-search-form"
    >
      <div className="flex flex-col sm:flex-row gap-2">
        <select
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="flex-1 px-4 py-3.5 rounded-xl bg-white text-dark-700 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 cursor-pointer"
          id="hero-service-select"
        >
          <option value="">Select a Service</option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.icon} {service.name}
            </option>
          ))}
        </select>
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="flex-1 px-4 py-3.5 rounded-xl bg-white text-dark-700 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 cursor-pointer"
          id="hero-city-select"
        >
          <option value="">Select a City</option>
          {cities.map((city) => (
            <option key={city.slug} value={city.slug}>
              {city.name}, {city.country}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="px-8 py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl transition-all duration-200 hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2"
          id="hero-search-button"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="sm:inline hidden">Search</span>
        </button>
      </div>
    </form>
  );
}
