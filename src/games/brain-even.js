import runEngine from '../index.js';
import generateRandomNumber from '../utils/generateRandomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getRound = () => {
  const question = generateRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question.toString(), correctAnswer];
};

const runGame = () => {
  runEngine(description, getRound);
};

export default runGame;
