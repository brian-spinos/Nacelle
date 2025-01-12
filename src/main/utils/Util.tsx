/**
 * 
    // Usage example:
    const debouncedFunction = Util.debounce((message: string) => {
    console.log(message);
    }, 300);

    // This will only log "Hello after debounce" after 300ms
    debouncedFunction("Hello after debounce");
 * 
 */
class Util {
  static debounce(func: Function, delay: number): Function {
    let timer: number;

    return function (...args: any[]) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }
}

export default Util;
