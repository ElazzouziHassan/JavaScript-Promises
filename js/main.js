const promise = new Promise((resolve, reject) => {
  resolve('Hello World !');
  // reject('There is an error !');
})


// !- then Method
// promise.then((p) => {
//   console.log('Message : ', p);
// })
// !- catch Method
// promise.catch((e) => {
//   console.log('error : ', e)
// })

// todo: then & catch :
promise.then( (p) => {
  console.log('Message : ', p);
}).catch( (e) => {
  console.log('error : ', e)
})