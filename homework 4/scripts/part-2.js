
function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];

  }
  console.log(`The total is: ${numbers[0]} + ${numbers[1]} + ${numbers[2]} + ${numbers[3]} + ${numbers[4]} = ${total}`);

  return total;

}

sum([2, 5, 12, 23, 6]);
