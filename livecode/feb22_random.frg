#lang forge/bsl

sig State {
    count: one Int
}

pred init[s: State] {
    // ... 
    // If "randomness" exists at the beginning, state a partial or no
    // restriction on count: let Forge decide
    s.count >= 0
}
pred move[pre, post: State] {
    // If the move involves randomness, just underspecify:
    some modifier: Int | { -- I don't know what it will be!
        add[pre.count, modifier] = pre.count
    }
}