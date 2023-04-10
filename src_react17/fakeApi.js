export function fetchData() {
  return createDelay();
}

function createDelay() {
  return new Promise((resolve) => {
    const delay = Math.random() * 520 + 230;
    setTimeout(() => resolve(delay), delay);
  });
}
