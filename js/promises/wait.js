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
wait(1000).then(console.log).catch(err => console.log(err));

waitAndFailed(3000).then(console.log).catch(err => console.log(err));