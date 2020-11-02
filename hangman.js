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
    console.log(`The name of the country: ${country.name}`)
}).catch((err)=>{
    console.log(err)
})


// dummy code for fetch api

// fetch("http://puzzle.mead.io/puzzle",{}).then((response)=>{
//     if (response.status===200) {
//         // the below statment returns a promise so to handle it we return it and then use 'then'
//         return response.json()
//     }else{
//         throw new Error("unable to fetch puzzle")
//     }
// }).then((data)=>{
//     console.log(data.puzzle)
// }).catch((error)=>{
//     console.log(error)
// })



// code for challenge to get location based on ip address
// and integrating the country api
getLocation().then((data)=>{
    console.log(`you live in ${data.city},${data.region},${data.country}`)
    return data.country
}).then((country)=>{
    getCountry(country).then((country)=>{
        console.log(`The name of the country: ${country.name}`)
    })
}).catch((err)=>{
    console.log(err)
})