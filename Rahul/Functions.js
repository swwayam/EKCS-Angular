//function sumArr() {
    //var arr = [1,2,53,2,53,23,5,3];
   // let sum = 0;
  
    //for (let i = 0; i < arr.length; i += 1) {
     // sum += arr[i];
   // }  
   // return sum;
  //}
  //console.log(sumArr([1,2,53,2,53,23,5,3]));  
  let values=[1,22,22,22,22,22,1,23,43,2,4,2]

  const newValues = values.map(function(number){
    if (number !== 5){
        return number
    }
  })

  console.log(newValues);