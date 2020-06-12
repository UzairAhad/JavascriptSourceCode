// alert("Error! Please enter a valid password.");

//  var a = alert("Welcome to JS land... \nHappy Coding!");

// alert("Welcome to JS land...");

// alert("Happy Coding! \n Prevent this page from creating additional dialogs.");


//Assignment #2

// var username = "ahadmagsi";
// var myName = "Abdul Ahad Magsi";


// var message;

// message = "Hello World";

// alert(message); 


// var studentName = "Abdul Ahad Magsi";
// var studentAge = 19 +" years old.";
// var studentCourse = "Hybrid Web and Mobile Aplication Development";

// alert(studentName);
// alert(studentAge);
// alert(studentCourse);


// var piza = "PIZZA";
// alert(piza +"\n"+piza.slice(0,4) +"\n"+piza.slice(0,3) +"\n"+piza.slice(0,2) +"\n"+piza.slice(0,1));

// var email = "abdulahadmagsi1@gmail.com";
// alert("My email address is "+email);

// var book = "A smater way to learn JavaScript.";
// alert("I am trying to learn from the Book "+book);


// document.write("Yah! I can write HTML content through JavaScript.");

// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");




//ASSIGNMENT #3

// var age = 19;
// alert("I am "+age+" year old.");

// alert("You have visited this site 14 times");

// document.write("My birth year is 200. <br> Date type of my declear variable is number. <br>");


// var visitorName = "Ahad Magsi";
// var productTitle = "T-shirt(s)";
// var quantity = 5;

// document.write(visitorName +" ordered "+quantity +" "+productTitle +" on XYZ clothing store.");



// ASSIGNMENT #4
// document.write("<h1>Rules for naming JS Variable.</h1>")
// document.write("Varaible names can only contain, numbers,$,latters,- and _ <br>");
// document.write("Variable must begun with a latter,$,_ <br>");
// document.write("Variable names are case sensitive <br>");
// document.write("Varaible names should not be JS keywords");




//ASSIGNMENT #5

// var num1 = +prompt("Enter first number : ");
// var num2 = +prompt("Enter second number : ");
// var sign = prompt("What you want to do? +,-,*,/");
// var result = "";
// if(sign == "+"){
//    result = num1 + num2;
//    document.write("<h1>"+"Sum of "+num1+" + "+num2+" = "+result + "</h1>");
// }else if(sign == "-"){
//     result = num1-num2;
//     document.write("<h1>"+"Subtriction of "+num1+" - "+num2+" = "+result + "</h1>");
// }else if(sign=="*"){
//     result=num1*num2;
//     document.write("<h1>"+"Multiplication of "+num1+" X "+num2+" = "+result + "</h1>");
// }else if(sign=="/"){
//     result = num1/num2;
//     document.write("<h1>" +"Divion of "+num1+" / "+num2+" = "+result +"</h1>");
// }else{
//     alert("Sign Operation is invalid");
// }



// var x;
// document.write("Value after variable declaration is "+x +"<br>");
// x=5;
// document.write("Initial value : "+x+"<br>");
// x=6;
// document.write("Value after increment is : "+x+"<br>");
// x=6+7;
// document.write("Value after addition is : "+x+"<br>");
// x=12;
// document.write("Value after decrement is : "+x+"<br>");
// x=x%3;
// document.write("The remainder is : "+x);

// var ticket = 600;

// var user = +prompt("How much you want to buy tickets? ");

// document.write("<h1> Total cost to buy "+user+" tickets to a movie is "+user*ticket+" PKR</h1>");


// document.write("<h1>Table of 4</h1>");
// for(var i=1; i<=10; i++){
//     document.write("<h1>4 x "+i+" = "+i*4+"</h1>")
// }


// var R ="";
// var user = prompt("What do you want to convert F or C.");
// if(user=="C"){
//     var F = +prompt("Enter Fahrenheit : ");
//     R = (F -32)*5/9;
//     document.write("<h1>"+F+ "<sup>0</sup>F is "+R+" <sup>0</sup>C</h1>");
// }else if(user=="F"){
//     var C = +prompt("Enter Celsius : ");
//     R = (C*9/5)+32;
//     document.write("<h1>"+C+ "<sup>0</sup>C is "+R+" <sup>0</sup>F</h1>");
// }else{
//     alert("Only type F for Fahrenheit and C for Celsius, must type all capital.");
// }



