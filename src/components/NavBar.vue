<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="navbar-container">
    <RouterLink active-class="active" to="/">Home</RouterLink>
    <RouterLink active-class="active" to="/about">About</RouterLink>
  </div>
</template>

<style scoped>
.navbar-container {
  height: 50px;
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  background-color: azure;
  margin: 0 20px;
}
.active {
  font-weight: bold;
  color: rgb(153, 104, 14);
}
a {
  margin: 0 20px;
  cursor: pointer;
}
</style>