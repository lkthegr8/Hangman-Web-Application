

const puzzleElement=document.querySelector("#puzzle")
const guessElement=document.querySelector("#guesses")

const game1=new Hangman("hi cat",4)


puzzleElement.textContent=game1.getPuzzle()
guessElement.textContent=game1.getStatusMessage()


// adding event listener to the window to take input from user
window.addEventListener("keypress",(e) => {
    const guess=e.key.toLowerCase()
    game1.makeGuess(guess)

    puzzleElement.textContent=game1.getPuzzle()
    // getting the status and printing it on the window
    guessElement.textContent=game1.getStatusMessage()

})


getPuzzle(1).then((puzzle)=>{
    console.log(puzzle)
},(err)=>{
    console.log(`error: ${err}`)
})




// the challenge for callback abstraction
getCountry("US").then((country)=>{
    console.log(`The name of the country: ${country}`)
},(err)=>{
    console.log(`error: ${err}`)
})
