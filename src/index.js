import readlineSync from 'readline-sync';
import { rounds } from './utils/config.js';

export default function gameLogic(condition, task, checkAnswer) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(condition);
  let correctAnswer = 0;
  while (correctAnswer < rounds) {
    correctAnswer += 1;
    const num = task();
    const check = checkAnswer(num);
    console.log(`Question: ${num}`);
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
