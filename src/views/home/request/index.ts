import { CardProps } from 'components/card/videoCard/types/type'
import Http from 'request/index'
import { PlayListProps } from './type'

export const getCurrentHotList = async () => {
  return Http.GET<CardProps[]>('/web-interface/popular', { requestType: { x: 'x' } })
}
