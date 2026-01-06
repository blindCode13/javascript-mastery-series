/* ===================== Array.prototype.flatMap() =====================

   What it does:
   Maps each element of an array and flattens the result
   by ONE level into a new array.

   Syntax:
     array.flatMap(callback)

   Arguments:
     1. callback → Function applied to each element.
                   Can return a value or an array.

   Behavior:
     - Equivalent to map() followed by flat(1).
     - One input element can produce:
         • zero items ([])
         • one item ([value])
         • many items ([a, b, c])
     - Always returns a new array.

   Common uses:
     - Transform + flatten data
     - Filter and map in one step
     - Normalize nested structures

   Edge cases:
     - Only flattens ONE level.
     - Returning non-array values behaves like map().
     - Does not mutate the original array.

   Example:
     const nums = [1, 2, 3];
     nums.flatMap(n => [n, n * 2]);
     // [1, 2, 2, 4, 3, 6]

===================================================================== */




/* ===================== Problem 1 =====================
        Split Sentences into Words Using flatMap()

   Overview:
   Convert a list of sentences into a single
   flat array of words using Array.prototype.flatMap().

======================================================== */

function ProblemOne() {
  const sentences = [
    "learn javascript",
    "array methods are useful",
    "flatmap is powerful"
  ];

  const result = sentences.flatMap(x => x.split(" "));
  return result;
}


/* ===================== Problem 2 =====================
        Normalize Scores Using flatMap()

   Overview:
   Convert a list of objects containing score arrays
   into a single flat array where each score is paired
   with its corresponding id using Array.prototype.flatMap().

======================================================== */


function ProblemTwo() {
  const data = [
    { id: 1, scores: [10, 20, 30] },
    { id: 2, scores: [] },
    { id: 3, scores: [15, 25] },
    { id: 4, scores: [5] }
  ];
  const result = data.flatMap(x => x.scores.flatMap(y => [{id: x.id, score: y}]));
  return result;

}


/* ===================== Problem 3 =====================
        Normalize Product Categories Using flatMap()

   Overview:
   Convert a list of products with category arrays
   into a single flat array where each category is
   paired with its product name using Array.prototype.flatMap().

======================================================== */

function ProblemThree() {
  const products = [
    { name: "Laptop", categories: ["electronics", "computers"] },
    { name: "Phone", categories: ["electronics"] },
    { name: "Desk", categories: ["furniture", "office"] },
    { name: "Pen", categories: [] }
  ];
  
  const result = products.flatMap(x => x.categories.map(y => ({product: x.name, category: y})));
  return result;

}


/* ===================== Problem 4 =====================
        Expand Order Items by Quantity Using flatMap()

   Overview:
   Convert a list of orders into a single flat array
   where each item is duplicated based on its quantity
   and paired with its corresponding orderId using
   Array.prototype.flatMap().

======================================================== */

function ProblemFour() {
  const orders = [
    {
      orderId: "o1",
      items: [
        { name: "Pen", quantity: 2 },
        { name: "Notebook", quantity: 1 }
      ]
    },
    {
      orderId: "o2",
      items: []
    },
    {
      orderId: "o3",
      items: [
        { name: "Pencil", quantity: 3 }
      ]
    }
  ];

  const result = orders.flatMap(x => x.items.flatMap(y => {
    let res = [];
    for (let i = 0; i < y.quantity; i++) {
      res.push({
        orderId: x.orderId,
        item: y.name
      })
    }
    return res;
  }))
  return result;

}




// ===== Execution Area =====
// Uncomment the specific console to see output.
/* Problem 1 Result */    //console.log(ProblemOne());
/* Problem 2 Result */    //console.log(ProblemTwo());
/* Problem 3 Result */    //console.log(ProblemThree());
/* Problem 3 Result */    //console.log(ProblemFour());