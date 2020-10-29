const Hangman=function (word, remainingGuesses) {
    this.word=word.toLowerCase().split("")
    this.remainingGuesses=remainingGuesses
    this.gussedLetters=['c',"l"]
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

const game1=new Hangman("Cat",2)
console.log(game1.getPuzzle())

const game2=new Hangman("hello",4)
console.log(game2.getPuzzle())