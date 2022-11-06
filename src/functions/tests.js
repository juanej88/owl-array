import icons from '../data/icons';

// This function gets the main input (so it can be checked by the rest of the functions below) and the last character of the input
const getInputToCheck = inputSplit => {
  const closeParenthesis = inputSplit.lastIndexOf(')');
  let mainInput = inputSplit;
  let lastCharacter = '';
  if (closeParenthesis !== -1) {
    mainInput = inputSplit.slice(0, closeParenthesis);
    lastCharacter = inputSplit.slice(closeParenthesis + 1).join('').trim()
  }
  return [mainInput, lastCharacter];
};

const checkLastCharacter = lastCharacter => lastCharacter === ';' || lastCharacter === '';

const getInputSections = inputSplit => {
  const equalsSign = inputSplit.indexOf('=');
  const dotCharacter = inputSplit.indexOf('.');
  let variableName;
  let arrayName;
  let methodAndParameter;
  if(equalsSign === -1 && dotCharacter !== -1) {
    arrayName = inputSplit.slice(0, dotCharacter).join('');
    methodAndParameter = inputSplit.slice(dotCharacter + 1);
  } else if (equalsSign === -1 && dotCharacter !== -1) {
    arrayName = inputSplit.slice(equalsSign + 1, dotCharacter).join('').trim();
  }
  return [variableName, arrayName, methodAndParameter];
};

const checkArrayName = (arrayName, arrayNameInput) => arrayName === arrayNameInput;

const getMethodAndParameter = (inputSplit) => {
  const openParenthesis = inputSplit.indexOf('(');
  let method;
  let parameter;
  if (openParenthesis !== -1) {
    method = inputSplit.slice(0, openParenthesis).join('');
    parameter = inputSplit.slice(openParenthesis + 1).join('');    
  }
  return [method, parameter];
};

// const checkMethod = (method, methodInput) => {
//   const correctMethod = method === methodInput ? true : false;
//   const availableMethods = ['push', 'pop', 'unshift', 'shift', 'slice'];
//   const validMethod = availableMethods.includes(methodInput);
//   return [correctMethod, validMethod];
// };

const checkStringParameter = (parameter) => {
  const validParameter = [false, false];
  if(parameter) {
    let trimParameter = parameter.trim();
    if(trimParameter.startsWith(`'`)) {
      validParameter[0] = true;
    }
    if(trimParameter.endsWith(`'`)) {
      validParameter[1] = true;
    }
  }
  return validParameter.every(quote => quote);
};

const getEachString = (strings) => {
  const inputSplit = strings.trim().split('');
  const cleanString = inputSplit.slice(1, -1).join('').trim();
  return cleanString;
};

const checkEachString = (stringInput) => {
  const validItems = Object.keys(icons);
  const validString = validItems.includes(stringInput);
  return validString;
};

const getStringsArray = (strings) => {
  let stringsArray = [strings];
  if(strings) {
    if(strings.includes(',')) {
      stringsArray = strings.split(',');
    }
  }
  return stringsArray;
};

// This function controls all the functions above and runs them depending on the tests which have been passed successfully
const runTests = (input, arrayName, method, arrayItems, items) => {
  const inputSplit = input.trim().split('');
  const [mainInput, lastCharacter] = getInputToCheck(inputSplit);

  const lastCharacterTest = checkLastCharacter(lastCharacter);

  let variableNameInput, arrayNameInput, methodAndParameter;
  if(lastCharacterTest) {
    [variableNameInput, arrayNameInput, methodAndParameter] = getInputSections(mainInput);
  }

  console.log(variableNameInput); // NEXT TO BE IMPLEMENTED...

  const arrayNameTest = checkArrayName(arrayName, arrayNameInput);

  let methodInput, parameterInput;
  if(arrayNameTest) {
    [methodInput, parameterInput] = getMethodAndParameter(methodAndParameter);
  }

  // const methodTest = checkMethod(method, methodInput); TO BE IMPLEMENTED LATER (MAYBE)

  const stringsArray = getStringsArray(parameterInput);

  const stringParameterTest = checkStringParameter(parameterInput);

  // All the methods available to be implemented:
  // push, pop, unshift, shift, slice...

  let newArray = [...arrayItems];

  let testPush = lastCharacterTest &&
  arrayNameTest &&
  methodInput === 'push' &&
  stringParameterTest &&
  (parameterInput ? true : false);

  if(testPush) {
    stringsArray.forEach(string => {
      let cleanString = getEachString(string);
      const stringsTest = checkEachString(cleanString);
      if (stringsTest) {
        newArray.push(cleanString);
      } else {
        newArray.push('');
      }
    })
    return newArray;
  } 

  let testPop = lastCharacterTest &&
  arrayNameTest &&
  methodInput === 'pop' && 
  parameterInput === '' ? true : false;

  if(testPop) {
    newArray.pop();
    return newArray;
  } 

  let testUnshift = lastCharacterTest &&
  arrayNameTest &&
  (methodInput === 'unshift') && 
  stringParameterTest &&
  (parameterInput ? true : false);

  if(testUnshift) {
    stringsArray.reverse()
    stringsArray.forEach(string => {
      let cleanString = getEachString(string);
      const stringsTest = checkEachString(cleanString);
      if (stringsTest) {
        newArray.unshift(cleanString);
      } else {
        newArray.unshift('');
      }
    })
    return newArray;
  } 

  let testShift = lastCharacterTest &&
  arrayNameTest &&
  methodInput === 'shift' && 
  parameterInput === '' ? true : false;

  if(testShift) {
    newArray.shift();
    return newArray;
  } 
  
};

export default runTests;