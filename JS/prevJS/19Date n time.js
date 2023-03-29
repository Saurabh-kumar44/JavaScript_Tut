console.log('hello biro');
let today = new Date();//here Date is a object
console.log(today);
// console.log(typeof today);
let otherDate = new Date('8-4-2003 04:54:08');
// otherDate = new Date('June 8 2002');
// otherDate = new Date('06/17/2002');
// console.log(otherDate);

let a;
// a = otherDate.getDay();
// a = otherDate.getDate();
// a = otherDate.getTime();//it return the time straps means total seconds till 17 june
// a = otherDate.getSeconds();
// a = otherDate.getMinutes();
a = otherDate.getMonth();

// otherDate.setDate(23);
otherDate.setFullYear(2008);
// otherDate.setMinutes(1);
// otherDate.setHours(2);
// otherDate.setSeconds(23);

// console.log(otherDate);

// a = otherDate.getDay()
// a = otherDate.getFullYear()

console.log(a);//it will show 1 because the date 17 is on MON so 1

