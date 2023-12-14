const wait = (timer) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done, with success !')
    }, timer)
  });
};

const waitAndFailed = (timer) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Failed, There is an error !')
    }, timer)
  });
};

// test :
// wait(3000).then( p => {
//   console.log('Wait for 3s !');
//   return wait(2000);
// }).then( p => {
//   console.log('Wiat for 2s !');
//   return wait(1000);
// }).then( p => {
//   console.log('Done With Success.')
//   return waitAndFailed(1000)
// }).then(console.log);

// waitAndFailed(5000).then(console.log).catch(err => console.log(err));

// Async & Await :

const main = async () => {
  await wait(2000)
  .then( p => {
    console.log(p, ' after 2s.')
    return waitAndFailed(2000)
  }).catch(err => {
    console.log(err, ' after 4s')
  })
}
main();