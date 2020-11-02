const getPuzzle=(wordCount,callback)=>{
    // making a http request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange',(e)=>{
    if(e.target.readyState===4 && e.target.status===200){
        const data=JSON.parse(e.target.responseText)
        console.log(data)
        callback(undefined,data.puzzle)
    }else if (e.target.readyState===4) {
        callback("an errror has been occured",undefined)
    }
})

request.open("GET",`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
request.send()
}

const getCountry=(countryCode,callback)=>{
    // this is a challenge not related to the hangman app

    const countryRequest = new XMLHttpRequest()

    countryRequest.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            callback(undefined,country)
        } else if (e.target.readyState === 4) {
            callback('unable to fetch data',undefined)
        }
    })

    countryRequest.open("GET", "http://restcountries.eu/rest/v2/all")
    countryRequest.send()
}