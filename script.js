document.getElementById('signup').addEventListener('click', function() {
    console.log('Registro iniciado.');

    // Desativa o botão após o clique
    this.disabled = true;

    // Altera o texto do botão
    this.textContent = 'Registrando...';

    // Redireciona para a página home.html após 2 segundos
    setTimeout(function() {
        window.location.href = 'home.html'; // Redireciona o usuário para home.html
    }, 2000); // Aguarda 2 segundos para exibir o texto "Registrando..."
});





// Pega o formulário e o input de mensagem
const formulario = document.getElementById('formulario');
const input = document.getElementById('val');
const chatBox = document.querySelector('.caixa-de-chat');

// Evento de envio de mensagem
formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  const mensagemUsuario = input.value.trim();
  if (mensagemUsuario !== '') {
    // Adicionar mensagem do usuário ao chat
    addMensagemUsuario(mensagemUsuario);

    // Limpar o campo de input
    input.value = '';

    // Responder a mensagem do usuário (pode ser uma função mais complexa)
    setTimeout(() => {
      const respostaBot = gerarResposta(mensagemUsuario);
      addMensagemBot(respostaBot);
    }, 1000); // Simula um pequeno atraso para parecer mais natural
  }
});

// Função para adicionar mensagem do usuário ao chat
function addMensagemUsuario(mensagem) {
  const divUsuario = document.createElement('div');
  divUsuario.classList.add('resposta-demo-usuario');
  divUsuario.innerHTML = `
    <div class="caixa-conv-usuario">
      <div class="foto-usuario">
        <i class="fa fa-user-circle"></i>
      </div>
      <div class="mensagemUsuario">
        ${mensagem}
      </div>
    </div>
    <small id="hora">${obterHoraAtual()}</small>
  `;
  chatBox.appendChild(divUsuario);
  chatBox.scrollTop = chatBox.scrollHeight; // Rolagem automática para a última mensagem
}

// Função para adicionar resposta do bot ao chat
function addMensagemBot(mensagem) {
  const divBot = document.createElement('div');
  divBot.classList.add('primeira-pergunta-bot');
  divBot.innerHTML = `
    <span class="caixa-conv-bot">
      <div class="foto-bot">
        <i class="fa fa-robot"></i>
      </div>
      <span class="mensagem-bot mensagem">
        ${mensagem}
      </span>
    </span>
    <small id="hora">${obterHoraAtual()}</small>
  `;
  chatBox.appendChild(divBot);
  chatBox.scrollTop = chatBox.scrollHeight; // Rolagem automática para a última mensagem
}

// Função que gera a resposta do bot
function gerarResposta(mensagemUsuario) {
  const respostas = {
    "oi": "Olá! Como posso te ajudar?",
    "tudo bem": "Estou bem, obrigado por perguntar! E com você?",
    "qual é o seu nome": "Meu nome é chatbot, um chatbot feito para te ajudar!",
    "default": "Desculpe, não entendi sua mensagem. Pode repetir?" 
  };

  mensagemUsuario = mensagemUsuario.toLowerCase();

  // Retorna uma resposta pré-definida ou uma resposta padrão
  return respostas[mensagemUsuario] || respostas['default'];
}

// Função para obter a hora atual
function obterHoraAtual() {
  const agora = new Date();
  return agora.getHours() + ':' + String(agora.getMinutes()).padStart(2, '0');
}





!!!!!!!!!


document.getElementById('signup').addEventListener('click', function() {
    console.log('Registro iniciado.');

    // Desativa o botão após o clique
    this.disabled = true;

    // Altera o texto do botão
    this.textContent = 'Registrando...';

    // Redireciona para a página home.html após 2 segundos
    setTimeout(function() {
        window.location.href = 'home.html'; // Redireciona o usuário para home.html
    }, 2000); // Aguarda 2 segundos para exibir o texto "Registrando..."
});





document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return; // Não enviar mensagens vazias

    appendMessage('Você: ' + userInput, 'user-message');
    document.getElementById('user-input').value = ''; // Limpa o input

    // Resposta do bot
    const botResponse = getBotResponse(userInput);
    appendMessage('Bot: ' + botResponse, 'bot-message');
});

function appendMessage(message, className) {
    const messageElement = document.createElement('div');
    messageElement.className = className;
    messageElement.textContent = message;
    document.getElementById('chat-box').appendChild(messageElement);
    document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight; // Rolagem automática
}

function getBotResponse(userInput) {
    // Respostas simples baseadas em palavras-chave
    if (userInput.toLowerCase().includes('oi')) {
        return 'Olá! Como posso ajudar você hoje?';
    } else if (userInput.toLowerCase().includes('tchau')) {
        return 'Tchau! Tenha um ótimo dia!';
    } else {
        return 'Desculpe, não entendi. Pode reformular?';
    }
}


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    alert(`Usuário: ${username}\nSenha: ${password}`);
    // Lógica de autenticação aqui
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    alert(`Nome: ${name}\nEmail: ${email}\nSenha: ${password}`);
    // Lógica de registro aqui
});

document.getElementById('scheduleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    alert(`Data: ${date}\nHora: ${time}`);
    // Lógica de agendamento aqui
});

document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;

    alert(`Recuperação de senha para: ${email}`);
    // Lógica de recuperação de senha aqui
});