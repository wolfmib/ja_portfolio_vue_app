// router/router.js
import { createRouter, createWebHistory } from 'vue-router';
import LiveOnMarsComponent from '../components/LiveOnMarsComponent.vue'; // Adjust the import path as per your component folder
import HOME from '../views/HomeView.vue'; // Ensure the import path matches the actual location of the Home.vue file


const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HOME // Lazy load the Home view component
  },
  {
    path: '/live_on_mars',
    name: 'LiveOnMars',
    component: LiveOnMarsComponent // Component for the "Live on Mars" route
  }
];

const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode for clean URLs
  routes
});

export default router;