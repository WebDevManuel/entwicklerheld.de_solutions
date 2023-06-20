`
A staircase with n steps is to be climbed to the top by one person. The person may take either one or two steps at a time. How many different ways are there to get to the top? There are multiple ways to implement this. Perhaps you will find a particularly efficient method?
###### Scenario 1: Look at the core of the problem ######
At first you should be aware that both a negative number of stairs and none stairs result in 0 ways.
Let's move on and look at a small number of stairs. Given is numberOfStairs = 1.
You just can take the one stair, so the result of your function should be 1.
Now given is numberOfStairs = 2.
Either you go both steps at once or one at a time. So your function should return 2.
###### Scenario 2: More stairs! ######
Given is numberOfStairs = 3.
There are 3 different ways to reach the top. So your function should return 3.
This should work with other numbers as well.

####################################

This code calculates the nth number in the fibonacci sequence.
The fibonacci sequence is defined by the following rules:
1. The first number in the sequence is 1.
2. The second number in the sequence is 2.
3. Every subsequent number is the sum of the previous two numbers.
This implementation uses a loop and constant space to calculate the nth number in the sequence.
It has a time complexity of O(n) and a space complexity of O(1).
`

function climbingStairs(numberOfStairs) {
  // Check to see if numberOfStairs is less than or equal to 0
  if (numberOfStairs <= 0) {
    return 0;
  };

  // Check to see if numberOfStairs is less than or equal to 2
  if (numberOfStairs <= 2) {
    return numberOfStairs;
  };

  // initialize the first and second stair count
  let first = 1;
  let second = 2;

  // loop through the stair count starting at 2 since we already have the first 2 steps covered
  for (let i = 2; i < numberOfStairs; i++) {
    // initialize the current step count
    const current = first + second;
    console.log({ i }, { first }, { second }, { current });
    // set the first step count to the second step count
    // set the second step count to the current step count
    first = second;
    second = current;
  };

  // return the second step count
  return second;
};

console.log(climbingStairs(5));
//inspired by https://dev.to/alisabaj/the-climbing-staircase-problem-how-to-solve-it-and-why-the-fibonacci-numbers-are-relevant-3c4o
