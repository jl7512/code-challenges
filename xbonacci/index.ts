function nextValue(index, array) {
  const copiedArray = [...array];
  let value = 0;
  for (index; index < array.length; index++) {
    value += copiedArray[index];
  }
  return value;
}

// If array length is 4, sum the previous 4 values
// Loop until array length equals n
export function Xbonacci(signature, n) {
  let result = signature.slice();

  if (n <= result.length) {
    return result.slice(0, n);
  } else {
    let index = 0;
    for (let i = result.length; i < n; i++) {
      const value = nextValue(index, result);
      result.push(value);
      index++;
    }
  }
  console.log(result.join(','));
  return result.slice(0, n);
}
