<template>
  <header>
    <img alt="logo etude" class="logo" src="./assets/studying.png" width="64" height="64" />
    <h1>Close Classrom </h1>
    <div class="wrapper"></div>
  </header>

  <main>
   
    <router-view></router-view>
  </main>
</template>


<script setup>
import UserList from './components/UserList.vue';
import AddUser from './components/AddUser.vue';
</script>

<style scoped>
h1 {
  flex: 1;
  text-align: center; 
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
