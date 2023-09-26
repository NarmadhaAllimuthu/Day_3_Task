//Task 1: Simple Programs todo for variables
//1.Declare four variables without assigning values and print them in console
var a;
var b;
var c;
var d;
console.log(a,b,c,d);

//2.How to get value of the variable myvar as output
//var myvar= 1;
//console.log("myvar");
var myvar=1;
console.log(myvar);

//3. Declare variables to store your first name, last name, marital status, 
//country and age in multiple lines
var obj={
    firstname:"guvi",
    lastname:"geek",
    materialstatus:"education",
    country:"india",
    age:23
};

//4. Declare variables to store your first name, last name, marital status,
// country and age in a single line
var arr=["guvi","geek","education","india",23];

//5. Declare variables and assign string, boolean, undefined and null data types
//I am 25 years old. 
//You are 30 years old.
var r="I am 25 years old";//string
var t=true;//boolean
var u;//undefined
var f=null;//null

//6.6. Convert the string to integer
//parseInt()
//Number()
//Plus sign(+)
var g="45";//string
var h=parseInt(g);
console.log(h);//integer
var j=Number(g);
console.log(j);//integer
var k=+g;
console.log(k);//integer

//7. Write 6 statement which provide truthy & falsey values.

var age=[46,90,58,23,67,26,21];

for(var i=0;i<age.length;i++){ 
  var a=age[i];  
switch(a){
    case 58:
        console.log("you are eligible for job ");
        break;
    case 46: 
         console.log("you are middle aged pepole");
        break;
    case 26:
         console.log("you are to take rest");
        break;
     default:
         console.log("you are not eligible ");     
}
} 
OUTPUT:
//you are middle aged pepole
// you are not eligible 
// you are eligible for job 
// you are not eligible 
// you are not eligible 
// you are to take rest
// you are not eligible 

//Task 2: Simple Programs todo for Operators
//1.Square of a number
var a=2;
console.log(a*a);
console.log(Math.pow(3, 2));
//2.Swapping 2 numbers
var a=3,b=5;
var c;
c=b;
a=c;
b=a;
console.log(a,b);
//3.Addition of 3 numbers
var a=3;
var b=7;
var c=8;
console.log(a+b+c);
//4.Celsius to Fahrenheit conversion
var m=45;
let n=(m*1.8)+32;
console.log(n);
//5.Meter to miles
const h=0.000621;
var k=223*h;
console.log(k);
//6.Pounds to kg
const h=0.4535;
var k=170*h;
console.log(k);
//7.Calculate Batting Average
var scro=400,out=8;
var battavg=scro/out;
console.log(battavg);
//8.Calculate five test scores and print their average
var scro=40000,out=8,match=1000;
var battavg=scro/(match-out);
console.log(battavg);
//9.Power of any number x ^ y.
console.log(Math.pow(2,4));
//10.Calculate Simple Interest
var prin=34000,rate=6,intres=10;
console.log(prin*rate*intres);
//11.Calculate area of an equilateral triangle
var side=2;
var area=(Math.sqrt(3)/4)*Math.pow(side,2);
console.log(area);
//12.Area Of Isosceles Triangle
var base=8,height=7;
console.log((base*height)/2);
//13.Volume Of Sphere
var radius=9;
console.log(((4/3)*3.14)*Math.pow(radius,3));
//14.Volume Of Prism
var base=9,height=6;
console.log(base*height);
//15.Find area of a triangle.
var radius=6;
console.log(((1/3)*3.14)*Math.pow(radius,2));
//16.Give the Actual cost and Sold cost, Calculate Discount Of Product
var actual=12000,sold=13,000;
console.log(actual-sold);
//17.Given their radius of a circle and find its diameter, circumference and area.
var radius=8;
console.log(radius*2,radius*2*3.14,3.14*Math.pow(radius,2));
//18.Given two numbers and perform all arithmetic operations.
var a=7,b=9;
console.log(a+b,a-b,a*b,a/b);
//19.Display the asterisk pattern as shown below(No loop needed):
// *****
// *****
// *****
// *****
// *****
var text = (('*'.repeat(5))+"\n").repeat(5);
console.log(text);
//20.Calculate electricity bill?
// For example, a consumer consumes 100 watts per hour daily for one month.
//  Calculate the total energy bill of that consumer if per unit rate is 10?
var amount=100*24*30*10;
console.log(amount);
//21.Program To Calculate CGPA
var math=9.9,science=8.9,tamil=7.9,english=6.9,economics=7.9;
console.log((math+science+tamil+english+economics)/5);


