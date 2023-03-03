export interface CardProps {
  pic: string
  title?: string
  duration: number | string
  stat: StateProps
}

export interface StateProps {
  view: number
  danmaku: number
  reply: number
  coin: number
  share: number
  like: number
  favorite?: number
}
