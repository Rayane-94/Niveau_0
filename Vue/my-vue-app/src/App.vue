<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Task from './components/Task.vue'

import {ref} from "vue"

let tasks = ref([])

fetch ('http://localhost:8000/tasks')
 .then(response => response.json())
 .then(backendTasks => {
  tasks.value = backendTasks
  console.log(backendTasks)
 })

</script>

<template>
  <h1>To do list</h1>
  
  <HelloWorld msg="Vite + Vue" />
  <Task msg = "my task " />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
