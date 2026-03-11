'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

interface Lead {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  city: string;
  message: string;
  status: 'pending' | 'contacted' | 'completed' | 'archived';
  notes: string;
}

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [dateFilter, setDateFilter] = useState<'all' | 'today' | 'week' | 'month'>('all');
  
  // Selection state
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  
  // Modals state
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  
  // Edit form state
  const [editForm, setEditForm] = useState<Partial<Lead>>({});
  const [isSaving, setIsSaving] = useState(false);

  // Email form state
  const [emailSubject, setEmailSubject] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  // Templates
  const templates = [
    { title: 'Intro', text: "Hello [Name],\n\nThank you for reaching out to Middle East Services. We've received your request for [Service] in [City]. Our specialist will call you shortly on [Phone] to confirm details.\n\nBest regards,\nOperations Team" },
    { title: 'Price Inquiry', text: "Hello [Name],\n\nRegarding your request for [Service] in [City], could you please provide more details or photos of the issue so we can give you an accurate estimate?\n\nYou can also reply to this email or contact us via WhatsApp.\n\nBest regards." },
    { title: 'Outside Area', text: "Hello [Name],\n\nWe appreciate your inquiry for [Service]. Unfortunately, we do not currently cover [City] for this specific service. We will keep your details and notify you once we expand to your area.\n\nThank you for understanding." },
  ];

  const applyTemplate = (template: string) => {
    if (!selectedLead) return;
    const processed = template
      .replace(/\[Name\]/g, selectedLead.name)
      .replace(/\[Service\]/g, selectedLead.service)
      .replace(/\[City\]/g, selectedLead.city)
      .replace(/\[Phone\]/g, selectedLead.phone);
    setEmailMessage(processed);
  };

  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error:', error);
    } else {
      setLeads(data || []);
    }
    setLoading(false);
  };

  const updateLeadStatus = async (id: string, status: Lead['status']) => {
    const { error } = await supabase
      .from('leads')
      .update({ status })
      .eq('id', id);

    if (error) {
      alert('Failed to update status');
    } else {
      setLeads(leads.map(lead => lead.id === id ? { ...lead, status } : lead));
    }
  };

  const deleteLead = async (id: string) => {
    if (!confirm('Permanently delete this lead?')) return;
    
    setIsDeleting(id);
    const { error } = await supabase.from('leads').delete().eq('id', id);

    if (error) {
      alert('Error: ' + error.message);
    } else {
      setLeads(leads.filter(l => l.id !== id));
      setSelectedIds(selectedIds.filter(sid => sid !== id));
    }
    setIsDeleting(null);
  };

  // --- Bulk Actions ---
  const toggleSelectAll = () => {
    if (selectedIds.length === filteredLeads.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredLeads.map(l => l.id));
    }
  };

  const toggleSelectLead = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(sid => sid !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const bulkDelete = async () => {
    if (!confirm(`Are you sure you want to delete ${selectedIds.length} leads permanently?`)) return;
    
    setLoading(true);
    const { error } = await supabase
      .from('leads')
      .delete()
      .in('id', selectedIds);

    if (error) {
       alert('Bulk delete failed: ' + error.message);
    } else {
       setLeads(leads.filter(l => !selectedIds.includes(l.id)));
       setSelectedIds([]);
    }
    setLoading(false);
  };

  const exportToCSV = () => {
    const leadsToExport = leads.filter(l => selectedIds.includes(l.id));
    if (leadsToExport.length === 0) return;

    const headers = ['Date', 'Name', 'Phone', 'Email', 'Service', 'City', 'Status', 'Message'];
    const rows = leadsToExport.map(l => [
      new Date(l.created_at).toLocaleDateString(),
      l.name,
      l.phone,
      l.email || 'N/A',
      l.service,
      l.city,
      l.status,
      l.message?.replace(/,/g, ' ') || ''
    ]);

    const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `leads_export_${new Date().toISOString().slice(0,10)}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  // --------------------

  const openEditModal = (lead: Lead) => {
    setSelectedLead(lead);
    setEditForm(lead);
    setEditModalOpen(true);
  };

  const handleUpdateLead = async () => {
    if (!selectedLead) return;
    setIsSaving(true);
    const { error } = await supabase
      .from('leads')
      .update(editForm)
      .eq('id', selectedLead.id);

    if (error) {
      alert('Failed to save: ' + error.message);
    } else {
      setLeads(leads.map(l => l.id === selectedLead.id ? { ...l, ...editForm } as Lead : l));
      setEditModalOpen(false);
    }
    setIsSaving(false);
  };

  const openEmailModal = (lead: Lead) => {
    setSelectedLead(lead);
    setEmailSubject(`Middle East Services — Regarding your ${lead.service} inquiry`);
    setEmailMessage(`Hello ${lead.name},\n\nWe received your request for ${lead.service} in ${lead.city}.\n\n[Write your message here...]`);
    setEmailModalOpen(true);
  };

  const handleSendEmail = async () => {
    if (!selectedLead || !emailSubject || !emailMessage) return;
    setIsSending(true);
    try {
      const response = await fetch('/api/admin/send-email/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: selectedLead.email,
          subject: emailSubject,
          message: emailMessage,
          leadId: selectedLead.id
        })
      });

      const result = await response.json();
      if (result.success) {
        alert('Email sent successfully!');
        setEmailModalOpen(false);
        if (selectedLead.status === 'pending') updateLeadStatus(selectedLead.id, 'contacted');
      } else {
        alert('Error: ' + result.error);
      }
    } catch (err) {
      alert('Failed to send email');
    } finally {
      setIsSending(false);
    }
  };

  const filteredLeads = leads.filter(l => {
    // Text Filter
    const matchesText = 
      l.name.toLowerCase().includes(filter.toLowerCase()) ||
      l.service.toLowerCase().includes(filter.toLowerCase()) ||
      l.city.toLowerCase().includes(filter.toLowerCase()) ||
      l.phone.includes(filter) ||
      (l.email && l.email.toLowerCase().includes(filter.toLowerCase())) ||
      (l.status === filter);

    if (!matchesText) return false;
    
    // Date Filter
    const leadDate = new Date(l.created_at);
    const now = new Date();
    
    if (dateFilter === 'today') {
      return leadDate.toDateString() === now.toDateString();
    } else if (dateFilter === 'week') {
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      return leadDate >= weekAgo;
    } else if (dateFilter === 'month') {
      const monthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
      return leadDate >= monthAgo;
    }
    
    return true;
  });

  return (
    <div className="space-y-8 animate-fade-in pb-24">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-heading font-black text-dark-950 tracking-tight">Leads Pipeline</h1>
          <p className="text-dark-500 font-medium">Real-time enquiries from across the Middle East.</p>
        </div>
        <button 
          onClick={fetchLeads}
          className="p-3 bg-white border border-dark-200 rounded-2xl hover:bg-dark-50 transition-all shadow-sm"
        >
          <svg className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Enquiries', value: leads.length, icon: '⚡', color: 'bg-primary-50' },
          { label: 'Pending Response', value: leads.filter(l => l.status === 'pending').length, icon: '🕒', color: 'bg-amber-50' },
          { label: 'Total Cities', value: new Set(leads.map(l => l.city)).size, icon: '🌍', color: 'bg-emerald-50' },
        ].map((s) => (
          <div key={s.label} className="bg-white p-6 rounded-[2rem] border border-dark-100 shadow-sm transition-all hover:shadow-md group">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-dark-400 mb-2">{s.label}</p>
            <div className="flex items-center justify-between">
              <span className="text-4xl font-heading font-black text-dark-900">{s.value}</span>
              <div className={`w-12 h-12 ${s.color} rounded-2xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform`}>{s.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Analytics & Quick Filters */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
         <div className="xl:col-span-3 bg-white p-8 rounded-[2.5rem] border border-dark-100 shadow-sm">
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-xl font-heading font-black text-dark-950">Market Intelligence</h3>
               <div className="flex flex-wrap gap-4">
                  <div className="flex gap-1 bg-dark-50 p-1 rounded-xl border border-dark-100">
                     {['all', 'today', 'week', 'month'].map((df) => (
                        <button 
                           key={df}
                           onClick={() => setDateFilter(df as any)}
                           className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all
                              ${dateFilter === df ? 'bg-white text-dark-950 shadow-sm' : 'text-dark-400 hover:text-dark-600'}
                           `}
                        >
                           {df}
                        </button>
                     ))}
                  </div>
                  <div className="flex gap-2">
                     {['all', 'pending', 'contacted', 'completed'].map((s) => (
                        <button 
                           key={s}
                           onClick={() => setFilter(s === 'all' ? '' : s)}
                           className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all
                              ${(filter === s || (filter === '' && s === 'all')) ? 'bg-dark-950 text-white shadow-lg' : 'bg-dark-50 text-dark-400 hover:bg-dark-100'}
                           `}
                        >
                           {s}
                        </button>
                     ))}
                  </div>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary-600 mb-4">Top Services</p>
                  <div className="space-y-4">
                     {Array.from(new Set(leads.map(l => l.service))).slice(0, 4).map(service => {
                        const count = leads.filter(l => l.service === service).length;
                        const percentage = (count / leads.length) * 100 || 0;
                        return (
                           <div key={service} className="space-y-1.5">
                              <div className="flex justify-between text-xs font-bold text-dark-800">
                                 <span>{service}</span>
                                 <span>{count}</span>
                              </div>
                              <div className="h-2 bg-dark-50 rounded-full overflow-hidden">
                                 <div className="h-full bg-primary-500 rounded-full transition-all duration-1000" style={{ width: `${percentage}%` }}></div>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </div>
               <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-4">City Distribution</p>
                  <div className="space-y-4">
                     {Array.from(new Set(leads.map(l => l.city))).slice(0, 4).map(city => {
                        const count = leads.filter(l => l.city === city).length;
                        const percentage = (count / leads.length) * 100 || 0;
                        return (
                           <div key={city} className="space-y-1.5">
                              <div className="flex justify-between text-xs font-bold text-dark-800">
                                 <span>{city}</span>
                                 <span>{count}</span>
                              </div>
                              <div className="h-2 bg-dark-50 rounded-full overflow-hidden">
                                 <div className="h-full bg-emerald-500 rounded-full transition-all duration-1000" style={{ width: `${percentage}%` }}></div>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-8 rounded-[2.5rem] text-white shadow-xl shadow-primary-900/20 flex flex-col justify-between">
            <div>
               <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">Efficiency Score</p>
               <h3 className="text-3xl font-heading font-black">84%</h3>
               <p className="text-xs opacity-80 mt-2 font-medium">Response rate is up 12% from last week.</p>
            </div>
            <div className="space-y-3 mt-8">
               <div className="flex items-center gap-3 bg-white/10 p-3 rounded-2xl">
                  <span className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-sm">🔥</span>
                  <div>
                     <p className="text-[10px] font-black uppercase">Hot Spot</p>
                     <p className="text-xs font-bold">Dubai International City</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-dark-100 shadow-xl overflow-hidden relative">
        <div className="p-4 border-b border-dark-50">
          <div className="relative">
            <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search leads..." 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-2xl bg-dark-50 border-transparent focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all text-sm font-semibold"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-dark-50/50">
                <th className="px-8 py-5 w-10">
                   <input 
                    type="checkbox" 
                    checked={selectedIds.length === filteredLeads.length && filteredLeads.length > 0} 
                    onChange={toggleSelectAll}
                    className="w-4 h-4 rounded border-dark-200 text-primary-600 focus:ring-primary-500"
                   />
                </th>
                <th className="px-5 py-5 text-[10px] font-black uppercase tracking-widest text-dark-500">Timestamp</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-dark-500">Contact</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-dark-500">Target</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-dark-500">Status</th>
                <th className="px-8 py-5 text-right text-[10px] font-black uppercase tracking-widest text-dark-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-100">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className={`hover:bg-primary-50/10 transition-colors ${selectedIds.includes(lead.id) ? 'bg-primary-50/30' : ''}`}>
                  <td className="px-8 py-6">
                     <input 
                      type="checkbox" 
                      checked={selectedIds.includes(lead.id)}
                      onChange={() => toggleSelectLead(lead.id)}
                      className="w-4 h-4 rounded border-dark-200 text-primary-600 focus:ring-primary-500"
                     />
                  </td>
                  <td className="px-5 py-6">
                    <p className="text-sm font-bold text-dark-900">{new Date(lead.created_at).toLocaleDateString()}</p>
                    <p className="text-[10px] text-dark-400 font-black">{new Date(lead.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-black text-dark-950">{lead.name}</p>
                    <div className="flex items-center gap-2 mt-2">
                       <a 
                        href={`tel:${lead.phone}`} 
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-dark-50 hover:bg-primary-50 text-dark-600 hover:text-primary-700 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all border border-transparent hover:border-primary-100"
                        title="Direct Call"
                       >
                         <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor font-bold"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                         Call
                       </a>
                       <a 
                        href={`https://wa.me/${lead.phone.replace(/\+/g, '').replace(/\s/g, '')}?text=Hello ${lead.name}, this is Middle East Services. We've received your request for ${lead.service} in ${lead.city}. How can we help?`} 
                        target="_blank" 
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-600 hover:text-emerald-700 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all border border-transparent hover:border-emerald-200"
                        title="WhatsApp Chat"
                       >
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                          WhatsApp
                       </a>
                    </div>
                    <p className="text-[11px] text-primary-600 font-black mt-2 leading-none hover:underline cursor-pointer">{lead.email}</p>
                  </td>
                  <td className="px-8 py-6">
                    <span className="inline-block px-2 py-0.5 rounded-md bg-dark-900 text-white text-[9px] font-black uppercase tracking-wider mb-1.5">
                      {lead.service} @ {lead.city}
                    </span>
                    <p className="text-xs text-dark-600 line-clamp-1 max-w-[200px]">{lead.message || '...'}</p>
                  </td>
                  <td className="px-8 py-6">
                    <select 
                      value={lead.status} 
                      onChange={(e) => updateLeadStatus(lead.id, e.target.value as Lead['status'])}
                      className={`text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border-0 focus:ring-2 transition-all cursor-pointer
                        ${lead.status === 'pending' ? 'bg-amber-100 text-amber-700' : lead.status === 'contacted' ? 'bg-emerald-100 text-emerald-700' : 'bg-dark-100 text-dark-700'}
                      `}
                    >
                      <option value="pending">Pending</option>
                      <option value="contacted">Contacted</option>
                      <option value="completed">Completed</option>
                      <option value="archived">Archived</option>
                    </select>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center justify-end gap-2">
                       <button onClick={() => { setSelectedLead(lead); setViewModalOpen(true); }} className="p-2 text-dark-400 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all" title="View Details">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                       </button>
                       <Link 
                        href={`/admin/invoices/?name=${encodeURIComponent(lead.name)}&email=${encodeURIComponent(lead.email || '')}`}
                        className="p-2 text-amber-600 hover:bg-amber-50 rounded-xl transition-all" 
                        title="Generate Invoice"
                       >
                         <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                         </svg>
                       </Link>
                       <button onClick={() => openEditModal(lead)} className="p-2 text-dark-400 hover:text-dark-900 hover:bg-dark-50 rounded-xl transition-all" title="Edit">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                       </button>
                       {lead.email && (
                          <button onClick={() => openEmailModal(lead)} className="p-2 text-primary-600 hover:bg-primary-50 rounded-xl transition-all" title="Email">
                             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                          </button>
                       )}
                       <button onClick={() => deleteLead(lead.id)} disabled={isDeleting === lead.id} className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all" title="Delete">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                       </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Floating Bulk Action Bar */}
      {selectedIds.length > 0 && (
         <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-dark-950 text-white px-8 py-4 rounded-3xl shadow-2xl border border-white/10 flex items-center gap-6 animate-slide-up">
            <div className="flex items-center gap-3 pr-6 border-r border-white/10">
               <span className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-xs font-black">{selectedIds.length}</span>
               <span className="text-sm font-bold">Leads Selected</span>
            </div>
            
            <button 
              onClick={exportToCSV}
              className="flex items-center gap-2 hover:text-primary-400 transition-colors text-sm font-bold"
            >
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
               Export to CSV
            </button>

            <div className="h-6 w-px bg-white/10 mx-2"></div>

            <div className="flex items-center gap-2">
               <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Set Status:</span>
               <div className="flex gap-1">
                  {['pending', 'contacted', 'completed', 'archived'].map((status) => (
                    <button
                      key={status}
                      onClick={async () => {
                        if (!confirm(`Update ${selectedIds.length} leads to ${status}?`)) return;
                        setLoading(true);
                        const { error } = await supabase.from('leads').update({ status }).in('id', selectedIds);
                        if (!error) {
                          setLeads(leads.map(l => selectedIds.includes(l.id) ? { ...l, status: status as any } : l));
                          setSelectedIds([]);
                        }
                        setLoading(false);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all
                        ${status === 'pending' ? 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/40' : 
                          status === 'contacted' ? 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/40' : 
                          status === 'completed' ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/40' : 
                          'bg-dark-700 text-dark-300 hover:bg-dark-600'}
                      `}
                    >
                      {status}
                    </button>
                  ))}
               </div>
            </div>

            <div className="h-6 w-px bg-white/10 mx-2"></div>

            <button 
              onClick={bulkDelete}
              className="flex items-center gap-2 hover:text-red-400 transition-colors text-sm font-bold bg-red-500/10 px-4 py-2 rounded-xl"
            >
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
               Delete
            </button>

            <button 
              onClick={() => setSelectedIds([])}
              className="text-dark-500 hover:text-white transition-colors"
            >
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
         </div>
      )}

      {/* Edit Modal */}
      {editModalOpen && (
        <div className="fixed inset-0 bg-dark-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
           <div className="bg-white rounded-[3rem] w-full max-w-xl shadow-2xl overflow-hidden animate-slide-up">
              <div className="p-10 border-b border-dark-100 flex justify-between items-center">
                 <h2 className="text-3xl font-heading font-black text-dark-950">Update Lead</h2>
                 <button onClick={() => setEditModalOpen(false)} className="w-12 h-12 bg-dark-50 rounded-full flex items-center justify-center text-dark-400 hover:text-dark-950 transition-all">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                 </button>
              </div>
              <div className="p-10 space-y-6 max-h-[50vh] overflow-y-auto">
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                       <label className="text-[10px] font-black uppercase tracking-widest text-dark-400 block mb-2">Name</label>
                       <input type="text" value={editForm.name || ''} onChange={(e) => setEditForm({...editForm, name: e.target.value})} className="w-full px-5 py-3 rounded-2xl bg-dark-50 border-0 focus:ring-2 focus:ring-primary-500 font-bold text-sm" />
                    </div>
                    <div>
                       <label className="text-[10px] font-black uppercase tracking-widest text-dark-400 block mb-2">Phone</label>
                       <input type="text" value={editForm.phone || ''} onChange={(e) => setEditForm({...editForm, phone: e.target.value})} className="w-full px-5 py-3 rounded-2xl bg-dark-50 border-0 focus:ring-2 focus:ring-primary-500 font-bold text-sm" />
                    </div>
                 </div>
                 <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-dark-400 block mb-2">Email</label>
                    <input type="text" value={editForm.email || ''} onChange={(e) => setEditForm({...editForm, email: e.target.value})} className="w-full px-5 py-3 rounded-2xl bg-dark-50 border-0 focus:ring-2 focus:ring-primary-500 font-bold text-sm" />
                 </div>
                 <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-dark-400 block mb-2">Internal Notes</label>
                    <textarea value={editForm.notes || ''} onChange={(e) => setEditForm({...editForm, notes: e.target.value})} rows={4} className="w-full px-5 py-3 rounded-2xl bg-dark-50 border-0 focus:ring-2 focus:ring-primary-500 font-medium text-sm" />
                 </div>
              </div>
              <div className="p-10 bg-dark-50 flex justify-end gap-4">
                 <button onClick={() => setEditModalOpen(false)} className="px-6 py-4 font-black text-xs uppercase tracking-widest text-dark-500 hover:text-dark-950 transition-all">Discard</button>
                 <button onClick={handleUpdateLead} disabled={isSaving} className="px-10 py-4 bg-primary-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary-700 shadow-xl shadow-primary-600/30 transition-all disabled:opacity-50">
                    {isSaving ? 'Saving...' : 'Save Changes'}
                 </button>
              </div>
           </div>
        </div>
      )}

      {/* Email Modal */}
      {emailModalOpen && (
        <div className="fixed inset-0 bg-dark-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
           <div className="bg-white rounded-[3rem] w-full max-w-2xl shadow-2xl overflow-hidden animate-slide-up">
              <div className="p-10 border-b border-dark-100 flex justify-between items-center">
                 <div>
                    <h2 className="text-3xl font-heading font-black text-dark-950">Draft Message</h2>
                    <p className="text-dark-500 font-bold text-xs mt-1">To: {selectedLead?.email}</p>
                 </div>
                 <button onClick={() => setEmailModalOpen(false)} className="w-12 h-12 bg-dark-50 rounded-full flex items-center justify-center text-dark-400 hover:text-dark-950 transition-all">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                 </button>
              </div>
              <div className="p-10 space-y-6">
                 <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-dark-400 block mb-3">Quick Templates</label>
                    <div className="flex gap-2">
                       {templates.map((t) => (
                          <button 
                            key={t.title} 
                            onClick={() => applyTemplate(t.text)}
                            className="px-3 py-1.5 rounded-lg bg-dark-50 text-[10px] font-bold text-dark-600 hover:bg-primary-50 hover:text-primary-600 border border-transparent hover:border-primary-100 transition-all"
                          >
                             {t.title}
                          </button>
                       ))}
                    </div>
                 </div>
                 <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-dark-400 block mb-2">Subject</label>
                    <input type="text" value={emailSubject} onChange={(e) => setEmailSubject(e.target.value)} className="w-full px-5 py-4 rounded-2xl bg-dark-50 border-0 focus:ring-2 focus:ring-primary-500 font-bold text-sm" />
                 </div>
                 <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-dark-400 block mb-2">Message Body</label>
                    <textarea value={emailMessage} onChange={(e) => setEmailMessage(e.target.value)} rows={6} className="w-full px-5 py-4 rounded-2xl bg-dark-50 border-0 focus:ring-2 focus:ring-primary-500 font-medium text-sm leading-relaxed" />
                 </div>
              </div>
              <div className="p-10 bg-dark-50 flex justify-end gap-4">
                 <button onClick={() => setEmailModalOpen(false)} className="px-6 py-4 font-black text-xs uppercase tracking-widest text-dark-500 hover:text-dark-950 transition-all">Cancel</button>
                 <button onClick={handleSendEmail} disabled={isSending} className="px-10 py-4 bg-primary-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary-700 shadow-xl shadow-primary-600/30 transition-all disabled:opacity-50 flex items-center gap-2">
                    {isSending ? 'Sending...' : 'Send Message'}
                 </button>
              </div>
           </div>
        </div>
      )}

      {/* Lead View Modal */}
      {viewModalOpen && selectedLead && (
        <div className="fixed inset-0 bg-dark-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
           <div className="bg-white rounded-[3rem] w-full max-w-2xl shadow-2xl overflow-hidden animate-slide-up print:fixed print:inset-0 print:m-0 print:rounded-none">
              <div className="p-10 border-b border-dark-100 flex justify-between items-center print:hidden">
                 <div>
                    <h2 className="text-3xl font-heading font-black text-dark-950">Lead Insight</h2>
                    <p className="text-dark-500 font-bold text-xs mt-1">Ref: {selectedLead.id.slice(0,8).toUpperCase()}</p>
                 </div>
                 <div className="flex gap-3">
                   <button onClick={() => window.print()} className="w-12 h-12 bg-dark-50 rounded-full flex items-center justify-center text-dark-600 hover:bg-dark-900 hover:text-white transition-all">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                   </button>
                   <button onClick={() => setViewModalOpen(false)} className="w-12 h-12 bg-dark-50 rounded-full flex items-center justify-center text-dark-400 hover:text-dark-950 transition-all">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                   </button>
                 </div>
              </div>

              <div className="p-10 space-y-8">
                 <div className="flex justify-between items-start">
                    <div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-dark-400 mb-1">Customer Details</p>
                       <h3 className="text-3xl font-heading font-black text-dark-950">{selectedLead.name}</h3>
                       <div className="flex gap-4 mt-2">
                          <span className="text-sm font-bold text-primary-600">{selectedLead.phone}</span>
                          <span className="text-sm font-medium text-dark-400">{selectedLead.email || 'No Email'}</span>
                       </div>
                    </div>
                    <span className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest 
                       ${selectedLead.status === 'pending' ? 'bg-amber-100 text-amber-700' : selectedLead.status === 'contacted' ? 'bg-emerald-100 text-emerald-700' : 'bg-dark-100 text-dark-600'}`}>
                       {selectedLead.status}
                    </span>
                 </div>

                 <div className="grid grid-cols-2 gap-8 border-t border-dark-100 pt-8">
                    <div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-dark-400 mb-1">Inquiry For</p>
                       <p className="text-lg font-bold text-dark-900">{selectedLead.service}</p>
                    </div>
                    <div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-dark-400 mb-1">Region</p>
                       <p className="text-lg font-bold text-dark-900">{selectedLead.city}</p>
                    </div>
                 </div>

                 <div className="space-y-4">
                    <div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-dark-400 mb-2">Customer Message</p>
                       <div className="p-6 bg-dark-50 rounded-2xl text-dark-800 text-sm leading-relaxed italic">
                          "{selectedLead.message || "No message provided."}"
                       </div>
                    </div>
                    {selectedLead.notes && (
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-primary-600 mb-2">Internal Admin Notes</p>
                        <div className="p-6 bg-primary-50/50 rounded-2xl border border-primary-100 text-dark-800 text-sm leading-relaxed">
                            {selectedLead.notes}
                        </div>
                      </div>
                    )}
                 </div>

                 <div className="pt-4 text-[10px] font-black uppercase tracking-[0.3em] text-dark-300 text-center">
                    Received on {new Date(selectedLead.created_at).toLocaleString()}
                 </div>
              </div>

              <div className="p-10 bg-dark-50 flex justify-end print:hidden">
                 <button onClick={() => setViewModalOpen(false)} className="px-10 py-4 bg-dark-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-dark-950 transition-all">
                    Done
                 </button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}
