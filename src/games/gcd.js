import readlineSync from 'readline-sync'
import getUserName from '../cli.js'

function gcd(a, b) {
  while (b !== 0) {
    let temp = b
    b = a % b
    a = temp
  }
  return a
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function runGcdGame() {
  const name = getUserName()
  console.log('Find the greatest common divisor of given numbers.')

  let correctCount = 0
  const rounds = 3

  while (correctCount < rounds) {
    const num1 = getRandomInt(1, 100)
    const num2 = getRandomInt(1, 100)
    const correctAnswer = gcd(num1, num2)
    const question = `${num1} ${num2}`

    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ').trim()

    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!')
      correctCount++
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.);
      console.log(Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}

export default runGcdGame
