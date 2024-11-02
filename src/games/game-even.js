import gameLogic from '../index.js';
import { getRandomNum } from '../utils/config.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const task = () => {
  const num = getRandomNum(1, 100);
  return num;
};

const checkAnswer = (num) => {
  const isEven = () => num % 2 === 0;
  const check = isEven() ? 'yes' : 'no';
  return check;
};

export default function launchEven() {
  gameLogic(condition, task, checkAnswer);
}
