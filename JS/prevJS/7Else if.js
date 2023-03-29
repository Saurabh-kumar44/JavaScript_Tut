const age = 34;
const vari = 45;
const doesdrive = true;

// if(age==19){
//     console.log('Age is 19');
// }
// else if(age==2){
//     console.log('Age is 2');
// }
// else{
//     console.log('Age is not 19');
// }

if(typeof vari!=='undefined'){
    console.log('Vari is undefines');
}
else{
    console.log('vari is not defined');
}

if(doesdrive){
    console.log('Correct');
}
else{
    console.log('not correct');
}

if(doesdrive && age>18){
    console.log('You can drive');
}
else{
    console.log('You cannot drive');    
}

console.log(age==19? 'Age is 45': 'Age is not 45');//TERNARY OPERATOR

switch(age){
    case 18:
        console.log('You are 18');
        break;

    default:
        console.log('Hatt teri');
        
}

