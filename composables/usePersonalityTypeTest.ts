import { useTestResultsStore } from "~/stores/testresults"
import TestApi from "~~/services/api/TestApi"
import { MultipleChoiceQuestion, PersonalityType, PersonalityTypeExplainer } from '~/types'


export default () => {
  const api = new TestApi()

  // Material sourced from https://www.psychologies.co.uk/self/are-you-an-introvert-or-an-extrovert.html

  const questions: MultipleChoiceQuestion[] = api.getTestQuestions()
  
  const explainers: PersonalityTypeExplainer = api.getExplainers()

  const store = useTestResultsStore()

  const addAnswer = (answerPoints: number) => {
    store.addPoints(answerPoints)
    store.incrementAnswers()
  }

  const SCIENTIFICALLY_DETERMINED_LIMIT = 3

  const _calculatePersonalityType = () => {
    let avgPts = store.totalPoints / store.answers
    let personalityType = (avgPts < SCIENTIFICALLY_DETERMINED_LIMIT) ? PersonalityType.MoreOfIntrovert : PersonalityType.MoreOfExtrovert
    return personalityType
  }

  const getPersonalityType = () => {
    let personalityType = _calculatePersonalityType()
    return explainers[personalityType]
  }

  return { questions, addAnswer, getPersonalityType }

} 