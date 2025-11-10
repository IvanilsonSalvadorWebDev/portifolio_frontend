
# 🔥 Login com Firebase + Dashboard

## 🚀 Visão Geral

Este projeto demonstra como **implementar autenticação de usuários com Firebase** usando **JavaScript puro (Vanilla JS)**, sem frameworks.  
Inclui duas páginas principais:

- `index.html` → Página de **Login**
- `dashboard.html` → Página protegida para **usuários autenticados**

---

## 🧩 Funcionalidades

✅ Login de usuário com Firebase Authentication  
✅ Validação de erros (usuário inexistente, senha incorreta, email inválido)  
✅ Redirecionamento automático após login bem-sucedido  
✅ Página Dashboard com botão **Sair**  
✅ Logout funcional (encerra sessão e redireciona ao login)  
✅ Interface estilizada com **cores e design inspirados no Firebase Console**

---

## ⚙️ Estrutura de Pastas

```
📁 firebase-login-app/
│
├── index.html          # Página de Login
├── dashboard.html       # Página de Dashboard
│
├── login.js             # Lógica de autenticação (login)
├── dashboard.js         # Lógica de autenticação e logout
│
├── style.css            # Estilo da página de login
├── dashboard.css        # Estilo da página de dashboard
│
└── README.md            # Documentação do projeto
```

---

## 🔥 Configuração do Firebase

1. Acesse [https://console.firebase.google.com](https://console.firebase.google.com)
2. Crie um novo projeto → Ex: **login-firebase**
3. Vá em **Autenticação → Método de Login → E-mail/Senha**
4. **Ative** o método de login por e-mail/senha
5. Vá em **Configurações do Projeto → Suas apps → Web**
6. Copie o objeto de configuração Firebase:

```js
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "SEU_ID",
  appId: "SUA_APP_ID",
  measurementId: "SEU_MEASUREMENT_ID"
};
```

7. Substitua no teu `login.js` e `dashboard.js`

---

## 🧠 Fluxo do Sistema

### 🟠 1. Login
O usuário digita e-mail e senha → O script chama:
```js
signInWithEmailAndPassword(auth, email, password)
```

Se der certo:
- Exibe mensagem de sucesso  
- Redireciona para `dashboard.html`

Se der erro:
- Mostra mensagens personalizadas (ex: “Senha incorreta”, “Usuário não encontrado”)

---

### 🟢 2. Dashboard
Quando a página abre, verifica se o usuário está autenticado:
```js
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "index.html";
  }
});
```

Se estiver logado:
- Mostra o e-mail do usuário

Se **não** estiver logado:
- Redireciona automaticamente para o login.

---

### 🔴 3. Logout
Ao clicar em **Sair**, executa:
```js
signOut(auth).then(() => {
  window.location.href = "index.html";
});
```
Isso encerra a sessão e volta para a tela de login.

---

## 🎨 Estilo Visual

As duas páginas seguem o padrão do Firebase Console:
- Fundo branco com toques em **laranja e amarelo**
- Tipografia `Poppins`
- Cards com sombras suaves e bordas arredondadas
- Botões animados com hover suave

---

## 🧑‍💻 Tecnologias Usadas

- **HTML5**
- **CSS3 (Glassmorphism e estilo Firebase)**
- **JavaScript (ES Modules)**
- **Firebase Authentication (CDN Oficial)**

---

## 🧪 Teste Localmente

1. Abre o VS Code
2. Instala a extensão **Live Server**
3. Clica com o botão direito → **"Open with Live Server"**
4. Faz login com um usuário existente (criado no painel do Firebase)

---

## 🛡️ Segurança

> 🔒 O Firebase Auth protege automaticamente o acesso às rotas.
>  
> O `dashboard.html` redireciona qualquer visitante não autenticado de volta ao `index.html`.

---

## ❤️ Créditos

Criado por **Ivanilson Salvador**  
Projeto educativo de integração com **Firebase Authentication** usando **Vanilla JS**.
