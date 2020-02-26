import engine from '../index.js';
import generateRandomNumber from '../utils/generateRandomNumber.js';

const gameRules = 'What number is missing in the progression?';

const createProgression = (start, gap, length = 10) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const number = start + gap * i;
    progression.push(number);
  }
  return progression;
};

const getRoundInfo = (progression) => {
  const info = [...progression];
  const questionIndex = generateRandomNumber(0, info.length - 1);
  const correctAnswer = String(info[questionIndex]);
  info[questionIndex] = '..';
  const question = info.join(' ');

  return [question, correctAnswer];
};

const getRound = () => {
  const startProgression = generateRandomNumber();
  const gapProgression = generateRandomNumber(3, 20);
  const progression = createProgression(startProgression, gapProgression);

  return getRoundInfo(progression);
};

const runGame = () => {
  engine(gameRules, getRound);
};

export default runGame;
