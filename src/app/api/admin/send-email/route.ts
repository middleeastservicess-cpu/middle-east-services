import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabase';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, subject, message, leadId } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Send email via Resend
    const result = await resend.emails.send({
      from: 'Middle East Services <info@middleeastservices.com>',
      to: [email],
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #111827;">
          <div style="background: #1d4ed8; padding: 24px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Middle East Services</h1>
          </div>
          <div style="padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; line-height: 1.6;">
            <div style="margin-bottom: 24px; white-space: pre-wrap;">${message}</div>
            <p style="color: #6b7280; font-size: 14px; margin-top: 40px;">
              Best regards,<br/>
              <strong>Middle East Services Team</strong>
            </p>
          </div>
          <div style="margin-top: 24px; text-align: center; font-size: 12px; color: #9ca3af;">
            &copy; ${new Date().getFullYear()} Middle East Services. All rights reserved.
          </div>
        </div>
      `,
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      return NextResponse.json({ error: result.error.message }, { status: 500 });
    }

    // Optionally log this in Supabase as a note or communication history
    if (leadId) {
      const { data: lead } = await supabase.from('leads').select('notes').eq('id', leadId).single();
      const newNote = `${new Date().toLocaleString()}: Sent Email "${subject}"\n---\n${message}\n\n${lead?.notes || ''}`;
      
      await supabase
        .from('leads')
        .update({ notes: newNote })
        .eq('id', leadId);
    }

    return NextResponse.json({ success: true, id: result.data?.id });
  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
