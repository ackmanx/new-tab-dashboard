export type CardData = Card[]

export interface Card {
  title?: string
  links: {
    label?: string
    url?: string
  }[]
}
