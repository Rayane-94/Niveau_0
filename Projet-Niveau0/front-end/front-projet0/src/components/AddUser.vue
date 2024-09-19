<template>
    <div>
      <h1>Ajouter un utilisateur</h1>
      <form @submit.prevent="addUser">
        <div>
          <label for="email">Adresse e-mail:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Mot de passe:</label>
          <input type="password" id="password" v-model="password" required />
          <button type="submit">Ajouter</button>
        </div>
      </form>
      <button @click="goBack">Accueil</button> 
    </div>
  </template>
  
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router'; // Importer useRouter
  
  const router = useRouter(); // Créer une instance de router
  
  const email = ref('');
  const password = ref('');
  
  const addUser = () => {
    fetch('http://localhost:8000/add_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        adresse_email: email.value,
        mot_de_passe: password.value,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Utilisateur ajouté:', data);
        // Optionnel : réinitialiser les champs du formulaire
        email.value = '';
        password.value = '';
      })
      .catch(error => console.error('Erreur:', error));
  };
  
  function goBack() {
    router.push('/'); // Utiliser router pour naviguer
  }
  </script>
  