// var priceOfItem1 = 650;
// var priceOfItem2 = 100;
// var orderedQuantityOfItem1 = 3;
// var orderedQuantityOfItem2 = 7;
// var shippingCharges = 100;


// document.write("<h1>Shopping Cart </h1>");

// document.write("Price of item 1 is "+priceOfItem1 +"<br>");
// document.write("Quantity of item 1 is "+orderedQuantityOfItem1 +"<br>");
// document.write("Price of item 2 is "+priceOfItem2 +"<br>");
// document.write("Quantity of item 2 is "+orderedQuantityOfItem2 +"<br>");
// document.write("Shipping charges is "+shippingCharges +"<br>");
// var x= priceOfItem1*orderedQuantityOfItem1;
// var y = priceOfItem2*orderedQuantityOfItem2;
// var z = x+y+shippingCharges;
// document.write("Total cost of your order is "+z);



// var totalMarks = 980;
// var obtainedMarks = 804;
// var percentage = (obtainedMarks * 100)/totalMarks;
// document.write("<h1>Marks Sheet</h1>");
// document.write("Total Marks : "+totalMarks+"<br>");
// document.write("Obtained Marks : "+obtainedMarks+"<br>");
// document.write("Percentage : "+percentage+"<br>");


// var totalCurrency = (10*104.80)+(25*28);
// document.write("<h1>Currency in PKR</h1>");
// document.write("Total Currency in PKR : "+totalCurrency);



// var number = (10 +5 *10)/2;
// document.write(number);


// var currentYear = 2016;
// var birthYear = 1992;
// var age = currentYear - birthYear;
// document.write("<h1>Age Calculator</h1>");
// document.write("Current Year : "+currentYear+"<br>");
// document.write("Birth Year : "+birthYear+"<br>");
// document.write("Your Age : "+age);


// document.write("<h1>The Geometrizer</h1>");

// var r = 20;
// var c=2*(3.142*r);
// var a=3.142*(r**2);

// document.write("Radius of a circle : "+r+"<br>");
// document.write("The circumference is : "+c+"<br>");
// document.write("The area is  : "+a);




// document.write("<h1>The Lifetime Supply Calculator</h1>");


// var favSnack = "chocolate chip";
// var currentAge = 15;
// var maxAge = 65;
// var snacksPerDay=3;
// var final = (maxAge - currentAge)*snacksPerDay;
// document.write("Favourite Snack : "+favSnack +"<br>");
// document.write("Current Age : "+currentAge +"<br>");
// document.write("Estimated Maximum Age : "+maxAge +"<br>");
// document.write("Amount of snacks per day : "+snacksPerDay +"<br>");
// document.write("You will need "+final+" chocolate chip to last you until the ripe old age of "+ maxAge);



// document.write("<h1>Result : </h1>");
// var a = 10;
// document.write("The value of a is : "+a+"<br>");
// document.write("..................................... <br>");
// a=++a;
// document.write("The value of ++a is : "+a+"<br>");
// document.write("Now the value of a is : "+a+"<br>");
// document.write("<br>");


// document.write("The value of a++ is : "+a+"<br>");
// a++;
// document.write("Now the value of a is : "+a+"<br>");
// document.write("<br>");


// a=--a;
// document.write("The value of --a is : "+a+"<br>");
// document.write("Now the value of a is : "+a+"<br>");
// document.write("<br>");




// document.write("The value of --a is : "+a+"<br>");
// a--;
// document.write("Now the value of a is : "+a+"<br>");
// document.write("<br>");



// var a = 2, b = 1;
// document.write("A is : "+a+"<br>");
// document.write("B is : "+b+"<br>");
// var result = --a - --b + ++b + b--;

// document.write("Result is : "+result);


// --a =1;
// --a - --b = -1;
// --a - --b + ++b = 1;
// --a - --b + ++b + b--=2;



// var user = prompt("Enter your name: ");
// alert("Hello "+user);



// var table = +prompt("Which number you want table ?",5);

// for(var i=1;i<=10;i++){
//     document.write(table +" X "+i+" = " +table*i +"<br>");
// }


// var sub1=prompt("Enter 1st subjecct name : ");
// var sub2=prompt("Enter 2st subjecct name : ");
// var sub3=prompt("Enter 3st subjecct name : ");

// var totalMarks = 100;

