/** 数字转化为亿或者万
 *  */
export function calcCount(val: number): string {
  return val > 100000000 ? `${Math.ceil(val / 100000000)}亿` : val > 10000 ? `${Math.ceil(val / 10000)}万` : `${val}`
}
