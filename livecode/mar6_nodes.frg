#lang forge

sig Node {
    -- weights, not just connectivity
    edges: set Node -> Int
}
one sig Providence, Boston extends Node {}

pred foo {
    reachable[Boston, Providence, edges.Int]
}