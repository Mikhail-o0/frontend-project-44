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

export {
  toGreet, getRandomNum, getRandomOperator, getCommonDivisor,
};
