const getPuzzle = async (wordCount) => {
    const response=await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status===200) {
        const data=await response.json()
        return data.puzzle
    } else {
        throw new Error("not able to get the puzzle")
    }
}


const getPuzzleOld = (wordCount) => {
    return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`,{}).then((response)=>{
        if (response.status===200) {

            return response.json()
        } else {
            throw new Error("unable to fetch the puzzle")  
        }
    }).then((data)=>{
        return data.puzzle
    })
}

const getCountry= async (countryCode) => {
    const response=await fetch("https://restcountries.eu/rest/v2/all")
    if (response.status===200) {
        const data=await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error("not able to get country")
    }

}


const getLocation= async () => {
    const response=await fetch("https://ipinfo.io/json?token=9ace42026011f5")
    if (response.status===200) {
        return response.json()
        } else {
        throw new Error("not able to get country")
    }
    
}
