<script setup>
import { ref, defineProps } from 'vue'

const { questions } = defineProps(['questions'])

const selectedQuestions = ref([])

const emit = defineEmits(['selectQuestion'])
const selectQuestion = (question) => {
  if (question.selected) {
    selectedQuestions.value.push(question.id)
  } else {
    const index = selectedQuestions.value.findIndex((q) => q === question.id)

    selectedQuestions.value.splice(index, 1)
  }
  console.log(selectedQuestions.value)
  emit('selectQuestion', selectedQuestions.value)
}
</script>

<template>
  <div>
    <h1>Questions</h1>
    <div class="questions-container">
      <div class="question" v-for="question in questions.questionsHistory" :key="question.id">
        <h2>{{ question.question }}</h2>
        <p>{{ question.answer }}</p>
        <input type="checkbox" v-model="question.selected" @change="selectQuestion(question)" />
      </div>
    </div>
  </div>
</template>