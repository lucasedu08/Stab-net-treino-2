document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    if (email === 'seu-email@gmail.com' && password === 'sua-senha') {
      alert('Login realizado com sucesso!');
      document.getElementById('login-form').reset();
    } else {
      alert('E-mail ou senha incorretos. Por favor, tente novamente.');
    }
  });
  