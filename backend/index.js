const sqlite3 = require('sqlite3').verbose();

// open database in memory
let db = new sqlite3.Database('/WorkMate.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the workmate database.');
  });

// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});