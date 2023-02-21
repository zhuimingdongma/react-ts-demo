export interface Play {
  accountStatus: number
  anchor: boolean
  authStatus: number
  authenticationTypes: number
  authority: number
  avatarDetail: unknown
  avatarUrl: string
  creator: Creator
}

export type Creator = {
  nickname: string
}

/**
 * 歌单列表接口
 */
export interface PlayListProps {
  trackCount: number
  name: string
  coverImgUrl: string
  id: number
  creator: Creator
  ordered: boolean
  description: string
}
