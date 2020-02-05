const words = [`программа`, `макака`, `прекрасный`, `оладушек`];
const answerArray = [];

let word = words[Math.floor(Math.random() * words.length)];

  for (let i = 0; i < word.length; i++) {
    answerArray[i] = `_`;
  }

  let remainingLetters = word.length;

  while (remainingLetters > 0) {
    alert(answerArray.join(` `));
    let guess = prompt(`Угадайте букву, или нажмите Отмена для выхода из игры.`);
    if (guess === null) {
      break;
    } else if (guess.length !== 1) {
      alert(`Пожалуйста, введите одиночную букву.`);
    } else {
      for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
          answerArray[j] = guess;
          remainingLetters--;
        }
      }
    }
  }
  alert(answerArray.join(` `));
  alert(`Отлично! Было загадано слово ${word}`);