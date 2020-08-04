/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(input) {
  const string = input.split(':')
  const hour = parseInt(string[0])
  console.log(hour)
  const minutes = parseInt(string[1])
  
  if (hour < 12 && hour > 0) {
    return 'Good Morning'
  } else if (hour <= 17 && hour > 0){
    return 'Good Afternoon'
  } else if ( hour > 17 && hour < 20){
    return 'Good Evening'
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(string) {
  const message = document.getElementById('greeting')
  message.innerText = string
}