const getPuzzle=(wordCount)=> new Promise((resolve,reject)=>{
    // making a http request
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            resolve(data.puzzle)
        } else if (e.target.readyState === 4) {
            reject("an errror has been occured")
        }
    })

    request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
})

const getCountry=(countryCode) => new Promise((reslove,reject)=>{
        // this is a challenge not related to the hangman app

        const countryRequest = new XMLHttpRequest()

        countryRequest.addEventListener('readystatechange', (e) => {
            if (e.target.readyState === 4 && e.target.status === 200) {
                const data = JSON.parse(e.target.responseText)
                const country = data.find((country) => country.alpha2Code === countryCode)
                reslove(country.name)
            } else if (e.target.readyState === 4) {
                reject('unable to fetch data')
            }
        })
    
        countryRequest.open("GET", "http://restcountries.eu/rest/v2/all")
        countryRequest.send()
})