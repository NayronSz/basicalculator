function basicalculator() {
  const firstNumber = parseInt(prompt("Below type your first number:"));
  const secondNumber = parseInt(prompt("Now your second number:"));
  const sum = firstNumber + secondNumber;
  const sub = firstNumber - secondNumber;
  const mult = firstNumber * secondNumber;
  const div = firstNumber / secondNumber;
  const rest = firstNumber % secondNumber;

  alert(`Your sum is: ${sum}`)
  alert(`Your subtraction is: ${sub}`);
  alert(`Your multiplication is: ${mult}`);
  alert(`Your division is: ${div}`);
  alert(`Your rest is: ${rest}`);

  if (sum % 2 === 0) {
    alert(`The sum of these two number is a pair. Your sum is: ${sum}`);
  } else {
    alert(`Your sum is: ${sum} a odd number`);
  }
  
  if (firstNumber === secondNumber) {
    alert("Equals numbers.");
  } else {
    alert("Diferents numbers");
  }
}

basicalculator();
