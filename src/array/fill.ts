/**
 * Fills elements of an array with a specified value from the start position up to, but not including, the end position.
 *
 * This function mutates the original array and replaces its elements with the provided value, starting from the specified
 * start index up to the end index (non-inclusive). If the start or end indices are not provided, it defaults to filling the
 * entire array. Negative indices can be used to specify positions from the end of the array.
 *
 * @param {Array<T | P>} array - The array to fill.
 * @param {P} value - The value to fill the array with.
 * @param {number} [start=0] - The start position. Defaults to 0.
 * @param {number} [end=array.length] - The end position. Defaults to the array's length.
 * @returns {Array<T | P>} The array with the filled values.
 *
 * @example
 * const array = [1, 2, 3];
 * const result = fill(array, 'a');
 * // => ['a', 'a', 'a']
 *
 * const result = fill(Array(3), 2);
 * // => [2, 2, 2]
 *
 * const result = fill([4, 6, 8, 10], '*', 1, 3);
 * // => [4, '*', '*', 10]
 */

export function fill<T>(array: unknown[], value: T): T[];
export function fill<T, P>(array: T[], value: P, start: number): Array<T | P>;
export function fill<T, P>(array: T[], value: P, start: number, end: number): Array<T | P>;
export function fill<T, P>(array: T[], value: P, start = 0, end = array.length): Array<T | P> {
  start = Math.max(start, 0);
  end = Math.min(end, array.length);

  for (let i = start; i < end; i++) {
    array[i] = value;
  }

  return array;
}
