import { RankProps, VideoItem } from '#/store'
import Http from './index'

/**
 *
 * @param rankId 分类Id
 * @returns 获取各分类排行榜数据
 */
export const getRankClassifyList = async (rankId: number) => {
  return await Http.GET<RankProps>(`/ranking/${rankId}`)
}
