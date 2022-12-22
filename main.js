// 1
const child = {
  name: "Mohan",
  rollNo: 101,
};
const Parent = {
  no: 8484848484,
  add: "Bavdhan pune",
  __proto__: child,
};
console.log(Parent.name, Parent.rollNo, Parent);

// 2
function student(name, rollNo) {
  this.name = name;
  this.rollNo = rollNo;
}
let s1 = new student("Kiran", 101);
let s2 = new student("Kumar", 102);
console.log(s1);
console.log(s2);
s1.age = 22;

// 3
const array = {
  arrTotal: function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    console.log(sum);
  },
};

Array.__proto__ = array;
arr1 = [1, 2, 3, 4];
arr2 = [11, 12, 13, 14];
Array.arrTotal(arr1);
Array.arrTotal(arr2);

// 4
var obj1 = {
  name: "Kirankumar Falmari",
  course: "Fullstack",
  __proto__: Parent,
};

let result = Object.keys(obj1);
// let r2 = Object.keys(child);
// console.log(r2);
result = Object.keys(Parent.keys);
console.log(result);
