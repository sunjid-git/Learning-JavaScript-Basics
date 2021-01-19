
var numWon = 0;
var numLost = 0;

for(var i =1; i<=5; i++){
    var guessNumber = parseInt(prompt("Enter a number from 1 to 5 : "));

    var randomNumber = Math.floor(Math.random()*5)+1;
    
    if(guessNumber==randomNumber)
    {
        console.log("You have won");
        numWon++;
    }
    else{
        console.log("You have lost. Random number was : " + randomNumber);
        numLost++;
    }
}
document.write("Won : "+numWon+"<br>");
document.write("Lost : "+numLost+"<br>");















// var random = Math.floor(((Math.random()*10)+10));
// console.log(random);








// // var num1 = parseInt(prompt("Enter Number1 : "));
// // var num2 = parseInt(prompt("Enter Number2 : "));

// // var maximum = Math.max(num1,num2);
// // console.log(maximum);

// // function Student(name, age, cgpa, lang){
// //     this.name = name;
// //     this.age = age;
// //     this.cgpa =cgpa;
// //     this.lang = lang;

// //     this.display = function(){ 
// //         console.log(this.name);
// //         console.log(this.age);
// //         console.log(this.cgpa);
// //         console.log(this.lang);
// //     }
// // }
// // var student1 = new Student("hasan",125, 3.66, ["a","b","c","d","e"]);
// // var student2 = new Student("san",225, 3.66, ["a","b","c","d","e"]);
// // var student3 = new Student("han",325, 3.66, ["a","b","c","d","e"]);

// // student1.display();
// // student2.display();
// // student3.display();

// // var student1 ={
// //     name : "ami",
// //     age: 2544,
// //     cgpa : 3.54,
// //     lang : ["a","b","c","d","e"]
// // }

// // var student2 ={
// //     name : "amfghfgi",
// //     age: 24,
// //     cgpa : 3.6754,
// //     lang : ["a","b","c","d","e"]
// // }

// // var student3 ={
// //     name : "adrfgfdmi",
// //     age: 244,
// //     cgpa : 3.7854,
// //     lang : ["a","b","c","d","e"]
// // }
// // console.log(student1.name);
// // console.log(student2.name);
// // console.log(student3.name);

// // console.log(student1.age);
// // console.log(student2.age);
// // console.log(student3.age);












// // var name = "sunjid";
// // var age = 25;
// // var cgpa = 3.66;
// // var lang = ["a","b","c","d","e"];


// // console.log(age);


// // function Student(name, age, cgpa, lang){
// //     this.name = name;
// //     this.age = age;
// //     this.cgpa = cgpa;
// //     this.lang = lang;

// //     this.display= function(){
// //         console.log(this.name);
// //         console.log(this.age);
// //         console.log(this.cgpa);
// //         console.log(this.lang);
// //     }
// // }



// // var student1 = new Student("mafi",25, 3.66, ["eng", "bang","hind"]);
// // var student2 = new Student("hasan",24, 3.26, ["eng", "bang","hind"]);
// // var student3 = new Student("sunjid",15, 3.76, ["eng", "bang","hid"]);
// // var student3 = new Student("md",15, 3.76, ["eng", "bang","hid"]);


// // // console.log(student1.name);
// // // console.log(student2.age);
// // // console.log(student3.cgpa);
// // // console.log(student3.lang);



// // student1.display();




// // // console.log(age);
// // var student1 = {
// //     name : "mafi",
// //     age : 25,
// //     cgpa:3.75,
// //     lang: ["bengali", "english", "hindi"]
// // }

// // var student2 = {
// //     name : "hasan",
// //     age : 23,
// //     cgpa :  3.66,
// //      lang: ["bengali", "english", "hindi"]
// // }
// // var student3 ={
// //     name = "maf",
// //     age : 20,
// //     cgpa :  3.66,
// //     lang: ["bengali", "english", "hindi"]
// // }

// // console.log(student3.name);







// // var name = "Sunjid hasan";
// // var age = 24;
// // var cgpa = 3.66;

// // var numbers = [20,45,45,3,2,2];
// // numbers.sort(function(a,b){
// //     return a-b;
// // });
// // console.log(numbers);

// // numbers.sort(function(a,b){
// //     return b-a;
// // });
// // console.log(numbers);


// // var names = ["sunjid", "hasan", "mafi"];
// // console.log(names);


// // var sortedNames = names.sort();

// // names.reverse();
// // console.log(sortedNames);


// // var sortedNames = names.sort();
// // console.log(sortedNames);

// // var newArray= names.slice(1,2);
// // console.log(newArray)
// // console.log(names)





// // names.splice(1,2);
// // console.log("Splice remocve element: "+names);

// // names.pop();
// // console.log("pop : " + names);

// // names.push("asd");
// // console.log("push : " + names);

// // names.shift();
// // console.log("shift : "+names);

// // names.unshift("md");
// // console.log("unshift : "+names);

// // names.splice(2,0,"karim","rahim");
// // console.log("Splice : "+names);



// // shift is opposite of popo












// // var num = new Array();
// // for(var i =0; i<5; i++)
// // {
// //     num[i]= parseInt(prompt("Enter value"));
// // }

// // var sum =0;

// // for(var i=0; i<5; i++){
// //     console.log(num[i]);
// //     sum=sum +num[i];
// // }

// // console.log("sum : "+sum);
 




// // // var num = [10,20,30,40,50];
// // // var sum =0;

// // // for(var i=0; i<5; i++){
// // //     console.log(num[i]);
// // //     sum=sum +num[i];
// // // }

// // // console.log("sum : "+sum);
 



// // // console.log(num[0]);
// // // console.log(num[1]);
// // // console.log(num[2]);
// // // console.log(num[3]);