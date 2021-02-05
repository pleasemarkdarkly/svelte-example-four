import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

import { config } from './config';

export const fireapp = initializeApp(config);
export const auth = getAuth(fireapp);
export const googleAuth = new GoogleAuthProvider();
export const firestore = getFirestore(fireapp);