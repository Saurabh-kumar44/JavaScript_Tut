// console.log('Ha bhai');

// for(let i=0; i<10; i++){
//     console.log(i);   
// }

// console.log('chlo bhai');
// let j = 0;
// while(j<10){
//     console.log(j);
//     j +=1;
// }

let k = 0;

do{
    if(k==5){
        k +=1;
        // break;
        continue;
    }
    console.log(k+1);
    k +=1;
}while(k<10);

console.log('ARE bilkul c jaise hai');



let arr = [2,5,6,2,6,7];
arr.forEach(function(element){
    console.log(element);
}); //OR

for(let i=0; i<arr.length; i++){
    let element = arr[i]
    console.log(element);
    
}

let obj = {
    name:'saurav' ,
    age: 23,
    type: 'Kharat programmer',
    os:'Ubuntu'
}
for(let key in obj){
    console.log(`${key} of object is ${obj[key]}`);
    
}
