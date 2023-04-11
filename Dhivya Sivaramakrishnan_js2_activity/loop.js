// Use a for loop to ...

// 1. Log numbers from 1 to 100 that are divisible by 5

for(let num=1;num<=100; num++)  {
    if(num%5==0){
        console.log(num);
    };
}

// 2. Use a nested for loop to print “I’m the outer loop” 3 times and “I’m the inner loop” within the inner loop.
for(let i=0;i<=2;i++){
    console.log(` Im the outer loop  ${i}`);
    //console.log(`I am ${i}`);

    
    for(let j=0;j<=2;j++){
        console.log('Im the inner loop');
    }
}


