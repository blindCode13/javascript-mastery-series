/* ===================== Problem 1 =====================
                Update a Single Cell Using

   Overview:
   Update a specific cell in a 2D board immutably
   using Array.prototype.with().

   Concepts Practiced:
   - Immutable updates with Array.prototype.with()
   - Nested array replacement
   - Preserving data structure shape

   Rule sets:
     1. Use Array.prototype.with()
     2. Do not mutate the original board
     3. Preserve the board’s structure
     4. Use zero-based indexing
======================================================== */


const board = [
  ["X", null, "O"],
  [null, "X", null],
  ["O", null, null]
];

const updated = board.with(1, board[1].with(2, 0));

console.log(updated);