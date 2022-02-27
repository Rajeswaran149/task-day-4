//TASK-1
//1
let one;
let two;
let three;
let four;
console.log(one,two,three,four)
//2
var myvar= 1;
console.log(myvar);
//3
let first = "firstName";
let second = "lastName";
let third = "maritalStatus";
let fourth = "country";
let fifth = "age";
console.log(fifth);
//4
let fir = "firstName", sec = "lastName", thir = "maritalStatus", fourt = "country", fif = "age";
console.log(fourt);
//5
let fo     = 'bar'; // foo is now a string
let foo     = true;  // foo is now a boolean
let fooo ;
null  == undefined;  // true
null === null;        // true
//6
let str = "11";
console.log(parseInt(str),Number(str),+(str));
//7
//testTruthyFalsy Fuction                                                    check
function testTruthyFalsy (val) 
{ 
    return val ? console.log('truthy') : console.log('falsy'); 
} 
//5,7 => check pannanum

//TASK-2

//1 Square of a number
let num = 5;
console.log(Math.pow(num,2));
//2 Swapping 2 numbers
let numb1 = 2;
let numb2 = 5;
temp = numb1;
numb1 = numb2;
numb2 = temp;
console.log(numb1,numb2);
//3 Addition of 3 numbers
let add1 = 1;
let add2 = 3;
let add3 = 5;
console.log(add1+add2+add3);
//4 Celsius to Fahrenheit conversion                             
let celsius=2;
console.log((celsius * (9/5)) + 32);
//5 Meter to miles                                                   
let meter = 1;
console.log((meter * 0.00062137));
//6 Pounds to kg
let pound = 2;
console.log(pound/ 2.2046);

//7 Calculate Batting Average

function averageRuns(runs, matches,notout ){
    let out1;
    out1=matches-notout;
    return runs/out1;
}
let runs = 10000;
let matches = 250;
let notout = 50;
let avg=averageRuns(runs, matches, notout);
console.log(avg);
//8 Calculate five test scores and print their average
let test =[100,200,300,50,350];
let len = test.length;
let total=0;
for(let i=0;i<len;i++){
total=total+test[i];
}
console.log(total/len);
//9 Power of any number x ^ y.
let x = 5;
let y = 5;
console.log(Math.pow(x,y));
//10 Calculate Simple Interest
let p = 1000;
let t = 12;
let r = 2;
let si = parseInt((p*t*r)/100 );
console.log(si);
//11 Calculate area of an equilateral triangle
let side = 5;
let area = Math.sqrt(3) / 4 * side * side;
console.log(area);
//12 Area Of Isosceles Triangle
let Base=2;
let Height=2;
console.log((Base*Height)/2);
//13 Volume Of Sphere
let rad=2;
console.log((4/3)*(22/7)*rad*rad*rad);
//14 Volume Of Prism
//The volume of a prism is given as V = B × H ...
let basearea=2;
let prismheight=3;
let v=basearea*prismheight;
console.log(v);
//15 Find area of a triangle.
let basetriangle=2;
let heighttriangle=2;
let areafTriangle=(basetriangle*heighttriangle)/2;
console.log(areafTriangle);
//16 Give the Actual cost and Sold cost, Calculate Discount Of Product
let listprice=500;
let sellingprice=400;
let discount=listprice-sellingprice;
console.log(discount);
//17 Given their radius of a circle and find its diameter, circumference and area.
let radiusofcircle=3;
let dia = 2*radiusofcircle;
console.log(dia);
Circumference = 2 *(22/7) * radiusofcircle;
console.log(Circumference);
areaCircle=(22/7)*radiusofcircle*radiusofcircle;
console.log(areaCircle)
//18 Given two numbers and perform all arithmetic operations.
let a=7;
let b=3;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
//19 Display the asterisk pattern as shown below(No loop needed):
console.log("*****\n*****\n*****\n*****\n*****");
//20 Calculate electricity bill?
let n =100;
let m = (n*24*30)/1000;
let unitrate = 10;
console.log(m*unitrate);
//21 Program To Calculate CGPA
//CGPA = (Grades in all Subjects) / (Total Number of Subjects).
let Subjects = 500;
let count=64;
console.log(Subjects/count);

// Task 3: Simple Programs todo for Condition , Looping and Arrays
//1 Write a loop that makes seven calls to console.log to output the following triangle:
for(i="#";i.length<8;i=i+"#"){
    console.log(i);
}
//2  Iterate through the string array and print it contents
 var strArray= ["<option>Jazz</option>",
 ,"<option>Blues</option>",
 ,"<option>New Age</option>",
 ,"<option>Classical</option>",
 ,"<option>Opera</option>"]

  for(i=0;i<=strArray.length;i++){
      if(strArray[i]!=undefined)
      console.log(strArray[i]);
 }

//3 Arrays: 
//write a code to count the elements in the array . Don’t use length property                           

