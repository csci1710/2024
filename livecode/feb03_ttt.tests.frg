#lang forge/bsl 
open "feb03_ttt.frg"

option verbose 10

pred allWellformed {
    all b: Board | wellformed[b]
}
pred allBalanced {
    all b: Board | balanced[b]
}

// example middleRowWellformed is {allWellformed} for {
//     #Int = 3
//     X = `X
//     O = `O
//     Player = `X + `O
//     Board = `Board0
//     board = `Board0 -> (1 -> 0 -> `X + 
//                         1 -> 1 -> `X +
//                         1 -> 2 -> `X)
// }

-- This should fail, because we didn't enforce [0,2] in move
--assert allWellformed is necessary for traces for {next is linear}

-- Don't forget next is linear
assert allBalanced is necessary for traces for 3 Int, exactly 10 Board for {next is linear}

