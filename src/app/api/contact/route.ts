import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, service, city, message } = body;

    // 1. Save to Supabase
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          name,
          phone,
          email,
          service,
          city,
          message,
        },
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 });
    }

    // 2. Email Notification (Placeholder)
    // In the future, integrate Resend or other provider here:
    // await resend.emails.send({ ... });
    
    console.log('Lead saved successfully:', data);

    return NextResponse.json({ success: true, lead: data[0] });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
