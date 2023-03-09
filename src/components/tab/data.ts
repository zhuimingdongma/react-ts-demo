interface subProps {
  [key: string]: subVal[]
}

export type subVal = {
  key: number
  val: string
}

export const subLabelList: subProps = {
  '1': [{ key: 1, val: '推荐' }],
  '33': [
    { key: 1, val: '推荐' },
    { key: 33, val: 'MAD·AMV' },
    { key: 32, val: 'MMD·3D' },
    { key: 51, val: '短片·手书·配音' },
    { key: 152, val: '特摄' },
    { key: 27, val: '综合' }
  ],
  '167': [
    { key: 1, val: '推荐' },
    { key: 153, val: '国创动画' },
    { key: 168, val: '国产原创相关' },
    { key: 169, val: '布袋戏' },
    { key: 195, val: '动态漫·广播剧' },
    { key: 170, val: '资讯' }
  ],
  '3': [
    { key: 1, val: '推荐' },
    { key: 28, val: '原创音乐' },
    { key: 31, val: '翻唱' },
    { key: 30, val: 'VOCALOID·UTAU' },
    { key: 194, val: '电音' },
    { key: 193, val: 'MV' },
    { key: 59, val: '演奏' },
    { key: 29, val: '音乐现场' }
  ]
}
