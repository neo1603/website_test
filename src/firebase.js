import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported, logEvent as firebaseLogEvent } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Firebase config is read from environment variables (see .env.example).
// Create a real .env file with your project's values — never commit real
// credentials directly into this file or into git.
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const isConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);

let app = null;
let db = null;
let analytics = null;
let auth = null;

if (isConfigured) {
  try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    auth = getAuth(app);
    isSupported().then((supported) => {
      if (supported) {
        analytics = getAnalytics(app);
      }
    });
  } catch (err) {
    // Never let a bad Firebase config take down the whole site.
    console.error('Firebase failed to initialize — site will run without it.', err);
  }
} else {
  console.warn(
    'Firebase is not configured (missing REACT_APP_FIREBASE_* env vars). ' +
    'Analytics and lead-saving are disabled until .env is set up — see .env.example.'
  );
}

export const logEvent = (eventName, params) => {
  if (analytics) {
    firebaseLogEvent(analytics, eventName, params);
  }
};

export { db, auth, isConfigured };
export default app;
