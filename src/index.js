/* eslint-disable max-len */
import readlineSync from 'readline-sync';

const toGreet = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomOperator = () => {
  const operator = ['+', '-', '*'];
  return operator[getRandomNum(0, operator.length - 1)];
};

const getCommonDivisor = (num, num2) => {
  const largestNumber = [];
  let result = 0;
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0 && num2 % i === 0) {
      largestNumber.push(i);
    }
  }
  result = largestNumber.pop();
  return result;
};

const getRandomProgression = () => {
  const array = [];
  const startProgression = getRandomNum(1, 20);
  const intervalProgression = getRandomNum(2, 10);
  const lengthProgression = getRandomNum(5, 10);
  for (let i = startProgression; array.length <= lengthProgression; i += intervalProgression) {
    array.push(i);
  }
  return array;
};

const getAnswer = (correctAnswer, answer, result, name) => {
  if (correctAnswer === 3) {
    console.log('Correct!');
    console.log('Congratulations,', name);
  } else if (answer === result) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}'`, 'is wrong answer ;(. Correct answer was', `'${result}'${'.'}`);
    console.log("Let's try again,", name, '!');
  }
};

const getPrime = (num) => {
  let result = '';
  for (let i = 2; i < num - 1; i += 1) {
    if (num % i !== 0) {
      result = 'yes';
    } else {
      return 'no';
    }
  }
  return result;
};

export {
  toGreet, getRandomNum, getRandomOperator, getCommonDivisor, getRandomProgression, getAnswer, getPrime,
};
