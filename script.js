// The stack will be stored as an array
let stack = [];
let history = [];


// DOM elements
const stackContainer = document.getElementById('stack-container');

// Push an element onto the stack
function pushElement() {
  const input = document.getElementById('elementInput');
  const value = input.value.trim();
  if (value === "") return;

  history.push([...stack]); // Save current state
  stack.push(value);
  input.value = "";
  updateStackDisplay();
}


// Pop the top element from the stack
function popElement() {
  if (stack.length === 0) return;
  history.push([...stack]); // Save current state
  stack.pop();
  updateStackDisplay();
}

// Peek at the top element
function peekElement() {
  if (stack.length === 0) return;

  alert("Top Element: " + stack[stack.length - 1]);
}

// Clear the stack
function clearStack() {
  stack = [];
  updateStackDisplay();
}

function undoStack() {
  if (history.length === 0) return;
  stack = history.pop();
  updateStackDisplay();
}
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}





// Get the middle element
function getMiddle() {
  if (stack.length === 0) return;

  const middleIndex = Math.floor(stack.length / 2);
  updateStackDisplay(middleIndex);
  alert("Middle Element: " + stack[middleIndex]);
}

// Update the visual display of the stack
function updateStackDisplay(middleIndex = -1) {
  stackContainer.innerHTML = "";
  for (let i = 0; i < stack.length; i++) {
    const div = document.createElement("div");
    div.className = "stack-element";
    div.textContent = stack[i];

    if (i === middleIndex) {
      div.classList.add("middle");
    }

    stackContainer.appendChild(div);
  }
}
// Recursion visualization
function startFactorial() {
  const numInput = document.getElementById("recInput");
  const n = parseInt(numInput.value);

  if (isNaN(n) || n < 0) {
    alert("Please enter a valid non-negative number.");
    return;
  }

  const recContainer = document.getElementById("recursion-stack");
  recContainer.innerHTML = ""; // Clear previous

  // Start recursive factorial with visualization
  factorialVisual(n, recContainer);
}

// Recursive factorial with visual stack trace
function factorialVisual(n, container) {
  const frame = document.createElement("div");
  frame.className = "rec-call";
  frame.textContent = `factorial(${n}) called`;
  container.appendChild(frame);

  // Show the call
  setTimeout(() => {
    if (n <= 1) {
      frame.textContent = `factorial(${n}) = 1 (base case)`;
    } else {
      // Recursive call
      setTimeout(() => {
        factorialVisual(n - 1, container);
        setTimeout(() => {
          frame.textContent = `factorial(${n}) returns ${n} * factorial(${n - 1})`;
        }, 500);
      }, 500);
    }
  }, 500);
}

