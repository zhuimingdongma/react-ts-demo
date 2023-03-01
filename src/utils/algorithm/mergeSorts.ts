/**
 * 归并排序
 */
export function MergeSort<T>(left: T[], right: T[]): T[] {
  let tempArr: T[] = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      tempArr.push(left.shift()!)
    } else {
      tempArr.push(right.shift()!)
    }
  }
  return [...tempArr]
}

const getMiddle = <T>(arr: T[]): T[] => {
  if (arr.length < 1) {
    return arr
  }

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle, arr.length - 1)
  return MergeSort(getMiddle(left), getMiddle(right))
}
export default getMiddle
