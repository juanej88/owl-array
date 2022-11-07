const gameData = [
  {

    // ----- ----- ----- ----- Level 01 ----- ----- ----- -----

    level: '01',
    title: 'Level 01 - The push() Method',
    // mainInstructions: 'Welcome to Owl Array, a game where you need to help the Owl Family. You will modify the arrays provided with built-in JavaScript functions to complete each task.',
    instructionsOne: `Meet Mr. Owl! He is an architectural engineer who has decided to quit his job to become a software developer. Mr. Owl is ready to go to work on his last day, but he is missing a 'compass' which was given to him by the design leader.`,
    instructionsTwo: `Your task is to add the string 'compass' to the end of the array 'backpack', so he can give back the 'compass' with the rest of the stationery in his backpack.`,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push',
    mozillaDefinition: 'The push() method adds one or more elements to the end of an array and returns the new length of the array.',
    editorInstructions: `// By using the push() method, add the string 'compass' to the end of the array 'backpack'`,
    arrayName: 'backpack',
    arrayItems: ['pencil', 'eraser', 'swatchbook'],
    finalArrayItems: ['pencil', 'eraser', 'swatchbook', 'compass'],
    editorRows: 1,
    editorLines: 6,
    characters: ['mrOwl'],
    // Editor - Values to test the input of the user on the Editor component
    method: 'push',
    items: 1,
    testResult: `backpack.push('compass')`
  },
  {

    // ----- ----- ----- ----- Level 02 ----- ----- ----- -----

    level: '02',
    title: 'The pop() Method',
    instructionsOne: `Mr. Owl has already returned all the stationery from his backpack and packed all his belongings which were on the office. It's 5 o'clock and he is ready to go home. On the way out, he decides to give his 'plant' to one of his collegues.`,
    instructionsTwo: `Your task is to remove the last element from the array 'backpack', so he can leave the 'plant' on his collegue's desk.`,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop',
    mozillaDefinition: 'The pop() method removes the last element from an array and returns that element. This method changes the length of the array.',
    // editorInstructions: `// By using the pop() method, remove the last element from the array 'backpack'`,
    arrayName: 'backpack',
    arrayItems: ['laptop', 'picture', 'trophy', 'plant'],
    finalArrayItems: ['laptop', 'picture', 'trophy'],
    editorRows: 1,
    editorLines: 6,
    characters: ['mrOwl'],
    method: 'pop',
    item: undefined,
    testResult: `backpack.pop()`
  },
  {

    // ----- ----- ----- ----- Level 03 ----- ----- ----- -----

    level: '03',
    title: 'The unshift() Method',
    instructionsOne: `Meet Mrs. Owl. She is a restaurant manager who is ready to go to work, but she is missing her train 'ticket' and her 'mobile'.`,
    instructionsTwo: `Your task is to add the strings 'ticket' and 'mobile' to the beginning of the array 'bag', so she can use the 'ticket' to commute to her job and the 'mobile' to receive calls during the day.`,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift',
    mozillaDefinition: 'The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.',
    // editorInstructions: `// By using the unshift() method, add the strings 'ticket' and 'mobile' to the beginning of the array 'bag'`,
    arrayName: 'bag',
    arrayItems: ['headphones', 'key'],
    finalArrayItems: ['ticket', 'mobile', 'headphones', 'key'],
    editorRows: 1,
    editorLines: 6,
    characters: ['mrsOwl'],
    method: 'unshift',
    item: 'ticket',
    testResult: `bag.unshift('ticket', 'mobile')`
  },
  {

    // ----- ----- ----- ----- Level 04 ----- ----- ----- -----

    level: '04',
    title: 'The shift() Method',
    instructionsOne: `It's time to go home and Mrs. Owl is ready to be picked up by Mr. Owl. In the meantime, she realises that she doesn't need the one-way train 'ticket' which was used in the morning.`,
    instructionsTwo: `Your task is to remove the string 'ticket' from the array 'bag' and assign it to the variable 'bin'.`,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift',
    mozillaDefinition: 'The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.',
    // editorInstructions: `// By using the shift() method, remove the first element from the array 'bag' and assign it to the variable 'trash'`,
    arrayName: 'bag',
    variableName: 'bin',
    arrayItems: ['ticket', 'mobile', 'headphones', 'key'],
    finalArrayItems: ['mobile', 'headphones', 'key'],
    finalVariable: 'ticket',
    editorRows: 1,
    editorLines: 9,
    characters: ['mrsOwl'],
    method: 'shift',
    item: undefined,
    testResult: `bin = bag.shift()`
  },
  {

    // ----- ----- ----- ----- Level 05 ----- ----- ----- -----

    level: '05',
    title: 'The slice() Method',
    instructionsOne: `After a long day, Mr. Owl and Mrs. Owl are finally together. Before going home, they must stop at the supermarket to buy something for breakfast. Mr. Owl wants a 'biscuit' to have it with milk and Mrs. Owl needs an 'apple' for her oats.`,
    instructionsTwo: `Your task is to take the strings 'biscuit' and 'apple' from the array 'shelf' and assign it to the variable 'basket'.`,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice',
    mozillaDefinition: 'The slice() method returns a portion of an array into a new array selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.',
    // editorInstructions: `// By using the shift() method, remove the first element from the array 'bag' and assign it to the variable 'trash'`,
    arrayName: 'shelf',
    variableName: 'basket',
    arrayItems: ['jam', 'bread', 'biscuit', 'apple', 'carrot'],
    finalArrayItems: ['jam', 'bread', 'biscuit', 'apple', 'carrot'],
    finalVariable: 'biscuit',
    editorRows: 1,
    editorLines: 9,
    characters: ['mrOwl', 'mrsOwl'],
    method: 'slice',
    item: '2, 4',
    testResult: `bin = bag.shift()`
  }
];

export default gameData;
