document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cadastro-form');
  const consultaForm = document.getElementById('consulta-form');
  const mensagem = document.getElementById('mensagem');
  const consultaMensagem = document.getElementById('consulta-mensagem');
  const editarForm = document.getElementById('editar-form');

  // Mocked user database (resets on page reload)
  let usuarios = [
    { id: 1, nome: "Lucas Teste", email: "lucas@teste.com", celular: "(11) 99999-9999", senha: "12345678" }
  ];

  // Cadastro
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;
    const senha = document.getElementById('senha').value;

    if (!nome || !email || !celular || !senha) {
      mensagem.textContent = 'Todos os campos são obrigatórios';
      mensagem.className = 'erro';
      return;
    }

    if (usuarios.find(u => u.email === email)) {
      mensagem.textContent = 'E-mail já cadastrado';
      mensagem.className = 'erro';
      return;
    }

    const novoUsuario = { id: usuarios.length + 1, nome, email, celular, senha };
    usuarios.push(novoUsuario);
    mensagem.textContent = 'Usuário cadastrado';
    mensagem.className = 'sucesso';
    form.reset();
  });

  // Consulta
  consultaForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailConsulta = document.getElementById('email-consulta').value;
    const usuario = usuarios.find(u => u.email === emailConsulta);

    if (!usuario) {
      consultaMensagem.textContent = 'Usuário não encontrado';
      consultaMensagem.className = 'erro';
      editarForm.style.display = 'none';
      return;
    }

    consultaMensagem.textContent = '';
    editarForm.style.display = 'block';
    document.getElementById('editar-id').value = usuario.id;
    document.getElementById('editar-nome').value = usuario.nome;
    document.getElementById('editar-email').value = usuario.email;
    document.getElementById('editar-celular').value = usuario.celular;
    document.getElementById('editar-senha').value = usuario.senha;
  });

  // Edição
  editarForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const id = parseInt(document.getElementById('editar-id').value);
    const nome = document.getElementById('editar-nome').value;
    const email = document.getElementById('editar-email').value;
    const celular = document.getElementById('editar-celular').value;
    const senha = document.getElementById('editar-senha').value;

    if (!nome || !email || !celular || !senha) {
      consultaMensagem.textContent = 'Todos os campos são obrigatórios';
      consultaMensagem.className = 'erro';
      return;
    }

    const index = usuarios.findIndex(u => u.id === id);
    if (index === -1) {
      consultaMensagem.textContent = 'Usuário não encontrado';
      consultaMensagem.className = 'erro';
      return;
    }

    usuarios[index] = { id, nome, email, celular, senha };
    consultaMensagem.textContent = 'Usuário atualizado';
    consultaMensagem.className = 'sucesso';
    editarForm.style.display = 'none';
    editarForm.reset();
  });

  // Exclusão
  document.getElementById('excluir-cadastro').addEventListener('click', () => {
    if (confirm('Tem certeza que deseja excluir este cadastro?')) {
      const id = parseInt(document.getElementById('editar-id').value);
      usuarios = usuarios.filter(u => u.id !== id);
      consultaMensagem.textContent = 'Usuário excluído';
      consultaMensagem.className = 'sucesso';
      editarForm.style.display = 'none';
      editarForm.reset();
    }
  });
});