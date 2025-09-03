// If array length is 4, sum the previous 4 values
// Loop until array length equals n
export function Xbonacci(signature: number[], n: number) {
  if (n <= signature.length) {
    return signature.slice(0, n);
  } else {
    let index = 0;
    for (let i = signature.length; i < n; i++) {
      const value = signature.slice(index).reduce((total, currentVal) => total += currentVal);
      signature.push(value);
      index++;
    }
  }
  return signature.slice(0, n);
};
