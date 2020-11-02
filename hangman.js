

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


getPuzzle((error,puzzle)=>{
    if(error){
        console.log(`error: ${error}`)
    }else{
        console.log(puzzle)
    }
    
})




// this is a challenge not related to the hangman app

// const countryCode = "IN"
// const countryRequest = new XMLHttpRequest()

// countryRequest.addEventListener('readystatechange',(e)=>{
//     if (e.target.readyState===4 && e.target.status===200) {
//         const data=JSON.parse(e.target.responseText)
//         const country=data.find((country) => country.alpha2Code === countryCode)
//         console.log(country.name)
//     } else if (e.target.readyState===4) {
//         console.log("unable to fetch data")
//     }
// })

// countryRequest.open("GET","http://restcountries.eu/rest/v2/all")
// countryRequest.send()
