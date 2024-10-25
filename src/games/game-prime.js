import {
  getRandomNum, gameLogic,
} from '../index.js';

const conditionQuestion = () => {
  const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return condition;
};

const task = () => {
  const find = getRandomNum(2, 50);
  return find;
};

const checkAnswer = (find) => {
  let result = '';
  for (let i = 2; i < find - 1; i += 1) {
    if (find % i !== 0) {
      result = 'yes';
    } else {
      return 'no';
    }
  }
  return result;
};

export default function launchPrimeNumber() {
  gameLogic(conditionQuestion, task, checkAnswer);
}
