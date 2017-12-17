var chocolateBars = [
  'snickers', 
  'hundred grand', 
  'kitkat',
  'skittles'
  ];
  
  function addElementToBeginningOfArray(arr, el) {
    return [el, ...arr];
  }
  
  function destructivelyAddElementToBeginningOfArray(arr, el) {
    const a = arr;
    return a.unshift(el);
  }
  
  function addElementToEndOfArray(arr, el) {
    return [...arr, el];
  }
  
  function destructivelyAddElementToEndOfArray(arr, el) {
    return arr.push(el);
  }
  
  function accessElementInArray(arr, index) {
    return arr[index];
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(arr) {
    arr.shift();
    return arr;
  }
  
  function removeElementFromBeginningOfArray(arr) {
    return arr.slice(1);
  }
  
  function destructivelyRemoveElementFromEndOfArray(arr) {
    arr.pop();
    return arr;
  }
  
  function removeElementFromEndOfArray(arr) {
    return arr.slice(0, arr.length - 1);
  }