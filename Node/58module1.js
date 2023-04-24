//Common JS modules
const hello = () => {
    console.log("hello Kisna");
}

const ahello = (name) => { 
    console.log("hello "+ name);
}

// module.exports = hello;
module.exports = {hello, ahello};
