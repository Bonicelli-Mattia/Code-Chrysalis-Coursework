require("dotenv").config();
const app = require("./app");
const db = require("./knex.js");

const PORT = process.env.PORT || 9000;


(async () => {
  try {
    console.log("Running migrations...");
    await db.migrate.latest();
    await console.log("Running seeds...");
    await db.seed.run();

    console.log("Starting express");
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  } catch (err) {
    console.error("Error starting app!", err);
    process.exit(-1);
  }
})();
