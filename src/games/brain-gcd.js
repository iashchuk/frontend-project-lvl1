import runEngine from '../index.js';
import generateRandomNumber from '../utils/generateRandomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  const remainder = number1 % number2;
  if (remainder === 0) {
    return Math.abs(number2);
  }
  return getGcd(number2, remainder);
};

const getRound = () => {
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();

  const question = `${number1}  ${number2}`;
  const correctAnswer = getGcd(number1, number2).toString();

  return [question, correctAnswer];
};

const runGame = () => {
  runEngine(description, getRound);
};

export default runGame;
