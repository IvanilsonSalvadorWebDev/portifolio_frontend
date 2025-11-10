// --- Importar módulos do Firebase diretamente da CDN oficial ---
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
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

// --- Captura o formulário ---
const loginForm = document.getElementById("form");
const message = document.getElementById("message");

// --- Evento de Login ---
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Botão de login clicado!");

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      message.style.color = "green";
      message.textContent = "✅ Login bem-sucedido!";

      console.log("Usuário logado:", user.email);

      // Redireciona após 2 segundos
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 2000);
    })
    .catch((error) => {
      console.error("Erro:", error.code, error.message);
      message.style.color = "red";

      if (error.code === "auth/user-not-found") {
        message.textContent = "❌ Usuário não encontrado.";
      } else if (error.code === "auth/wrong-password") {
        message.textContent = "🔒 Senha incorreta.";
      } else if (error.code === "auth/invalid-email") {
        message.textContent = "📧 E-mail inválido.";
      } else {
        message.textContent = "Erro: " + error.message;
      }
    });
});
