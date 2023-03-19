let mark = 0
let questions = [
    'What`s 2 + 2 ? ',
    'The sun rises in the east?',
    'How much will be 5 / 0?',
    'What color is the sky?',
    'What is the correct answer to the ultimate question of life, the universe and all that?'
]
let answers = ["4", true, "infinity", "blue", "42"]

alert('All answers should be in English')

for (let index = 0; index < questions.length; index++) {

    if (index == 1) {
        if (confirm(questions[index]) == answers[index]) {
            mark += 10
        }
    } else {
        if (prompt(questions[index]).toLowerCase() == answers[index]) {
            mark += 10
        }
    }
}

alert(`Your mark is ${mark}`)