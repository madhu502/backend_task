function findPair(nums, target) {
  const visitedNum = new Set();

  for (let num of nums) {
    const requiredNum = target - num;

    if (visitedNum.has(requiredNum)) {
      console.log(`Pair found (${requiredNum}, ${num})`);
      return;
    }

    visitedNum.add(num);
  }

  console.log("Pair not found.");
}
findPair([4, 1, 9, 7, 5, 3], 10);
