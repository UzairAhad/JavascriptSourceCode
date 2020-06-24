//======= Chapter 21-25 Task #1===========

// var firstName = prompt("Enter your first name : ");
// var lastName = prompt("Enter your last name : ");
// var fullName = firstName +" "+ lastName;
// alert("Welcome "+fullName);


//======= Chapter 21-25 Task #2===========
// var phone = prompt("Enter your favorite phone name : ");
// document.write("My favorite phone is : "+phone+"<br>");
// document.write("Length of string : "+phone.length);

//======= Chapter 21-25 Task #3===========
// var str = "Pakistani";
// document.write("String : "+str+"<br>");
// document.write("Index of 'n' is : "+str.indexOf("n"));


//======= Chapter 21-25 Task #4===========
// var str = "Hello World";
// document.write("String : "+str+"<br>");
// document.write("Index of 'n' is : "+str.lastIndexOf("l"));

//======= Chapter 21-25 Task #3===========
// var str = "Pakistani";
// document.write("String : "+str+"<br>");
// document.write("Char at 3 is : "+str.charAt(3));


//======= Chapter 21-25 Task #6===========
// var firstName = prompt("Enter your first name : ");
// var lastName = prompt("Enter your last name : ");
// var fullName = firstName.concat(lastName);
// alert("Welcome "+fullName);


//======= Chapter 21-25 Task #7===========
// var city = "Hyderabad";
// document.write("City : "+city+"<br>");
// document.write("After Replacement : "+city.replace("Hyder","Islam"));

//======= Chapter 21-25 Task #8===========
// var message = "Ali and Sami are best friends. They play cricket and football together";
// document.write("String : "+message+"<br>");
// document.write("After replace : "+message.replace(/and/g,"&"));

//======= Chapter 21-25 Task #9===========
// var strNum = "472";
// document.write("Value : "+strNum+"<br>");
// document.write("Value : "+typeof(strNum)+"<br>");

// var num = Number(strNum);
// document.write("Value : "+num+"<br>");
// document.write("Value : "+typeof(num));


//======= Chapter 21-25 Task #10===========
// var name = prompt("Enter string :");
// document.write("User input : "+name+"<br>");
// var uperCase = name.toUpperCase();
// document.write("Uppercase : "+uperCase);

//======= Chapter 21-25 Task #11===========
// var name = prompt("Enter string :");
// document.write("User input : "+name+"<br>");
// var uperCase =name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
// document.write("TitleCase : "+uperCase);

//======= Chapter 21-25 Task #12===========
// var num = 35.36;
// document.write("Number : "+num+"<br>");
// var num2 = num.toString().replace(".", ""); 
// document.write("Result : "+num2);

//======= Chapter 21-25 Task #13===========
// var userName = prompt("Enter your Input: ");
// for(var i=0;i<userName.length;i++){
//     if(userName[i]=="!" ||userName[i]==","||userName[i]=="."||userName[i]=="@"){
//         alert("Please enter a valid user name.");
//     }
// }

//======= Chapter 21-25 Task #14===========
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var user = prompt("Welcome to Ahad's bakery ! what do you want to order? ");
// user.toLowerCase;
// var b=false;
// for(var i=0;i<=A.length;i++){
//     if(user == A[i]){
//         alert(user +" is avialable at "+i+" in our bakery");
//         b=true;
//         break;
//     }
// }
// if(b==false){
//     alert("We are sorry "+user+" is not avialable is our bakery.");
// }


//======= Chapter 21-25 Task #15===========


//======= Chapter 21-25 Task #16===========
// var university = "University of Karachi";

// var uni2 = university.split("");

// for(var i=0;i<uni2.length;i++){
//     document.write(uni2[i]+"<br>");
// }

//======= Chapter 21-25 Task #17===========
// var user = "Pakistan";
// document.write("User input : "+user+"<br>");
// var chr = user.length-1;

