import { ArchiveProps, VideoItem } from '#/store'
import { CardProps } from 'components/card/videoCard/types/type'
import Http from 'request/index'

/**
 *
 * @param rId 一级Id
 * @returns 获取一级列表 排行榜
 */
export const getRankList = async (rId: number = 1) => {
  return Http.GET<VideoItem[]>('ranking/region', { params: { day: 7, rId } })
}

/**
 *
 * @param tId 二级Id
 * @param p 分页
 * @returns 获取二级列表 排行榜
 */
export const getArchiveList = async (tId: number = 24, p?: number) => {
  return Http.GET<ArchiveProps[]>('ranking/archive', { params: { tId, p } })
}
