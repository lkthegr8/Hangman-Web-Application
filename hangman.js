

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


// making a http request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange',(e)=>{
    if(e.target.readyState===4 && e.target.status===200){
        const data=JSON.parse(e.target.responseText)
        console.log(data)
    }else if (e.target.readyState===4) {
        console.log("an errror has been occured")
    }
})

request.open("GET","http://puzzle.mead.io/puzzle?wordCount=1")
request.send()
