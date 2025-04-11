document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");

  if (username === "admin" && password === "1234") {
    errorMsg.style.color = "green";
    errorMsg.textContent = "Login bem-sucedido!";
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  } else {
    errorMsg.style.color = "red";
    errorMsg.textContent = "Usuário ou senha inválidos.";
  }
});