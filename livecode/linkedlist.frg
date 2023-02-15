#lang forge/bsl 

sig Node {
    next: lone Node
}
sig LinkedList {
    start: lone Node
} 

-- Task: show that in our implementation, if <last> is the last node in the list,
--    then last.next = null. This should be invariant!
-- How can we AVOID the trace-based approach?
-- What's an analogue in the TTT example? 
--   Answer: we checked that `move` *preserved* wellformedness. That only required 2 states...

