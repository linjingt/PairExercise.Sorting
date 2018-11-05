function split(wholeArr){
  let firstHalf = [];
  let secondHalf = [];

  let midpt = Math.round(wholeArr.length / 2);

  firstHalf = wholeArr.slice(0,midpt);
  secondHalf = wholeArr.slice(midpt)

  return [firstHalf, secondHalf]
}