// var sub1Mark = +prompt("Enter 1st subject marks : ");
// var sub2Mark = +prompt("Enter 2st subject marks : ");
// var sub3Mark = +prompt("Enter 3st subject marks : ");

// document.write("<table> <tr> <th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr> <tr> <td>"+sub1+"</td><th>"+totalMarks+"</th><th>"+sub1Mark+"</th><th>"+sub1Mark/totalMarks*100+"</th></tr>  <tr> <td>"+sub2+"</td><th>"+totalMarks+"</th><th>"+sub2Mark+"</th><th>"+sub2Mark/totalMarks*100+"</th></tr> <tr> <td>"+sub3+"</td><th>"+totalMarks+"</th><th>"+sub3Mark+"</th><th>"+sub3Mark/totalMarks*100+"</th></tr></table>");


// var user = prompt("Enter your city name: ");
// if(user === "karachi"){
//     alert("Welcome to city of lights");
// }else{
//     alert("Welcome to "+user);
// }



// var user = prompt("Enter your gender : ");
// if(user === "Male" ||user === "male"){
//     alert("Good Morning Sir.");
// }else if(user === "Female" ||user === "female" ){
//     alert("Good Morning Ma'am.");
// }



// var color = prompt("Which colour is there on road signals : ");
// if(color === "red"){
//     alert("Must Stop.");
// }else if(color == "yellow"){
//     alert("Ready to move.");
// }else if(color == "green"){
//     alert("Move Now.");
// }else{
//     alert("Input valid light");
// }




// var petrol = +prompt("Enter petrol you have in your car in liters. :");
// if(petrol <0.25){
//     alert("Please refill the fuel in your car");
// }




// var sub1Mark = +prompt("Enter 1st subject marks : ");
// var sub2Mark = +prompt("Enter 2st subject marks : ");
// var sub3Mark = +prompt("Enter 3st subject marks : ");
// var totalMarks = +prompt("Enter total marks : ");
// var marksobtained = (sub1Mark + sub2Mark + sub3Mark);
// var perntage = marksobtained/totalMarks *100;


// var grade ="";
// var remarks ="";
// if(perntage >= 80){
//     grade ="A-one";
//     remarks ="Excellent";
// }else if(perntage >=70){
//     grade="A";
//     remarks="Good";
// }else if(perntage >=60){
//     grade = "B";
//     remarks="You need to improve";
// }else{
//     grade="Fail";
//     remarks="Sorry";
// }


// document.write("<h1>Mark Sheet</h1>");

// document.write("Total Marks : "+totalMarks+"<br>");
// document.write("Marks Obtained : "+marksobtained+"<br>");
// document.write("Percentage : "+perntage +"% <br>");
// document.write("Grade : "+grade +"<br>");
// document.write("Remarks : "+remarks +"<br>");





// var secretNumber = 9;
// var user = +prompt("Guess the number : ");
// if(user == secretNumber){
//     alert("Bingo! Correct answer");
// }else if(user == secretNumber +1){
//     alert("Close enough to the correct answer");
// }else{
//     alert("Wrong!");
// }




// var num = +prompt("Enter number : ");
// if(num%3 ==0){
//     alert("the number is divisible by 3");
// }else{
//     alert("The number is not divisible by 3");
// }



// var num = +prompt("Enter number : ");
// if(num%2 ==0){
//     alert("the number is positive");
// }else{
//     alert("The number is negative");
// }





// var temp = prompt("Enter the tempture ");

// if(temp > 40 ){
//     alert("It is too hot outside.");
// }else if(temp > 30){
//     alert("The Weather today is Normal.");
// }else if(temp >20){
//     alert("Today’s Weather is cool.");
// }else if(temp >10){
//     alert("OMG! Today’s weather is so Cool.");
// }else{
//     alert("Its too cold");
// }



// var num1 = +prompt("Enter first number : ");
// var num2 = +prompt("Enter second number : ");
// var sign = prompt("What you want to do? +,-,*,/");
// var result = "";
// if(sign == "+"){
//    result = num1 + num2;
//    document.write("<h1>"+"Sum of "+num1+" + "+num2+" = "+result + "</h1>");
// }else if(sign == "-"){
//     result = num1-num2;
//     document.write("<h1>"+"Subtriction of "+num1+" - "+num2+" = "+result + "</h1>");
// }else if(sign=="*"){
//     result=num1*num2;
//     document.write("<h1>"+"Multiplication of "+num1+" X "+num2+" = "+result + "</h1>");
// }else if(sign=="/"){
//     result = num1/num2;
//     document.write("<h1>" +"Divion of "+num1+" / "+num2+" = "+result +"</h1>");
// }else{
//     alert("Sign Operation is invalid");
// }



