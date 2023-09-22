function recoverPassword() {
    firebase.auth().sendPasswordResetEmail(form.email().value).then(() => {
        alert('E-mail de recuperação enviado com sucesso');
    }).catch(error => {
        alert(getErrorMessage(error));
    });
}

const form = {
    email: () => document.getElementById("email"),
    password: () => document.getElementById("password"),
} 

function login() {
    const email = form.email().value;
    const password = form.password().value;
  
    // Verifica se o e-mail e a senha foram preenchidos
    if (!email && !password) {
      alert("Digite o e-mail e a senha cadastrados.");
      return;
    }
  
    // Verifica se o e-mail foi preenchido
    if (!email) {
      alert("Digite o e-mail cadastrado.");
      return;
    }
  
    // Verifica se a senha foi preenchida
    if (!password) {
      alert("Digite a senha cadastrada.");
      return;
    }
  
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location.href = "pages/home/home.html";
      })
      .catch((error) => {
        alert(getErrorMessage(error));
      });
  }
  
  function getErrorMessage(error) {
    if (error.code == "auth/user-not-found" || error.code == "auth/wrong-password") {
      return "Senha ou e-mail inválido.";
    }
    return error.message;
  }
  
  function mostrarSenhaI() {
      var inputPass = document.getElementById('password')
      var btnShowPass = document.getElementById('btn-senha')

    if(inputPass.type === 'password') {
      inputPass.setAttribute('type','text')
      btnShowPass.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }else {
      inputPass.setAttribute('type','password')
      btnShowPass.classList.replace('bi-eye-slash-fill','bi-eye-fill')
    }
  }

  