<template>
    <div>

      <h1>Détails de l'utilisateur</h1>
      <p>Idientifiant n°: {{ user._id }}</p>
      <p>Adresse e-mail: {{ user.adresse_email }}</p>
      
      
      
      <button @click="goBack">Accueil</button> 
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router'; 
  
  const route = useRoute();
  const router = useRouter(); 
  const user = ref({});
  
  onMounted(() => {
    const userId = route.params.id;
    fetch(`http://localhost:8000/get_user/${userId}`)
      .then(response => response.json())
      .then(data => {
        user.value = data;
      })
      .catch(error => console.error('Erreur:', error));
  });
  
 
  function goBack() {
    router.push('/'); 
  }
  </script>
  