<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
  tasks: Array,
})

</script>

<template>

  <div v-for="(task, iTask) in tasks">
    {{ task.name }}

  </div>
  
  <h1>{{ msg }}</h1>
 
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
