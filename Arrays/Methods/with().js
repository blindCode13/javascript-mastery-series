



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

function ProblemOne() {
    const board = [
        ["X", null, "O"],
        [null, "X", null],
        ["O", null, null]
    ];
    const updated = board.with(1, board[1].with(2, 0));
    return updated;
}




/* ===================== Problem 2 =====================
              Update a Diagonal Using with()

   Overview:
   Update all diagonal cells of a square 2D board
   immutably using Array.prototype.with().

   Concepts Practiced:
   - Repeated immutable updates with Array.prototype.with()
   - Nested with() usage
   - Structural preservation in multi-step updates

   Rule sets:
     1. Use Array.prototype.with()
     2. Do not mutate the original board
     3. Preserve the board’s structure
     4. Use zero-based indexing
======================================================== */

function ProblemTwo() {
    const board = [
        ["X", null, "O"],
        [null, "X", null],
        ["O", null, null]
    ];

    const updated = board.with(0, board[0].with(0, 0)).with(1, board[1].with(1, 0)).with(2, board[2].with(2, 0));
    return updated;
}




// ===== Execution Area =====
// Uncomment the specific console to see output.
/* Problem 1 Result */    //console.log(ProblemOne());
/* Problem 2 Result */    //console.log(ProblemTwo());