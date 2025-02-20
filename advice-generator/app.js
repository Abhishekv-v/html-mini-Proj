let adviceId = document.querySelector(".adviceId")
let adviceContent = document.querySelector("#advice-content")
let dice = document.querySelector('#dice')

getAdvice()

async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice')
    const getdata = await response.json()
    adviceId.innerHTML = getdata.slip.id
    adviceContent.innerHTML = '"' + getdata.slip.advice + '"'   
}
getAdvice()

dice.addEventListener("click", () => {
    getAdvice()
})