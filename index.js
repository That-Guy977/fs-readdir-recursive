const fs = require('fs');

const options = {
  withFileTypes: true,
  recursive: true,
}

fs.promises.readdir("a", options).then((res) => console.log("promise", res));
fs.readdir("a", options, (err, res) => {
  if (err) throw err;
  console.log("callback", res);
})
console.log("sync", fs.readdirSync("a", options));
