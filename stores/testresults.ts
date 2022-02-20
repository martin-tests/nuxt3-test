import { defineStore } from 'pinia'

export interface TestResults {
  totalPoints: number | null;
  answers: number | null;
}

export const useTestResultsStore = defineStore('testresults', {
  state: (): TestResults => ({
    totalPoints: null,
    answers: null
  }),
  actions: {
    addPoints(points: number) {
      points = Number(points)
      if (this.totalPoints === null) {
        this.totalPoints = points
      } else {
        this.totalPoints += points
      }
    },
    incrementAnswers() {
      if (this.answers === null) {
        this.answers = 1
      } else {
        this.answers++
      }
    },
  },
})
