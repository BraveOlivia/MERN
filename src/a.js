const fs = require("fs");

const userName = "Olivia";

fs.writeFileSync("user-data.txt", "Username" + userName, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("No error");
});
