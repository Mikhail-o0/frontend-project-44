import {
  getRandomNum, gameLogic,
} from '../index.js';

const condition = 'What is the result of the expression?';

const task = () => {
  const num = getRandomNum(1, 20);
  const num2 = getRandomNum(1, 20);
  const operator = ['+', '-', '*'];
  const randomOperator = operator[getRandomNum(0, operator.length - 1)];
  const expression = `${num} ${randomOperator} ${num2}`;
  return expression;
};

const checkAnswer = (expression) => {
  let result = expression;
  const array = result.split(' ');
  switch (array[1]) {
    case '+':
      result = Number(array[0]) + Number(array[2]);
      break;
    case '-':
      result = Number(array[0]) - Number(array[2]);
      break;
    case '*':
      result = Number(array[0]) * Number(array[2]);
      break;
    default:
  }
  return result.toString();
};

export default function launchCalc() {
  gameLogic(condition, task, checkAnswer);
}
