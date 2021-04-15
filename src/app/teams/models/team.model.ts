export interface Team {
  id: number,
  name: string,
  rank: number,
  backgroundImg: string,
  squad: {
    id: number,
    name: string,
    img: string
  }
}