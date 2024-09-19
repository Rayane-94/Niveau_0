<template>
    <div>
      <h1>Liste des utilisateurs</h1>
      <router-link to="/add-user">
        <button>Ajouter un utilisateur</button>
      </router-link>
      <ul>
        <li v-for="user in users" :key="user._id">
          {{ user.adresse_email }}
          <router-link :to="'/user/' + user._id">
            <button>Détails</button>
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const users = ref([]);
  
  onMounted(() => {
    fetch('http://localhost:8000/get_user')
      .then(response => response.json())
      .then(data => {
        users.value = data;
      })
      .catch(error => console.error('Erreur:', error));
  });
  </script>
  