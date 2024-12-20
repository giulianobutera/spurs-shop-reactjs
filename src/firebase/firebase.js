// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    doc,
    getDoc,
    getDocs,
    collection,
    query,
    where,
    addDoc,
    updateDoc,
    writeBatch
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8gGEANdh5wz3Mzhekl5qYmq7BQX-Lvlk",
  authDomain: "spurs-shop.firebaseapp.com",
  projectId: "spurs-shop",
  storageBucket: "spurs-shop.firebasestorage.app",
  messagingSenderId: "105275051677",
  appId: "1:105275051677:web:7ff77e81196e0715288e74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// obtener todos los productos
export async function getProducts() {
    try {
      const querySnapshot = await getDocs(collection(db, 'products'));
      if (querySnapshot.size !== 0) {
        const productsList = querySnapshot.docs.map((docu) => {
          return {
            id: docu.id,
            ...docu.data(),
          };
        });
        return productsList;
      } else {
        console.log('No hay productos!');
      }
    } catch (error) {
      console.error('Error al obtener los productos: ', error);
    }
}

// obtener un producto
