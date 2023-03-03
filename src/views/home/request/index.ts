import { VideoItem } from '#/store'
import { CardProps } from 'components/card/videoCard/types/type'
import Http from 'request/index'

export const getRankList = async (rId: number = 1) => {
  return Http.GET<VideoItem[]>('ranking/region', { params: { day: 7, rId } })
}
