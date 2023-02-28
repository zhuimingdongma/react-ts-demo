/**
 * 插入排序 适合比较小型数组比冒泡和选择要好很多, 插入排序的主要优点与数据移动有关,
 * 如果某个元素位于正确的最终位置上，则它不会被移动
 * 从第一个元素开始，该元素可以认为已经被排序；
 * 取出下一个元素，在已经排序的元素序列中从后向前扫描；
 * 如果该元素（已排序）大于新元素，将该元素移到下一位置
 * */
export default function insertSort (arr: number[]) {
  const cloneArr = [...arr]
  for (let i = 1; i < cloneArr.length; i ++) {
    let temp = cloneArr[i]
    let j = i
    while (j > 0) {
      if (temp < cloneArr[j - 1]) {
        cloneArr[j] = cloneArr[j - 1]
      }
      else {
        break;
      }
      j -= 1
    }
    cloneArr[j] = temp
  }
  return cloneArr
}