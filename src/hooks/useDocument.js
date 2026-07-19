import { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db, isConfigured } from '../firebase';

export const useDocument = (collectionName, docId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isConfigured || !db) {
      setLoading(false);
      return;
    }
    const unsubscribe = onSnapshot(
      doc(db, collectionName, docId),
      (snap) => {
        setData(snap.exists() ? snap.data() : null);
        setLoading(false);
      },
      (err) => {
        console.error(`Failed to load ${collectionName}/${docId}:`, err);
        setLoading(false);
      }
    );
    return unsubscribe;
  }, [collectionName, docId]);

  return { data, loading };
};
