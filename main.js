const Days = document.getElementById("days")
const Hours = document.getElementById("hours")
const Minutes = document.getElementById("mins")
const Seconds = document.getElementById("seconds")

const newYearDate = "1 Jan 2023"

function countdown(){
    const newYear = new Date(newYearDate)
    const currentYear = new Date()
    const totalSeconds = newYear - currentYear
    const dayTime = Math.floor(totalSeconds/1000/60/60/24)
    const hourTime = Math.floor(totalSeconds/1000/60/60) %24
    const minTime = Math.floor(totalSeconds/1000/60) %24
    const secTime = Math.floor(totalSeconds/1000) %60

    Days.innerHTML=dayTime
    Hours.innerHTML=hourTime < 10 ? "0" + hourTime : hourTime
    Minutes.innerHTML=minTime < 10 ? "0" + minTime : minTime
    Seconds.innerHTML=secTime < 10 ? "0" + secTime : secTime
}
countdown()
setInterval(countdown, 1000)

// const newYearDate = "1 Jan 2023"
// const newYear = new Date(newYearDate)


// function countdown(){
//     const currentYear = new Date()
//     const totalSeconds = newYear - currentYear

//     const dayTime = Math.floor(totalSeconds / 1000 /60 / 60 / 24)
//     const hourTime = Math.floor(totalSeconds / 1000 / 60 / 60) % 24
//     const minTime = Math.floor(totalSeconds / 1000 / 60 ) % 24
//     const secTime = Math.floor(totalSeconds / 1000 ) % 60
//     console.log(secTime)
    
// Days.innerHTML = dayTime
// Hours.innerHTML = hourTime  < 10 ? "0" + hourTime: hourTime
// Minutes.innerHTML =minTime  < 10 ? "0" + minTime: minTime
// Seconds.innerHTML= secTime < 10 ? "0" + secTime: secTime

// }
// countdown()
// setInterval(countdown, 1000)