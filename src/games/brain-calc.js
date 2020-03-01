import runEngine from '../index.js';
import generateRandomNumber from '../utils/generateRandomNumber.js';

const description = 'What is the result of the expression?';

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
  const correctAnswer = operations[operator](number1, number2).toString();

  return [question, correctAnswer];
};

const runGame = () => {
  runEngine(description, getRound);
};

export default runGame;
