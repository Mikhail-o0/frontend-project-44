import { getRandomNum, gameLogic } from '../index.js';

const conditionQuestion = () => {
  const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
  return condition;
};

const task = () => {
  const find = getRandomNum(1, 100);
  return find;
};

const checkAnswer = (find) => {
  const result = find % 2 === 0 ? 'yes' : 'no';
  return result;
};

export default function launchEven() {
  gameLogic(conditionQuestion, task, checkAnswer);
}
