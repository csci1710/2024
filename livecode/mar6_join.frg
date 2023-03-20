#lang forge
sig Person {
    friends: set Person,
    followers: set Person
}
one sig Nim, Tim extends Person {}

pred wellformed {
    -- friendship is symmetric
    all disj p1, p2: Person | p1 in p2.friends implies p2 in p1.friends
    -- cannot follow or friend yourself
    all p: Person | p not in p.friends and p not in p.followers
}
run {wellformed} for exactly 5 Person

pred reachableIn1To7Hops[to: Person, from: Person, fld: Person->Person] {
    to in from.fld or
    to in from.fld.fld or
    to in from.fld.fld.fld or 
    to in from.fld.fld.fld.fld or
    to in from.fld.fld.fld.fld.fld or
    to in from.fld.fld.fld.fld.fld.fld or
    to in from.fld.fld.fld.fld.fld.fld.fld 
    --  ... and so on, for any finite number of hops
    --  this is what you use the transitive-closure operator (^) 
    --  or the reachable built-in predicate for.
}
