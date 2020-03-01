import readlineSync from 'readline-sync';

const START_ROUND = 1;
const MAX_ROUNDS = 3;

const runEngine = (description, getRound) => {
  console.log('\nWelcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let i = START_ROUND; i <= MAX_ROUNDS; i += 1) {
    const [question, correctAnswer] = getRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". `);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default runEngine;
