let arr = [1,2,3,4,5,6,7,8,9,10];
let result = arr.filter(
    (x)=> (x%2==0)).map((y)=>(y*1000)
);
console.log(result);