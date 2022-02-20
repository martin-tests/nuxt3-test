<template>
  <div
    class="space-y-2 lg:space-y-0"
  >
    <div v-for="answer in questionAnswers.answers" :key="`q${questionAnswers.id}-a${answer.pts}`">
      <input 
        type="radio" 
        :id="`q${questionAnswers.id}-a${answer.pts}`" 
        name="qa" 
        :value="answer.pts"
        @change="(event) => onChange(event)"
      >
      <label :for="`q${questionAnswers.id}-a${answer.pts}`" class="ml-1">{{ answer.text }}</label>
    </div>
  </div>
  <Button
    class="w-full lg:w-auto capitalize mt-1"
    type="secondary"
    size="sm"
    :text="$t('pages.test.next')"
    @click.prevent="onNext"
    :disabled="!selectedValue"
  />
</template>

<script lang="ts" setup>
import { MultipleChoiceQuestion } from '~/types'

defineProps<{
  questionAnswers: MultipleChoiceQuestion
}>()

const emit = defineEmits(['update:value'])

const selectedValue = ref<number | null>(null)

let isBtnDisabled = true

const onChange = (event) => {
  selectedValue.value = event.target.value
  isBtnDisabled = false
}

const onNext = () => {
  emit("update:value", selectedValue.value)
}

</script>

<style lang="scss">

</style>