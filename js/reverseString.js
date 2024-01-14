const reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
};

let input = ["h", "e", "l", "l", "o"];
reverseString(input);
console.log(input);
