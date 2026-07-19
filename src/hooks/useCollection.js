import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db, isConfigured } from '../firebase';

export const useCollection = (collectionName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isConfigured || !db) {
      setLoading(false);
      return;
    }
    const unsubscribe = onSnapshot(
      collection(db, collectionName),
      (snapshot) => {
        setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        setLoading(false);
      },
      (err) => {
        console.error(`Failed to load ${collectionName}:`, err);
        setLoading(false);
      }
    );
    return unsubscribe;
  }, [collectionName]);

  return { data, loading };
};
