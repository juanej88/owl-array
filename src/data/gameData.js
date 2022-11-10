const gameData = [
  {

    // ----- ----- ----- ----- Level 01 ----- ----- ----- -----

    level: '01',
    title: 'The push() Method',
    storyModeOne: `Meet Mr. Owl! He is an architectural engineer who has decided to quit his job to become a software developer. Mr. Owl is ready to go to work on his last day, but he is missing a 'compass' which was given to him by the design leader.`,
    storyModeTwo: `Your task is to add the string 'compass' to the end of the array 'backpack', so he can give back the compass with the rest of the stationery in his backpack. You must use the push() method.`,
    generalInstructions: `Your task is to add the string 'compass' to the end of the array 'backpack'. You must use the push() method.`,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push',
    mozillaDefinition: 'The push() method adds one or more elements to the end of an array and returns the new length of the array.',
    arrayName: 'backpack',
    variableName: null,
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
    storyModeOne: `Mr. Owl has already returned all the stationery from his backpack and packed all his belongings which were on the office. It's 5 o'clock and he is ready to go home. On the way out, he decides to give his plant to one of his collegues.`,
    storyModeTwo: `Your task is to remove the last element from the array 'backpack', so he can leave the 'plant' on his collegue's desk. You must use the pop() method.`,
    generalInstructions: `Your task is to remove the last element from the array 'backpack'. You must use the pop() method.`,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop',
    mozillaDefinition: 'The pop() method removes the last element from an array and returns that element. This method changes the length of the array.',
    arrayName: 'backpack',
    variableName: null,
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
    storyModeOne: `Meet Mrs. Owl. She is a restaurant manager who is ready to go to work, but she is missing her train 'ticket' and her 'mobile'.`,
    storyModeTwo: `Your task is to add the strings 'ticket' and 'mobile' to the beginning of the array 'bag', so she can use the 'ticket' to commute to her job and the 'mobile' to receive calls during the day. You must use the unshift() method.`,
    generalInstructions: `Your task is to add the strings 'ticket' and 'mobile' to the beginning of the array 'bag'. You must use the unshift() method.`,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift',
    mozillaDefinition: 'The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.',
    arrayName: 'bag',
    variableName: null,
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
    storyModeOne: `It's time to go home and Mrs. Owl is ready to be picked up by Mr. Owl. In the meantime, she realises that she doesn't need the one-way train 'ticket' which was used in the morning.`,
    storyModeTwo: `Your task is to remove the string 'ticket' from the array 'bag' and assign it to the variable 'bin'. You must use the shift() method.`,
    generalInstructions: `Your task is to remove the string 'ticket' from the array 'bag' and assign it to the variable 'bin'. You must use the shift() method.`,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift',
    mozillaDefinition: 'The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.',
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
    storyModeOne: `After a long day, Mr. Owl and Mrs. Owl are finally together. Before going home, they must stop at the supermarket to buy something for breakfast. Mr. Owl wants a 'biscuit' to have it with milk and Mrs. Owl needs an 'apple' for her oats.`,
    storyModeTwo: `Your task is to take the strings 'biscuit' and 'apple' from the array 'shelf' and assign it to the variable 'basket'. You must use the slice() method.`,
    generalInstructions: `Your task is to take the strings 'biscuit' and 'apple' from the array 'shelf' and assign it to the variable 'basket'. You must use the slice() method.`,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice',
    mozillaDefinition: 'The slice() method returns a portion of an array into a new array selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.',
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
  },
  {

    // ----- ----- ----- ----- Level 06 ----- ----- ----- -----

    level: '06',
    title: 'The join() Method',
    storyModeOne: `Good morning everyone! After eating a delicious breakfast, Mr and Mrs Owl are ready to start a new day, but they just want to finish the morning with a glass of lemon water.`,
    storyModeTwo: `Your task is to join the strings 'lemon' and 'water' from the array 'ingredients' and assign it to the variable 'glass', so they can continue enjoying the weekend. You must use the join() method.`,
    generalInstructions: `Your task is to join the strings 'lemon' and 'water' from the array 'ingredients' and assign it to the variable 'glass'. You must use the join() method.`,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join',
    mozillaDefinition: 'The join() method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.',
    arrayName: 'ingredients',
    variableName: 'glass',
    arrayItems: ['lemon', 'water'],
    finalArrayItems: ['lemon', 'water'],
    finalVariable: 'lemon water',
    editorRows: 1,
    editorLines: 9,
    characters: ['mrOwl', 'mrsOwl'],
    method: 'join',
    item: '2, 4',
    testResult: `bin = bag.shift()`
  }
];

export default gameData;
