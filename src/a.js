const fs = require("fs");

const userName = "Olivia";

fs.writeFileSync("user-data.txt", "Username" + userName, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("No error");
});


// NodeJS is running JS in non-browser environment, when we what to use some built-in 
// functions(e.g. alert()), need to import related APIs

// Callback - A function which will be called when the operation is done. 
// Asynchoronous - when a function takes longer to execute, the complier will not block the execution of the other code.

// CMD to run NodeJS code: `node xxx.js`
