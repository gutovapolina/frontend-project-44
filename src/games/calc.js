import readlineSync from 'readline-sync';
import getUserName from '../cli.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const runCalcGame = () => {
  const name = getUserName();
  console.log('What is the result of the expression?');

  let correctCount = 0;
  const rounds = 3;

  while (correctCount < rounds) {

    const num1 = getRandomInt(1, 20);
    const num2 = getRandomInt(1, 20);

    const operators = ['+', '-', '*'];
    const operator = operators[getRandomInt(0, operators.length - 1)];

    let correctAnswer;

    switch (operator) {
      case '+':
        correctAnswer = num1 + num2;
        break;
      case '-':
        correctAnswer = num1 - num2;
        break;
      case '*':
        correctAnswer = num1 * num2;
        break;
      default:
        throw new Error(`Unknown operator: ${operator}`);
    }

    const question = `${num1} ${operator} ${num2}`;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').trim();

    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
      correctCount++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runCalcGame;