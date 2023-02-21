import Http from 'request/index'
import { PlayListProps } from './type'

export const getUserMusicList = async (uid: number) => {
  return Http.GET<PlayListProps>('/user/playlist', { params: { uid } })
}
