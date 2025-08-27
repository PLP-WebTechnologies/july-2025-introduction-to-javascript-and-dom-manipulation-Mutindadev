/* ===============================
    PART 1: Variable Declarations & Conditionals
    =============================== */

let number = 7; // example variable
let userName = "Regina";

if (number > 5) {
  console.log("The number is greater than 5");
} else {
  console.log("The number is 5 or less");
}

/* ===============================
    PART 2: Custom Functions
    =============================== */

// Function 1: Greeting function
function greetUser(name) {
  return `Hello, ${name}! Welcome to the assignment demo.`;
}

// Function 2: Number check function
function checkEvenOdd(num) {
  if (num % 2 === 0) {
     return `${num} is Even`;
  } else {
     return `${num} is Odd`;
  }
}

/* ===============================
    PART 3: Loops
    =============================== */

// Loop 1: For loop (print numbers 1–5)
function showNumbers() {
  let result = "";
  for (let i = 1; i <= 5; i++) {
     result += i + " ";
  }
  return result.trim();
}

// Loop 2: While loop (count down 5–1)
function countdown() {
  let result = "";
  let i = 5;
  while (i > 0) {
     result += i + " ";
     i--;
  }
  return result.trim();
}

/* ===============================
    PART 4: DOM Interactions
    =============================== */

// DOM Interaction 1: Add event listener to button
document.getElementById("btnCheck").addEventListener("click", function() {
  let message = checkEvenOdd(number);
  document.getElementById("output").innerText = message;
});

// DOM Interaction 2: Display greeting
document.getElementById("btnGreet").addEventListener("click", function() {
  let message = greetUser(userName);
  document.getElementById("output").innerText = message;
});

// DOM Interaction 3: Show numbers using loops
document.getElementById("btnLoop").addEventListener("click", function() {
  let message = "For Loop: " + showNumbers() + "\n" +
                     "While Loop: " + countdown();
  document.getElementById("output").innerText = message;
});