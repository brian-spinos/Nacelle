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

  static generateRandomId = (length: number = 8): string => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomId = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters[randomIndex];
    }
    return randomId;
  };
}

export default Util;
