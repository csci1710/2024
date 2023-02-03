#lang forge/bsl 
open "feb03_ttt.frg"

pred allWellformed {
    all b: Board | wellformed[b]
}

-- *TEST CASE* in Forge: this instance satisfies this predicate
example middleRowWellformed is {allWellformed} for {
    --RHS: only ` objects    
    #Int = 3
    X = `X0
    O = `O0
    Player = `X0 + `O0
    Board = `Board0
    board = `Board0 -> (1 -> 0 -> `X0 + 
                        1 -> 1 -> `X0 +
                        1 -> 2 -> `X0)    
}



pred allBalanced {
    all b: Board | balanced[b]
}

-- This should fail, because we didn't enforce [0,2] in move
--assert allWellformed is necessary for traces for {next is linear}

-- Don't forget next is linear
--assert allBalanced is necessary for traces for 3 Int, exactly 10 Board for {next is linear}

