import gameLogic from '../index.js';
import { getRandomNum } from '../utils/config.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const task = () => {
  const num = getRandomNum(2, 50);
  return num;
};

const checkAnswer = (num) => {
  const isRemains = () => {
    let result = '';
    if (num === 2) {
      result = true;
    }
    for (let i = 2; i < num; i += 1) {
      if (num % i !== 0) {
        result = true;
      } else {
        return false;
      }
    }
    return result;
  };
  const check = isRemains() ? 'yes' : 'no';
  return check;
};

export default function launchPrimeNumber() {
  gameLogic(condition, task, checkAnswer);
}
