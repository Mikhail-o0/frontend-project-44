import {
  getRandomNum, gameLogic,
} from '../index.js';

const condition = 'Find the greatest common divisor of given numbers.';

const task = () => {
  const num = getRandomNum(1, 20);
  const num2 = getRandomNum(1, 20);
  const expression = `${num} ${num2}`;
  return expression;
};

const checkAnswer = (expression) => {
  const array = expression.split(' ');
  const largestNumber = [];
  let result = 0;
  for (let i = 1; i <= array[0]; i += 1) {
    if (array[0] % i === 0 && array[1] % i === 0) {
      largestNumber.push(i);
    }
  }
  result = largestNumber.pop();
  return result.toString();
};

export default function launchGcd() {
  gameLogic(condition, task, checkAnswer);
}
