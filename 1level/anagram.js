function isAnagram(firstWord, secondWord) {
  firstWord = firstWord.split("").sort().join();
  secondWord = secondWord.split("").sort().join();

  return (firstWord === secondWord ? true : false);
};

// the method split("") splits a string into a new array of single letters. sort() sorts the letters alphabetically and join() returns an array as a string. the respective results are compared with each other with the ternary operator and if it is an anagram, true is returned, otherwise false.


console.log(isAnagram("eat", "tea"));
