import readlineSync from 'readline-sync';

const toGreet = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function gameLogic(conditionQuestion, task, checkAnswer) {
  const name = toGreet();
  console.log(conditionQuestion());
  const rounds = 3;
  let correctAnswer = 0;
  while (correctAnswer < rounds) {
    correctAnswer += 1;
    const find = task();
    const check = checkAnswer(find);
    console.log(`Question: ${find}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== check) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${check}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}

export {
  toGreet, getRandomNum, gameLogic,
};
