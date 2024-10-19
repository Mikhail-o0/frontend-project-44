import readlineSync from 'readline-sync';
import { getRandomNum, toGreet, getCommonDivisor } from './index.js';

export default function getGcd() {
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
    if (correctAnswer === 3) {
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
