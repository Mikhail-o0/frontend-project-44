import readlineSync from 'readline-sync';
import {
  getRandomNum, toGreet, getCommonDivisor, getAnswer,
} from '../index.js';

export default function launchGcd() {
  const name = toGreet();
  console.log('Find the greatest common divisor of given numbers.');
  let correctAnswer = 0;
  while (correctAnswer < 3) {
    correctAnswer += 1;
    const num = getRandomNum(1, 20);
    const num2 = getRandomNum(1, 20);
    const numbers = `${num} ${num2}`;
    console.log('Question:', numbers);
    const answer = readlineSync.question('Your answer: ');
    const result = getCommonDivisor(num, num2);
    getAnswer(correctAnswer, Number(answer), result, name);
    if (Number(answer) !== result) {
      return;
    }
  }
}
