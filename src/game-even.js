import readlineSync from 'readline-sync';
import { getRandomNum, toGreet } from './index.js';

export default function isEven() {
  const name = toGreet();
  let correctAnswer = 0;
  while (correctAnswer < 3) {
    const num = getRandomNum(1, 100);
    console.log('Question: ', num);
    const answer = readlineSync.question('Your answer: ');
    if (answer === 'yes' && num % 2 === 0) {
      correctAnswer += 1;
      console.log('Correct!');
      if (correctAnswer === 3) {
        console.log('Congratulations,', name, '!');
      }
    } else if (answer === 'no' && num % 2 !== 0) {
      correctAnswer += 1;
      console.log('Correct!');
      if (correctAnswer === 3) {
        console.log('Congratulations,', name, '!');
      }
    } else {
      if (num % 2 !== 0) {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        console.log("Let's try again,", name, '!');
      } else {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        console.log("Let's try again,", name, '!');
      }
      return;
    }
  }
}
