#lang forge/bsl

sig Person {}

pred FamilyFact {
    // ...
}

pred ownGrandpa {
    // ...
}

// run {
//     FamilyFact
//     ownGrandpa
// } for 5 Person -- up to 5
// default = 4 

// Tic tac toe board
pred allDifferentEntries[b: Board] {
    -- every entry in the board is empty
    all row1, col1, row2, col2: Int | 
      (row1 != row2 or col1 != col2) implies {
        some b.board[row1][col1] implies {
            b.board[row1][col1] !=
            b.board[row2][col2]
        }
    }
}

// True for people whose spouse is an ancestor of Nim Telson
pred spouseIsNTAncestor[p: Person] {
  some p.spouse -- or p.spouse != none
  reachable[p.spouse, NimTelson, parent1, parent2]
  -- Always true:
  --reachable[none, NimTelson, parent1, parent2]
}

pred spouseIsNTAncestor[p: Person] {
  --some p: Person | { 
   -- some p: Person | { 
      some p.spouse --and -- inside a "some"
      -- vs
      -- some p.spouse implies 
      reachable[p.spouse, NimTelson, parent1, parent2]
 -- }
}


example testName is {FamilyFact} for {
    Person = `Person0 + `Person1
    no parent1
    no parent2    
    spouse = `Person0 -> `Person1 +
             `Person1 -> `Person0
}



-- BEWARE
pred one1 {
  one x, y: Int | ...
}

pred one2 {
  one x: Int | one y: Int | ...
}

run {
    not(one1 iff one2)
}

pred impliesMeans {
    {A implies B}
    iff 
    {not A or B}
}

-- true
-- reachable[none, NimTelson, parent1, parent2]

