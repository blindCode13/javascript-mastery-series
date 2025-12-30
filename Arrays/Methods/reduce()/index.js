const util = require('util'); // imported util for visualizing densely nested Arrays or Objects
// Count how many times each first letter appears.
function ProblemOne() {
  const words = ["apple", "ant", "banana", "berry", "cherry", "apricot"];
  const result = words.reduce((acc, curr) => {
    return {
      ...acc,
      [curr[0].toLowerCase()]: (acc[curr[0].toLowerCase()] || 0) + 1,
    };
  }, {});
}


// Group names by age.
function ProblemTwo() {
  const people = [
    { name: "Alice", age: 21 },
    { name: "Bob", age: 17 },
    { name: "Carol", age: 21 },
    { name: "Dave", age: 17 },
  ];
  const groupedPeopleByAge = people.reduce((acc, curr) => {
    const factor = curr.age;
    const existing = acc[factor] || [];
    return {
      ...acc,
      [factor]: [...existing, curr.name],
    };
  }, {});

  return groupedPeopleByAge;
}
//console.log(ProblemTwo());

// Summarize scores by category.
function ProblemThree() {
  const data = [
    { category: "A", score: 10 },
    { category: "B", score: 5 },
    { category: "A", score: 7 },
    { category: "B", score: 3 },
    { category: "C", score: 8 },
    { category: "A", score: 4 },
    { category: "C", score: 6 },
    { category: "B", score: 2 },
    { category: "D", score: 9 },
    { category: "A", score: 1 },
    { category: "D", score: 4 },
    { category: "C", score: 3 },
    { category: "B", score: 7 },
    { category: "E", score: 11 },
    { category: "E", score: 2 },
  ];
  const Summarized = data.reduce((acc, curr) => {
    const factor = curr.category;

    return {
      ...acc,
      [factor]: {
        total: (acc[factor]?.total || 0) + curr.score,
        count: (acc[factor]?.count || 0) + 1,
      },
    };
  }, {});

  return Summarized;
}
//console.log(ProblemThree());




// Group words by length
function ProblemFour() {
  const words = ["hi", "bye", "hey", "good", "morning", "flower"];

  const result = words.reduce((acc, curr) => {
    return {
      ...acc,
      [curr.length]: (acc[curr.length] || 0) + 1
    }
  }, {});

  return result;
}
//console.log(ProblemFour());




// Grouping user action by time span (300 sec gap)
function ProblemFive() {
  const events = [
  { user: "u1", action: "login",   time: 100 },
  { user: "u1", action: "click",   time: 120 },
  { user: "u2", action: "login",   time: 130 },
  { user: "u1", action: "scroll",  time: 200 },
  { user: "u3", action: "login",   time: 210 },
  { user: "u2", action: "click",   time: 400 },
  { user: "u2", action: "scroll",  time: 450 },
  { user: "u1", action: "logout",  time: 500 },
  { user: "u1", action: "login",   time: 900 },
  { user: "u1", action: "click",   time: 950 },
  { user: "u3", action: "click",   time: 1000 },
  { user: "u2", action: "login",   time: 1100 },
  { user: "u2", action: "click",   time: 1150 },
  { user: "u2", action: "logout",  time: 1200 },
  { user: "u1", action: "scroll",  time: 1250 },
  { user: "u4", action: "login",   time: 1300 },
  { user: "u4", action: "click",   time: 1350 },
  { user: "u4", action: "scroll",  time: 1600 },
  { user: "u3", action: "logout",  time: 1700 },
  { user: "u1", action: "click",   time: 2000 },
  { user: "u2", action: "click",   time: 2100 },
  { user: "u4", action: "logout",  time: 2200 }
  ];

  const result = events.reduce((acc, curr) => {
    const factor = curr.user;
    const existing = acc[factor] || [];
    const fs = [...existing.flat(Infinity)].at(-1);
    const timeSpan = curr.time - (fs?.time || 0);

    return {
      ...acc,
      [factor]: timeSpan <= 300 ? 
        [[...existing, {action: curr.action, time: curr.time}].flat(Infinity)] : 
        [...existing, [{action: curr.action, time: curr.time}]]
    }
  }, {});

  return result;
}
//console.log(util.inspect(ProblemFive(), {depth: null, colors: true}));