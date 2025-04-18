const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// Caminho para o arquivo JSON
const dbPath = path.join(__dirname, 'usuarios.json');

// Função para ler usuários
async function lerUsuarios() {
  const data = await fs.readFile(dbPath, 'utf8');
  return JSON.parse(data);
}

// Função para escrever usuários
async function escreverUsuarios(usuarios) {
  await fs.writeFile(dbPath, JSON.stringify(usuarios, null, 2));
}

// Cadastro
app.post('/usuarios', async (req, res) => {
  const { nome, email, celular, senha } = req.body;
  if (!nome || !email || !celular || !senha) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
  }
  const usuarios = await lerUsuarios();
  if (usuarios.find(u => u.email === email)) {
    return res.status(400).json({ erro: 'E-mail já cadastrado' });
  }
  const novoUsuario = { id: usuarios.length + 1, nome, email, celular, senha };
  usuarios.push(novoUsuario);
  await escreverUsuarios(usuarios);
  res.status(201).json({ mensagem: 'Usuário cadastrado' });
});

// Consulta
app.get('/usuarios/:email', async (req, res) => {
  const usuarios = await lerUsuarios();
  const usuario = usuarios.find(u => u.email === req.params.email);
  if (!usuario) {
    return res.status(404).json({ erro: 'Usuário não encontrado' });
  }
  res.json(usuario);
});

// Edição
app.put('/usuarios/:email', async (req, res) => {
  const { nome, celular, senha } = req.body;
  const usuarios = await lerUsuarios();
  const index = usuarios.findIndex(u => u.email === req.params.email);
  if (index === -1) {
    return res.status(404).json({ erro: 'Usuário não encontrado' });
  }
  usuarios[index] = { ...usuarios[index], nome, celular, senha };
  await escreverUsuarios(usuarios);
  res.json({ mensagem: 'Usuário atualizado' });
});

// Exclusão
app.delete('/usuarios/:email', async (req, res) => {
  const usuarios = await lerUsuarios();
  const index = usuarios.findIndex(u => u.email === req.params.email);
  if (index === -1) {
    return res.status(404).json({ erro: 'Usuário não encontrado' });
  }
  usuarios.splice(index, 1);
  await escreverUsuarios(usuarios);
  res.json({ mensagem: 'Usuário excluído' });
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));