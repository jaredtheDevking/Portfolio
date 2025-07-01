# Email Setup Instructions

## Setting up Gmail for Contact Form

To enable the contact form to send emails to `keepingthepaceshop@gmail.com`, follow these steps:

### 1. Create a `.env.local` file

Create a file named `.env.local` in the root directory of your project with the following content:

```
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
```

### 2. Gmail App Password Setup

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:

   - Go to your Google Account settings
   - Navigate to Security
   - Under "2-Step Verification", click on "App passwords"
   - Select "Mail" and "Other (Custom name)"
   - Enter a name like "Portfolio Contact Form"
   - Copy the generated 16-character password

3. **Update your `.env.local` file**:
   - Replace `your-gmail@gmail.com` with your actual Gmail address
   - Replace `your-gmail-app-password` with the 16-character app password

### 3. Example `.env.local` file:

```
EMAIL_USER=myemail@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
```

### 4. Security Notes

- **Never commit** the `.env.local` file to version control
- The `.env.local` file is already in `.gitignore`
- Use a dedicated Gmail account or app password for security
- The app password is different from your regular Gmail password

### 5. Testing

After setup:

1. Start your development server: `npm run dev`
2. Navigate to the contact form
3. Fill out and submit the form
4. Check your Gmail inbox at `keepingthepaceshop@gmail.com`

### 6. Troubleshooting

If emails aren't being sent:

- Verify your Gmail credentials in `.env.local`
- Check that 2FA is enabled and app password is correct
- Ensure the Gmail account has "Less secure app access" disabled (use app password instead)
- Check the browser console and server logs for errors

### 7. Production Deployment

For production deployment (Vercel, Netlify, etc.):

- Add the environment variables in your hosting platform's dashboard
- Use the same variable names: `EMAIL_USER` and `EMAIL_PASS`
- Ensure the hosting platform supports Node.js serverless functions
