const typeMsg = document.querySelector("#val");

const sendMsg = document.querySelector("#sendBtn").addEventListener("click", () => {
  let allMsgCont = document.querySelector("#section");
  let msg = typeMsg.value;

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

  if (msg.endsWith("?")) {
    let answers = ["Sim.", "Não."];
    let randomAnswer = answers[Math.floor(Math.random() * answers.length)];

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
        <small id="time">11:45</small>
      </div>`;
    }, 1500);
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
        <small id="time">11:45</small>
      </div>`;
    }, 1500);
  }
});