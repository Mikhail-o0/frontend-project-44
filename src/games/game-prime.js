import {
  getRandomNum, gameLogic,
} from '../index.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const task = () => {
  const num = getRandomNum(2, 50);
  return num;
};

const checkAnswer = (num) => {
  let result = '';
  if (num === 2) {
    result = 'yes';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i !== 0) {
      result = 'yes';
    } else {
      return 'no';
    }
  }
  return result;
};

export default function launchPrimeNumber() {
  gameLogic(condition, task, checkAnswer);
}
