/* ===================== Array.prototype.reduce() =====================

   What it does:
   Turns an array into a single value by accumulating
   results step by step.

   Syntax:
     array.reduce((accumulator, currentValue, index, array) => newAccumulator, initialValue)

   Arguments:
     Callback parameters:
       1. accumulator     → Value carried between iterations.
       2. currentValue    → Current element being processed.
       3. index           → Index of the current element.
       4. array           → The original array.

     reduce() parameter:
       5. initialValue    → Starting value for the accumulator.

   Behavior:
     - Runs from left to right.
     - Return value becomes the next accumulator.
     - Final accumulator is the result.

   Edge cases:
     - Missing initialValue → first element becomes accumulator.
     - Empty array without initialValue → throws error.

   Example:
     const nums = [1, 2, 3];
     nums.reduce((sum, n) => sum + n, 0); // 6

===================================================================== */

const util = require('util'); // imported util for visualizing densely nested Arrays or Objects




/* ===================== Problem 1 =====================
             Character Frequency by First Letter

   Overview:
   Counts how many times each word’s first character appears
   in a list of strings. Produces an object mapping characters
   to their frequency.

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


/* ===================== Problem 6 =====================
        User Activity Dashboard (reduce)

   Overview:
   Processes a list of user activity logs and builds
   a dashboard-style summary using Array.prototype.reduce().

======================================================== */

function ProblemSix() {
    const users = [
        { id: "u1", name: "Joy" },
        { id: "u2", name: "Alex" },
        { id: "u3", name: "Sam" }
    ];

    const activities = [
        { userId: "u1", type: "login", time: 100 },
        { userId: "u2", type: "login", time: 120 },
        { userId: "u1", type: "post", time: 200 },
        { userId: "u3", type: "login", time: 220 },
        { userId: "u2", type: "comment", time: 300 },
        { userId: "u1", type: "comment", time: 350 },
        { userId: "u3", type: "post", time: 400 },
        { userId: "u2", type: "logout", time: 500 }
    ];

    const userActivityOverview = activities.reduce((acc, curr) => {
        const existingData = acc['users'] || {};
        const userData = existingData[curr.userId] || {};
        const activityStats = acc['activityStats'] || {};

        return {
            ...acc,
            ['users']: {
                ...existingData,
                [curr.userId]: {
                    ...userData,
                    ['name']: userData['name'] || users.filter(item => item.id == curr.userId)[0].name,
                    ['count']: (userData['count'] || 0) + 1,
                    ['last']: curr.type,
                    ['lastTime']: curr.time
                }
            },
            ['activityStats']: {
                ...activityStats,
                ['login']: (activityStats['login'] || 0) + (curr.type == 'login' ? 1 : 0),
                ['post']: (activityStats['post'] || 0) + (curr.type == 'post' ? 1 : 0),
                ['comment']: (activityStats['comment'] || 0) + (curr.type == 'comment' ? 1 : 0),
                ['logout']: (activityStats['logout'] || 0) + (curr.type == 'logout' ? 1 : 0)
            },
        }
    }, {});

    return userActivityOverview;

}




// ===== Execution Area =====
// Uncomment the specific console to see output.

/* Problem 1 Result */    //console.log(ProblemOne());       
/* Problem 2 Result */    //console.log(ProblemTwo());
/* Problem 3 Result */    //console.log(ProblemThree());
/* Problem 4 Result */    //console.log(ProblemFour());
/* Problem 5 Result */    //console.log(util.inspect(ProblemFive(), {depth: null, colors: true}));
/* Problem 6 Result */    //console.log(ProblemSix());