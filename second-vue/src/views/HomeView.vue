<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useFlash } from '@/composables/useFlash';

let { flash } = useFlash();
let message = ref('hello world');

let doSomgthing = (a, b) => {
  return a+b
}

</script>

<template>
  <main>
    <the-welcome />
    <p>{{ message }} + {{ doSomgthing(1,2) }}</p>
    <P>
      <input type="text" v-model="message" />
      <button @click="flash('message')">Button</button>
    </P>
  </main>
</template>
