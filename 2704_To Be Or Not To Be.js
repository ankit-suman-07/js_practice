/*
This JavaScript code defines a simple assertion utility function called `expect`, which mimics how test assertions work 
in popular testing frameworks like Jest. The purpose of this function is to validate values and ensure they meet certain 
expectations during testing.
The `expect` function takes a single input `val` and returns an object containing two methods: `toBe` and `notToBe`.

1. **toBe(expected)**: This method checks whether the input value (`val`) is strictly equal (`===`) to the expected value. If the values are not equal, it throws an error with the message `"Not Equal"`. If they are equal, it returns `true`.
2. **notToBe(expected)**: This method checks whether the input value is **not** strictly equal to the expected value. If the values are the same, it throws an error with the message `"Equal"`. If they are not equal, it returns `true`.

This code allows you to write readable and meaningful test statements like `expect(5).toBe(5)` or `expect(5).notToBe(6)`. These kinds of assertions help confirm that your code behaves as expected.

The sample usage at the end demonstrates the functionality:
- `expect(5).toBe(5)` returns `true` because both values match.
- `expect(5).notToBe(5)` throws `"Equal"` because the values are the same, which violates the expectation.
- `expect(5).toBe(6)` throws `"Not Equal"` because the values do not match.

This code is a great example of how custom assertion tools can be built in JavaScript to help with unit testing logic and debugging. It introduces core programming concepts like closures, return objects, and conditional error handling in a simple and effective way.
*/
var expect = function(val) {
    return {
        toBe: function(expected) {
            if (val !== expected) {
                throw new Error("Not Equal");
            }
            return true;
        },
        notToBe: function(expected) {
            if (val === expected) {
                throw new Error("Equal");
            }
            return true;
        }
    };
};

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
console.log(expect(5).toBe(6)); // throws "Not Equal"