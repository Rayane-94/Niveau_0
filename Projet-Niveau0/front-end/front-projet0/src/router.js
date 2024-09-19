import { createRouter, createWebHistory } from 'vue-router';
import UserList from './components/UserList.vue';
import UserDetails from './components/UserDetails.vue';
import AddUser from './components/AddUser.vue';

const routes = [
  { path: '/', component: UserList },
  { path: '/user/:id', component: UserDetails },
  { path: '/add-user', component: AddUser } // Route pour ajouter un utilisateur
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
