<script setup>
import {coutner} from '@/store/counterStore'
</script>

<template>
  <div class="about">
    <h1>{{ coutner.count }}</h1>
    <button @click="coutner.increment">Button</button>
  </div>
</template>

<style></style>
