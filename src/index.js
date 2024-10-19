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

export { toGreet, getRandomNum, getRandomOperator };
