// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const someOlder = people.some(function (ppl) {
  return 2022 - ppl.year > 19;
});
console.log(someOlder);

//tutorial edition
const isAdult = people.some(function (person) {
  const currentYear = new Date().getFullYear();
  if (currentYear - person.year >= 19) {
    return true;
  }
});

// Array.prototype.every() // is everyone 19 or older?

const everyOlder = people.every(function (ppl) {
  return 2022 - ppl.year > 19;
});
console.log(everyOlder);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const findId = comments.find(function (ppl) {
  return ppl.id === 823423;
});

console.log(findId);

// Array.prototype.findIndex()
// Find the comment with this ID
const findId2 = comments.findIndex(function (ppl) {
  return ppl.id === 823423;
});
console.log(findId2);
console.log(comments[findId2].text);
// delete the comment with the ID of 823423

comments.splice(findId2, 1);
console.log(comments);

//instead of array.splice(), we can do
const newComments = [
  ...comments.slice(0, findId2), //start and end until the index is reached| COMMA
  ...comments.slice(findId2), //start from the index til the end
];

console.log(newComments);
