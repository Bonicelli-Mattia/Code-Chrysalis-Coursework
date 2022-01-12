/* eslint-disable prettier/prettier */
const csv = require("csv-parser");
const fs = require("fs");
const results = [];

module.exports = {
  totalPopulation(onFinished) {
    fs.createReadStream("cities.csv")
      .pipe(csv())
      .on("data", (data) => results.push(Number(data.population)))
      .on("end", () => {
        return onFinished(
          results.reduce(function (curr, acc) {
            return curr + acc;
          })
        );
      });
  },
};
