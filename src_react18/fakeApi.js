export function fetchData() {
  let promise = createDelay();
  return {
    delay: wrapPromise(promise)
  };
}

function createDelay() {
  return new Promise((resolve) => {
    const delay = Math.random() * 520 + 230;
    setTimeout(() => resolve(delay), delay);
  });
}

function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
}
