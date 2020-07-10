let user1 = {
    name : "yoopy"
}

//stored and copied by reference
let user2 = user1

//comparison by reference
console.log (user2 === user1);

//clone with object assign
let user3 = {
    age:17,
    name : {firstName : "john",
    lastName : "Kei"
    }
}

let action1 = {canWalk:true};
let action2 = {canSpeak:true};

Object.assign(user3, action1, action2);
action1.canWalk = false
// let user4 = Object.assign({}, user3);
// user4.name.firstName = "tian"
// console.log(user3);
// console.log(user4);
// console.log(user3 === user4)


//shallow copy
let user4 = Object.assign({},user3);
let user5 = {
    name:"kristian",
    sayHello(){
        console.log(this.name);
    }
};
let admin = user5;
user5 = null
admin.sayHello();

// user5.sayHello();

// user5.name.firstName = "Username"
// console.log(user3);
// console.log(user5);

//bikin object baru pakai object assign, copy value
// let user4 = Object.assign({}, JSON.parse(JSON.stringify(user3)));
// user4.name.age = 28
// console.log(user3)
// console.log(user4)

// // Load the full build.
// var _ = require('lodash');
// // Load the core build.
// var _ = require('lodash/core');
// // Load the FP build for immutable auto-curried iteratee-first data-last methods.
// var fp = require('lodash/fp');