# procalc
An arbitrary-precision calculator web app created specifically to benefit programmers. It uses a stack and has several other features that allow it to calculate problems that mere mortal calculators could never do. Made at GunnHacks 2016.
# Basics
procalc does math in base-36 by default, but can be converted to other bases. procalc also works with arbitrary-precision _integers_, meaning that it cannot work with floating-point numbers. The calculator displays the stack items in order from bottom to top, with the top item considered to be the result by default.
# Symbols
- `ǁ`: Duplicate top stack item.
- `ǂ`: Discard top stack item.
- `¤`: Duplicate second stack item from top.
- `u`: Delete rightmost digit from top stack item.
- `c`: Clear stack.
- `©`: Duplicate _n_th stack item from top.
- `d`: Drop _n_th stack item from top.
- `@`: Roll _n_th stack item from top to the top.
- `ª`: Roll top stack item to the _n_th stack item from the top.
- `n`: Push a number, initialized to 0, to the stack.
- `0-9, A-Z`: Concatenate the digit to the top stack item, casting out leading zeroes.
- `+-×÷%^`: Pop 2 stack items and add/ subtract/ multiply/ div/ mod/ pow them.
- `&|^«»`: Pop 2 stack items and perform bitwise AND/OR/XOR/LSHIFT/RSHIFT on them.
- `±`: Negate top stack item.
- `~`: Bitwise negate top stack item.
- `ß`: Change default base to value at top stack item, converting all stack items into the new base.

# Pros
- Arbitrary-precision.
- Surprisingly fast.
- Natural memory storage.
- Useful functions for programmers not normally found in ordinary calculators.

# Cons
- Extra functions required to manipulate stack.
- Somewhat difficult to get used to (if you have no experience with postfix notation).
- Tedious declaration of integers (requires `n`).
- No decimal storage capabilities.

# Credits
- https://github.com/jtobey/javascript-bignum
- 