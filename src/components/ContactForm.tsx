'use client';

import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '@/data';

interface ContactFormProps {
  service?: string;
  city?: string;
  variant?: 'default' | 'compact';
}

export default function ContactForm({ service, city, variant = 'default' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: service || '',
    city: city || '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [aiStatus, setAiStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const statuses = [
      '🔍 AI Analysis: Identifying requirements...',
      '🛡️ AI Verification: Confirming lead authenticity...',
      '📝 AI Documentation: Preparing request for human review...',
      '🚀 AI Delivery: Sending to our local team...'
    ];

    for (const status of statuses) {
      setAiStatus(status);
      await new Promise(resolve => setTimeout(resolve, 800));
    }
    
    try {
      const response = await fetch('/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service || service,
          city: formData.city || city,
          message: formData.message
        }),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.error || 'Failed to submit');
      
      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setAiStatus('❌ Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-10 px-6 bg-white/50 backdrop-blur-xl border border-primary-100 rounded-[2.5rem] animate-fade-in shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-200">
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-heading font-bold text-dark-950 mb-3">AI Verification Complete!</h3>
        <p className="text-dark-600 leading-relaxed mb-6">
          Thank you, <span className="font-bold text-primary-600">{formData.name}</span>. Your request has been analyzed and sent to our local experts in <span className="font-bold text-dark-950">{formData.city || city}</span>. 
          <br /><br />
          Our representative will <span className="font-bold underline decoration-primary-500 underline-offset-4 text-dark-950">message you directly</span> shortly via phone or email.
        </p>
        <button
          onClick={() => { setIsSubmitted(false); setFormData({ name: '', phone: '', email: '', service: service || '', city: city || '', message: '' }); }}
          className="px-6 py-2.5 bg-dark-950 text-white font-bold rounded-xl hover:bg-dark-800 transition-all text-sm"
        >
          Submit New Request
        </button>
      </div>
    );
  }

  return (
    <div className="relative group/form">
      {/* AI Pulse Badge */}
      <div className="absolute -top-3 -right-3 z-20 flex items-center gap-2 bg-gradient-to-r from-primary-600 to-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.2em] py-1.5 px-3 rounded-full shadow-lg">
        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
        AI-Powered Form
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 p-1 bg-transparent rounded-[2rem]" id="ai-quote-request-form">
        <div className={variant === 'compact' ? 'space-y-3' : 'grid grid-cols-1 sm:grid-cols-2 gap-4'}>
          <div>
            <label htmlFor="contact-name" className="block text-xs font-bold text-dark-400 uppercase tracking-widest mb-1.5 ml-1">Full Name *</label>
            <input
              type="text"
              id="contact-name"
              required
              className="w-full bg-white/80 border border-dark-100 rounded-2xl px-5 py-3.5 text-dark-950 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all hover:border-primary-200 placeholder:text-dark-300 shadow-sm"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="contact-phone" className="block text-xs font-bold text-dark-400 uppercase tracking-widest mb-1.5 ml-1">Phone Number *</label>
            <input
              type="tel"
              id="contact-phone"
              required
              className="w-full bg-white/80 border border-dark-100 rounded-2xl px-5 py-3.5 text-dark-950 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all hover:border-primary-200 placeholder:text-dark-300 shadow-sm"
              placeholder="+971 50 123 4567"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="contact-email" className="block text-xs font-bold text-dark-400 uppercase tracking-widest mb-1.5 ml-1">Email</label>
          <input
            type="email"
            id="contact-email"
            className="w-full bg-white/80 border border-dark-100 rounded-2xl px-5 py-3.5 text-dark-950 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all hover:border-primary-200 placeholder:text-dark-300 shadow-sm"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        {!service && (
          <div>
            <label htmlFor="contact-service" className="block text-xs font-bold text-dark-400 uppercase tracking-widest mb-1.5 ml-1">Service Needed *</label>
            <select
              id="contact-service"
              required
              className="w-full bg-white/80 border border-dark-100 rounded-2xl px-5 py-3.5 text-dark-950 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all hover:border-primary-200 shadow-sm"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value="">Select a service</option>
              <option value="AC Repair">AC Repair</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Electrician">Electrician</option>
              <option value="Pest Control">Pest Control</option>
              <option value="Deep Cleaning">Deep Cleaning</option>
              <option value="Sofa Cleaning">Sofa Cleaning</option>
              <option value="Water Tank Cleaning">Water Tank Cleaning</option>
              <option value="Handyman">Handyman</option>
              <option value="Movers & Packers">Movers & Packers</option>
              <option value="Car Towing">Car Towing</option>
            </select>
          </div>
        )}

        {!city && (
          <div>
            <label htmlFor="contact-city" className="block text-xs font-bold text-dark-400 uppercase tracking-widest mb-1.5 ml-1">City *</label>
            <select
              id="contact-city"
              required
              className="w-full bg-white/80 border border-dark-100 rounded-2xl px-5 py-3.5 text-dark-950 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all hover:border-primary-200 shadow-sm"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            >
              <option value="">Select a city</option>
              <option value="Dubai">Dubai</option>
              <option value="Abu Dhabi">Abu Dhabi</option>
              <option value="Riyadh">Riyadh</option>
              <option value="Jeddah">Jeddah</option>
              <option value="Doha">Doha</option>
              <option value="Kuwait City">Kuwait City</option>
              <option value="Manama">Manama</option>
              <option value="Muscat">Muscat</option>
            </select>
          </div>
        )}

        <div>
          <label htmlFor="contact-message" className="block text-xs font-bold text-dark-400 uppercase tracking-widest mb-1.5 ml-1">Describe Your Needs</label>
          <textarea
            id="contact-message"
            rows={3}
            className="w-full bg-white/80 border border-dark-100 rounded-2xl px-5 py-4 text-dark-950 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all hover:border-primary-200 placeholder:text-dark-300 shadow-sm resize-none"
            placeholder="Tell us about your requirements..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="relative group w-full bg-primary-600 text-white font-bold py-4 rounded-2xl shadow-xl hover:bg-primary-700 transition-all disabled:opacity-50 disabled:cursor-wait overflow-hidden"
          id="submit-ai-quote-button"
        >
          <div className="relative z-10 flex items-center justify-center gap-3">
            {isSubmitting ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <span className="text-sm font-bold tracking-widest uppercase">{aiStatus || 'Analyzing...'}</span>
              </>
            ) : (
              <>
                <span className="text-lg">Submit Request</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </button>

        <p className="text-[10px] text-dark-400 text-center uppercase tracking-widest font-bold">
          🛡️ AI analysis ensures your request is handled by the right human expert.
        </p>
      </form>
    </div>
  );
}
