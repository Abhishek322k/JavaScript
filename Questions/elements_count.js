function element_count(arr) {
    const counts = {};
  
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (counts[element]) {
        counts[element]++;
      } else {
        counts[element] = 1;
      }
    }
  
    return counts;
  }
  
  const arr = [2, 3, 4, 5, 2, 5, 4];
  const counts = element_count(arr);
  
 // console.log(counts); // Output: { 2: 2, 3: 2, 4: 1, 5: 1 }
  
  // To get the count for a specific element:
  const target = 5;
  const targetCount = counts[target] || 0;
  
  console.log(`Element ${target} occurs ${targetCount} times.`);
  