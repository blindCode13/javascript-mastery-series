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




// ===== Execution Area =====
// Uncomment the specific console to see output.
/* Problem 1 Result */    //console.log(ProblemOne());