<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.test.title')" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <PageSectionTitle :text="`${questionIdx + 1}. ${questions[questionIdx].question}`" class="capitalize" />
        <TestQuestions 
          :key="questionIdx"
          :questionAnswers="questions[questionIdx]" 
          @update:value="(value) => onAnswer(value)"
        />
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<script lang="ts" setup>
import usePersonalityTypeTest from '~~/composables/usePersonalityTypeTest'

const { questions, addAnswer } = usePersonalityTypeTest()
const router = useRouter()

const questionIdx = ref(0)

const onAnswer = (answerPts: number) => {
  addAnswer(answerPts)

  if (questionIdx.value + 1 < Object.keys(questions).length) {
    questionIdx.value++
  } else {
    router.push({ name: 'results' })
  }
}

definePageMeta({
  layout: 'page',
})
</script>
