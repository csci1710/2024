#lang forge

sig Node {}
test expect {
    foo: {#Node = 1} is sat
    foo: {#Node = 2} is sat
    foo: {#Node = 1 and #Node = 2} is unsat
}

-- This is ok, even across test blocks:
test expect {
    t1: {some Node} for exactly 2 Node is sat
}
test expect {
    t2: {some Node} for exactly 1 Node is sat
    -- Not sharing the same iterator, or this would be unsat:
    t3: {some Node} for exactly 1 Node is sat
}

-- one instance (2 nodes), then no more
run {some Node} for exactly 2 Node
-- one instance (1 node), then no more
run {some Node} for exactly 1 Node
