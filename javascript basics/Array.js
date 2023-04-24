
    // Create an array using array literal syntax
    const fruits = ['apple', 'banana', 'orange'];
    
    // Access an element in the array by index
    console.log(fruits[0]); // Output: 'apple'
    
    // Modify an element in the arra
    fruits[1] = 'grape';
    console.log(fruits); // Output: ['apple', 'grape', 'orange']
    
    // Add an element to the end of the array
    fruits.push('mango');
    console.log(fruits); // Output: ['apple', 'grape', 'orange', 'mango']
    
    // Remove the last element from the array
    const removedFruit = fruits.pop();
    console.log(removedFruit); // Output: 'mango'
    console.log(fruits); // Output: ['apple', 'grape', 'orange']
    
    // Find the length of the array
    console.log(fruits.length); // Output: 3
    
    // Iterate over the array elements using a for loop
    for (let i = 0; i < fruits.length; i++) {
      console.log(fruits[i]);
    }
    // Output:
    // 'apple'
    // 'grape'
    // 'orange'
    
    // Iterate over the array elements using the forEach method
    fruits.forEach(function(fruit) {
      console.log(fruit);
    });
    // Output:
    // 'apple'
    // 'grape'
    
    
