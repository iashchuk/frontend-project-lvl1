import readlineSync from 'readline-sync';

const MAX_ROUNDS = 3;
const START_ROUND = 1;

const getWelcomeText = () => '\nWelcome to the Brain Games!\n';
const getGreeting = (name) => `Hello, ${name}!`;
const getCongratulationText = (name) => `Congratulations, ${name}!`;
const getLoseText = (name, answer, correctAnswer) =>
  `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". Let's try again, ${name}!`;
const getQuestionText = (question) => `Question: ${question}`;
const getCorrectAnswerText = () => 'Correct!';

const getName = () => readlineSync.question('May I have your name? ');
const getAnswer = () => readlineSync.question('Your answer: ');

const printText = (text) => console.log(text);

const engine = (gameRules, getRound) => {
  let round = START_ROUND;
  printText(getWelcomeText());
  const name = getName();
  printText(getGreeting(name));
  printText(gameRules);

  while (round <= MAX_ROUNDS) {
    const [question, correctAnswer] = getRound();
    printText(getQuestionText(question));
    const answer = getAnswer();

    if (answer !== correctAnswer) {
      printText(getLoseText(name, answer, correctAnswer));
      return;
    }

    printText(getCorrectAnswerText());
    round += 1;
  }

  printText(getCongratulationText(name));
};

export default engine;
