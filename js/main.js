const promise = new Promise((resolve, reject) => {
  resolve('Hello World !');
  // reject('Hello World !');
})

promise.then((p) => {
  console.log(p);
})