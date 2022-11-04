import icons from '../data/icons';

const getInput = (input) => {
  const inputSplit = input.trim().split('');
  const equalsSign = inputSplit.indexOf('=');
  const dotCharacter = inputSplit.indexOf('.');
  const openParenthesis = inputSplit.indexOf('(');
  const closeParenthesis = inputSplit.indexOf(')');
  const firstQuote = inputSplit.indexOf(`'`);
  const lastQuote = inputSplit.lastIndexOf(`'`);
  return { 
    inputSplit: inputSplit,
    equalsSign: equalsSign,
    dotCharacter: dotCharacter,
    openParenthesis: openParenthesis,
    closeParenthesis: closeParenthesis,
    firstQuote: firstQuote,
    lastQuote: lastQuote
  };
}

const getArrayName = (input) => {
  const {inputSplit, equalsSign, dotCharacter} = getInput(input);
  if(equalsSign === -1 && dotCharacter > -1) {
    return inputSplit.slice(0, dotCharacter).join(''); 
  } else if (dotCharacter > -1) {
    return inputSplit.slice(equalsSign + 1, dotCharacter).join('').trim();
  }
}

const checkArrayName = (arrayName, arrayNameInput) => {
  return arrayName === arrayNameInput ? true : false
};

const getMethod = (input) => {
  const {inputSplit, dotCharacter, openParenthesis} = getInput(input);
  if (dotCharacter > -1 && openParenthesis > -1) {
    return inputSplit.slice(dotCharacter + 1, openParenthesis).join('');
  }
}

const checkMethod = (method, methodInput) => {
  const correctMethod = method === methodInput ? true : false;
  const availableMethods = ['push', 'pop', 'unshift', 'shift', 'slice'];
  const validMethod = availableMethods.includes(methodInput);
  return [correctMethod, validMethod];
};

const getStrings = (input) => {
  const {inputSplit, firstQuote, lastQuote} = getInput(input);
  if (firstQuote > -1 && (firstQuote !== lastQuote)) {
    return inputSplit.slice(firstQuote + 1, lastQuote).join('');
  }
}

const checkStrings = (item, stringsInput) => {
  const validItems = Object.keys(icons);
  const validString = validItems.includes(stringsInput);
  return validString;
  // return item === stringsInput ? true : false
};

const runTests = (input, arrayName, method, item, arrayItems) => {
  const arrayNameInput = getArrayName(input);
  const methodInput = getMethod(input);
  const stringsInput = getStrings(input);

  const arrayNameTest = checkArrayName(arrayName, arrayNameInput);
  const methodTest = checkMethod(method, methodInput);
  const stringsTest = checkStrings(item, stringsInput);

  let test1 = false;

  let newArray = [...arrayItems];
  // These lines update the consoleArray as long as there are a valid method and a valid item typed onto the textArea
  arrayNameTest && methodTest[1] && stringsTest ? test1 = true : test1 = false;
  
  if(test1 && methodInput === 'push') {
    newArray.push(stringsInput);
    return newArray;
  } 
  // else if (test1 && methodInput === 'pop') {
  //   newArray.pop();
  //   return newArray;
  // }
};

export default runTests;