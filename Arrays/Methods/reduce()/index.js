const util = require('util'); // imported util for visualizing densely nested Arrays or Objects




/* ===================== Problem 1 =====================
             Character Frequency by First Letter

   Overview:
   Counts how many times each word’s first character appears
   in a list of strings. Produces an object mapping characters
   to their frequency.

   Concepts Practiced:
   - Object accumulation using reduce
   - Computed property names
   - Immutable updates

   Rule sets:
     1. Use reduce
     2. No loops
     3. Do not mutate the accumulator
     4. Return a new object at each step
======================================================== */

function ProblemOne() {
  const words = ["apple", "ant", "banana", "berry", "cherry", "apricot"];
  const result = words.reduce((acc, curr) => {
    return {
      ...acc,
      [curr[0].toLowerCase()]: (acc[curr[0].toLowerCase()] || 0) + 1,
    };
  }, {});
  return result;
}




/* ===================== Problem 2 =====================
                    Group Names by Age

   Overview:
   Groups a list of people by their age. The result is an
   object where each key represents an age and each value
   is an array of names belonging to that age group.

   Concepts Practiced:
   - Grouping data using reduce
   - Array accumulation within objects
   - Computed property names
   - Immutable array updates

   Rule sets:
     1. Use reduce
     2. No loops
     3. Do not mutate the accumulator
     4. Do not mutate arrays
     5. Return a new object at each step
======================================================== */

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




/* ===================== Problem 3 =====================
                  Category Score Summary

   Overview:
   Aggregates a list of records by category. For each
   category, the total score and number of entries are
   calculated and stored as an object.

   The final result maps each category to an object
   containing its cumulative score and count.

   Concepts Practiced:
   - Nested object accumulation using reduce
   - Managing multiple values in accumulator state
   - Safe access with optional chaining
   - Immutable updates of nested structures

   Rule sets:
     1. Use reduce
     2. No loops
     3. Do not mutate the accumulator
     4. Return a new object at each step
======================================================== */

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




/* ===================== Problem 4 =====================
                   Word Length Frequency

   Overview:
   Counts how many words fall into each length category.
   The result is an object where each key represents a
   word length and each value represents the frequency
   of words with that length.

   This problem reinforces object accumulation patterns
   using derived keys.

   Concepts Practiced:
   - Deriving grouping keys from data
   - Object accumulation with reduce
   - Computed property names
   - Immutable updates

   Rule sets:
     1. Use reduce
     2. No loops
     3. Do not mutate the accumulator
     4. Return a new object at each step
======================================================== */

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




/* ===================== Problem 5 =====================
             User Session Grouping by Time Gap

   Overview:
   Groups user activity events into sessions based on
   time gaps between consecutive actions. A new session
   begins when the gap between two events for the same
   user exceeds a defined threshold.

   The result is an object where each user maps to an
   array of sessions, and each session is represented
   as an array of action–time objects.

   Concepts Practiced:
   - Stateful accumulation with reduce
   - Sessionization using gap-based logic
   - Nested array construction
   - Managing historical state per group
   - Immutable updates of complex structures

   Rule sets:
     1. Use reduce
     2. No loops
     3. Do not mutate objects or arrays
     4. Do not sort the input data
     5. Group sessions based on time gaps per user
======================================================== */

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




// ===== Execution Area =====
// Uncomment the specific console to see output.

/* Problem 1 Result */    //console.log(ProblemOne());       
/* Problem 2 Result */    //console.log(ProblemTwo());
/* Problem 3 Result */    //console.log(ProblemThree());
/* Problem 4 Result */    //console.log(ProblemFour());
/* Problem 4 Result */    //console.log(util.inspect(ProblemFive(), {depth: null, colors: true}));