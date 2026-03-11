'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { supabase } from '@/lib/supabase';
import { useSearchParams } from 'next/navigation';

interface Invoice {
  id: string;
  created_at: string;
  invoice_number: string;
  client_name: string;
  client_email: string;
  amount: number;
  status: 'unpaid' | 'paid' | 'cancelled';
  items: any[];
}

function InvoicesContent() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const searchParams = useSearchParams();

  // New Invoice Form
  const [newInvoice, setNewInvoice] = useState({
    client_name: '',
    client_email: '',
    amount: 0,
    items: [{ description: '', price: 0 }]
  });

  useEffect(() => {
    fetchInvoices();
    
    // Pre-fill from query params if coming from Lead dashboard
    const name = searchParams.get('name');
    const email = searchParams.get('email');
    if (name || email) {
      setNewInvoice(prev => ({
        ...prev,
        client_name: name || '',
        client_email: email || ''
      }));
      setIsModalOpen(true);
    }
  }, [searchParams]);

  const fetchInvoices = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('invoices')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
       // If table doesn't exist yet, we show a zero state
       console.error('Error fetching invoices:', error);
    } else {
      setInvoices(data || []);
    }
    setLoading(false);
  };

  const createInvoice = async () => {
    const invNum = `INV-${Date.now().toString().slice(-6)}`;
    const { data, error } = await supabase
      .from('invoices')
      .insert([{
        ...newInvoice,
        invoice_number: invNum,
        status: 'unpaid'
      }])
      .select();

    if (error) {
      alert('Failed to create invoice. Make sure the database table "invoices" exists.');
    } else {
      setInvoices([data[0], ...invoices]);
      setIsModalOpen(false);
      setNewInvoice({ client_name: '', client_email: '', amount: 0, items: [{ description: '', price: 0 }] });
    }
  };

  const updateStatus = async (id: string, status: Invoice['status']) => {
    const { error } = await supabase
      .from('invoices')
      .update({ status })
      .eq('id', id);

    if (error) {
      alert('Update failed');
    } else {
      setInvoices(invoices.map(inv => inv.id === id ? { ...inv, status } : inv));
    }
  };

  const filteredInvoices = invoices.filter(inv => 
    inv.client_name.toLowerCase().includes(filter.toLowerCase()) ||
    inv.invoice_number.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-dark-950">Invoices</h1>
          <p className="text-dark-500 mt-1">Generate and manage billing for your clients.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-primary-600 text-white rounded-xl font-bold text-sm hover:bg-primary-700 shadow-lg shadow-primary-600/20 transition-all flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Create New Invoice
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl border border-dark-100 shadow-sm p-4">
        <div className="relative flex-1">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search by client or invoice number..." 
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-dark-50 border-transparent focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all text-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>

      {/* Invoice Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredInvoices.map((inv) => (
          <div key={inv.id} className="bg-white border border-dark-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-dark-400">{inv.invoice_number}</span>
              <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full 
                ${inv.status === 'paid' ? 'bg-emerald-100 text-emerald-700' : inv.status === 'unpaid' ? 'bg-amber-100 text-amber-700' : 'bg-dark-100 text-dark-500'}`}>
                {inv.status}
              </span>
            </div>
            <h3 className="text-xl font-heading font-bold text-dark-950 mb-1">{inv.client_name}</h3>
            <p className="text-sm text-dark-500 mb-6">{inv.client_email}</p>
            
            <div className="flex items-center justify-between pt-4 border-t border-dark-50">
               <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-dark-400">Total Amount</p>
                  <p className="text-2xl font-heading font-bold text-primary-600">${inv.amount}</p>
               </div>
               <div className="flex gap-2">
                 {inv.status === 'unpaid' && (
                   <button 
                    onClick={() => updateStatus(inv.id, 'paid')}
                    className="p-2 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-100 transition-colors"
                   >
                     <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                     </svg>
                   </button>
                 )}
                 <button className="p-2 bg-dark-50 text-dark-600 rounded-xl hover:bg-dark-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                 </button>
               </div>
            </div>
          </div>
        ))}

        {filteredInvoices.length === 0 && !loading && (
          <div className="col-span-full py-20 bg-white rounded-3xl border border-dashed border-dark-200 flex flex-col items-center justify-center text-dark-400">
             <svg className="w-12 h-12 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
             </svg>
             <p className="font-semibold">No invoices found.</p>
             <p className="text-sm">Start by creating your first invoice above.</p>
          </div>
        )}
      </div>

      {/* Create Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-dark-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[2.5rem] w-full max-w-xl shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden">
            <div className="p-8 border-b border-dark-100 flex justify-between items-center">
               <h2 className="text-2xl font-heading font-bold text-dark-950">New Invoice</h2>
               <button onClick={() => setIsModalOpen(false)} className="text-dark-400 hover:text-dark-950">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
               </button>
            </div>
            
            <div className="p-8 space-y-6 max-h-[60vh] overflow-y-auto">
               <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-dark-400 mb-2">Client Name</label>
                  <input 
                    type="text" 
                    value={newInvoice.client_name}
                    onChange={(e) => setNewInvoice({...newInvoice, client_name: e.target.value})}
                    className="w-full px-5 py-3 rounded-xl bg-dark-50 border-transparent focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all text-sm font-bold"
                    placeholder="e.g. John Doe"
                  />
               </div>
               <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-dark-400 mb-2">Client Email</label>
                  <input 
                    type="email" 
                    value={newInvoice.client_email}
                    onChange={(e) => setNewInvoice({...newInvoice, client_email: e.target.value})}
                    className="w-full px-5 py-3 rounded-xl bg-dark-50 border-transparent focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all text-sm font-bold"
                    placeholder="e.g. john@example.com"
                  />
               </div>
               <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-dark-400 mb-2">Total Amount ($)</label>
                  <input 
                    type="number" 
                    value={newInvoice.amount}
                    onChange={(e) => setNewInvoice({...newInvoice, amount: parseFloat(e.target.value) || 0})}
                    className="w-full px-5 py-3 rounded-xl bg-dark-50 border-transparent focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all text-sm font-bold"
                  />
               </div>
            </div>

            <div className="p-8 bg-dark-50 flex justify-end gap-3">
               <button onClick={() => setIsModalOpen(false)} className="px-6 py-3 font-bold text-dark-500 hover:text-dark-950">Cancel</button>
               <button 
                  onClick={createInvoice}
                  className="px-8 py-3 bg-primary-600 text-white rounded-xl font-bold shadow-lg shadow-primary-600/20 hover:bg-primary-700 transition-all"
               >
                  Generate Invoice
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function InvoicesPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-dark-400">Loading Pipeline...</div>}>
      <InvoicesContent />
    </Suspense>
  );
}
