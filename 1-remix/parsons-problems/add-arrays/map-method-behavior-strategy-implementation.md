# [Map Method]()

```js
export function addArrays(a1, a2) {
  if (a1.length !== a2.length) {
    throw new Error('Arrays must have the same length');
  }
  return a1.map((j, i) => j + a2[i]);
}
```

## Strategy

1. The function first checks if the lengths of the input arrays a1 and a2 are
   equal.
2. If the lengths are not equal, it throws an error.
3. Otherwise, it iterates through the elements of one of the arrays (in this
   case, a1) using the map function.
4. During each iteration, it accesses the corresponding element of a2 using the
   index i, and adds it to the current element of a1.
5. It constructs a new array containing the summed values and returns it.

## Implementation

Input Validation:

The function starts by checking if the lengths of the input arrays a1 and a2 are
equal. If the lengths are not equal, it throws an error indicating that the
arrays must have the same length. This ensures that the function operates only
on arrays of equal length.

Array Addition:

After validating the input, the function proceeds to add corresponding elements
of a1 and a2. It uses the map function to iterate over the elements of a1.
During each iteration, it accesses the corresponding element of a2 using the
index i, where i represents the current index in the iteration. It then adds the
elements j from a1 and a2[i] from a2 and returns the result, effectively
creating a new array containing the summed values.

Return Value:

The function returns the new array containing the summed values of corresponding
elements from a1 and a2.

## Possible Refactors

export function addArrays(a1, a2) { if (a1.length !== a2.length) { throw new
Error("Arrays must have the same length"); }

    return a1.map((element, index) => element + a2[index]);

}

In this refactored version:

I replaced j and i with more descriptive names: element and index. I modified
the arrow function inside map to directly add element to a2[index]. I kept the
input validation part unchanged as it ensures that the function operates
correctly with arrays of the same length.

## References

In the refactored version, i look up how .map works.

- .map:
  [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
