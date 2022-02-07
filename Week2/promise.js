var bool = true;

const promise = new Promise((resolve, reject) => {
  if (bool) {
    resolve("accepted.");
  } else {
    reject("err occured");
  }
});

promise
  .then((data) => {
    console.log(data);
    console.log("fulfilled.");
  })
  .catch((err) => {
    console.log(err);
    console.log("failed");
  });
