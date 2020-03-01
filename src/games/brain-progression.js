import runEngine from '../index.js';
import generateRandomNumber from '../utils/generateRandomNumber.js';

const PROGRESSION_LENGTH = 10;
const description = 'What number is missing in the progression?';

const createProgression = (start, step) => {
  const progression = [];
  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    const number = start + step * i;
    progression.push(number);
  }
  return progression;
};

const getRound = () => {
  const startProgression = generateRandomNumber();
  const stepProgression = generateRandomNumber(3, 20);
  const progression = createProgression(startProgression, stepProgression);
  const hiddenElementIndex = generateRandomNumber(0, PROGRESSION_LENGTH - 1);
  const correctAnswer = progression[hiddenElementIndex].toString();
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const runGame = () => {
  runEngine(description, getRound);
};

export default runGame;