// document.write("Last char of input : "+user.charAt(chr));

//======= Chapter 21-25 Task #18===========
// var txt = "The quick brown fox jumps over the lazy dog";
// document.write("Text : "+txt+"<br>");
// var a = txt.toLowerCase().split(" ");
// var word = "the";
// var count =0;
// for(var i=0;i<a.length;i++){
//     if(word == a[i]){
//         count = count +1;
//     }
// }
// document.write("There are "+count+" occurrence(s) of the word '"+word+"'")





//======= Chapter 26-30 Task #1===========
// var user = +prompt("Enter float number : ");
// if(user >=0){
//     document.write("Number : "+user+"<br>");
//     var a = Math.round(user);
//     document.write("round off value "+a+"<br>");
//     var b = Math.floor(user);
//     document.write("floor value "+b+"<br>");
//     var c = Math.ceil(user);
//     document.write("Ceil value "+c);
// }else{
//     alert("Please enter positive number.");
// }


//======= Chapter 26-30 Task #2===========
// var user = +prompt("Enter float number : ");
// if(user <=0){
//     document.write("Number : "+user+"<br>");
//     var a = Math.round(user);
//     document.write("round off value "+a+"<br>");
//     var b = Math.floor(user);
//     document.write("floor value "+b+"<br>");
//     var c = Math.ceil(user);
//     document.write("Ceil value "+c);
// }else{
//     alert("Please enter negative number.");
// }



//======= Chapter 26-30 Task #3===========
// var num = -4;
// var a = Math.abs(num);
// document.write("Absolute value of "+num+" is "+a);



//======= Chapter 26-30 Task #4===========
// var a= Math.floor(Math.random()*6+1);
// document.write("Random dice value "+a);


//======= Chapter 26-30 Task #5===========
// var a= Math.floor(Math.random()*2+1);
// if(a == 1){
//     document.write(a+"<br> Random coin value is : Heads");
// }else{
//     document.write(a+"<br> Random coin value is : Tails");
// }



//======= Chapter 26-30 Task #6===========
// var num = Math.floor(Math.random()*100)+1
// document.write("Random number between 1 and 100 is "+num);


//======= Chapter 26-30 Task #7===========
// var secNum = Math.floor(Math.random()*10+1);
// var user = +prompt("Enter secret number 1 to 10 : ");

// if(user == secNum){
//     alert("Congratulations you guess the right number !");
// }else{
//     alert("Ops ! Wrong try again !");
// }
// document.write("The number was : "+secNum);



//======= Chapter 31-34 Task #1===========
// var date = new Date();
// document.write(date);




//======= Chapter 31-34 Task #2===========
// var date = new Date();
// var months_name = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// var a = date.getMonth();
// var b = months_name[a];
// document.write("Current Month : "+b);



//======= Chapter 31-34 Task #3===========
// var date = new Date();
// var a = date.toString();
// var b = a.slice(0,3);
// alert("Today is "+b);




//======= Chapter 31-34 Task #4===========
// var date = new Date();
// var a = date.getDay();
// if(a==0 || a==6){
//     alert("It’s Fun day");
// }



//======= Chapter 31-34 Task #5===========








//======= Chapter 31-34 Task #6===========
// var date = new Date();
// var a= date.getTime();
// document.write("Current date : "+date +"<br>");
// document.write("Elapsed Milliseconds since January 1, 1970 : "+date.getTime()+"<br>");
// document.write("Elapsed minutes since January 1, 1970 : "+(a / 60000));



//======= Chapter 31-34 Task #7===========
// var date = new Date();
// var a= date.getHours();
// if(a<=12){
//     document.write("It's AM");
// }else{
//     document.write("It's PM");
// }


//======= Chapter 31-34 Task #8===========
// var date = new Date("Dec 31, 2020");
// document.write("Later Date : "+date);


//======= Chapter 31-34 Task #9===========






//======= Chapter 31-34 Task #9===========

