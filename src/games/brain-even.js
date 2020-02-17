import readlineSync from 'readline-sync';
import generateRandomNumber from '../utils/generateRandomNumber.js';

const MAX_ROUNDS = 3;
const getWelcomeText = () => '\nWelcome to the Brain Games!\n';
const getGameRules = () => 'Answer "yes" if the number is even, otherwise answer "no".';
const getGreeting = (name) => `Hello, ${name}!`;
const getCongratulationText = (name) => `Congratulations, ${name}!`;
const getLoseText = (name, answer, correctAnswer) =>
  `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". Let's try again, ${name}!`;
const getQuestionText = (question) => `Question: ${question}`;
const getCorrectAnswerText = () => 'Correct!';

const isEven = (number) => number % 2 === 0;
const getName = () => readlineSync.question('May I have your name? ');
const getAnswer = () => readlineSync.question('Your answer: ');
const printText = (text) => console.log(text);

const getRound = () => {
  const question = generateRandomNumber();
  printText(getQuestionText(question));
  const answer = getAnswer();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [answer, correctAnswer];
};

const runGame = () => {
  let round = 1;
  printText(getWelcomeText());
  const name = getName();
  printText(getGreeting(name));
  printText(getGameRules());

  while (round <= MAX_ROUNDS) {
    const [answer, correctAnswer] = getRound();

    if (answer !== correctAnswer) {
      return printText(getLoseText(name, answer, correctAnswer));
    }
    printText(getCorrectAnswerText());
    round += 1;
  }
  return printText(getCongratulationText(name));
};

export default runGame;
