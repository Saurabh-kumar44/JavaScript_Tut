const fs = require('fs');
const path = require('path');

const replaceThis = "kisna"
const replaceWith = "Saurav"
const preview = false
const folder = __dirname; //it gives the current path of the directory


try {
  fs.readdir(folder, (err,data)=>{
    console.log(data);
    for(let index=0; index<data.length; index++){
      const item  = data[index];
      let oldFile = path.join(folder, item);
      let newFile = path.join(folder, item.replaceAll(replaceThis, replaceWith));
      if(!preview){
        fs.rename(oldFile, newFile, ()=>{
        console.log("rename success");
      })
      }
      else{
        if("data "/ +item !== newFile){
          console.log("data/ " + item + " will be renamed to this " +newFile);
        }
      }
    }
  });
} catch (err) {
  console.error(err);
}




//can also read files like this
// fs.readdirSync("data").forEach(file => {
//   console.log(file);
// });