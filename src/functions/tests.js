import icons from '../data/icons';

const getInput = (input) => {
  const inputSplit = input.trim().split('');
  const equalsSign = inputSplit.indexOf('=');
  const dotCharacter = inputSplit.indexOf('.');
  const openParenthesis = inputSplit.indexOf('(');
  const closeParenthesis = inputSplit.lastIndexOf(')');
  const firstQuote = inputSplit.indexOf(`'`);
  const lastQuote = inputSplit.indexOf(`'`, firstQuote + 1);
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

// const checkMethod = (method, methodInput) => {
//   const correctMethod = method === methodInput ? true : false;
//   const availableMethods = ['push', 'pop', 'unshift', 'shift', 'slice'];
//   const validMethod = availableMethods.includes(methodInput);
//   return [correctMethod, validMethod];
// };

const checkString = (stringInput) => {
  const validItems = Object.keys(icons);
  const validString = validItems.includes(stringInput);
  return validString;
  // return item === stringsInput ? true : false
};

const getEachString = (strings) => {
  const {inputSplit, firstQuote, lastQuote} = getInput(strings);
  if (firstQuote > -1 && (firstQuote !== lastQuote)) {
    return inputSplit.slice(firstQuote + 1, lastQuote).join('');
  }
}

const getStringsArray = (strings) => {
  let stringsArray = [strings];
  if(strings) {
    if(strings.includes(',')) {
      stringsArray = strings.split(',');
    }
  }
  return stringsArray;
}

const getParameter = (input) => {
  const {inputSplit, openParenthesis, closeParenthesis} = getInput(input);
  if (openParenthesis > -1 && closeParenthesis > -1) {
    return inputSplit.slice(openParenthesis + 1, closeParenthesis).join('');
  }
}

const runTests = (input, arrayName, method, arrayItems, items) => {
  const arrayNameInput = getArrayName(input);
  const methodInput = getMethod(input);
  const parameterInput = getParameter(input);
  const stringsArray = getStringsArray(parameterInput);

  const arrayNameTest = checkArrayName(arrayName, arrayNameInput);
  // const methodTest = checkMethod(method, methodInput);
    

  let newArray = [...arrayItems];

  let testPush = arrayNameTest &&
  methodInput === 'push' && 
  parameterInput ? true : false;

  if(testPush) {
    stringsArray.forEach(string => {
      let cleanString = getEachString(string);
      const stringsTest = checkString(cleanString);
      if (stringsTest) {
        newArray.push(cleanString);
      } else {
        newArray.push('');
      }
    })
    return newArray;
  } 

  let testPop = arrayNameTest &&
  methodInput === 'pop' && 
  parameterInput === '' ? true : false;

  if(testPop) {
    newArray.pop();
    return newArray;
  } 

  let testUnshift = arrayNameTest &&
  methodInput === 'unshift' && 
  parameterInput ? true : false;

  if(testUnshift) {
    stringsArray.reverse()
    stringsArray.forEach(string => {
      let cleanString = getEachString(string);
      const stringsTest = checkString(cleanString);
      if (stringsTest) {
        newArray.unshift(cleanString);
      } else {
        newArray.unshift('');
      }
    })
    return newArray;
  } 

  let testShift = arrayNameTest &&
  methodInput === 'shift' && 
  parameterInput === '' ? true : false;

  if(testShift) {
    newArray.shift();
    return newArray;
  } 
  
};

export default runTests;