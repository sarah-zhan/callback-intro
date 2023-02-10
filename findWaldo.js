
// const findWaldo = function (names, found) {

//   for (i = 0; i < names.length; i++) {
//     let name = names[i];
//     if (name === "Waldo") {
//       found();   // execute callback
//     }
//   }
// }

const findWaldo = function(names, callback) {
  names.forEach((e, i) => {
    if (e === "Waldo") {
      callback(i);
    }
  });
};

const actionWhenFound = function(i) {
  console.log(`Found Waldo at index ${i}!`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);