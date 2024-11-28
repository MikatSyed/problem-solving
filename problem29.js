// Debounce Function
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
}

// Example usage:
const debouncedFunc = debounce(() => console.log('Function called'), 2000);
debouncedFunc(); // Call this multiple times within 2 seconds, but it will only run once after 2 seconds.
screenY