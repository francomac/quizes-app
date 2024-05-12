<script setup>
import { useRoute, useRouter, RouterLink, RouterView } from 'vue-router'
import quizData from '@/data/quizesData.json'
import { ref } from 'vue'
import QuestionsList from '@/components/QuizesQuestionsList.vue'

// import { computed, onMounted, watch } from 'vue'

// const quizStatus = computed(() => {
//   console.log('quiz', quiz)
//   return quiz ? true : false
// })

// watch(quiz, (newQuiz) => {
//   console.log('newQuiz', newQuiz)
//   if (!newQuiz) {
//     router.push({ name: 'NotFound' })
//   }
// })

// onMounted(() => {
//   console.log('quiz', quiz)
//   if (!quiz) {
//     router.push({ name: 'NotFound' })
//   }
// })

const route = useRoute()
const router = useRouter()

const quiz = quizData.find((quiz) => quiz.id === Number(route.params.id))

const goBackHome = () => {
  router.push('/')
}

const selectedQuestions = ref([])
const onSelectQuestion = (questionsToUse) => {
  console.log('onSelectQuestion', questionsToUse)
  selectedQuestions.value = questionsToUse
}
</script>

<template>
  <div v-if="quiz">
    <h1>Quiz</h1>
    <div class="card">
      <img :src="quiz.thumbnailUrl" alt="" />
      <div class="card-text">
        <h2>{{ quiz.title }}</h2>
        <p>{{ quiz.count }} Questions</p>
      </div>
    </div>

    <QuestionsList @selectQuestion="onSelectQuestion" :questions="quiz" />
    <br />

    <RouterLink :to="'/quiz/' + quiz.id + '/contact'">
      <button>Show Contact</button>
    </RouterLink>
    <RouterView />
  </div>
  <div v-else>
    <h1>Quiz not found</h1>
  </div>
  <button @click="goBackHome">Go Home</button>
</template>

<style scoped>
.card {
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
}
.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin: 0;
}

.card .card-text {
  padding: 20px;
}

.card .card-text h2 {
  font-weight: bold;
}
</style>