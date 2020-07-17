/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string){
  let hour = parseInt(string.split(':')[0]);
  if (hour < 12){
    return "Good Morning";
  } else if (12 <= hour && hour <= 17){
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(string){
  let node = document.querySelector("h1");
  node.innerText = string;
}
