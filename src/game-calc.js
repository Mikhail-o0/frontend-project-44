import readlineSync from 'readline-sync';
import { getRandomNum, getRandomOperator, toGreet } from './index.js';

export default function getCalc() {
  const name = toGreet();
  console.log('What is the result of the expression?');
  let correctAnswer = 0;
  while (correctAnswer < 3) {
    const num = getRandomNum(1, 100);
    const num2 = getRandomNum(1, 100);
    const operator = getRandomOperator();
    correctAnswer += 1;
    const expression = `${num} ${operator} ${num2}`;
    console.log('Question:', expression);
    const answer = readlineSync.question('Your answer: ');
    let result;
    switch (operator) {
      case '+':
        result = num + num2;
        break;
      case '-':
        result = num - num2;
        break;
      case '*':
        result = num * num2;
        break;
      default:
    } if (correctAnswer === 3) {
      console.log('Correct!');
      console.log('Congratulations,', name);
    } else if (Number(answer) === result) {
      console.log('Correct!');
    } else {
      console.log(answer, 'is wrong answer ;(. Correct answer was', result, '.');
      console.log("Let's try again,", name, '!');
      return;
    }
  }
}
