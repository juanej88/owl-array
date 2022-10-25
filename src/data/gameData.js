const gameData = [
  {

    // ----- ----- ----- ----- Level 01 ----- ----- ----- -----

    level: '01',
    title: 'The .push() Method',
    mainInstructions: 'Welcome to Owl Array, a game where you need to help the Owl Family with some duties. You will modify the array provided with built-in JavaScript functions on each level.',
    instructionsOne: `Meet Mr. Owl! He is an architectural engineer who has decided to resign his job as a construction manager to become a full-stack developer. Mr. Owl is ready to go to work on his last day, but he is missing a 'compass' which was given to him by the design leader.`,
    instructionsTwo: `Your task is to add the 'compass' to the end of the 'briefcase' array, so he can give it back with the rest of the stationery in his briefcase.`,
    // instructions: 'Meet Mrs. Owl. She is a restaurant manager who is ready to go to work; however, she is forgetting her mobile at home. Your task is to add her missing item to the end of the purse array, so she can make calls during the day.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push',
    mozillaDefinition: 'The .push() method adds one or more elements to the end of an array and returns the new length of the array.',
    editorInstructions: `// By using the .push() method, add the string 'compass' to the end of the 'briefcase' array`,
    arrayName: 'briefcase',
    arrayItems: ['pencil', 'eraser', 'swatchbook'],
    finalArrayItems: ['pencil', 'eraser', 'swatchbook', 'compass'],
    editorRows: 1,
    characters: ['mrOwl'],
    // characters: ['mrsOwl'] // This character will be display on another level
    // Editor - Values to test the input of the user on the Editor component
    method: 'push',
    item: 'compass',
    testResult: `briefcase.push('compass')`
  }
];

export default gameData;