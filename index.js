/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
const $greeting = document.querySelector('h1')
const morning = "Good Morning"
const afternoon = "Good Afternoon"
const evening = "Good Evening"

function greet(time) {
  let sTime = time.split(":")
  let iTime = parseInt(sTime)
    if (iTime < 12) {
    return morning
  } else if (iTime > 11 && iTime < 18) {
    return afternoon
  } else {
    return evening
  }
}


function displayMessage(greet) {
  greeting.innerText = greet
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */


