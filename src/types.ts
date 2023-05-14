export interface CardData {
  cards: Card[]
}

export interface Card {
  title: string
  links: {
    text: string
    url: string
  }[]
}
