# [Ahmed Khaleel in LinkedIn](https://www.linkedin.com/pulse/add-up-numbers-from-single-number-ahmed-khaleel)

```js
function addUp(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
```

## Strategy

1. Initialize a variable to store the sum. This variable, named sum, will hold
   the cumulative sum of integers from 1 to num.
2. Iterate through the integers from 1 to num. This is done using a for loop.
3. Add each integer to the sum. This is done inside the loop by incrementing sum
   with the current value of i.
4. Return the final sum.

## Implementation

```js
function addUp(num) {
  let sum = 0; // Initialize sum

  // Iterate through the integers from 1 to num and add them to sum
  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum; // Return the sum
}
```

Example: If num is 10, the function will calculate the sum of integers from 1 to
10:

```js
1 + 2 + 3 + 4 = 10.
So, the function will return 10.
```

Time Complexity: The time complexity of this function is O(n), where n is the
value of num. This is because the function iterates through all integers from 1
to num. Space Complexity: The space complexity of this function is O(1) because
it only uses a constant amount of extra space, regardless of the input num.

## Possible Refactors

In terms of refactoring, this code is already fairly straightforward. If
performance were a concern, we could consider alternative mathematical formulas
to compute the sum more efficiently, but given the simplicity of this task, such
optimization isn't necessary. This code is clear and efficient for the task it
performs.

## References

For Ahmed solution I needed to review Arithmetic operator.

- Arithmetic operator:
  [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