//Task 3: Simple Programs todo for Condition , Looping and Arrays

//1. Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

  //2.Iterate through the string array and print it contents
//   Arrays:

// var myarray=[11,22,33,44,55]
// write a code to count the elements in the array . Don’t use length property
var a=[11,22,33,44,55];
let b=0;
for(i in a){
  b++;
}
console.log(b);

// Declare an empty array;
var a=[];
console.log(a);

//Create an array called foods holds the names of your top 20 favorite foods, starting with
 //the best food.
//let foods=[]
let foods=["briyani","mutton","dallsambar","edli","dosa","sambar","curd","lemon","chapathi",
    "eggrice", "mangoes rice","chicken","pizza","burger","pastha","upma","greenleaf sambar",
    "tamarind rice","bringal gravy","cabbage rice"];

// Foods variable holds the names of your top 20 favorite foods, starting with the best food. How
// can you find your fifth favorite food?
// let foods=[]
let foods=["briyani","mutton","dallsambar","edli","dosa","sambar","curd","lemon","chapathi",
    "eggrice", "mangoes rice","chicken","pizza","burger","pastha","upma","greenleaf sambar",
    "tamarind rice","bringal gravy","cabbage rice"];
 console.log(foods[4]);

// Find the length of your foods array
let foods=["briyani","mutton","dallsambar","edli","dosa","sambar","curd","lemon","chapathi",
    "eggrice", "mangoes rice","chicken","pizza","burger","pastha","upma","greenleaf sambar",
    "tamarind rice","bringal gravy","cabbage rice"];
let itemstotal=0;
for(i=0;i<foods.length;i++){
  itemstotal++;
}
console.log(itemstotal);

//Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.

//const friends = [“Mari”,“MaryJane”,“CaptianAmerica”,“Munnabai”,“Jeff”,“AAK chandran”];
let friends = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
let a=["CaptianAmerica"];
function dataHandling(input){
for (var i = 0; i < input.length; i++) {
  if(friends[i]==(a)){
    break;
  } else {
    console.log(friends[i]);
  }
}
}
dataHandling(friends);

//Find the person is ur friend or not.
// const friends = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
// function dataHandling(input, name){
//     for (var i = 0; i < input.length; i++) {
//      }
//     }
//     let found = dataHandling(friends,”Jeff”);
    
//     console.log(found);

const friends = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];

function dataHandling(input, name){
for (var i = 0; i < input.length; i++) {
  if(friends[i]==name){
    console.log("my friend is"+name);
    return name;
  }

}
}

let found = dataHandling(friends,"Jeff");

console.log(found);

//Get the first item, the middle item and the last item of the array
console.log(a.pop(),a.shift(),a.splice(3,1));
//2. Add your name to the end of the friends array, and add another name to beginning.
var friends2 = [“Gabbar”,“Rajinikanth”,“Mass”,“Spiderman”, “Jeff”, “ET” ];
friends2.push("allimuthu");
friends2.unshift("naveen");
console.log(friends2);

//3. Add Mr or Ms to the names in the friends array.
var friends2 = [“Gabbar”,“Rajinikanth”,“Mass”,“Spiderman”, “Jeff”, “ET” ];
for(i=0;i<friends2.length;i++){
    console.log("Mr"+friends[i]);
}

