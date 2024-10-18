import readlineSync from 'readline-sync';
// const randomNum = () => {
//   const min = 1;
//   const max = 100;
//   const num = Math.floor(Math.random() * (max - min + 1)) + min;
//   return num;
// };
const isEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswer = 0;
  while (correctAnswer < 3) {
    const min = 1;
    const max = 100;
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log('Question: ', num);
    const answer = readlineSync.question('Your answer: ');
    if (answer === 'yes' && num % 2 === 0) {
      correctAnswer += 1;
      console.log('Correct!');
      if (correctAnswer === 3) {
        console.log('Congratulations,', name, '!');
      }
    } else if (answer === 'no' && num % 2 !== 0) {
      correctAnswer += 1;
      console.log('Correct!');
      if (correctAnswer === 3) {
        console.log('Congratulations,', name, '!');
      }
    } else {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log("Let's try again,", name);
      return;
    }
  }
};
isEven();
