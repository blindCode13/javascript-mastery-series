/* ===================== Array.prototype.with() =====================

   What it does:
   Returns a NEW array with the value at a given index replaced.
   The original array is NOT mutated.

   Syntax:
     array.with(index, value)

   Arguments:
     1. index  → Position to replace (0-based).
                Supports negative indexing (-1 = last element).
     2. value  → New value to place at the given index.

   Behavior:
     - Replaces exactly ONE element.
     - Does NOT add, remove, or shift elements.
     - Returns a new array.

   Edge cases:
     - If index is out of range → throws RangeError.
     - Negative index is resolved from the end.

   Example:
     const arr = [10, 20, 30];
     arr.with(1, 99);   // [10, 99, 30]
     arr.with(-1, 0);   // [10, 20, 0]

=================================================================== */




/* ===================== Problem 1 =====================
             Update a Single Cell Using with()

   Overview:
   Update a specific cell in a 2D board immutably
   using Array.prototype.with().

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


/* ===================== Problem 3 =====================
        Change board's symmetry from left to right

   Overview:
   Create a new board by changing its symmetry
   from left to right.

======================================================== */

function ProblemThree() {
    const board = [
        ["X", null, "O"],
        [null, "X", null],
        ["O", null, null]
    ];

    const updated = board.with(0, board[0].reverse()).with(1, board[1].reverse()).with(2, board[2].reverse());
    return updated;
}


/* ===================== Problem 4 =====================
            Mask Sensitive Values Using with()

   Overview:
   Given a list of user profiles, create a new list
   where sensitive fields are masked for specific users,
   while all other data remains unchanged.

======================================================== */

function ProblemFour() {
  const profiles = [
    { id: "u1", name: "Joy",   email: "joy@mail.com",   role: "admin" },
    { id: "u2", name: "Alex",  email: "alex@mail.com",  role: "user" },
    { id: "u3", name: "Sam",   email: "sam@mail.com",   role: "user" }
  ];

  const updatedProfiles = profiles.with(0, {...profiles[0], email: profiles[0].role !== "admin" && "hidden" || profiles[0].email }).with(1, {...profiles[1], email: profiles[1].role !== "admin" && "hidden" || profiles[1].email }).with(2, {...profiles[2], email: profiles[2].role !== "admin" && "hidden" || profiles[2].email });
  return updatedProfiles;
}




// ===== Execution Area =====
// Uncomment the specific console to see output.
/* Problem 1 Result */    //console.log(ProblemOne());
/* Problem 2 Result */    //console.log(ProblemTwo());
/* Problem 3 Result */    //console.log(ProblemThree());
/* Problem 4 Result */    //console.log(ProblemFour());