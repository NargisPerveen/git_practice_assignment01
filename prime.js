let factor=0;
let number=15;
for(let i=0;i<number;i++){
if(number%i==0){
factor++;
}
if(factor==2){
console.log("prime number");
}
else{
console.log("not prime number");
}
