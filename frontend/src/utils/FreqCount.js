const FreqCount = (array) => {
  let myMap = new Map();
  for (let i = 0; i < array.length; i++) {
    if (myMap[array[i]]) myMap[array[i]]++;
    else myMap[array[i]] = 1;
  }
  return myMap;
};

export default FreqCount;
