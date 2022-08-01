## SOLUTIONS

### Alternate Solution 1 (Procedural)
```js
function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0)
      return false;
  }
  return true;
}
```
### Code Explanation
- First we make the two strings in the array lowercase.  `test` will hold what we are looking for in `target`.
- Then we loop through our test characters and if any of them is not found we `return false`.
- If they are *all* found, the loop will finish without returning anything and we get to `return true`.

### REFERENCE LINKS
- [`String.toLowerCase()`](http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948)
- [For loops](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)


### Alternate Solution 2 (Declarative)
```js
function mutation(arr) {
  return arr[1]
      .toLowerCase()
      .split("")
      .every(function(letter) {
        return arr[0].toLowerCase().indexOf(letter) !== -1;
  });
}
```
### Code Explanation
- Grab the second string, lowercase and turn it into an array; then make sure *every* one of its *letters* is a part of the lowercased first string.
- `every` will basically give you letter by letter to compare, which we do by using `indexOf` on the first string.  `indexOf` will give you -1 if the current `letter` is missing.  We check that not to be the case, for if this happens even once `every` will be false.

### REFERENCE LINKS
- [`Array.split()`](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
- [`Array.every()`](http://forum.freecodecamp.com/t/javascript-array-prototype-every/14287)


### Alternate Solution 3 (Recursive)
```js
function mutation([target, test], i = 0) {
  target = target.toLowerCase();
  test = test.toLowerCase();
  return i >= test.length ? true 
      : !target.includes(test[i]) ? false 
      : mutation([target, test], i + 1);
}
```
Note that nesting ternaries this deeply is typically not recommended in professional code.

