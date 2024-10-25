import readlineSync from 'readline-sync';
import {
  getRandomNum, toGreet, getAnswer, getPrime,
} from '../index.js';

export default function launchPrimeNumber() {
  const name = toGreet();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let correctAnswer = 0;
  while (correctAnswer < 3) {
    correctAnswer += 1;
    const num = getRandomNum(2, 50);
    const result = getPrime(num);
    console.log('Question:', num);
    const answer = readlineSync.question('Your answer: ');
    getAnswer(correctAnswer, answer, result, name);
    if (answer !== result) {
      return;
    }
  }
}
