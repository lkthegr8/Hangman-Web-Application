

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


getPuzzle(4,(error,puzzle)=>{
    if(error){
        console.log(`error: ${error}`)
    }else{
        console.log(puzzle)
    }
    
})




// the challenge for callback abstraction
getCountry("US",(error,country)=>{
    if (error) {
        console.log(error)
    } else {
        console.log(`country name: ${country.name}`)
    }
})
