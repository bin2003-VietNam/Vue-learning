<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import { onMounted } from 'vue';
import { ref } from 'vue';

let message = ref('hello world');

let doSomgthing = (a, b) => {
  return a+b
}

let clickMe = () => {
  alert('clicked')
}

</script>

<template>
  <main>
    <the-welcome />
    <p>{{ message }} + {{ doSomgthing(1,2) }}</p>
    <P>
      <input type="text" v-model="message" />
      <button @click="clickMe">Button</button>
    </P>
  </main>
</template>