//ASSIGNMENT 12-13

// var user = prompt("Enter charachter : ");

// if(user/2 || user==0){
//     alert("It's a Number.");
// }else if(user == user.toUpperCase()){
//     alert("It's alphabet and Upper case");
// }else if(user == user.toLowerCase()){
//     alert("It's alphabet and lower case");
// }


// var num1 = +prompt("Enter first number : ");
// var num2 = +prompt("Enter second number : ");
// if(num1 > num2){
//     alert(num1 +" is greater then "+num2 )
// }else if(num2 > num1){
//     alert(num2 +" is greater then "+num1);
// }else if(num1 == num2){
//     alert(num1 +" is equal to "+num2);
// }



// var num = +prompt("Enter number : ");

// if(num<0){
//     alert("Number is negative.");
// }else if(num>0){
//     alert("Number is positive.");
// }else if(num==0){
//     alert("Number is zero");
// }else{
//     alert("Invalid input");
// }


// var latter = prompt("Enter alphabet : ");
// var vowel = ["A","E","I","O","U"]
// for(var i=0; i<=vowel.length;i++){
//     if(latter.toUpperCase() == vowel[i]){
//         alert("Word is vowel");
//         break;
//     }else{
//         alert("Word is't vowel");
//         break;
//     }
// }


// var pass = "magsi";
// var user = prompt("Enter your password : ");
// if(user == null){
//     alert("Please enter your password.");
// }else if(user == pass){
//     alert("Correct!");
// }else if(user !=pass){
//     alert("Incorrect password");
// }


// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }
// alert(greeting);


// var time =1900;
// if(time>=0000 && time <1200){
//     alert("Good Morning.");
// }else if(time>=1200 && time<1700){
//     alert("Good afternoon.");
// }else if(time >= 1700 && time <2100){
//     alert("Good Evening.");
// }else if(time >= 2100 && time<2359){
//     alert("Good Night.");
// }







//ASSIGNMENT #13-14


// var arr = [];
// var arr2 = new Array;

// var arr3 = ["AHad","Magsi","Abdul"];
// var arr4 = [1,2,3,4,5,6,7,8,9];
// var arr5 = [true,false];
// var arr6 = ["Ahad",true,3.86,"Magsi",3,2];

// var educationQualification = [" SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
// document.write("Qualifications : <br>");
// for(var i =0;i<educationQualification.length;i++){
//     document.write(i+1 +") "+educationQualification[i] +"<br>")
// }


// var students = ["Michael","John","Tony"];
// var stuScore = [320,230,480];

// for(var i=0; i<students.length;i++){
//     for(var j=i;j<=i; j++){
//         document.write("Score of "+students[i]+" is "+stuScore[j] +". Percentage : "+stuScore[j]/500*100+"%<br>");
//     }
// }


// var colors = ["red","black","blue","yellow","green","orange","purple","grey"];
// document.write("List of colors is : <br>"+colors +"<br>");

// var user = prompt("Which color you want to add to Begnining : ");
// user = user.toLowerCase();

// for(var i=0;i<=colors.length;i++){
//     if(user === colors[i]){
//         var temp = colors[0];
//         colors[0]=colors[i];
//         colors[i]=temp;
//     }
    
// }

// 




// var colors = ["red","black","blue"];
// document.write("List of colors is : <br>"+colors +"<br>");

// var user = prompt("Which color you want to add to end : ");
// user = user.toLowerCase();

// colors.push(user);

// document.write("<br> Updated list of colors is : <br>"+colors +"<br>");


// document.write("<br> Updated list of colors is : <br>"+colors +"<br>");
// colors.unshift("Brown","White");
// document.write("<br> Updated list of colors is : <br>"+colors +"<br>");
// colors.shift();
// document.write("<br> Updated list of colors is : <br>"+colors +"<br>");
// colors.pop();
// document.write("<br> Updated list of colors is : <br>"+colors +"<br>");


// var colors = ["red","black","blue"];
// document.write("Colors list is : <br>"+colors+"<br>")


