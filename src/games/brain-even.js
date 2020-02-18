import engine from '../index.js';
import generateRandomNumber from '../utils/generateRandomNumber.js';

const gameRules = 'What is the result of the expression?';

const isEven = (number) => number % 2 === 0;

const getRound = () => {
  const question = generateRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runGame = () => {
  engine(gameRules, getRound);
};

export default runGame;
