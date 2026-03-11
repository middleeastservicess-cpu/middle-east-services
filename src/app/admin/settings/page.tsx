'use client';

import React from 'react';

export default function SettingsPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-4xl font-heading font-black text-dark-950 tracking-tight">System Settings</h1>
        <p className="text-dark-500 font-medium">Configure your administrative preferences and notifications.</p>
      </div>

      <div className="bg-white rounded-[3rem] border border-dark-100 shadow-sm overflow-hidden">
        <div className="p-10 space-y-12">
          {/* Email Settings */}
          <section>
            <h3 className="text-lg font-bold text-dark-900 mb-6 flex items-center gap-2">
               <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-sm">✉️</span>
               Email Notifications
            </h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-dark-50 rounded-2xl">
                 <div>
                    <p className="text-sm font-bold text-dark-900">New Lead Alerts</p>
                    <p className="text-xs text-dark-400">Receive an email every time a new lead is submitted.</p>
                 </div>
                 <div className="w-12 h-6 bg-primary-600 rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-all"></div>
                 </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-dark-50 rounded-2xl">
                 <div>
                    <p className="text-sm font-bold text-dark-900">Daily Summary</p>
                    <p className="text-xs text-dark-400">Get a daily digest of all incoming requests.</p>
                 </div>
                 <div className="w-12 h-6 bg-dark-200 rounded-full relative cursor-pointer">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all"></div>
                 </div>
              </div>
            </div>
          </section>

          {/* CRM Config */}
          <section>
            <h3 className="text-lg font-bold text-dark-900 mb-6 flex items-center gap-2">
               <span className="w-8 h-8 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center text-sm">🔧</span>
               CRM Integrations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="p-6 border border-dark-100 rounded-3xl hover:border-primary-200 transition-colors cursor-pointer group">
                  <div className="w-10 h-10 bg-dark-50 rounded-xl mb-4 group-hover:bg-primary-50 transition-colors flex items-center justify-center">🚀</div>
                  <p className="font-bold text-dark-900">WhatsApp Dispatch</p>
                  <p className="text-xs text-dark-400 mt-1">Automatically send lead details to technician WhatsApp groups.</p>
               </div>
               <div className="p-6 border border-dark-100 rounded-3xl hover:border-primary-200 transition-colors cursor-pointer group">
                  <div className="w-10 h-10 bg-dark-50 rounded-xl mb-4 group-hover:bg-primary-50 transition-colors flex items-center justify-center">📋</div>
                  <p className="font-bold text-dark-900">Google Sheets Sync</p>
                  <p className="text-xs text-dark-400 mt-1">Export all historical leads to a live Google Sheet.</p>
               </div>
            </div>
          </section>
        </div>
        
        <div className="p-10 bg-dark-50 border-t border-dark-100 flex justify-end">
           <button className="px-10 py-4 bg-dark-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-dark-950 shadow-xl transition-all">
              Save Configuration
           </button>
        </div>
      </div>
    </div>
  );
}
