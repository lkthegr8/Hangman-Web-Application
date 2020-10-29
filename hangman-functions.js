// all the functions written previously in hangman.js

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