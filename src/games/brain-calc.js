import engine from '../index.js';
import generateRandomNumber from '../utils/generateRandomNumber.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const operators = ['+', '-', '*'];

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getRound = () => {
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  const randomOperationIndex = generateRandomNumber(0, operators.length - 1);
  const operator = operators[randomOperationIndex];

  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(operations[operator](number1, number2));

  return [question, correctAnswer];
};

const runGame = () => {
  engine(gameRules, getRound);
};

export default runGame;
