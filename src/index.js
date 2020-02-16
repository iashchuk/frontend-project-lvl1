import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name? ');
const printHello = (name) => console.log(`Hello, ${name}!`);

const greetUser = () => {
  const name = getName();
  printHello(name);
};

export default greetUser;
