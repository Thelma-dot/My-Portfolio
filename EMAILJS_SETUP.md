# 📧 EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS so that when clients fill out your contact form, the messages are actually sent to your email address.

## 🚀 Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## 🔧 Step 2: Create Email Service

1. **Login to EmailJS Dashboard**
2. Go to "Email Services" tab
3. Click "Add New Service"
4. Choose "Gmail" (or your preferred email provider)
5. **Connect your Gmail account** (thelmabuabeng4@gmail.com)
6. **Save the Service ID** (you'll need this)

## 📝 Step 3: Create Email Template

1. Go to "Email Templates" tab
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Contact Form Message from {{name}}

Name: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Save the Template ID** (you'll need this)

## 🔑 Step 4: Get Your Public Key

1. Go to "Account" tab
2. Copy your **Public Key**

## ⚙️ Step 5: Update Your Code

Replace these placeholders in `src/components/Contact.tsx`:

```typescript
// Replace 'service_your_service_id' with your actual Service ID
'service_your_service_id'

// Replace 'template_your_template_id' with your actual Template ID  
'template_your_template_id'

// Replace 'your_public_key' with your actual Public Key
'your_public_key'
```

## 📱 Step 6: Test Your Form

1. Start your development server: `npm start`
2. Go to the Contact section
3. Fill out the form and click "Send Message"
4. Check your email (thelmabuabeng4@gmail.com)

## 💡 Important Notes

- **Free Plan**: EmailJS free plan allows 200 emails/month
- **Rate Limiting**: There are limits to prevent spam
- **Security**: Your private keys are never exposed to clients
- **Gmail**: Make sure to enable "Less secure app access" or use App Passwords

## 🆘 Troubleshooting

### Common Issues:

1. **"Service not found"**: Check your Service ID
2. **"Template not found"**: Check your Template ID  
3. **"Invalid public key"**: Check your Public Key
4. **Gmail blocking**: Check Gmail security settings

### Testing:

- Use different email addresses to test
- Check browser console for error messages
- Verify all IDs are copied correctly

## 🎯 What Happens Now:

✅ **Before**: Form just showed "success" message (fake)
✅ **After**: Form actually sends emails to your Gmail inbox

When a client fills out your contact form:
1. They enter their name, email, subject, and message
2. Click "Send Message"
3. EmailJS processes the form
4. You receive a real email at thelmabuabeng4@gmail.com
5. Client sees success message
6. You can reply directly to their email

## 🔒 Security Features:

- Form validation prevents spam
- Rate limiting prevents abuse
- Your private keys stay secure
- Professional email delivery

Your contact form will now be fully functional and professional! 🎉
