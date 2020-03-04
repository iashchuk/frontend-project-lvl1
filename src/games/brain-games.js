import readlineSync from 'readline-sync';

const runGame = () => {
  console.log('\nWelcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default runGame;
