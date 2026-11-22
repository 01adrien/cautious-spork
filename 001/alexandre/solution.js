const stack = [];
const mins = [];

function push(value) {
  stack.push(value);

  let currentMin;

  if (mins.length === 0) {
    currentMin = value;
  } else {
    const previousMin = mins[mins.length - 1];
    if (value < previousMin) {
      currentMin = value;
    } else {
      currentMin = previousMin;
    }
  }

  mins.push(currentMin);
}

function pop() {
  stack.pop();
  mins.pop();
}

function topStack() {
  return stack[stack.length - 1];
}

function getMin() {
  return mins[mins.length - 1];
}

push(-2);
push(0);
push(-3);
console.log(getMin()); // -3

pop();
console.log(topStack()); // 0
console.log(getMin());   // -2