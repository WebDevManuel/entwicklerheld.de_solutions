function fizzbuzz(number) {

  if (number % 3 === 0 && number % 5 === 0) {
    return "fizzbuzz";
  } else if (number % 3 === 0) {
    return "fizz"
  } else if (number % 5 === 0) {
    return "buzz"
  }

  return number
};

console.log(fizzbuzz(5)); 