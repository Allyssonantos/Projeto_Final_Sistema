const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pizzaria"
});

db.connect(err => {
    if (err) throw err;
    console.log("Banco de dados conectado!");
});

app.post("/api/usuarios", (req, res) => {
    const { username, email } = req.body;
    const sql = "INSERT INTO usuarios (nome, email) VALUES (?, ?)";
    
    db.query(sql, [username, email], (err, result) => {
        if (err) return res.status(500).json({ message: "Erro ao inserir" });
        res.json({ message: "Usuário cadastrado com sucesso!" });
    });
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
