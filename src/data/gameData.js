const gameData = [
  {

    // ----- ----- ----- ----- Level 01 ----- ----- ----- -----

    level: '01',
    title: 'The push() Method',
    // mainInstructions: 'Welcome to Owl Array, a game where you need to help the Owl Family. You will modify the arrays provided with built-in JavaScript functions to complete each task.',
    instructionsOne: `Meet Mr. Owl! He is an architectural engineer who has decided to quit his job to become a software developer. Mr. Owl is ready to go to work on his last day, but he is missing a 'compass' which was given to him by the design leader.`,
    instructionsTwo: `Your task is to add the 'compass' to the end of the 'backpack' array, so he can give it back with the rest of the stationery in his backpack.`,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push',
    mozillaDefinition: 'The push() method adds one or more elements to the end of an array and returns the new length of the array.',
    // editorInstructions: `// By using the push() method, add the string 'compass' to the end of the array 'backpack'`,
    arrayName: 'backpack',
    arrayItems: ['pencil', 'eraser', 'swatchbook'],
    finalArrayItems: ['pencil', 'eraser', 'swatchbook', 'compass'],
    editorRows: 1,
    characters: ['mrOwl'],
    // Editor - Values to test the input of the user on the Editor component
    method: 'push',
    item: 'compass',
    testResult: `backpack.push('compass')`
  },
  {

    // ----- ----- ----- ----- Level 02 ----- ----- ----- -----

    level: '02',
    title: 'The pop() Method',
    instructionsOne: `Mr. Owl has already returned all the stationery from his backpack and packed all his belongings which were on the office. It's 5 o'clock and he is ready to go home. On the way out, he decides to give his plant to one of his collegues.`,
    instructionsTwo: `Your task is to remove the last element from the 'backpack' array, so he can leave the 'plant' on his collegue's desk.`,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop',
    mozillaDefinition: 'The pop() method removes the last element from an array and returns that element. This method changes the length of the array.',
    // editorInstructions: `// By using the pop() method, remove the last element from the array 'backpack'`,
    arrayName: 'backpack',
    arrayItems: ['laptop', 'picture', 'trophy', 'plant'],
    finalArrayItems: ['laptop', 'picture', 'trophy'],
    editorRows: 1,
    characters: ['mrOwl'],
    method: 'pop',
    item: '',
    testResult: `backpack.pop()`
  },
  {

    // ----- ----- ----- ----- Level 03 ----- ----- ----- -----

    level: '03',
    title: 'The unshift() Method',
    instructionsOne: `Meet Mrs. Owl. She is a restaurant manager who is ready to go to work, but she is missing her train 'ticket' and her 'mobile'.`,
    instructionsTwo: `Your task is to add the 'ticket' and the 'mobile' inside her 'bag', so she can use the 'ticket' to commute to her job and the 'mobile' to receive calls during the day.`,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift',
    mozillaDefinition: 'The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.',
    // editorInstructions: `// By using the unshift() method, add the strings 'ticket' and 'mobile' to the beginning of the array 'bag'`,
    arrayName: 'bag',
    arrayItems: ['headphones', 'key'],
    finalArrayItems: ['ticket', 'mobile', 'headphones', 'key'],
    editorRows: 1,
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
    instructionsTwo: `Your task is to remove the string 'ticket' from the array 'bag' and assign it to the variable 'bin'. You must use the 'shift' method.`,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift',
    mozillaDefinition: 'The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.',
    // editorInstructions: `// By using the shift() method, remove the first element from the array 'bag' and assign it to the variable 'trash'`,
    arrayName: 'bag',
    variableName: 'bin',
    arrayItems: ['ticket', 'mobile', 'headphones', 'key'],
    finalArrayItems: ['mobile', 'headphones', 'key'],
    finalVariable: 'ticket',
    editorRows: 1,
    characters: ['mrsOwl'],
    method: 'shift',
    item: 'ticket',
    testResult: `bin = bag.shift()`
  }
];

export default gameData;
