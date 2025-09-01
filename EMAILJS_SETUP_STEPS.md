# EmailJS Setup Guide for Your Portfolio

## Quick Setup Steps

### 1. Get Your EmailJS Credentials

1. **Sign up at [EmailJS.com](https://www.emailjs.com/)**
2. **Create Email Service:**
   - Go to "Email Services" → "Add New Service"
   - Choose "Gmail" and connect your account (thelmabuabeng4@gmail.com)
   - Copy the **Service ID** (looks like `service_xxxxxxx`)

3. **Create Email Template:**
   - Go to "Email Templates" → "Create New Template"
   - Use this template:
     ```
     Subject: New Contact Form Message from {{name}}
     
     Name: {{name}}
     Email: {{email}}
     Subject: {{subject}}
     Message: {{message}}
     
     This message was sent from your portfolio contact form.
     ```
   - Save and copy the **Template ID** (looks like `template_xxxxxxx`)

4. **Get Public Key:**
   - Go to "Account" → "API Keys"
   - Copy your **Public Key** (looks like `xxxxxxxxxxxxxxxxxxxx`)

### 2. Update Your Configuration

Open `src/config/emailjs.ts` and replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_abc12345',        // Your actual service ID
    TEMPLATE_ID: 'template_xyz789',       // Your actual template ID
    PUBLIC_KEY: 'user_abcdefghijklmnop123456'  // Your actual public key
};
```

### 3. Test Your Contact Form

1. Start your development server: `npm start`
2. Go to the contact section
3. Fill out the form and click "Send Message"
4. Check your email (thelmabuabeng4@gmail.com)

## Important Notes

- **Free Plan Limits:** 200 emails/month
- **Security:** Your public key is safe to use in frontend code
- **Gmail Settings:** Make sure "Less secure app access" is enabled or use App Passwords
- **Rate Limiting:** Free plan has rate limits

## Troubleshooting

- **"Service not found" error:** Check your Service ID
- **"Template not found" error:** Check your Template ID  
- **"Public key invalid" error:** Check your Public Key
- **Gmail connection issues:** Check Gmail security settings

## Need Help?

- EmailJS Documentation: [docs.emailjs.com](https://docs.emailjs.com/)
- EmailJS Support: [support.emailjs.com](https://support.emailjs.com/)
