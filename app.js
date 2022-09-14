let currentInput = document.querySelector(".currentInput");
let answerScreen = document.querySelector(".answerScreen");
let buttons = document.querySelectorAll("button");
let erasebtn = document.querySelector("#erase");
let clearbtn = document.querySelector("#clear");
let evalaute = document.querySelector("#evalaute");
let realTimeScreenValue = [];
if(clearbtn){
clearbtn.addEventListener("click", () => {
  realTimeScreenValue = [''];
  answerScreen.innerHTML = 0;
  currentInput.className = "currentInput";
  answerScreen.className = "answerScreen";
  answerScreen.getElementsByClassName.color = "rgba(150, 150, 150, 0.87)";
});
}
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!btn.id.match("erase")) {
      realTimeScreenValue.push(btn.value);
      currentInput.innerHTML = realTimeScreenValue.join('');
      if (btn.classList.contains("num-btn")) {
        answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
      }
    }
    if (btn.id.match("erase")) {
      realTimeScreenValue.pop();
      currentInput.innerHTML = realTimeScreenValue.join('');
      answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
    }
    if (btn.id.match("evaluate")) {
      currentInput.className = "answerScreen";
      answerScreen.className = "currentInput";
      answerScreen.getElementsByClassName.color = "white";
    }
    // if (typeof eval(realTimeScreenValue.join('')) == "undefined") {
    //   answerScreen.innerHTML = 0;
    // }
  });
});
