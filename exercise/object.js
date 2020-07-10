//literal and contructor
let person = new Object();
let person2 = {
    name : "yoopy",
    age  : 23,
    gender : "laki",
    "alamat tinggal" : "bekasi"
};

//add property
person2.gender = "Laki-Laki"
console.log(person2["alamat tinggal"]);

//delete property
delete person2.gender
console.log(person2);

//square bracket
delete person2["alamat tinggal"];
console.log(person2["alamat tinggal"]);

//in operator
// console.log("age" in person2)
// console.log(person2.gender != undefined)

// for .. in
for (const key in person2){
    //cetak keynya aja
    console.log("---")
    console.log(key);

    //cetak isinya aja
    console.log(person2[key]); 
}