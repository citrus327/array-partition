/**
 * partition an Array into two.
 *
 * returns a Tuple which contain the desired elements and the rests
 *
 * @param arr the original array
 * @param partitionFn a function that pick the desired elements
 * @returns
 */
export const partition = <T>(
  arr: Array<T>,
  partitionFn: (element: T) => boolean,
): [Array<T>, Array<T>] => {
  const length = arr.length
  const target: Array<T> = []
  const rest: Array<T> = []

  for (let i = 0; i < length; i++) {
    const curr = arr[i]

    if (Boolean(partitionFn(curr))) {
      target.push(curr)
    } else {
      rest.push(curr)
    }
  }

  return [target, rest]
}
