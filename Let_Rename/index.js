const fs = require('fs');

const replaceThis = "kisna"
const replaceWith = "Saurav"

try {
  fs.readdir("data", (err,data)=>{
    console.log(data);
    for(let index=0; index<data.length; index++){
      const item  = data[index];
      let newFile = "data/" + item.replaceAll(replaceThis, replaceWith);
      fs.rename("data/"+ item, newFile, ()=>{
        console.log("rename succuss");
      })
    }
  });
} catch (err) {
  console.error(err);
}




//can also read files like this
// fs.readdirSync("data").forEach(file => {
//   console.log(file);
// });