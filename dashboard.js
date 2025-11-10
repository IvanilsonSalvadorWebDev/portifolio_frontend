// --- Importar módulos do Firebase diretamente da CDN oficial ---
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";

// --- Configuração do Firebase ---
const firebaseConfig = {
  apiKey: "AIzaSyCa_0fFa0ZJNI2_-KFYSS5rJmgKZOI4TaU",
  authDomain: "login-firebase-f8cc2.firebaseapp.com",
  projectId: "login-firebase-f8cc2",
  storageBucket: "login-firebase-f8cc2.firebasestorage.app",
  messagingSenderId: "39365870335",
  appId: "1:39365870335:web:4768dc2d11dd1c653a82ca",
  measurementId: "G-01Z8JRGE97"
};

// --- Inicializar Firebase ---
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

console.log("Firebase carregado com sucesso!");

// --- Referências HTML ---
const userEmail = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");

// --- Verifica se há usuário logado ---
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Usuário autenticado:", user.email);
    userEmail.textContent = `Conectado como: ${user.email}`;
  } else {
    console.warn("Nenhum usuário autenticado. Redirecionando...");
    window.location.href = "index.html"; // Redireciona se não estiver logado
  }
});

// --- Evento de logout ---
logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      console.log("Usuário desconectado com sucesso!");
      window.location.href = "index.html"; // Volta ao login
    })
    .catch((error) => {
      console.error("Erro ao sair:", error);
      alert("Erro ao sair. Tenta novamente.");
    });
});
