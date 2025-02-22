export function debounceWithLeading<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => ReturnType<T> | void {
  let timeout: NodeJS.Timeout | null = null;
  let lastArgs: Parameters<T> | null = null;

  return function (...args: Parameters<T>): ReturnType<T> | void {
    lastArgs = args;
    if (!timeout) {
      return func(...args);
    }
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      if (lastArgs) {
        func(...lastArgs);
      }
      timeout = null;
    }, wait);
  };
}
