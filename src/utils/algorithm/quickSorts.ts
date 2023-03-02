/**
 * 快速排序
 * 先将整个数组分成两半
 * 再对左右两半 进行递归 终止条件为不能比较
 */
const quickSort = (arr: number[]): number[] => {
  const pivot = arr[0]
  const length = arr.length
  const left = []
  const right = []
  if (arr.length < 2) {
    return arr
  }
  for (let i = 1; i < length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return [...quickSort(right), pivot, ...quickSort(left)]
}

export default quickSort
