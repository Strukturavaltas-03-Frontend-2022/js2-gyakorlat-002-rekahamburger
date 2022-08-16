




function summarize() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof (arguments[i]) === "number") {
      if (Number.isSafeInteger(arguments[i])) {
        sum = sum + arguments[i];
      }
      else {
        const bigIntNumber = BigInt(arguments[i]);
        sum = BigInt(sum)
        sum = sum + bigIntNumber;
      }
    }
  }
  return sum;

}






export default summarize;


