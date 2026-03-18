import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

type ContactPayload = {
    fullName?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
};

function normalize(value: unknown) {
    return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string) {
        return value
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/\"/g, '&quot;')
                .replace(/'/g, '&#39;');
}

function buildAutoResponseHtml({
        companyName,
        fullName,
        websiteUrl,
        logoUrl,
        recipientEmail,
}: {
        companyName: string;
        fullName: string;
        websiteUrl: string;
        logoUrl: string;
        recipientEmail: string;
}) {
        const safeCompanyName = escapeHtml(companyName);
        const safeFullName = escapeHtml(fullName);
        const safeWebsiteUrl = escapeHtml(websiteUrl);
        const safeLogoUrl = escapeHtml(logoUrl);
        const safeRecipientEmail = escapeHtml(recipientEmail);

        return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Message Received</title>
</head>
<body style="margin:0; padding:0; background-color:#f3f8fc; font-family:Arial, Helvetica, sans-serif; color:#1d3557;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#f3f8fc; padding:24px 12px;">
        <tr>
            <td align="center">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:640px; background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 10px 30px rgba(2,62,138,0.12);">
                    <tr>
                        <td style="background:linear-gradient(135deg,#0077b6 0%, #023e8a 100%); padding:28px 32px; text-align:center;">
                            <img src="${safeLogoUrl}" alt="${safeCompanyName} logo" width="74" height="74" style="display:block; margin:0 auto 12px auto; border-radius:50%; background:#ffffff; padding:8px;" />
                            <p style="margin:0; color:#d9f0ff; font-size:12px; letter-spacing:1.3px; text-transform:uppercase;">Automated Response</p>
                            <h1 style="margin:10px 0 0 0; color:#ffffff; font-size:24px; line-height:1.25;">We Received Your Message</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:30px 32px 24px 32px;">
                            <p style="margin:0 0 16px 0; font-size:16px; line-height:1.6;">Hello ${safeFullName},</p>
                            <p style="margin:0 0 16px 0; font-size:16px; line-height:1.7;">
                                This is an automated response. We received your message.
                                Our team will review your message and get back to you as soon as possible.
                            </p>
                            <p style="margin:0 0 24px 0; font-size:14px; color:#5b7694; line-height:1.7;">
                                Please do not reply to this email.
                            </p>
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
                                <tr>
                                    <td align="center" bgcolor="#0077b6" style="border-radius:8px;">
                                        <a href="${safeWebsiteUrl}" style="display:inline-block; padding:12px 24px; color:#ffffff; text-decoration:none; font-size:14px; font-weight:700;">Visit Our Website</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:18px 32px 24px 32px; background-color:#f7fbff; border-top:1px solid #e0edf8; text-align:center;">
                            <p style="margin:0 0 6px 0; font-size:13px; color:#4d6d8b;">${safeCompanyName}</p>
                            <p style="margin:0; font-size:13px; color:#4d6d8b;">Questions? Email us at <a href="mailto:${safeRecipientEmail}" style="color:#0077b6; text-decoration:none;">${safeRecipientEmail}</a></p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
        `.trim();
}

function createTransporter() {
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
        throw new Error('SMTP credentials are not configured. Set SMTP_USER and SMTP_PASS.');
    }

    const smtpHost = process.env.SMTP_HOST ?? 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT ?? '465');
    const smtpSecure = process.env.SMTP_SECURE
        ? process.env.SMTP_SECURE.toLowerCase() === 'true'
        : smtpPort === 465;

    return nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
            user: smtpUser,
            pass: smtpPass,
        },
    });
}

export async function POST(request: Request) {
    try {
        const payload = (await request.json()) as ContactPayload;

        const fullName = normalize(payload.fullName);
        const email = normalize(payload.email);
        const phone = normalize(payload.phone);
        const subject = normalize(payload.subject);
        const message = normalize(payload.message);

        if (!fullName || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Please complete all required fields before submitting.' },
                { status: 400 }
            );
        }

        const transporter = createTransporter();
        const smtpUser = process.env.SMTP_USER!;
        const recipientEmail = process.env.CONTACT_FORM_TO ?? 'info@compactpersonnel.co.uk';
        const fromEmail = process.env.CONTACT_FORM_FROM ?? process.env.JOB_APPLICATION_FROM ?? smtpUser;
        const companyName = process.env.JOB_APPLICATION_COMPANY_NAME ?? 'Compact Personnel';
        const websiteUrl = process.env.AUTO_RESPONSE_WEBSITE_URL
            ?? process.env.JOB_APPLICATION_WEBSITE_URL
            ?? 'https://compactpersonnel.co.uk';
        const logoUrl = process.env.AUTO_RESPONSE_LOGO_URL
            ?? process.env.JOB_APPLICATION_LOGO_URL
            ?? 'https://compactpersonnel.co.uk/assets/icon.png';

        const emailBody = [
            'NEW CONTACT FORM MESSAGE',
            '',
            `From: ${fullName}`,
            `Email: ${email}`,
            `Phone: ${phone || 'Not provided'}`,
            '',
            `Subject: ${subject}`,
            '',
            'Message:',
            message,
        ].join('\n');

        await transporter.sendMail({
            to: recipientEmail,
            from: fromEmail,
            replyTo: email,
            subject: `Website Contact Form: ${subject}`,
            text: emailBody,
        });

        await transporter.sendMail({
            to: email,
            from: fromEmail,
            replyTo: recipientEmail,
            subject: 'We received your contact message - Compact Personnel',
            text: [
                `Hello ${fullName},`,
                '',
                'This is an automated response.',
                'We received your message.',
                'Our team will review your message and get back to you as soon as possible.',
                '',
                'Kind regards,',
                'Compact Personnel',
            ].join('\n'),
            html: buildAutoResponseHtml({
                companyName,
                fullName,
                websiteUrl,
                logoUrl,
                recipientEmail,
            }),
        });

        return NextResponse.json({
            message: 'Your message has been sent successfully. Our team will get back to you soon.',
        });
    } catch (error) {
        console.error('Failed to send contact form email', error);

        return NextResponse.json(
            { error: 'We could not send your message right now. Please try again later.' },
            { status: 500 }
        );
    }
}