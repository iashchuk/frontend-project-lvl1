import runEngine from '../index.js';
import generateRandomNumber from '../utils/generateRandomNumber.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getRound = () => {
  const question = generateRandomNumber();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question.toString(), correctAnswer];
};

const runGame = () => {
  runEngine(description, getRound);
};

export default runGame;
