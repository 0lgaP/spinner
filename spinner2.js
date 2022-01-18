const spinnerArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ' ];
let counter = 100;
const runSpinner = function(arr) {
  for (const act of arr) {
    setTimeout(() => {
      process.stdout.write(act);
    }, counter);
    counter += 200;
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, counter);
};
runSpinner(spinnerArray);