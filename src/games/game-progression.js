import {
  getRandomNum, gameLogic,
} from '../index.js';

const conditionQuestion = () => {
  const condition = 'What number is missing in the progression?';
  return condition;
};

const task = () => {
  const array = [];
  const startProgression = getRandomNum(1, 20);
  const intervalProgression = getRandomNum(2, 10);
  const lengthProgression = getRandomNum(5, 10);
  for (let i = startProgression; array.length <= lengthProgression; i += intervalProgression) {
    array.push(i);
  }
  const randomIndex = getRandomNum(0, array.length - 1);
  array.splice(randomIndex, 1, '..');
  return array.join(' ');
};

const checkAnswer = (array) => {
  const numArray = array.split(' ');
  const index = numArray.indexOf('..');
  let result = 0;
  if (index >= 2) {
    result = Number(numArray[index - 1]) + (Number(numArray[1]) - Number(numArray[0]));
  } else {
    result = Number(numArray[index + 1]) - (Number(numArray[4]) - Number(numArray[3]));
  }
  return result.toString();
};

export default function launchProgression() {
  gameLogic(conditionQuestion, task, checkAnswer);
}