//4. Concat all the names the friends array and return as comma “,” seperated string.
var friends2 = [“Gabbar”,“Rajinikanth”,“Mass”,“Spiderman”, “Jeff”, “ET” ];
var a=friends2.toString();
console.log(a,a.split(","));

//6. Find the avg length of all the friends names. 
//Get the individual length of the names and do the avg.

var friends1 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
 var a=0;
 for(i=0;i<friends1.length;i++){
   
   a=a+friends1[i].length;
console.log(friends1[i].length);
}
console.log(a/friends1.length);

//7. Find the names and return the list starting with letter M.
var friends1 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];

 for(i=0;i<friends1.length;i++){
   if(friends1[i].charAt(0)=="M"){
     console.log(friends1[i]);
   }
   
}

//8. Find the name with max characters and return the name.
var friends1 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
 var a=0;
  let b=[];
 for(i=0;i<friends1.length;i++){
   
   a=a+friends1[i].length;
   b.push(friends1[i].length);
}
console.log(b);

console.log(Math.max(...b)); 

//9. Find the name with min characters and return the name.
var friends1 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
 var a=0;
  let b=[];
 for(i=0;i<friends1.length;i++){
   
   a=a+friends1[i].length;
   b.push(friends1[i].length);
}
console.log(b);

console.log(Math.min(...b)); 

//Find the average in the array below.
//Make sure you add only the numbers and do avg.

//const friendsInfo = [6, 12, ‘Mari’, 1, true, ‘Munnabai’, ‘200’, ‘CaptianAmerica’, 8, 10];
const friendsInfo = [6, 12, "Mari", 1, true, "Munnabai", "200", "CaptianAmerica", 8, 10];
const onlyNumbers = friendsInfo.filter(
  element => typeof element === 'number');
console.log(onlyNumbers);
var a=0;
 for(i=0;i<onlyNumbers.length;i++){
   a=a+onlyNumbers[i];
}
console.log(a/onlyNumbers.length);

//Print the contents of the input variable
//var input = [[“0001”, “Roman Alamsyah”, “Bandar Lampung”, “21/05/1989”, “Membaca”],
   // [“0002”, “Dika Sembiring”, “Medan”, “10/10/1992”, “Bermain Gitar”],[“0003”, “Winona”, 
   //“Ambon”, “25/12/1965”, “Memasak”],[“0004”, “Bintang Senjaya”, “Martapura”, “6/4/1970”, “Berkebun”]
    //]
    //function dataHandling(input){
    //for (var i = 0; i < input.length; i++) {
    //Your code goes here
    // }
    //}
    //dataHandling(input);
    var input = [["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]]
let a=[];
function dataHandling(input){
for (var i = 0; i < input.length; i++) {
a=input[i];
    //console.log(a);
    for(var j = 0; j <a.length; j++) {
      console.log(a[j]);
      }
}
}

dataHandling(input);

//Write out an object literal to represent the data below.
//Guvi, Geek, 6, IIT-M RP,Chennai.
var a={
    namee:"guvi",
    web:"geek",
    address:"IIT-M RP",
    city:"chennai"

};


// How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)

// Guvi, Geek, 6, IIT-M RP,Chennai.
// Amazon, Inc, 31, SP Infocity, Chennai.
// Google, Alphabet, 34 Amphitheater Parkway, MountainView.
// Tesla, Inc , 32, 333 Santana Row,San Jose.

var a=[
    {
      namee:"guvi",
      web:"geek",
      experience:31,
      address:"IIT-M RP",
      city:"chennai"
    }{
      namee:"amazon",
      web:"Inc",
      experience:31,
      address:"SP Infocity",
      city:"chennai"
    }{
      namee:"google",
      web:"alphabet",
      address:"34 Amphitheater Parkway",
      place:"MountainView"
    }{
       namee:"Tesla",
      web:"Inc",
      experience:32,
      address:"333 Santana Row",
      city:"san Jose"
    }
    ]    