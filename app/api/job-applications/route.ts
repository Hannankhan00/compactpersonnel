import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;
const ALLOWED_FILE_TYPES = new Set([
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
]);
const ALLOWED_FILE_EXTENSIONS = ['.pdf', '.doc', '.docx'];

function getStringValue(value: FormDataEntryValue | null) {
    return typeof value === 'string' ? value.trim() : '';
}

function hasAllowedFileExtension(fileName: string) {
    const normalizedFileName = fileName.toLowerCase();

    return ALLOWED_FILE_EXTENSIONS.some((extension) => normalizedFileName.endsWith(extension));
}

function buildInternalMessage({
    roleTitle,
    fullName,
    email,
    phone,
    coverLetter,
    fileName,
}: {
    roleTitle: string;
    fullName: string;
    email: string;
    phone: string;
    coverLetter: string;
    fileName: string;
}) {
    return [
        `New job application received for ${roleTitle}.`,
        '',
        `Role: ${roleTitle}`,
        `Applicant name: ${fullName}`,
        `Applicant email: ${email}`,
        `Applicant phone: ${phone}`,
        `Attached CV: ${fileName}`,
        '',
        'Cover letter:',
        coverLetter,
    ].join('\n');
}

function buildAutoResponseMessage({
    companyName,
    roleTitle,
    fullName,
    responseWindow,
}: {
    companyName: string;
    roleTitle: string;
    fullName: string;
    responseWindow: string;
}) {
    return [
        `Hello ${fullName},`,
        '',
        `Thank you for applying for the ${roleTitle} role with ${companyName}.`,
        'We have received your application successfully and our team will review it shortly.',
        '',
        `If your application is shortlisted, we will contact you ${responseWindow}.`,
        '',
        'This is an automated response, so please do not reply to this email.',
        '',
        `Kind regards,`,
        `${companyName}`,
    ].join('\n');
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
        roleTitle,
        fullName,
        responseWindow,
        websiteUrl,
        logoUrl,
        recipientEmail,
}: {
        companyName: string;
        roleTitle: string;
        fullName: string;
        responseWindow: string;
        websiteUrl: string;
        logoUrl: string;
        recipientEmail: string;
}) {
        const safeCompanyName = escapeHtml(companyName);
        const safeRoleTitle = escapeHtml(roleTitle);
        const safeFullName = escapeHtml(fullName);
        const safeResponseWindow = escapeHtml(responseWindow);
        const safeWebsiteUrl = escapeHtml(websiteUrl);
        const safeLogoUrl = escapeHtml(logoUrl);
        const safeRecipientEmail = escapeHtml(recipientEmail);

        return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Application Received</title>
</head>
<body style="margin:0; padding:0; background-color:#f3f8fc; font-family:Arial, Helvetica, sans-serif; color:#1d3557;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#f3f8fc; padding:24px 12px;">
        <tr>
            <td align="center">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:640px; background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 10px 30px rgba(2,62,138,0.12);">
                    <tr>
                        <td style="background:linear-gradient(135deg,#0077b6 0%, #023e8a 100%); padding:28px 32px; text-align:center;">
                            <img src="${safeLogoUrl}" alt="${safeCompanyName} logo" width="74" height="74" style="display:block; margin:0 auto 12px auto; border-radius:50%; background:#ffffff; padding:8px;" />
                            <p style="margin:0; color:#d9f0ff; font-size:12px; letter-spacing:1.3px; text-transform:uppercase;">Application Confirmation</p>
                            <h1 style="margin:10px 0 0 0; color:#ffffff; font-size:24px; line-height:1.25;">We Received Your Application</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:30px 32px 24px 32px;">
                            <p style="margin:0 0 16px 0; font-size:16px; line-height:1.6;">Hello ${safeFullName},</p>
                            <p style="margin:0 0 16px 0; font-size:16px; line-height:1.7;">
                                Thank you for applying for the <strong>${safeRoleTitle}</strong> role with ${safeCompanyName}. Your application has been submitted successfully and is now with our recruitment team.
                            </p>
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:22px 0; border:1px solid #d6eaf8; border-radius:12px; background-color:#f8fcff;">
                                <tr>
                                    <td style="padding:16px 18px; font-size:14px; line-height:1.7; color:#23496b;">
                                        <strong style="color:#023e8a;">What happens next:</strong><br />
                                        Our team will review your application and, if shortlisted, we will contact you ${safeResponseWindow}.
                                    </td>
                                </tr>
                            </table>
                            <p style="margin:0 0 24px 0; font-size:14px; color:#5b7694; line-height:1.7;">
                                This is an automated response, so please do not reply to this email.
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
        const formData = await request.formData();
        const roleTitle = getStringValue(formData.get('roleTitle'));
        const fullName = getStringValue(formData.get('fullName'));
        const email = getStringValue(formData.get('email'));
        const phone = getStringValue(formData.get('phone'));
        const coverLetter = getStringValue(formData.get('coverLetter'));
        const agreeToTerms = getStringValue(formData.get('agreeToTerms'));
        const cvFile = formData.get('cv');

        if (!roleTitle || !fullName || !email || !phone || !coverLetter) {
            return NextResponse.json(
                { error: 'Please complete all required fields before submitting.' },
                { status: 400 }
            );
        }

        if (agreeToTerms !== 'true') {
            return NextResponse.json(
                { error: 'You must agree to the storage and handling of your data.' },
                { status: 400 }
            );
        }

        if (!(cvFile instanceof File)) {
            return NextResponse.json(
                { error: 'Please upload your CV before submitting.' },
                { status: 400 }
            );
        }

        if (!hasAllowedFileExtension(cvFile.name) || (cvFile.type && !ALLOWED_FILE_TYPES.has(cvFile.type))) {
            return NextResponse.json(
                { error: 'Only PDF, DOC, and DOCX files are accepted.' },
                { status: 400 }
            );
        }

        if (cvFile.size > MAX_FILE_SIZE_BYTES) {
            return NextResponse.json(
                { error: 'Your CV must be 5 MB or smaller.' },
                { status: 400 }
            );
        }

        const transporter = createTransporter();
        const smtpUser = process.env.SMTP_USER!;
        const recipientEmail = process.env.JOB_APPLICATION_TO ?? 'info@compactpersonnel.co.uk';
        const fromEmail = process.env.JOB_APPLICATION_FROM ?? smtpUser;
        const companyName = process.env.JOB_APPLICATION_COMPANY_NAME ?? 'Compact Personnel';
        const responseWindow = process.env.JOB_APPLICATION_RESPONSE_WINDOW ?? 'within 2 working days';
        const websiteUrl = process.env.JOB_APPLICATION_WEBSITE_URL ?? 'https://compactpersonnel.co.uk';
        const logoUrl = process.env.JOB_APPLICATION_LOGO_URL ?? 'https://compactpersonnel.co.uk/assets/icon.png';
        const cvBuffer = Buffer.from(await cvFile.arrayBuffer());

        await transporter.sendMail({
            to: recipientEmail,
            from: fromEmail,
            replyTo: email,
            subject: `Job Application: ${roleTitle} - ${fullName}`,
            text: buildInternalMessage({
                roleTitle,
                fullName,
                email,
                phone,
                coverLetter,
                fileName: cvFile.name,
            }),
            attachments: [
                {
                    filename: cvFile.name,
                    content: cvBuffer,
                    contentType: cvFile.type || undefined,
                },
            ],
        });

        await transporter.sendMail({
            to: email,
            from: fromEmail,
            replyTo: recipientEmail,
            subject: `We received your application for ${roleTitle}`,
            text: buildAutoResponseMessage({
                companyName,
                roleTitle,
                fullName,
                responseWindow,
            }),
            html: buildAutoResponseHtml({
                companyName,
                roleTitle,
                fullName,
                responseWindow,
                websiteUrl,
                logoUrl,
                recipientEmail,
            }),
        });

        return NextResponse.json({
            message: 'Your application has been sent successfully. Please check your inbox for the confirmation email.',
        });
    } catch (error) {
        console.error('Failed to send job application email', error);

        return NextResponse.json(
            { error: 'We could not send your application right now. Please try again later.' },
            { status: 500 }
        );
    }
}