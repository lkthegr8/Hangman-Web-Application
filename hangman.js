const Hangman=function (word, remainingGuesses) {
    this.word=word.toLowerCase().split("")
    this.remainingGuesses=remainingGuesses
    this.gussedLetters=[]
}

Hangman.prototype.getPuzzle=function(){
    let puzzle=""
    this.word.forEach((letter) => {
        if(this.gussedLetters.includes(letter)||letter===" "){
            puzzle += letter
        }else{
            puzzle += "*"
        }

    });

    return puzzle
}

Hangman.prototype.makeGuess=function(guess){
    guess=guess.toLowerCase()
    const isUnique=!this.gussedLetters.includes(guess)
    const isBadGuess=!this.word.includes(guess)

    if(isUnique){
        this.gussedLetters.push(guess)
    }

    if(isUnique && isBadGuess){
        this.remainingGuesses--
    }
}

const game1=new Hangman("Cat",2)
console.log(game1.getPuzzle())
console.log(`remaining guess = ${game1.remainingGuesses}`)


const game2=new Hangman("hello",4)
console.log(game2.getPuzzle())
console.log(`remaining guess = ${game2.remainingGuesses}`)



// adding event listener to the window to take input from user
window.addEventListener("keypress",function(e){
    const guess=e.key.toLowerCase()
    game2.makeGuess(guess)

    console.log(game2.getPuzzle())
    console.log(`remaining guess = ${game2.remainingGuesses}`)

})