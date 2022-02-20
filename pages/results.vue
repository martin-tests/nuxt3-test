<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="personalityType.headline" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <div
          class="space-y-2 lg:space-y-0"
        >{{ personalityType.text }}
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<script lang="ts" setup>
import usePersonalityTypeTest from '~~/composables/usePersonalityTypeTest'

const { getPersonalityType } = usePersonalityTypeTest()

const personalityType = getPersonalityType()

definePageMeta({
  layout: 'page',
})
</script>
