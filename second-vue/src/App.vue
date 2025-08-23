<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TeamView from './views/TeamView.vue';

</script>

<template>
  <div class="p-10">
    <!-- <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">about</router-link>
      <router-link to="/contact">contact</router-link>
      <router-link to="/counter">counter</router-link>

    </nav>

    <RouterView /> -->
    <TeamView />
  </div>

</template>
