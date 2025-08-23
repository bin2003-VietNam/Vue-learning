<script setup>
import {useCounterStore} from '@/store/counterStore'
let counter = useCounterStore();
</script>

<template>
  <div class="about">
    <h1>{{ counter.count }}</h1>
    <button 
    :disabled="!counter.remaining"
    @click="counter.increment()">Increment ({{ counter.remaining }}) Remaining</button>
  </div>
</template>

<style></style>
