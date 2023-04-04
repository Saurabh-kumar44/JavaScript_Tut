// try{
//     let a = 0;
//     console.log(program);
//     console.log("Working fine!");
// }catch(error){
//     console.log("This is an error");
// }
// finally{
//     console.log("I am finally i will run throughout");
// }
// //console.log("dsajf");


// try{
//     let a = 0;
//     console.log(program);
//     console.log("Working fine!");
// }catch(error){
//     console.log("This is an error");
//     console.log(s);
// }
// finally{
//     console.log("I am finally i will run throughout");
// }


const f = () => {
    try {
        let a = 0;
        // console.log(program);
        return; //now from here the control will return to the function call(but still the finally block will runs)
        console.log("Working fine!");
    } catch (error) {
        console.log("This is an error");
    }
    finally {
        console.log("I am finally i will run throughout");
    }
}
f();