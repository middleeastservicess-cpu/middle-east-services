'use client';

import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '@/data';

interface ContactFormProps {
  service?: string;
  city?: string;
  variant?: 'default' | 'compact';
  isDark?: boolean;
}

export default function ContactForm({ service, city, variant = 'default', isDark = false }: ContactFormProps) {
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

      // Redirect to WhatsApp with the form data
      const message = `*Requirement Received*
👤 *Customer*: ${formData.name}
📞 *Contact*: ${formData.phone}
🔧 *Service Requested*: ${formData.service || service}
📍 *Location*: ${formData.city || city}
💬 *Details*: ${formData.message || 'I would like to discuss this on WhatsApp'}`;

      const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1500); // Small delay to let the user see the "Received" state
    } catch (err) {
      console.error('Submission error:', err);
      setAiStatus('❌ Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-16 px-8 bg-white/50 backdrop-blur-3xl border border-primary-200 rounded-[3rem] animate-fade-in shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-100 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-50"></div>
        
        <div className="relative z-10">
          <div className="w-24 h-24 bg-gradient-to-br from-primary-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_10px_40px_-10px_rgba(37,119,235,0.5)] scale-110">
            <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h3 className="text-3xl font-heading font-bold text-dark-950 mb-4 tracking-tight">Requirement Received!</h3>
          <p className="text-lg text-dark-600 leading-relaxed mb-8 max-w-sm mx-auto">
            Thank you, <span className="font-bold text-primary-600">{formData.name}</span>. Our AI has successfully analyzed your request and paired you with local technicians in <span className="font-bold text-dark-950">{formData.city || city}</span>.
          </p>
          
          <div className="bg-dark-50 rounded-2xl p-5 border border-dark-100 mb-10 text-left">
            <div className="flex items-center gap-3 mb-2 text-dark-700 font-bold text-sm">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
               Next Step
            </div>
            <p className="text-sm text-dark-500 leading-relaxed">
               A professional service coordinator will <span className="text-dark-950 font-bold decoration-primary-500 decoration-2 underline-offset-4 underline italic">message you directly</span> with a quote within 10-15 minutes.
            </p>
          </div>

          <button
            onClick={() => { setIsSubmitted(false); setFormData({ name: '', phone: '', email: '', service: service || '', city: city || '', message: '' }); }}
            className="w-full py-4 bg-dark-950 text-white font-bold rounded-2xl hover:bg-dark-800 transition-all shadow-xl hover:shadow-2xl active:scale-[0.98]"
          >
            Submit Another Request
          </button>
        </div>
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
            <label htmlFor="contact-name" className={`block text-xs font-bold uppercase tracking-widest mb-1.5 ml-1 ${isDark ? 'text-white/80' : 'text-dark-700'}`}>Full Name *</label>
            <input
              type="text"
              id="contact-name"
              required
              className={`w-full border rounded-2xl px-5 py-3.5 outline-none transition-all shadow-sm ${
                isDark 
                  ? 'bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white/20 focus:ring-white/30' 
                  : 'bg-white border-dark-100 text-dark-950 placeholder:text-dark-400 focus:ring-primary-500 hover:border-primary-200'
              }`}
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="contact-phone" className={`block text-xs font-bold uppercase tracking-widest mb-1.5 ml-1 ${isDark ? 'text-white/80' : 'text-dark-700'}`}>Phone Number *</label>
            <input
              type="tel"
              id="contact-phone"
              required
              className={`w-full border rounded-2xl px-5 py-3.5 outline-none transition-all shadow-sm ${
                isDark 
                  ? 'bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white/20 focus:ring-white/30' 
                  : 'bg-white border-dark-100 text-dark-950 placeholder:text-dark-400 focus:ring-primary-500 hover:border-primary-200'
              }`}
              placeholder="+966 50 123 4567"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="contact-email" className={`block text-xs font-bold uppercase tracking-widest mb-1.5 ml-1 ${isDark ? 'text-white/80' : 'text-dark-700'}`}>Email</label>
          <input
            type="email"
            id="contact-email"
            className={`w-full border rounded-2xl px-5 py-3.5 outline-none transition-all shadow-sm ${
              isDark 
                ? 'bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white/20 focus:ring-white/30' 
                : 'bg-white border-dark-100 text-dark-950 placeholder:text-dark-400 focus:ring-primary-500 hover:border-primary-200'
            }`}
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        {/* WhatsApp Alternative */}
        <a
          href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in ${formData.service || service || 'services'} in ${formData.city || city || 'my city'}.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-4 px-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 border-2 
            ${isDark 
              ? 'border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10' 
              : 'border-emerald-100 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-200'}
          `}
        >
          <svg className="w-5 h-5 font-bold" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          Quick Chat on WhatsApp
        </a>

        {!service && (
          <div>
            <label htmlFor="contact-service" className={`block text-xs font-bold uppercase tracking-widest mb-1.5 ml-1 ${isDark ? 'text-white/80' : 'text-dark-700'}`}>Service Needed *</label>
            <select
              id="contact-service"
              required
              className={`w-full border rounded-2xl px-5 py-3.5 outline-none transition-all shadow-sm ${
                isDark 
                  ? 'bg-white/10 border-white/20 text-white focus:bg-white/20 focus:ring-white/30' 
                  : 'bg-white border-dark-100 text-dark-950 focus:ring-primary-500 hover:border-primary-200'
              }`}
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value="" className="text-dark-950">Select a service</option>
              <option value="AC Repair" className="text-dark-950">AC Repair</option>
              <option value="Plumbing" className="text-dark-950">Plumbing</option>
              <option value="Electrician" className="text-dark-950">Electrician</option>
              <option value="Pest Control" className="text-dark-950">Pest Control</option>
              <option value="Deep Cleaning" className="text-dark-950">Deep Cleaning</option>
              <option value="Sofa Cleaning" className="text-dark-950">Sofa Cleaning</option>
              <option value="Water Tank Cleaning" className="text-dark-950">Water Tank Cleaning</option>
              <option value="Handyman" className="text-dark-950">Handyman</option>
              <option value="Movers & Packers" className="text-dark-950">Movers & Packers</option>
              <option value="Car Towing" className="text-dark-950">Car Towing</option>
            </select>
          </div>
        )}

        {!city && (
          <div>
            <label htmlFor="contact-city" className={`block text-xs font-bold uppercase tracking-widest mb-1.5 ml-1 ${isDark ? 'text-white/80' : 'text-dark-700'}`}>City *</label>
            <select
              id="contact-city"
              required
              className={`w-full border rounded-2xl px-5 py-3.5 outline-none transition-all shadow-sm ${
                isDark 
                  ? 'bg-white/10 border-white/20 text-white focus:bg-white/20 focus:ring-white/30' 
                  : 'bg-white border-dark-100 text-dark-950 focus:ring-primary-500 hover:border-primary-200'
              }`}
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            >
              <option value="" className="text-dark-950">Select a city</option>
              <option value="Dubai" className="text-dark-950">Dubai</option>
              <option value="Abu Dhabi" className="text-dark-950">Abu Dhabi</option>
              <option value="Riyadh" className="text-dark-950">Riyadh</option>
              <option value="Jeddah" className="text-dark-950">Jeddah</option>
              <option value="Doha" className="text-dark-950">Doha</option>
              <option value="Kuwait City" className="text-dark-950">Kuwait City</option>
              <option value="Manama" className="text-dark-950">Manama</option>
              <option value="Muscat" className="text-dark-950">Muscat</option>
            </select>
          </div>
        )}

        <div>
          <label htmlFor="contact-message" className={`block text-xs font-bold uppercase tracking-widest mb-1.5 ml-1 ${isDark ? 'text-white/80' : 'text-dark-700'}`}>Describe Your Needs</label>
          <textarea
            id="contact-message"
            rows={3}
            className={`w-full border rounded-2xl px-5 py-4 outline-none transition-all shadow-sm resize-none ${
              isDark 
                ? 'bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white/20 focus:ring-white/30' 
                : 'bg-white border-dark-100 text-dark-950 placeholder:text-dark-400 focus:ring-primary-500 hover:border-primary-200'
            }`}
            placeholder="Tell us about your requirements..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="relative group w-full bg-primary-600 text-white font-bold py-4 rounded-2xl shadow-xl hover:bg-primary-700 transition-all disabled:opacity-50 disabled:cursor-wait overflow-hidden mb-4"
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
                <span className="text-lg">Submit Requirement</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </button>

        {/* WhatsApp Alternative */}
        <a
          href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in ${formData.service || service || 'services'} in ${formData.city || city || 'my city'}.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-4 px-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 border-2 mb-6
            ${isDark 
              ? 'border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10' 
              : 'border-emerald-100 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-200'}
          `}
        >
          <svg className="w-5 h-5 font-bold" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          Quick Chat on WhatsApp
        </a>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 gap-3 mb-6">
           <div className={`flex items-center gap-2 p-3 rounded-xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-dark-50 border-dark-100'}`}>
              <span className="text-lg">⚡</span>
              <div>
                 <p className={`text-[9px] font-black uppercase tracking-wider ${isDark ? 'text-white' : 'text-dark-900'}`}>Fast Response</p>
                 <p className={`text-[8px] font-medium ${isDark ? 'text-white/50' : 'text-dark-500'}`}>Under 15 Mins</p>
              </div>
           </div>
           <div className={`flex items-center gap-2 p-3 rounded-xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-dark-50 border-dark-100'}`}>
              <span className="text-lg">🛡️</span>
              <div>
                 <p className={`text-[9px] font-black uppercase tracking-wider ${isDark ? 'text-white' : 'text-dark-900'}`}>Verified Pro</p>
                 <p className={`text-[8px] font-medium ${isDark ? 'text-white/50' : 'text-dark-500'}`}>100% Background Checked</p>
              </div>
           </div>
        </div>

        <p className={`text-[11px] text-center uppercase tracking-widest font-black ${isDark ? 'text-white/40' : 'text-dark-400'}`}>
          AI analysis simplifies your booking process.
        </p>
      </form>
    </div>
  );
}