// var user = +prompt("Enter the index number where you want to add color : ");
// var userColor = prompt("Enter the color name you want to add : ");

// colors.splice(user,0,userColor);

// document.write("Updated colors list is : <br>"+colors+"<br>")




// var colors = ["red","black","blue"];
// document.write("Colors list is : <br>"+colors+"<br>")


// var user = +prompt("Enter the index number where you want to delete color : ");
// var userColor = +prompt("How many colors you want to delete : ");

// colors.splice(user,userColor);

// document.write("Colors list is : <br>"+colors+"<br>")



// var stuScore = [320,230,480,120];
// document.write("Scores of Students : "+stuScore +"<br>");

// stuScore.sort();
// document.write("Odered Scores of Students : "+stuScore);


// var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("Cities List : <br>"+cities+"<br>");

// var cities = cities.slice(2,4);
// document.write("Selected Cities List : <br>"+cities);


// var arr = ["This","is", "my", "cat"];

// document.write("Array : <br>"+arr+"<br>");

// var arr2 = arr.join(" ");
// document.write("Sting : <br>"+arr2);


// var devices = ["Keyboard","Mouse","Printer","Moniter"];

// document.write("Devices : "+devices+"<br> <br>");

// for(var i=0;i<devices.length;i++){
//     document.write("Out : <br>"+devices[i]+"<br>")
// }



// var devices = ["Keyboard","Mouse","Printer","Moniter"];

// document.write("Devices : "+devices+"<br> <br>");

// for(var i=devices.length-1; i>=0;i--){
//     document.write("Out : <br>"+devices[i]+"<br>")
// }



// var phones = ["Apple","Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// for(var i=0;i<phones.length;i++){
//     document.write(" <option>"+phones[i]+"</option>");
// }
// document.write("</select>");


//ASSIGNENT 17-20


// var multiArray = [[]];

// var multiArray2 = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];

// // document.write(multiArray2);

// for(var i=0; i<multiArray2.length;i++){
//     document.write(multiArray2[i].join(" ")+"<br>");
// }



// for(var i=1;i<=10;i++){
//     document.write(i+"<br>");
// }




// var user = +prompt("Enter a number to show its multiplication table : ");
// var user1 = +prompt("Enter length of multiplication table : ");
// for(var i=1;i<=user1;i++){
//     document.write(user +" X "+i+" = "+user*i+"<br>");
// }



// var fruits = ["apple", "banana", "mango", "orange","strawberry"];
// for(var i=0;i<fruits.length;i++){
//     document.write(fruits[i] +"<br>")
// }
// document.write("<br>")
// for(var i=0;i<fruits.length;i++){
//     document.write("Element at index "+i+" is "+fruits[i]+"<br>")
// }




// document.write("Counting : <br>");
// for(var i=1;i<=20;i++){
//     document.write(i+" , ")
// }
// document.write("<br><br>");
// document.write("Reverse Counting : <br>");
// for(var i=20;i>=1;i--){
//     document.write(i+" , ")
// }
// document.write("<br><br>");
// document.write("Even : <br>");
// for(var i=0;i<=20;i++){
//     if(i%2==0){
//         document.write(i+" , ")
//     }
// }
// document.write("<br><br>");
// document.write("Odd : <br>");
// for(var i=0;i<=20;i++){
//     if(i%2!=0){
//         document.write(i+" , ")
//     }
// }
// document.write("<br><br>");
// document.write("Series : <br>");
// for(var i=1;i<=20;i++){
//     if(i%2==0){
//         document.write(i+"K , ")
//     }
// }





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



// var A = [24, 53, 78, 91, 12];
// document.write("Array : <br>"+A+"<br>");
// var largest = 0;
// for(var i=0 ; i<A.length;i++){
//     if(A[i] > largest){
//         largest = A[i]
//     }
// }
// document.write("The largest number is : "+largest);



// var A = [24, 53, 78, 91, 12];
// document.write("Array : <br>"+A+"<br><br>");
// var smallest=A[0];
// for(var i=0 ; i<A.length;i++){
//     if(A[i] < smallest){
//         smallest = A[i]
//     }
// }
// document.write("The Smallest number is :<br> "+smallest);


// for(var i=1;i<=100;i++){
//     if(i%5==0){
//         document.write(i+", ");
//     }
// }