// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Credenciales
const firebaseConfig = {
  apiKey: "AIzaSyBSyVUEV7bgyYWbFZ1boINL3I4X1fVNhmg",
  authDomain: "chat-al-estilo-discord.firebaseapp.com",
  projectId: "chat-al-estilo-discord",
  storageBucket: "chat-al-estilo-discord.appspot.com",
  messagingSenderId: "687649373381",
  appId: "1:687649373381:web:ee1a9048d720bd742fc4ac"
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