// var date = new Date("Dec 05, 2015");
// var a = date.getTime();
// document.write("Refrence date "+date+", "+a+" seconds had passed scince beginning of 2015");








//======= Chapter 35-38 Task #1===========
// function date(){
//     var a = new Date();
//     document.write(a);
// }
// date();



//======= Chapter 35-38 Task #2===========
// function greet(){
//     var firstName = prompt("Enter your first name : ");
//     var lastName = prompt("Enter your last name : ");
//     alert("Welcome Mr "+firstName +" "+ lastName );
// }
// greet();



//======= Chapter 35-38 Task #3===========
// function add(){
//     var a = +prompt("Enter first number ");
//     var b = +prompt("Enter second number ");
//     return a+b;
// }

// var a=add();
// alert(a)




//======= Chapter 35-38 Task #4===========
// function cal() {
//     var num1 = +prompt("Enter first number ");
//     var num2 = +prompt("Enter second number ");
//     var operator = prompt("Enter operator ");
//     switch (operator) {
//         case "+":
//             return num1 + num2
//         case "-":
//             return num1 - num2
//         case "*":
//             return num1 * num2
//         case "/":
//             return num1 / num2
//     }
// }
// var user = cal();
// alert(user);





//======= Chapter 35-38 Task #5===========
// function square(a){
//     alert(a**2);
// }
// square(4);



//======= Chapter 35-38 Task #6===========
// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
// }
// alert(factorial(5));




//======= Chapter 35-38 Task #7===========
// function stend(a,b){
//     if(a < b){
//         for(var i=a;i<=b;i++){
//             document.write(i+"<br>");
//         }
//     }else{
//         alert("Starting number must less then ending ");
//     }
// }
// stend(1,100);




//======= Chapter 35-38 Task #8===========
// function calculateHypotenuse(){
//     var a = +prompt("Enter Base : ");
//     var b = +prompt("Enter Perpendicular : ");
//     var h = calculateSquare(a,b);
//     document.write("Hypotenuse = "+h);
//     function calculateSquare(B,P){
//         return B**2 + P**2;
//     }
// }
// calculateHypotenuse();





//======= Chapter 35-38 Task #9===========
// function area(w=1,h=1){
//  var a = w*h;
//  return a;
// }
// alert(area(4,5));



//======= Chapter 35-38 Task #10===========
// function palindorium(){
//     var a = prompt("Enter string : ");
//     var b="";
//     for(var i=a.length-1;i>=0;i--){
//         b+=a[i];
//     }
//     if(a==b){
//         alert("Word is palindrom");
//     }else{
//         alert("Word is not palindrom");
//     }
// }
// palindorium();





//======= Chapter 35-38 Task #11===========
// function uppercase(str){
//   var array1 = str.split(' ');
//   var array2 = [];
//   console.log(array1);
//   for(var i=0;i<array1.length;i++){
//     array2.push(array1[i].charAt(0).toUpperCase() + array1[i].slice(1));
//   }
//   document.write("EXAMPLE STRING : "+str+"<br>");
//   document.write("EXPECTED OUTPUT : "+array2.join(" "));

// }
// uppercase("the fox box");





//======= Chapter 35-38 Task #12===========
// function find_longest_word(str){
//   var array1 = str.split(" ");
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   document.write("EXAMPLE STRING : "+str+"<br>");
// document.write("EXPECTED OUTPUT : "+result);

// }
// find_longest_word('Web Development Tutorial');




//======= Chapter 35-38 Task #12===========
// function calcCircumference(radius) {
//     var circumference = (Math.PI * 2) * radius;
//     var area = (Math.pow(radius, 2)) * Math.PI;
   
//     console.log ("The circumference of a circle with a radius of " + radius + " is " + circumference + ".The area for this circle is " + area + ".")
//   }
//    calcCircumference(37);
//    calcCircumference(10);
//    calcCircumference(5);
//    calcCircumference(8);