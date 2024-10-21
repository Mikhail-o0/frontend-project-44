import readlineSync from 'readline-sync';
import {
  getRandomNum, toGreet, getRandomProgression, getAnswer,
} from '../src/index.js';

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
    getAnswer(correctAnswer, Number(answer), result, name);
    if (Number(answer) !== result) {
      return;
    }
  }
}
