import readlineSync from 'readline-sync';

export default function launchWelcome() {
  const name = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${name}!`);
}
