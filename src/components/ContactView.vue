<script setup>
import quizData from '@/data/quizesData.json'
import { useRoute } from 'vue-router'

const route = useRoute()
const quiz = quizData.find((quiz) => quiz.id === Number(route.params.id))
</script>

<template>
  <div v-if="quiz">
    <h1>Contact info</h1>
    <h2>{{ quiz.contact.name }}</h2>
    <p>{{ quiz.contact.email }}</p>
    <p>{{ quiz.contact.phone }}</p>
  </div>
  <div v-else>
    <h1>Quiz not found</h1>
  </div>
</template>