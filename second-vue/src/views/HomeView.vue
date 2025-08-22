<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import { onMounted, watch } from 'vue';
import { ref } from 'vue';
import { useFlash } from '@/composables/useFlash';
import { useStorage } from '@/composables/useStorage';

let { flash } = useFlash();
let message = ref('hello world');
let doSomgthing = (a, b) => {
  return a + b
}

let food = useStorage('food');
let age = useStorage('age');

let obj = useStorage('obj', { one: 'one' });

setTimeout(()=>{
  obj.value.one = 'CHANGED'
}, 3000)

</script>

<template>
  <main>
    <the-welcome />
    <p>{{ message }} + {{ doSomgthing(1, 2) }}</p>
    <P>
      <input type="text" v-model="message" />
      <button @click="flash('message')">Button</button>
    </P>

    <p>
      What is your favorite food
      <input type="text" v-model="food" />
    </p>
    <p>
      What is Age
      <input type="text" v-model="age" />
    </p>

  </main>
</template>
