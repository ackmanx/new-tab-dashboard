export type CardData = Card[]

export interface Card {
  title?: string
  links: {
    text?: string
    url?: string
  }[]
}
