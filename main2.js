// 1- contatenate two arrays and check if any item is num or not


var names=["ahmed","body","mohamed","saad"];
var ages=[3,55,30,10,40];

for (let i = 0; i < names.concat(ages).length; i++) {
    if (typeof names.concat(ages)[i]==="number") {
        console.log("data has numbers");
        
    }else{
        console.log("all your data is string")
    
    }
    
}

// 2- create  a prompt to get tasks and push all in an array then output all at tour page .
var tasks=[];
var task_1=prompt("enter task one");
tasks.push(task_1);
var task_2=prompt("enter task two");
tasks.push(task_2);
var task_3=prompt("enter task three");
tasks.push(task_3);
document.write(tasks);

// 3- create a  three prompt ages  and get it's values then check if any one is under age or not
var ages=[];
var age_1=prompt("entre your age");
ages.push(age_1);
var age_2=prompt("entre your age");
ages.push(age_2);
var age_3=prompt("entre your age");
ages.push(age_3);
console.log(ages);
for (let i = 0; i < ages.length; i++) {
    if (ages[i]>18) {
        console.log(`${ages[i]} you are +18 pass`)
    }else{
        console.log(`${ages[i]} you are -18 not pass`)
    }
}

// 4- create four prompt get text values then (display it in console ordered with sort )
var values=[];
var value_1=prompt("entre a value");
values.push(value_1);
var value_2=prompt("entre a value");
values.push(value_2);
var value_3=prompt("entre a value");
values.push(value_3);
var value_4=prompt("entre a value");
values.push(value_4);
console.log(values);
console.log(values.sort())
// 5- create an array when you find (no) then convert all next elements in array to (thanks)
var array =["ahmed",55,"body","no","ahmed","front"];

for (let i = 0; i < array.length; i++) {
    if (array[i]=="no") {
        console.log(array.fill("thanks",array.indexOf("no") + 1))
        
    }
}

