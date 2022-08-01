// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Mutations</h1>`;

/** TODO:
 * Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
 * For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
 * The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
 * Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
 
 function mutation(arr) {
   return arr;
 }
 
 mutation(['hello', 'hey']);
 */

function mutation(arr) {
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();
  let firstArr = first.split('');
  let secondArr = second.split('');
  console.log(first, second);
  for (let i = 0; i < second.length; i++) {
    if (first.indexOf(second[i]) < 0) return false;
    // first = arr[0].split('');
    // second = arr[1].split('');
  }
  // return arr;
  return true;
  // return secondArr;
}

console.log(mutation(['hello', 'hey']));
console.log(mutation(['hello', 'Hello']));
console.log(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']));
console.log(mutation(['Mary', 'Army']));
console.log(mutation(['Alien', 'line']));
console.log(mutation(['floor', 'for']));
console.log(mutation(['hello', 'neo']));
console.log(mutation(['voodoo', 'no']));
console.log(mutation(['ate', 'date']));
console.log(mutation(['Tiger', 'Zebra']));
console.log(mutation(['Noel', 'Ole']));
