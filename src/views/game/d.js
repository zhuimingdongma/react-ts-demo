// export default function insertSort(arr) {
//   const cloneArr = [...arr]
//   for (let i = 1; i < cloneArr.length; i++) {
//     let temp = cloneArr[i]
//     let j = i
//     while (j > 0) {
//       if (temp < cloneArr[j - 1]) {
//         cloneArr[j] = cloneArr[j - 1]
//       } else {
//         break
//       }
//       j -= 1
//     }
//     cloneArr[j] = temp
//   }
//   return cloneArr
// }

const arr = [1, 4, 6, 7, 24, 123, 42, 62, 74, 12, 4, 61, 62, 2, 6]

export function insertSorts(arr) {
  const cloneArr = [...arr]
  for (let i = 1; i < cloneArr.length; i++) {
    let temp = cloneArr[i]
    let j = i
    while (j > 0) {
      // 得出当前循环值 在左侧的适当位置
      if (temp < cloneArr[j - 1]) {
        cloneArr[j] = cloneArr[j - 1]
      } else {
        break
      }
      j -= 1
    }
    cloneArr[j] = temp
  }
  return cloneArr
}
