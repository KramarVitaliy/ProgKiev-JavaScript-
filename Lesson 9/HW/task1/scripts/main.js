const makeUpNum = document.querySelector(".make_up_num"),
guessNum = document.querySelector(".guess_num"),
result = document.querySelector(".result");
let puzzledNum = 0,
rand = 0;


function randomInteger() {
  rand = Math.floor(1 - 0.5 + Math.random() * (100 - 1 + 1));
};

function checkNum(puzzledNum) {
  puzzledNum = +document.getElementById("puzzled_num").value;
  if (puzzledNum > rand) {
    result.innerHTML = `Бери ниже!`;
    result.style.display = "block";
    result.style.color = "red";
  } else if(puzzledNum < rand) {
    result.innerHTML = `Бери выше!`;
    result.style.display = "block";
    result.style.color = "red";
  } else if(puzzledNum === rand){
    result.innerHTML = `Угадал!`;
    result.style.display = "block";
    result.style.color = "green";
  }
};




makeUpNum.addEventListener("click", randomInteger);
guessNum.addEventListener("click", checkNum);
console.log(puzzledNum);
