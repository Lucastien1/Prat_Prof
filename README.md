Cadastro Fácil

Sistema web para gerenciamento de cadastros de usuários, desenvolvido para a Iteração 1 da disciplina de Engenharia de Software na Universidade Presbiteriana Mackenzie.

Descrição

O Cadastro Fácil permite cadastrar, consultar, editar e excluir usuários com os dados: nome, e-mail, celular e senha. O front-end é feito com HTML, CSS e JavaScript, e o back-end usa Node.js, Express e um arquivo JSON (usuarios.json) para armazenamento.

Como Acessar

1. Demonstração Online (Front-End)
Link: [https://Lucastien1.github.io/cadastro-facil](https://lucastien1.github.io/Prat_Prof/)

O que é: Interface interativa no GitHub Pages, simulando cadastro, consulta, edição e exclusão (dados temporários, resetam ao recarregar).

Como usar:

Abra o link em um navegador (Chrome ou Edge recomendado).
Preencha o formulário de cadastro (ex.: Nome: "Lucas Teste", E-mail: "lucas@teste.com", Celular: "(11) 99999-9999", Senha: "12345678").
Clique em "Enviar" para cadastrar, ou use a seção de consulta para ver/editar/excluir.

Nota: O back-end não roda no GitHub Pages, mas está demonstrado no vídeo.

2. Executar Localmente (Front-End + Back-End)
Pré-requisitos:
Node.js (versão 22.14.0 ou superior, baixe em nodejs.org).
Navegador (Chrome ou Edge).

Instruções:
Baixe o código:
No repositório [cadastro_facil.zip](https://github.com/user-attachments/files/19814566/cadastro_facil.zip)
Extraia o arquivo ZIP para uma pasta (ex.: C:\cadastro_facil).

Instale dependências:
Abra um terminal (Prompt de Comando ou PowerShell no Windows).
Navegue até a pasta extraída:
cd caminho/para/cadastro_facil

Instale as dependências:
npm install

Inicie o servidor:
node server.js

O terminal deve mostrar: Servidor rodando na porta 3000.

Acesse o sistema:
Abra o navegador e vá para http://localhost:3000.

Use os formulários para cadastrar, consultar, editar ou excluir usuários.

Os dados são salvos em usuarios.json na pasta do projeto.

Solução de problemas:
Erro ao iniciar: Verifique se a porta 3000 está livre (netstat -aon | findstr :3000) ou se o Node.js está instalado (node -v).
usuarios.json vazio: Confirme que o arquivo existe com [] como conteúdo inicial.

3. Demonstração Completa
Vídeo: Um vídeo de 8 minutos mostra o sistema funcionando localmente (com back-end) e no GitHub Pages (front-end simulado). Link: [inserir link do vídeo].

Documentação:

Guia do usuário: Incluído no documento da entrega.
Plano de testes: Detalha os testes dos casos de uso.
Diagrama de implantação: Mostra a arquitetura.

Estrutura do Projeto
public/:
index.html: Interface principal.
styles.css: Estilos visuais.
script.js: Lógica do front-end (simulada no GitHub Pages).
server.js: Back-end (Node.js/Express).
usuarios.json: Armazenamento de dados (local).
package.json: Dependências e scripts.

Notas
O GitHub Pages hospeda apenas o front-end. O back-end completo requer execução local.
Use dados fictícios (ex.: “teste@teste.com”) para testes.

Contato para suporte: lucastien10@outlook.com.
