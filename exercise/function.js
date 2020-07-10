// function declaration

// function getUserName(){
//     return "Yoopy Christian"
// }

//function expression
// let getUserName = function(){
//     return "Yoopy Christian"
// }


// // arrow function
// let getUserName = (name,age) => {
//     return {name, age}
// }
// console.log(getUserName());

let getUserName1 = (name) => {
    let newName;
    if (name === undefined){
        newName = "Christian"
    } else {
        newName =name;
    }
    return newName;
}





// let sum = (nilai1, nilai2) => nilai1+nilai2;
// console.log(sum(10,25))

let userName = getUserName1();
console.log(userName)
