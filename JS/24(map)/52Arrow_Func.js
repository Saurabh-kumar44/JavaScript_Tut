// const sayHello = () => {
//     console.log("hello say");
// }
// sayHello();

// const sayHello = () => console.log("hello say");
// sayHello();

const sayHello = (greeting, name) => 
    console.log("hello say " +greeting + " " +name);

// const x = {
//     name: "kisna",
//     role: "Dev",
//     exp: 20,
//     show: function(){
//         console.log(`The name is ${this.name}`); //here this refers to the x (object)
//     }
// }
// // sayHello(x.exp, x.name);
// x.show();   


// const x = {
//     name: "kisna",
//     role: "Dev",
//     exp: 20,
//     show: function(){ //agar kisi object ke andar hamne ek function banaya to 'this' vo object hoga
//         console.log(this);//it show x object
//         setTimeout(function(){ // 2 or agar event ke andar 'this' use karenege to vo refer karega us element ko jisne element ko receive kiya hai
//             console.log(this); //it shows window object
//             console.log(`The name is ${this.name}\n role is ${this.role}`); //here this refers to the x (object)
//         },2000)
//     }
// }
// // sayHello(x.exp, x.name);
// x.show(); 

 //now to use this inside the event (so that it print the x object we use this)
//  const x = {
//     name: "kisna",
//     role: "Dev",
//     exp: 20,
//     show: function(){ //agar kisi object ke andar hamne ek function banaya to 'this' vo object hoga
//         // console.log(this);//it show x object
//         let that = this; //now the x store in that
//         setTimeout(function(){ // 2 or agar event ke andar 'this' use karenege to vo refer karega us element ko jisne element ko receive kiya hai
//             console.log(this); //it shows window object
//             console.log(`The name is ${that.name}\n role is ${that.role}`); // now we can access x object
//         },2000)
//     }
// }
                                          //OR
const x = {
  name: "kisna",
  role: "Dev",
  exp: 20,
  show: function(){ 
      setTimeout(()=>{ //using arrow functin it takes the this from it lexial parent(iske andar jo this lega vo iske parent ke this vala hi lelega instead of making khud ka this)
          console.log(this);
          console.log(`The name is ${this.name}\n role is ${this.role}`); 
      },2000)
  }
}
// sayHello(x.exp, x.name);
x.show(); 


