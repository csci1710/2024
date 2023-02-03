#lang forge/bsl

/*
  Tic-tac-toe boards, moves, and games
  Feb 03 Livecode
  Requires Forge 2.3.0+ 
*/

abstract sig Player {}
one sig X, O extends Player {}

sig Board {
    board: pfunc Int -> Int -> Player
}

pred wellformed[b: Board] {
    all row, col: Int | {
        (row < 0 or row > 2 or col < 0 or col > 2) implies
        no b.board[row][col]
    }
}

// run {
//     some b: Board | wellformed[b]
// } for exactly 1 Board

pred Xturn[b: Board] {
    -- same number of X and O on board
    #{row, col: Int | b.board[row][col] = X} = 
    #{row, col: Int | b.board[row][col] = O}
}

pred Oturn[b: Board] {
    #{row, col: Int | b.board[row][col] = X} = 
    add[#{row, col: Int | b.board[row][col] = O}, 1]
}
pred balanced[b: Board] {
    Oturn[b] or Xturn[b]
}

pred winRow[b: Board, p: Player] {
    some row: Int | {
        b.board[row][0] = p
        b.board[row][1] = p
        b.board[row][2] = p
    }
}

pred winCol[b: Board, p: Player] {
    some col: Int | {
        b.board[0][col] = p
        b.board[1][col] = p
        b.board[2][col] = p
    }
}


pred winner[b: Board, p: Player] {
    winRow[b, p]
    or 
    winCol[b, p]
    or {
      b.board[0][0] = p
      b.board[1][1] = p
      b.board[2][2] = p
    } or {
      b.board[0][2] = p
      b.board[1][1] = p
      b.board[2][0] = p
    }
}

// run {    
//     all b: Board | {
//         -- X has won, and the board looks OK
//         wellformed[b]
//         winner[b, X]
//         balanced[b]
//         -- X started in the middle
//         b.board[1][1] = X
//     }
// } for exactly 2 Board

-------------------------------------------------
-- Games

pred starting[b: Board] {
    all row, col: Int | 
        no b.board[row][col]
}

pred move[pre: Board, post: Board, row: Int, col: Int, p: Player] {
    -- GUARD (what needs to hold about the pre-state?)
    no pre.board[row][col] -- no move already there
    p = X implies Xturn[pre] -- appropriate turn
    p = O implies Oturn[pre]  
    -- TODO(?): no winner yet?
    -- TODO(?): row and col are within [0,2]

    -- ACTION (what does the post-state then look like?)
    post.board[row][col] = p
    --all row2: Int, col2: Int | (row!=row2 and col!=col2) implies {        
        all row2: Int, col2: Int | (row!=row2 or col!=col2) implies {        
        post.board[row2][col2] = pre.board[row2][col2]     
    }  
}

/*
  Note: the lab stencil for this week shows *one way* to possibly
  fill in the move predicate based on the English above.
*/

-- Note: error can be strange if you get the argument order wrong
--   (This is one of the things we're doing updates for!)
pred winningPreservedCounterexample {
  some pre, post: Board | {
    some row, col: Int, p: Player | 
      move[pre, post, row, col, p]
    winner[pre, X]
    not winner[post, X]
  }
}
// run {
//   all s: Board | wellformed[s]
//   winningPreservedCounterexample
// }

---------------------------------------------------------------
-- Full games / traces 

one sig Game {
  initialState: one Board,
  next: pfunc Board -> Board
}

pred traces {
    -- The trace starts with an initial state
    starting[Game.initialState]
    no sprev: Board | Game.next[sprev] = Game.initialState
    -- Every transition is a valid move
    all s: Board | some Game.next[s] implies {
      some row, col: Int, p: Player |
        move[s, Game.next[s], row, col, p]
    }
}

run {  
  all b: Board | wellformed[b]
  traces
} for exactly 10 Board for {next is linear}