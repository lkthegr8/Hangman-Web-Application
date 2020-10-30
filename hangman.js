const puzzleElement=document.querySelector("#puzzle")
const guessElement=document.querySelector("#guesses")

const game1=new Hangman("hello",4)


puzzleElement.textContent=game1.getPuzzle()
guessElement.textContent=`remaining guess = ${game1.remainingGuesses}`
console.log(game1.status)

// adding event listener to the window to take input from user
window.addEventListener("keypress",function(e){
    const guess=e.key.toLowerCase()
    game1.makeGuess(guess)

    puzzleElement.textContent=game1.getPuzzle()
    guessElement.textContent=`remaining guess = ${game1.remainingGuesses}`

    // console.log(game2.getPuzzle())
    // console.log(`remaining guess = ${game2.remainingGuesses}`)
    console.log(game1.status)
})