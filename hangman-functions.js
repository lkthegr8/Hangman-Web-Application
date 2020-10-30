// all the functions written previously in hangman.js

// this is a object
const Hangman=function (word, remainingGuesses) {
    this.word=word.toLowerCase().split("")
    this.remainingGuesses=remainingGuesses
    this.gussedLetters=[]
    this.status="Playing"
}

Hangman.prototype.calculateStatus=function(){
    let finished=true

    this.word.forEach((letter)=>{
        if (this.gussedLetters.includes(letter)) {
            // iterate through the word if all the letters have been guessed
        } else {
            finished=false
        }
    })

    if (this.remainingGuesses===0) {
        this.status="Failed"
    }else if(finished){
        this.status="Finished"
    }else{
        this.status="Playing"
    }
}

Hangman.prototype.getStatusMessage=function(){
    if (this.status==="Playing") {
        return `guesses left:${this.remainingGuesses}`
    }else if (this.status==="Failed") {
        return `nice try! the word was "${this.word.join("")}"`
    }else{
        return "gerat work! you guessed the word."
    }
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

    if(this.status !=="Playing"){
        return
    }

    if(isUnique){
        this.gussedLetters.push(guess)
    }

    if(isUnique && isBadGuess){
        this.remainingGuesses--
    }
    this.calculateStatus()
}