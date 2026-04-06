import readlineSync from 'readline-sync'
import getUserName from '../cli.js'

function isPrime(num) {
  if (num < 2) {
    return false
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function runPrimeGame() {
  let name = getUserName()
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  let rounds = 3

  for (let correctCount = 0; correctCount < rounds; correctCount++) {
    let number = getRandomInt(1, 100)
    console.log('Question: ' + number)
    let userAnswer = readlineSync.question('Your answer: ').trim()

    let correctAnswer = isPrime(number) ? 'yes' : 'no'

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log('\'' + userAnswer + '\' is wrong answer ;(. Correct answer was \'' + correctAnswer + '\'.')
      console.log('Let\'s try again, ' + name + '!')
      return
    }
  }

  console.log('Congratulations, ' + name + '!')
}

export default runPrimeGame
