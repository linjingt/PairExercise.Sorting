function split(wholeArr){
  let firstHalf = [];
  let secondHalf = [];

  let midpt = Math.round(wholeArr.length / 2);

  firstHalf = wholeArr.slice(0,midpt);
  secondHalf = wholeArr.slice(midpt)

  return [firstHalf, secondHalf]
}


function merge([arr1, arr2]){
  let mergedArr = [];
  // for (let i = 0; i < arr2.length; i++){
  //   if (arr1[0] < arr2[i]){
  //     mergedArr.push(arr1.shift())
  //   } else {
  //     mergedArr.push(arr2[i])
  //   }
  // }

  while (arr1.length > 0 && arr2.length > 0){
    if (arr1[0] <= arr2[0]){
      mergedArr.push(arr1.shift())
    } else {
      mergedArr.push(arr2.shift())
    }
  }

  mergedArr = mergedArr.concat(arr1);
  mergedArr = mergedArr.concat(arr2);
  return mergedArr
}


