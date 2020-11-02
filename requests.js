const getPuzzle=(callback)=>{
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

request.open("GET","http://puzzle.mead.io/puzzle?wordCount=1")
request.send()
}