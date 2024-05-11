<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

const { quiz } = defineProps(['quiz'])
</script>

<template>
  <div>
    <RouterLink :to="`/quiz/${quiz.id}`">
      <div class="card">
        <img :src="quiz.thumbnailUrl" alt="" />
        <div class="card-text">
          <h2>{{ quiz.title }}</h2>
          <p>{{ quiz.count }} Questions</p>
        </div>
      </div>
    </RouterLink>
  </div>
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