# JavaScript Promises :

Promises are a feature in JavaScript that allow you to work with asynchronous code in a more organized and readable way. They represent the eventual completion or failure of an asynchronous operation and provide a cleaner alternative to using callbacks.

## Creating Promises :

You can create a new Promise using the Promise constructor. It takes a function as an argument, which in turn takes two parameters: resolve and reject.

```bash
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  const success = true;

  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});
```

## Promise States :

A Promise can be in one of three states:

- **Pending**: The initial state, neither fulfilled nor rejected.
- **Fulfilled**: The operation completed successfully.
- **Rejected**: The operation failed.

## Handling Promises :

You can handle the results of a Promise using the then and catch methods.

```bash
myPromise
  .then((result) => {
    console.log(result); // Operation successful!
  })
  .catch((error) => {
    console.error(error); // Operation failed!
  });
```

## Chaining Promises :

Promises can be chained together, making it easier to handle multiple asynchronous operations sequentially.

```bash
const promise1 = new Promise((resolve) => {
  resolve("First operation complete");
});

const promise2 = (message) => {
  return new Promise((resolve) => {
    resolve(`${message}, Second operation complete`);
  });
};

promise1
  .then((result) => {
    return promise2(result);
  })
  .then((result) => {
    console.log(result);
  });
```

## Example: Fetching Data :

A common use case for Promises is handling asynchronous operations like fetching data from an API.

```bash
function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// Example usage
fetchData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

---

-by @Elazzouzi Hassan (Wizardy - 🧙‍♂️)