

// 1. That logs “The current date and time is “ - the current date and time 
// hint; you will need to research the Date object to get the current date! (https://www.w3schools.com/jsref/jsref_obj_date.asp)
function displayDate(){
    let todayDate=new Date().toLocaleString();
    console.log("Today's date and time :" + todayDate);
}
displayDate();


// 2. That prints “I’m ready” after 5 seconds.
// hint: you will need to research the setTimeout JavaScript function. (https://www.w3schools.com/jsref/met_win_settimeout.asp)
let message= function(){
    console.log('Im ready');
}
setTimeout(message,5000);

// 3. Create a function to convert today’s temperature from Celsius to Fahrenheit

// a) Celsius to Fahrenheit: (°C × 9/5) + 32 = °F
let temp1=17;
function checkTemp(){
    let temp2=(temp1*9/5)+32;
    console.log(temp2 + ' degree Fahrenheit');
}
checkTemp();

// b) Fahrenheit to Celsius: (°F − 32) x 5/9 = °C
let fah=81;
function findtemp(){
    let cel=(fah+32)*5/9;
    console.log(cel+ 'degree Celsius');
    }
findtemp();