import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'middleeastservicess@gmail.com';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, service, city, message } = body;

    // 1. Save to Supabase
    const { error } = await supabase
      .from('leads')
      .insert([{ name, phone, email, service, city, message }]);

    if (error) {
      console.error('Supabase save error:', error);
      return NextResponse.json({ error: 'Failed to save lead', details: error.message }, { status: 500 });
    }

    // 2. Send notification email to ADMIN
    const adminEmailResult = await resend.emails.send({
      from: 'Middle East Services <info@middleeastservices.com>',
      to: [NOTIFICATION_EMAIL],
      subject: `🔔 New Lead: ${service} in ${city} — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 24px; border-radius: 12px;">
          <div style="background: #1d4ed8; color: white; padding: 20px 24px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 20px;">🔔 New Service Lead</h1>
            <p style="margin: 4px 0 0; opacity: 0.8; font-size: 14px;">Middle East Services — Received just now</p>
          </div>
          
          <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-size: 13px; width: 120px;">👤 Name</td>
                <td style="padding: 12px 0; font-weight: 600; color: #111827;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-size: 13px;">📞 Phone</td>
                <td style="padding: 12px 0; font-weight: 600; color: #111827;">
                  <a href="tel:${phone}" style="color: #1d4ed8; text-decoration: none;">${phone}</a>
                  <span style="margin: 0 8px; color: #e5e7eb;">|</span>
                  <a href="https://wa.me/${phone.replace(/\+/g, '').replace(/\s/g, '')}" style="color: #10b981; text-decoration: none; font-size: 12px;">💬 WhatsApp Call</a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-size: 13px;">✉️ Email</td>
                <td style="padding: 12px 0; font-weight: 600; color: #111827;">
                  <a href="mailto:${email}" style="color: #1d4ed8; text-decoration: none;">${email || 'Not provided'}</a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-size: 13px;">🔧 Service</td>
                <td style="padding: 12px 0; font-weight: 600; color: #1d4ed8; font-size: 15px;">${service}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-size: 13px;">📍 City</td>
                <td style="padding: 12px 0; font-weight: 600; color: #111827;">${city}</td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 12px 0; color: #6b7280; font-size: 13px; vertical-align: top;">💬 Message</td>
                <td style="padding: 12px 0; color: #374151; line-height: 1.6;">${message}</td>
              </tr>` : ''}
            </table>
            
            <div style="margin-top: 24px; padding: 16px; background: #eff6ff; border-radius: 8px; border-left: 4px solid #1d4ed8;">
              <p style="margin: 0; font-size: 13px; color: #1e40af; font-weight: 600;">⚡ Action Required</p>
              <p style="margin: 4px 0 0; font-size: 13px; color: #3b82f6;">Contact this lead as soon as possible to maximize conversion.</p>
            </div>

            <div style="margin-top: 20px; text-align: center;">
              <a href="https://middleeastservices.com/admin/dashboard" 
                 style="display: inline-block; background: #1d4ed8; color: white; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
                View in Admin Dashboard →
              </a>
            </div>
          </div>
          <p style="margin-top: 16px; font-size: 11px; color: #9ca3af; text-align: center;">Sent by Middle East Services</p>
        </div>
      `,
    });

    if (adminEmailResult.error) {
      console.error('Admin Email Error:', adminEmailResult.error);
    } else {
      console.log('✅ Admin notification sent:', adminEmailResult.data?.id);
    }

    // 3. Send confirmation email to CLIENT (if email provided)
    if (email) {
      const clientEmailResult = await resend.emails.send({
        from: 'Middle East Services <info@middleeastservices.com>',
        to: [email],
        subject: `We've received your request! — Middle East Services`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; padding: 40px 24px; color: #111827;">
            <div style="text-align: center; margin-bottom: 32px;">
              <div style="display: inline-block; background: #eff6ff; color: #1d4ed8; padding: 12px; border-radius: 50%; margin-bottom: 16px;">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h1 style="font-size: 24px; margin: 0; font-weight: 800; color: #111827;">Thank You, ${name}!</h1>
              <p style="color: #6b7280; margin-top: 8px; font-size: 16px;">We've received your request for <strong>${service}</strong> in <strong>${city}</strong>.</p>
            </div>

            <div style="background: #f9fafb; border-radius: 12px; padding: 24px; margin-bottom: 32px; border: 1px solid #f3f4f6;">
              <p style="margin: 0 0 16px; font-size: 14px; font-weight: 600; color: #374151; text-transform: uppercase; letter-spacing: 0.05em;">What happens next?</p>
              <ul style="margin: 0; padding: 0; list-style: none;">
                <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                  <span style="color: #1d4ed8; margin-right: 12px;">•</span>
                  <span>Our coordinator will review your details immediately.</span>
                </li>
                <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                  <span style="color: #1d4ed8; margin-right: 12px;">•</span>
                  <span>A verified professional in <strong>${city}</strong> will contact you via <strong>${phone}</strong>.</span>
                </li>
                <li style="display: flex; align-items: flex-start;">
                  <span style="color: #1d4ed8; margin-right: 12px;">•</span>
                  <span>You'll receive a free, no-obligation quote for your service.</span>
                </li>
              </ul>
            </div>

            <div style="text-align: center; border-top: 1px solid #f3f4f6; pt: 32px;">
              <p style="color: #6b7280; font-size: 14px; line-height: 1.5;">
                Need urgent assistance? <br/> 
                Reply to this email or visit our website at <a href="https://middleeastservices.com" style="color: #1d4ed8; text-decoration: none; font-weight: 600;">middleeastservices.com</a>
              </p>
              <div style="margin-top: 24px;">
                <p style="margin: 0; font-size: 12px; color: #9ca3af;">&copy; ${new Date().getFullYear()} Middle East Services. All rights reserved.</p>
              </div>
            </div>
          </div>
        `,
      });
      if (clientEmailResult.error) {
        console.error('Client Email Error:', clientEmailResult.error);
      } else {
        console.log('✅ Client confirmation sent:', clientEmailResult.data?.id);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
