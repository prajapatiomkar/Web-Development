// // Program1 
// var tweet = prompt("Enter you tweet message")
// alert("Enterd character is "+tweet.length+" remaining will be "+(180-tweet.length))

//Program2
// var tweet = prompt("Enter you tweet message")
// alert(tweet.slice(0,180))

//Program3
// var user_name = prompt("Enter you name")
// var first_char = user_name.slice(0,1).toUpperCase();
// var remain_char = user_name.slice(1,user_name.length).toLowerCase();
// alert("Hey, "+first_char+remain_char)


//Program4
// var dogAge = prompt("How old is your dog ?");
// var humanAge = ((dogAge - 2) * 4 ) + 21;
// alert("You dog is "+humanAge+" years old in human age.");

//Program5
// function lifeInWeeks(age) {
//     var lifeRemaining = 90 - age;
//     var days = lifeRemaining * 365;
//     var weeks = lifeRemaining * 52;
//     var months = lifeRemaining *12;
//     return "You have " + days + " days, " + weeks + " weeks," + " and "  + months+ " months left.";
// }
// var age = prompt("Enter the age ?")
// alert(lifeInWeeks(age))

//Program 6
// BMI calculator 

// function bmiCalculator(weight,height){
//     return Math.round(weight/Math.pow(height,2));
// }

// alert(bmiCalculator(55,1.5))


//Program 7
// var year = parseInt(prompt("enter the year"))

// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             alert(year + " year leap year")
//         } else {
//             alert(year + " year not a leap year")
//         }

//     } else {
//         alert(year + " year  leap year")
//     }
// } else {
//     alert(year + " year not a leap year")
// }



// Program 8
// var guest_list = ["abc","mnq","pqr","xyz"];
// var guest_name = prompt("Enter Your Name...");
// if(guest_list.includes(guest_name)){
//     alert("Most Welcome "+guest_name)
// }else{
//     alert("Try For Next Time "+guest_name)
// }

// Program 9
// var output = []
// var count = 1;
// function fizzBuzz() {

//    while(count<=100){
//     if ((count % 3 == 0) && (count % 5 == 0)) {
//         output.push("FizzBuzz");
//     }

//     else if (count % 3 == 0) {
//         output.push("Fizz");
//     }
//     else if (count % 5 == 0) {
//         output.push("Buzz");
//     } else {
//         output.push(count)
//     }
//     count++;
//    }
//    console.log(output);

// }


//Program 10
// function whosPaying(names) {
//     var n = names.length;
//     var no = parseInt(Math.random() * n);
//     console.log(names[no]+ " is going to buy lunch today!");

// }
// var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
// whosPaying(names)

//Program 11
// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     }
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
//     numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");

// }


//Program 12
// var n = 10;
// var output = [];
// if(n===1){
//     output = [0];
// }else if(n===2){
//     output = [0,1];
// }else{
//     output = [0,1];

//     for(var i = 2;i<n;i++){
//         output.push(output[output.length-2]+output[output.length-1]);
//     }
// }

// console.log(output)


//Program 13
// function add(n1,n2){
//     return n1+n2;
// }

// function multiply(n1,n2){
//     return n1*n2;
// }

// function calculator(n1,n2,operator){
//     return operator(n1,n2);
// }