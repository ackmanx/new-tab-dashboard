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

const data: CardData = {
  cards: [
    {
      title: 'Pull Requests',
      links: [
        { text: 'All of Mine', url: '' },
        { text: 'Frontend (UI, Prefix, ABP)', url: '' },
        { text: 'Slingshot UI', url: '' },
      ],
    },
  ],
}
