import icons from '../data/icons';

// This function gets the last character of the input and the main input (so it can be checked by the rest of the functions below)
const getInputToCheck = inputSplit => {
  const closeParenthesis = inputSplit.lastIndexOf(')');
  let mainInput = '';
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
  let variableName = null;
  let arrayName;
  let methodAndParameter;
  if(equalsSign === -1 && dotCharacter !== -1) {
    arrayName = inputSplit.slice(0, dotCharacter).join('');
    methodAndParameter = inputSplit.slice(dotCharacter + 1);
  } else if (equalsSign !== -1 && dotCharacter !== -1) {
    variableName = inputSplit.slice(0, equalsSign).join('').trim();
    arrayName = inputSplit.slice(equalsSign + 1, dotCharacter).join('').trimStart();
    methodAndParameter = inputSplit.slice(dotCharacter + 1);
  }
  return [variableName, arrayName, methodAndParameter];
};

const checkVariableName = (variableName, variableNameInput) => variableName === variableNameInput;
const checkArrayName = (arrayName, arrayNameInput) => arrayName === arrayNameInput;

const getMethodAndParameter = inputSplit => {
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

const checkStringParameter = parameter => {
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

const getEachString = strings => {
  const inputSplit = strings.trim().split('');
  const cleanString = inputSplit.slice(1, -1).join('').trim();
  return cleanString;
};

const checkEachString = stringInput => {
  const validItems = Object.keys(icons);
  const validString = validItems.includes(stringInput);
  return validString;
};

const getStringsArray = strings => {
  let stringsArray = [strings];
  if(strings) {
    if(strings.includes(',')) {
      stringsArray = strings.split(',');
    }
  }
  return stringsArray;
};

const checkNumbers = input => {
  const result = input.map(number => {
    let eachNum = number.trim().split('');
    if(eachNum[0] === '-') {
      eachNum.shift();
    }

    if(eachNum.length > 0) {
      let digits = eachNum.map(each => {
        return parseInt(each);
      });
      const checkDigits = digits.includes(NaN);
      return !checkDigits;
    }
    return false;
  });
  return result;
};

// This function controls all the functions above and runs them depending on the tests which have been passed successfully
const runTests = (input, arrayName, method, arrayItems, variableName) => {
  const inputSplit = input.trim().split('');
  const [mainInput, lastCharacter] = getInputToCheck(inputSplit);

  const lastCharacterTest = checkLastCharacter(lastCharacter);

  let variableNameInput, arrayNameInput, methodAndParameter;
  if(lastCharacterTest) {
    [variableNameInput, arrayNameInput, methodAndParameter] = getInputSections(mainInput);
  }

  const variableNameTest = checkVariableName(variableName, variableNameInput);
  const arrayNameTest = checkArrayName(arrayName, arrayNameInput);

  let methodInput, parameterInput;
  // The variableNameInput accepts null, so it can update the Display component if one of the methodTests passes; even though, the variableNameTest returns true or false
  if((variableNameTest || variableNameInput === null) && arrayNameTest) {
    [methodInput, parameterInput] = getMethodAndParameter(methodAndParameter);
  }

  // const methodTest = checkMethod(method, methodInput); TO BE IMPLEMENTED LATER (MAYBE)

  const stringsArray = getStringsArray(parameterInput);

  const stringParameterTest = checkStringParameter(parameterInput);

  // All the methods available to be implemented:
  // push, pop, unshift, shift, *(slice, join) *working on it
  
  // These 2 variables are returned to the Editor component when at least one test below returns true
  let newArray = [...arrayItems];
  let newVariable = null;

  const assignVariable = item => {
    newVariable = item;
  }

  let testPush = lastCharacterTest &&
  arrayNameTest &&
  (methodInput === 'push') &&
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
    });
    // The 'variableNameTest' runs again to whether return the value of the method used or not. The final check is done on an Editor useEffect function to changeLevelClear to true or false // This check is done in all methods below
    if (variableNameTest && variableNameInput !== null) {
      assignVariable(newArray.length);
    };
  };

  let testPop = lastCharacterTest &&
  arrayNameTest &&
  (methodInput === 'pop') && 
  (parameterInput === '' ? true : false);

  if(testPop) {
    if (variableNameTest && variableNameInput !== null) {
      newVariable = newArray.pop();
    } else {
      newArray.pop();
    }
  };

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
    });

    if (variableNameTest && variableNameInput !== null) {
      assignVariable(newArray.length);
    };
  };

  let testShift = lastCharacterTest &&
  arrayNameTest &&
  (methodInput === 'shift') && 
  (parameterInput === '' ? true : false);

  if(testShift) {
    if (variableNameTest && variableNameInput !== null) {
      newVariable = newArray.shift();
    } else {
      newArray.shift();
    };
  };

  let testSlice = lastCharacterTest &&
  arrayNameTest &&
  variableNameTest &&
  (methodInput === 'slice');

  if(testSlice) {
    let splitParameter;
    let testNumbers;
    let testPassed;

    if(parameterInput === '') {
      newVariable = newArray.slice();
    } else if (parameterInput) {
      splitParameter = getStringsArray(parameterInput);
    }

    if(splitParameter && splitParameter.length <= 2) {
      testNumbers = checkNumbers(splitParameter);
      testPassed = testNumbers.every(number => number);
    };

    if(splitParameter && splitParameter.length === 1 && testPassed) {
      let num1 = parseInt(splitParameter[0]);
      newVariable = newArray.slice(num1);
    };

    if(splitParameter && splitParameter.length === 2 && testPassed) {
      let num1 = parseInt(splitParameter[0]);
      let num2 = parseInt(splitParameter[1]);
      newVariable = newArray.slice(num1, num2);
    };
  };

  // If any of the 'methodTests' is true, the array 'results' is returned to the Editor component
  const checkResults = () => {
    const methodTests = [testPush, testPop, testUnshift, testShift, testSlice];
    const methodTestClear = methodTests.some(methodClear => methodClear);
    return methodTestClear;
  };

  let returnResults = checkResults();

  if(returnResults) {
    let results = [newArray, newVariable];
    return results;
  };
  
};

export default runTests;