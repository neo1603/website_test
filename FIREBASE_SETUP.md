# Firebase Setup Guide for Agrawal Builders Website

## Overview
This guide will help you set up Firebase to store dynamic data (user feedback and contact form submissions) for your static website hosted on GitHub Pages.

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter project name: `agrawal-builders-website`
4. Choose whether to enable Google Analytics (optional)
5. Click "Create project"

## Step 2: Enable Firestore Database

1. In your Firebase project, go to "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location closest to your users (e.g., `asia-south1` for India)
5. Click "Done"

## Step 3: Get Firebase Configuration

1. In your Firebase project, click the gear icon ⚙️ next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (</>) to add a web app
5. Enter app nickname: `agrawal-builders-web`
6. Click "Register app"
7. Copy the configuration object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key-here",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
```

## Step 4: Update Firebase Configuration

1. Open `src/firebase.js` in your project
2. Replace the placeholder configuration with your actual Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-actual-project.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-actual-project.appspot.com",
  messagingSenderId: "your-actual-sender-id",
  appId: "your-actual-app-id"
};
```

## Step 5: Set Up Firestore Security Rules

1. In Firebase Console, go to "Firestore Database" → "Rules"
2. Replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access to feedback collection
    match /feedback/{document} {
      allow read, write: if true;
    }
    
    // Allow read/write access to contact_submissions collection
    match /contact_submissions/{document} {
      allow read, write: if true;
    }
  }
}
```

3. Click "Publish"

## Step 6: Test the Setup

1. Run your development server:
   ```bash
   npm start
   ```

2. Navigate to `/feedback` and submit a test feedback
3. Navigate to `/contact` and submit a test contact form
4. Check Firebase Console → Firestore Database to see if data appears

## Step 7: Deploy to GitHub Pages

1. Update your Firebase config in `src/firebase.js` with production settings
2. Deploy your site:
   ```bash
   npm run deploy
   ```

## Security Considerations

### For Production:
1. **Enable Authentication**: Add user authentication for admin access
2. **Restrict Write Access**: Only allow authenticated users to write data
3. **Rate Limiting**: Implement rate limiting to prevent spam
4. **Data Validation**: Add server-side validation

### Recommended Production Rules:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to read feedback (for admin dashboard)
    match /feedback/{document} {
      allow read: if request.auth != null;
      allow write: if true; // Allow public feedback submission
    }
    
    // Allow anyone to read contact submissions (for admin dashboard)
    match /contact_submissions/{document} {
      allow read: if request.auth != null;
      allow write: if true; // Allow public contact form submission
    }
  }
}
```

## Features Added

### 1. Feedback System
- **Location**: `/feedback`
- **Features**: Rating, category selection, detailed feedback
- **Storage**: Firebase Firestore collection `feedback`

### 2. Enhanced Contact Form
- **Location**: `/contact`
- **Features**: Real-time submission to Firebase
- **Storage**: Firebase Firestore collection `contact_submissions`

### 3. Admin Dashboard
- **Location**: `/dashboard` (requires login)
- **Features**: View feedback and contact submissions
- **Real-time**: Updates automatically when new data is submitted

## Cost Information

### Firebase Free Tier (Spark Plan):
- **Firestore**: 1GB storage, 50,000 reads/day, 20,000 writes/day
- **Perfect for**: Small to medium websites
- **Cost**: FREE

### When to Upgrade:
- More than 50,000 daily reads
- More than 20,000 daily writes
- More than 1GB storage

## Troubleshooting

### Common Issues:

1. **"Firebase not initialized" error**
   - Check if `firebase.js` is properly configured
   - Ensure Firebase config is correct

2. **"Permission denied" error**
   - Check Firestore security rules
   - Ensure rules allow read/write access

3. **Data not appearing in dashboard**
   - Check if user is authenticated
   - Verify Firebase connection
   - Check browser console for errors

### Support:
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Console](https://console.firebase.google.com/)
- [Firebase Support](https://firebase.google.com/support)

## Next Steps

1. **Add Authentication**: Implement user login for admin access
2. **Email Notifications**: Set up Firebase Functions to send email notifications
3. **Analytics**: Add Firebase Analytics for better insights
4. **Backup**: Set up automated backups for your data
5. **Monitoring**: Set up alerts for usage limits

---

**Note**: This setup allows your static website to handle dynamic data without needing traditional hosting. Firebase provides the backend-as-a-service functionality you need while keeping your site fast and scalable. 