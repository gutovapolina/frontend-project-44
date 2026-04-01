import readlineSync from 'readline-sync';
import getUserName from '../cli.js';

const isEven = (num) => num % 2 === 0;

const runEvenGame = () => {
  const name = getUserName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;
  const maxCorrect = 3;

  while (correctAnswersCount < maxCorrect) {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ').trim().toLowerCase();

    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount++;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runEvenGame;