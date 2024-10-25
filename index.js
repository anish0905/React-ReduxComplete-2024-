// console.log("Starting")

// const isPrime = (no)=>{

//   if(no<=1) return false;

//   for(let i = 2 ; i< no ; i++)
//   {
//     if(no%i == 0) return false;

//   }
//   return true;


// }
// let no =  5;
// let result = isPrime(no)
// console.log(result);


// if(result){
//   console.log("prime Number");
  
// }
// else{
//   console.log("not prime number");
  
// }


// Sorting




function apple(no2){
  let res = 0;
 
while(no2>0)
{
  let rem = no2%10;
  res = res*10 + rem;
  no2 = Math.floor(no2/10);
}
console.log(res);

}
let no2 = 1253;  
apple(no2)



function sorting(arr){
  for(let i = 0 ; i<arr.length ; i++){
    for(let j = 0 ; j<arr.length ; j++)
    {
      if(arr[j] > arr[j+1])
     {
      let num = arr[j]
      arr[j] = arr[j+1];
      arr[j+1] = num;

    }
     }

  }


}
let arr = [2, 5, 3, 1, 7, 9];
sorting(arr);
console.log(arr);



function sortingRes(arr2)
{
  for(let i = 0 ; i<arr2.length ; i++)
  {
    for(let j = 0 ; j<arr2.length-1 ; j++)
    {
      if(arr2[j] > arr2[j+1])
      {
        let num = arr2[j]
        arr2[j] = arr2[j+1];
        arr2[j+1] = num;
      }
    }
  }

}
let arr2 = [2, 5, 3, 1, 7, 9];
console.log(sortingRes(arr2));












