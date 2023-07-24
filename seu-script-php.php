<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Obtenha os dados do formulário
  $email = $_POST['email'];
  $senha = $_POST['senha'];

  // Aqui você pode adicionar a lógica de validação e processamento dos dados

  // Exemplo de envio de e-mail de boas-vindas
  $to = $email;
  $subject = 'Bem-vindo à Empresa XYZ';
  $message = 'Olá, obrigado por se juntar à Empresa XYZ!';
  $headers = 'From: seu-email@exemplo.com' . "\r\n" .
             'Reply-To: seu-email@exemplo.com' . "\r\n" .
             'X-Mailer: PHP/' . phpversion();

  // Envie o e-mail
  if (mail($to, $subject, $message, $headers)) {
    echo 'E-mail enviado com sucesso!';
  } else {
    echo 'Ocorreu um erro ao enviar o e-mail.';
  }
}
?>