var myarray=[11,22,33,44,55];
let lenarr=0;

for(let _i in myarray){
    lenarr+=1;
}
console.log(lenarr);
//4 Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
let foods=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t"]
console.log(foods[4]);
console.log(foods.length);
//Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.
let friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];
function data(input){
    for (var i = 0; i < input.length; i++) {
        if(input[i]=="Mari"){
            input[i]="Munnabai";
        }
        
    }
    console.log(input);
}
data(friends);
// Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.
let friend = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];
function datahandling(input1){
    for (var i = 0; i < input1.length; i++) {
        if(input1[i]=="CaptianAmerica"){
            break;
        }
        console.log(input1[i]);
    }
}
datahandling(friend);
//Find the person is ur friend or not.
const friends1 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    function dataHand(input, name){
    for (var i = 0; i < input.length; i++) {
        if(input[i]==name){
            return"he is my friend"
        }
    }
    }
    let c = dataHand(friends1,"Jeff");
    console.log(c);
      
    // We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
    var friends2 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    var friends3 = [
    "Gabbar",
    "Rajinikanth",
    "Mass",
    "Spiderman",
    "Jeff",
    "ET"
    ];
    let f=[...friends2,...friends3]
    function Handling(input){
input =input.sort();
console.log(input); 
    }
    
    Handling(f);
    //1 Get the first item, the middle item and the last item of the array
    
    let aarr=["ram","kumar","ragul","kannan","siva","Rajesh"]
    console.log(aarr[0]);
    let middle=aarr[Math.floor((aarr.length - 1) / 2)];
    console.log(middle)
    let lastelement=aarr[aarr.length-1];
    console.log(lastelement);
//2 Add your name to the end of the friends array, and add another name to beginning.
 aarr.push("Rajeswaran");
 console.log(aarr);
aarr.unshift("praveen");
console.log(aarr);
//3 Add Mr or Ms to the names in the friends array.
let aa = "Mr ";
let bb = [];
for(i=0;i<friends.length;i++){
    bb.push(aa+friends[i]);
}
console.log(bb);
//4 Concat all the names the friends array and return as comma “,” seperated string.
console.log(friends.join(","));
//5 Find the friends names who has letter ‘a’ and return the list
console.log(friends.filter(e=>e.includes("a")));
//6 Find the avg length of all the friends names. Get the individual length of the names and do the avg.
let long = 0;
for(let i=0;i<friends.length;i++){
    long=long+friends[i].length;
}
console.log(long/friends.length);
//7 Find the names and return the list starting with letter M.
console.log(friends.filter(e=>e.startsWith("M")));
//8 Find the name with max characters and return the name.

var lgth = Math.max(...(friends.map(e => e.length)))
    var longest=[]
    
    for (var i = 0; i < friends.length; i++) {
      if (friends[i].length==lgth) {
        longest.push(friends[i]);
      }
    }
    
    console.log(...longest);
//9 Find the name with min characters and return the name.                                         

let details = [
    "Mari",
     "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
var lenstr = Math.min(...(details.map(e => e.length)))
console.log(lenstr);
var min=[];

for (var i = 0; i < details.length; i++) {
  if (details[i].length == lenstr) {
   
    min.push(details[i]);
  }
}
console.log(...min);

//Find the average in the array below.
//Make sure you add only the numbers and do avg.
const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];
let avgnum = friendsInfo.filter(Number.isInteger).reduce((a,b) => a+b)
console.log(avgnum/friendsInfo.filter(Number.isInteger).length);
//Print the contents of the input variable
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ]
    function datas(input){
    for (var i = 0; i < input.length; i++) {
    for (var j=0;j<input.length;j++){
        console.log(input[i][j])
    }
    }
        
    }
    datas(input);

    //Objects:
//     Add a new key value pair to myobject
// key : ten
// value : ten                                                                                       

myobject = {"1":"one","11":1,"name":"arun"}
myobject["ten"] = "ten";

console.log(myobject);
//How would you represent the following data using a combination of object literals and arrays? 
//(You can describe a strategy without typing or writing out the whole thing.)
var guvi=[{
    company1 :{
        firstname:"Guvi",
        lastname:"Geek",
        Address:{
            no:6,
            streetName:"IIT-M RP",
            place:"chennai"
        }
    },
    company2 :{
        firstname:"Amazon",
        lastname:"Inc",
        Address:{
            no:31,
            streetName:"Sp Infocity",
            place:"chennai"
        }
    },
    company3 :{
        firstname:"Google",
        lastname:"Aiphabet",
        Address:{
            no:34,
            streetName:"Amphitheater Parkway",
            place:"MountainView"
        }
    },
    company4 :{
        firstname:"Tesla",
        lastname:"Inc",
        Address:{
            no:32,
            streetName:"333 Santana Row",
            place:"San Jose"
        }
    }
}]
console.log(guvi[0]);