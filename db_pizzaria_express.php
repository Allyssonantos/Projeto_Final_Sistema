<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pizzaria";

// Criando conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Checando erro
if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

// Pegando os dados do formulário
$nome = $_POST['username'];
$email = $_POST['email'];

// Inserindo no banco
$sql = "INSERT INTO usuarios (nome, email) VALUES ('$nome', '$email')";
if ($conn->query($sql) === TRUE) {
    echo "Usuário cadastrado com sucesso!";
} else {
    echo "Erro: " . $conn->error;
}

$conn->close();
?>