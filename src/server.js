import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC1XS_dsxeGMKwx4u0TlHUzd7nUnkpWnCk",
  authDomain: "essence-bougies.firebaseapp.com",
  projectId: "essence-bougies",
  storageBucket: "essence-bougies.firebasestorage.app",
  messagingSenderId: "579250475685",
  appId: "1:579250475685:web:bc7f5face62e84badb334c",
  measurementId: "G-YT8X42LQL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const fetchImages = async (storageLocation) => {
  try {
      // Crea una referencia al archivo en Storage usando la ubicación
      const storageRef = ref(storage, storageLocation);

      // Obtén la URL de descarga pública
      const url = await getDownloadURL(storageRef);

      console.log("URL de la imagen:", url); // Muestra la URL pública
      return url;
  } catch (error) {
      console.error("Error al obtener la URL de la imagen:", error);
  }
};

export { db, storage, fetchImages };