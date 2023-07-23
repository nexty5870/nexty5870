const fs = require("fs");

function readWriteAsync() {
  fs.readFile("README.md", "utf-8", (err, data) => {
    if (err) {
      throw err;
    }

    // Get today's date
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();

    today = dd + "-" + mm + "-" + yyyy;

    // Replace "Latest update: " with "Latest update: today's date"
    const updatedMd = data.replace(/(Latest update: ).*/g, `$1${today}`);

    fs.writeFile("README.md", updatedMd, "utf-8", (err) => {
      if (err) {
        throw err;
      }
      console.log("README update complete.");
    });
  });
}

readWriteAsync();
