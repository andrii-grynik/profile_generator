const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('What\'s your name? ', (answer) => {
  const name = answer
  rl.question('What do you do for fun? ', (answer) => {
    const hobbies = answer
    rl.question('What kind of music you listen to? ', (answer) => {
      const jams = answer
      rl.question('What kind of food you like? ', (answer) => {
        const food = answer
        rl.question('What is your favourite sport? ', (answer) => {
          const sports = answer
          rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
            const superpower = answer
            console.log(`Meet ${name}. ${name} enjoys ${hobbies}, and while doing that listenig to ${jams} music. ${name} LOVES food and enjoys ${food} delights amongst many others. ${name} prefers ${sports} over other sports. ${name} is very talented, but ${superpower} is definitely a superpower of ${name}'s.`)
            rl.close()
          })
        })
      })
    })
  })
})
