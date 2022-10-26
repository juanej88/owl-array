const gameData = [
  {

    // ----- ----- ----- ----- Level 01 ----- ----- ----- -----

    level: '01',
    title: 'The push() Method',
    mainInstructions: 'Welcome to Owl Array, a game where you need to help the Owl Family with some duties. You will modify the array provided with built-in JavaScript functions on each level.',
    instructionsOne: `Meet Mr. Owl! He is an architectural engineer who has decided to resign to his job as a construction manager to become a full-stack developer. Mr. Owl is ready to go to work on his last day, but he is missing a 'compass' which was given to him by the design leader.`,
    instructionsTwo: `Your task is to add the 'compass' to the end of the 'backpack' array, so he can give it back with the rest of the stationery in his backpack.`,
    // instructions: 'Meet Mrs. Owl. She is a restaurant manager who is ready to go to work; however, she is forgetting her mobile at home. Your task is to add her missing item to the end of the purse array, so she can make calls during the day.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push',
    mozillaDefinition: 'The push() method adds one or more elements to the end of an array and returns the new length of the array.',
    editorInstructions: `// By using the push() method, add the string 'compass' to the end of the 'backpack' array`,
    arrayName: 'backpack',
    arrayItems: ['pencil', 'eraser', 'swatchbook'],
    finalArrayItems: ['pencil', 'eraser', 'swatchbook', 'compass'],
    editorRows: 1,
    characters: ['mrOwl'],
    // characters: ['mrsOwl'] // This character will be display on another level
    // Editor - Values to test the input of the user on the Editor component
    method: 'push',
    item: 'compass',
    testResult: `backpack.push('compass')`
  },
  {

    // ----- ----- ----- ----- Level 02 ----- ----- ----- -----

    level: '02',
    title: 'The pop() Method',
    instructionsOne: `Mr. Owl has already returned all the stationery from his backpack. Now, he is ready to leave the office and take all his belongings with him. However; he has decided to give his plant to one of his collegues.`,
    instructionsTwo: `Your task is to remove the 'plant' from the 'backpack' array, so he can leave it on his collegue's desk.`,
    // instructions: 'Meet Mrs. Owl. She is a restaurant manager who is ready to go to work; however, she is forgetting her mobile at home. Your task is to add her missing item to the end of the purse array, so she can make calls during the day.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop',
    mozillaDefinition: 'The pop() method removes the last element from an array and returns that element. This method changes the length of the array.',
    editorInstructions: `// By using the pop() method, remove the last element from the 'backpack' array`,
    arrayName: 'backpack',
    arrayItems: ['laptop', 'picture', 'trophy', 'plant'],
    finalArrayItems: ['laptop', 'picture', 'trophy'],
    editorRows: 1,
    characters: ['mrOwl'],
    // characters: ['mrsOwl'] // This character will be display on another level
    // Editor - Values to test the input of the user on the Editor component
    method: 'pop',
    item: '',
    testResult: `backpack.pop()`
  }
];

export default gameData;