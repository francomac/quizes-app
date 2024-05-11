<script setup>
import { ref, watch } from 'vue'
import quizData from '../data/quizesData.json'
import QuizCard from './QuizCard.vue'

const quizes = ref(quizData)
const search = ref('')
const filteredQuizes = ref(quizes.value)

const filterQuizes = () => {
  filteredQuizes.value = quizes.value.filter((quiz) => {
    return quiz.title.toLowerCase().includes(search.value.toLowerCase())
  })
}

watch(search, filterQuizes)
</script>

<template>
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" name="" id="" placeholder="..." />
    </header>
    <div class="options-container">
      <QuizCard v-for="quiz in filteredQuizes" :key="quiz.id" :quiz="quiz" />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
}
header {
  margin: 10px 0;
  display: flex;
  align-items: center;
}
header h1 {
  font-weight: bold;
  margin-right: 30px;
}
header input {
  border: none;
  background-color: rgb(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
}

.options-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 0px;
}
</style>