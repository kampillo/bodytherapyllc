# Email Setup for Contact Form

The contact form is now configured to send emails to `mercedes@bodytherapyllc.com` using Gmail SMTP. To make it work, you need to set up the Gmail configuration.

## Setup Instructions

### 1. Update Environment File

Update your `.env` file with the following Gmail configuration:

```env
# Email Configuration for Contact Form (Gmail)
EMAIL_USER=kampiyojp@gmail.com
EMAIL_PASS=your-gmail-app-password
```

### 2. Gmail Setup (Current Configuration)

The contact form is now configured for Gmail. Follow these steps:

1. **Enable 2-Step Verification** (if not already enabled):
   - Go to your Google Account settings
   - Navigate to Security
   - Enable 2-Step Verification

2. **Generate an App Password**:
   - Go to Security > App passwords
   - Select "Mail" as the app
   - Generate a new app password
   - Copy the generated password (16 characters)

3. **Update your .env file**:
   ```env
   EMAIL_USER=kampiyojp@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

**Important Notes for Gmail:**
- Use your full Gmail address as the username
- Use the App Password, NOT your regular Gmail password
- The App Password is 16 characters long
- Make sure 2-Step Verification is enabled

If you want to switch to Gmail, follow these steps:

1. **Enable 2-Step Verification** (if not already enabled):
   - Go to your Google Account settings
   - Navigate to Security
   - Enable 2-Step Verification

2. **Generate an App Password**:
   - Go to Security > App passwords
   - Select "Mail" as the app
   - Generate a new app password
   - Copy the generated password (16 characters)

3. **Update your .env.local**:
   ```env
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

### 3. Alternative Email Providers

The current configuration is set up for **Gmail**. If you need to use other providers:

- **Bluehost**: Replace the configuration with:
  ```javascript
  const transporter = nodemailer.createTransport({
    host: 'mail.bodytherapyllc.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  ```

- **Outlook/Hotmail**: 
  ```javascript
  const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  ```

- **Yahoo**: 
  ```javascript
  const transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  ```

- **Custom SMTP**: 
  ```javascript
  const transporter = nodemailer.createTransport({
    host: 'your-smtp-host.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  ```

### 4. Test the Contact Form

1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the contact form
4. Check if the email is received at `mercedes@bodytherapyllc.com`

### 5. Production Deployment

When deploying to production:

1. Add the environment variables to your hosting platform (Vercel, Netlify, etc.)
2. Make sure the email credentials are properly configured
3. Test the contact form in the production environment

## Security Notes

- Never commit your `.env.local` file to version control
- Use app passwords instead of regular passwords for Gmail
- Consider using a dedicated email service like SendGrid for production use
- The `.env.local` file is already in `.gitignore` to prevent accidental commits

## Troubleshooting

If emails are not being sent:

1. Check the browser console for errors
2. Check the server logs for email sending errors
3. Verify your email credentials are correct
4. Make sure your email provider allows SMTP access
5. For Gmail, ensure you're using an app password, not your regular password 