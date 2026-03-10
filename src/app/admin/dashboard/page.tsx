'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
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
  const [user, setUser] = useState<any>(null);
  const [filter, setFilter] = useState('');
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/admin/login');
      } else {
        setUser(session.user);
        fetchLeads();
      }
    };
    checkUser();
  }, [router]);

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching leads:', error);
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

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  const filteredLeads = leads.filter(lead => 
    lead.name.toLowerCase().includes(filter.toLowerCase()) ||
    lead.service.toLowerCase().includes(filter.toLowerCase()) ||
    lead.city.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading && !user) return null;

  return (
    <div className="min-h-screen bg-dark-50">
      {/* Sidebar/Header */}
      <header className="bg-white border-b border-dark-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-hero-pattern rounded-xl flex items-center justify-center text-white font-heading font-bold">
                ME
              </div>
              <div>
                <h1 className="text-lg font-heading font-bold text-dark-950">Lead Central</h1>
                <p className="text-[10px] text-primary-600 font-black uppercase tracking-widest">Admin Dashboard</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-sm text-dark-500 hidden sm:block italic">Logged in as {user?.email}</span>
              <button 
                onClick={handleLogout}
                className="text-xs font-bold text-red-600 bg-red-50 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Stats Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Total Leads', value: leads.length, color: 'bg-blue-600' },
            { label: 'Pending', value: leads.filter(l => l.status === 'pending').length, color: 'bg-amber-500' },
            { label: 'Contacted', value: leads.filter(l => l.status === 'contacted').length, color: 'bg-emerald-500' },
            { label: 'Archived', value: leads.filter(l => l.status === 'archived').length, color: 'bg-dark-400' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-3xl border border-dark-100 shadow-sm relative overflow-hidden group">
              <div className={`absolute top-0 right-0 w-20 h-20 ${stat.color} opacity-5 rounded-full -translate-y-1/2 translate-x-1/2`}></div>
              <p className="text-[10px] font-black uppercase tracking-widest text-dark-400 mb-1">{stat.label}</p>
              <p className="text-3xl font-heading font-bold text-dark-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-[2.5rem] border border-dark-100 shadow-sm p-2 mb-8 flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Filter by Name, Service, or City..." 
              className="w-full pl-12 pr-6 py-4 rounded-2xl bg-dark-50 border-transparent focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all text-sm"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <button 
            onClick={fetchLeads}
            className="px-6 py-4 bg-dark-900 text-white rounded-2xl font-bold text-sm hover:bg-dark-800 transition-all flex items-center justify-center gap-2"
          >
            <svg className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh
          </button>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-[2.5rem] border border-dark-100 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-dark-100 bg-dark-50/50">
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-dark-500">Date</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-dark-500">Client Info</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-dark-500">Service Topic</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-dark-500">Location</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-dark-500">Status</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-dark-500">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-100">
                {filteredLeads.length > 0 ? filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-primary-50/30 transition-colors group">
                    <td className="px-8 py-6 align-top">
                      <p className="text-sm font-bold text-dark-900">{new Date(lead.created_at).toLocaleDateString()}</p>
                      <p className="text-[10px] text-dark-400 font-medium">{new Date(lead.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                    </td>
                    <td className="px-8 py-6 align-top">
                      <p className="text-sm font-bold text-dark-950">{lead.name}</p>
                      <p className="text-xs text-dark-500">{lead.phone}</p>
                      <p className="text-xs text-primary-600 font-medium italic">{lead.email}</p>
                    </td>
                    <td className="px-8 py-6 align-top">
                      <div className="flex flex-col gap-1">
                        <span className="inline-flex items-center self-start px-2.5 py-1 rounded-md bg-primary-100 text-primary-700 text-[10px] font-bold">
                          {lead.service}
                        </span>
                        <p className="text-xs text-dark-600 line-clamp-2 mt-1">{lead.message}</p>
                      </div>
                    </td>
                    <td className="px-8 py-6 align-top">
                      <p className="text-sm text-dark-900 font-medium">📍 {lead.city}</p>
                    </td>
                    <td className="px-8 py-6 align-top">
                      <select 
                        value={lead.status} 
                        onChange={(e) => updateLeadStatus(lead.id, e.target.value as Lead['status'])}
                        className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border-0 focus:ring-2 focus:ring-offset-2 transition-all cursor-pointer
                          ${lead.status === 'pending' ? 'bg-amber-100 text-amber-700 focus:ring-amber-500' : ''}
                          ${lead.status === 'contacted' ? 'bg-emerald-100 text-emerald-700 focus:ring-emerald-500' : ''}
                          ${lead.status === 'completed' ? 'bg-blue-100 text-blue-700 focus:ring-blue-500' : ''}
                          ${lead.status === 'archived' ? 'bg-dark-100 text-dark-700 focus:ring-dark-500' : ''}
                        `}
                      >
                        <option value="pending">Pending</option>
                        <option value="contacted">Contacted</option>
                        <option value="completed">Completed</option>
                        <option value="archived">Archived</option>
                      </select>
                    </td>
                    <td className="px-8 py-6 align-top">
                      <div className="flex items-center gap-3">
                        <button className="p-2 text-dark-400 hover:text-primary-600 transition-colors bg-dark-50 rounded-lg" title="Forward Lead">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={6} className="px-8 py-20 text-center">
                      <div className="flex flex-col items-center gap-4">
                        <div className="w-16 h-16 bg-dark-50 rounded-full flex items-center justify-center text-dark-200">
                           <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                           </svg>
                        </div>
                        <p className="text-dark-500 font-medium">No leads found matching your criteria.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
