import readlineSync from 'readline-sync';
import { getRandomNum, toGreet, getRandomProgression } from './index.js';

export default function getProgression() {
  const name = toGreet();
  console.log('What number is missing in the progression?');
  let correctAnswer = 0;
  while (correctAnswer < 3) {
    correctAnswer += 1;
    const progression = getRandomProgression();
    const randomIndex = getRandomNum(0, progression.length - 1);
    const result = progression[randomIndex];
    progression.splice(randomIndex, 1, '..');
    console.log('Question:', progression.join(' '));
    const answer = readlineSync.question('Your answer: ');
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
