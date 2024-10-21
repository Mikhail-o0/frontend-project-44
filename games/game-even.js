import readlineSync from 'readline-sync';
import { getRandomNum, toGreet, getAnswer } from '../src/index.js';

export default function isEven() {
  const name = toGreet();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswer = 0;
  while (correctAnswer < 3) {
    correctAnswer += 1;
    const num = getRandomNum(1, 100);
    console.log('Question: ', num.toString());
    const answer = readlineSync.question('Your answer: ');
    const result = num % 2 === 0 ? 'yes' : 'no';
    getAnswer(correctAnswer, answer, result, name);
    if (answer !== result) {
      return;
    }
  }
}
