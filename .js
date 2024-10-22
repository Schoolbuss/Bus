const typeMsg = document.querySelector("#val");

const sendMsg = document.querySelector("#sendBtn").addEventListener("click", () => {
  let allMsgCont = document.querySelector("#section");
  let msg = typeMsg.value.trim(); // Remove espaços no início e fim da mensagem

  let msgRoom = `<div class="user-demo-answer">
        <div class="user-conv-container">
          <div class="user-pic">
            <i class="fa fa-user-circle"></i>
          </div>
          <div class="userMsg">
            ${msg}
          </div>
        </div>
        <small id="time">11:45 PM</small>
      </div>`;
  allMsgCont.innerHTML += msgRoom;

  let respostasEspecificas = {
    "onde você está?": "Estou a caminho do seu endereço.",
    "qual é o seu nome?": "Meu nome é Carlos, seu motorista.",
    "quanto tempo vai demorar?": "De acordo com o GPS, estarei aí em 5 minutos.",
    "você aceita pagamento em cartão?": "Sim, aceito pagamentos com cartão.",
    "quanto vai custar a corrida?": "O valor será exibido ao final da corrida, de acordo com o percurso.",
  };

  if (msg.endsWith("?")) {
    let resposta = respostasEspecificas[msg.toLowerCase()];

    if (resposta) {
      setTimeout(function() {
        allMsgCont.innerHTML += `<div class="bot-first-question">
          <span class="bot-conv-container">
            <div class="bot-pic">
              <i class="fa fa-robot"></i>
            </div>
            <span class="botMsg message">
              ${resposta}
            </span>
          </span>
          <small id="time">11:45 PM</small>
        </div>`;
      }, 1500);
    } else {
      let respostasAleatorias = ["Sim.", "Não.", "Talvez.", "Pode ser."];
      let randomAnswer = respostasAleatorias[Math.floor(Math.random() * respostasAleatorias.length)];

      setTimeout(function() {
        allMsgCont.innerHTML += `<div class="bot-first-question">
          <span class="bot-conv-container">
            <div class="bot-pic">
              <i class="fa fa-robot"></i>
            </div>
            <span class="botMsg message">
              ${randomAnswer}
            </span>
          </span>
          <small id="time">11:45 PM</small>
        </div>`;
      }, 1500);
    }
  } else {
    setTimeout(function() {
      allMsgCont.innerHTML += `<div class="bot-first-question">
        <span class="bot-conv-container">
          <div class="bot-pic">
            <i class="fa fa-robot"></i>
          </div>
          <span class="botMsg message">
            Não tenho uma resposta para isso. Tente novamente.
          </span>
        </span>
        <small id="time">11:45 PM</small>
      </div>`;
    }, 1500);
  }
});