export interface MatchOverview {
  id: number,
  typeId: number,
  t1: {
    name: string,
    short: string,
    flag: string,
    score: string
  },
  t2: {
    name: string,
    short: string,
    flag: string,
    score: string
  },
  time: string,
  result: string
}