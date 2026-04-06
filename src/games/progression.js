#!/usr/bin/env node

import readlineSync from 'readline-sync'

const progressionGames = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('What number is missing in the progression?')

  for (let round = 0; round < 3; round++) {
    const length = Math.floor(Math.random() * 6) + 5
    const start = Math.floor(Math.random() * 50) + 1
    const step = Math.floor(Math.random() * 10) + 1
    const hiddenIndex = Math.floor(Math.random() * length)

    const progression = []
    for (let i = 0; i < length; i++) {
      if (i === hiddenIndex) {
        progression.push('..')
      }
      else {
        progression.push(start + i * step)
      }
    }

    const correctAnswer = start + hiddenIndex * step
    console.log(`Question: ${progression.join(' ')}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log(`'Correct!'`)
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ; (.Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      process.exit(0)
    }
  }

  console.log(`Congratulations, ${name}!`)
}

export default progressionGames
