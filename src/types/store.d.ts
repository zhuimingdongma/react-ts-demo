export interface VideoItem {
  aid?: string | number
  bvid?: string | number
  title?: string
  play: number
  review: number
  video_review: number
  favorites?: number
  author?: string
  pic: string
  coins?: number
  duration?: string
  redirect_url?: string
}

export interface StatProps {
  // 弹幕
  danmaku: number
  view: number
  coin: number
  share: number
  like: number
  dislike: number
  aid: aid
}

export interface ArchiveProps extends Pick<VideoItem, 'aid' | 'pic' | 'duration' | 'play' | 'favorites' | 'title'> {
  tname: string
  stat: StatProps
}
