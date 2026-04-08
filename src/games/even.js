import readlineSync from 'readline-sync';
import getUserName from '../cli.js';

const isEven = (num) => num % 2 === 0;

const runEvenGame = () => {
  const name = getUserName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correct = 0;
  while (correct < 3) {
    const num = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    const right = isEven(num) ? 'yes' : 'no';

    if (answer === right) {
      console.log('Correct!');
      correct++;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${right}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runEvenGame;