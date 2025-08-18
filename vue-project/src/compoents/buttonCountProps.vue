<script setup>
defineProps(['name'])
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <h1>Hi my name is {{ name }}</h1>
</template>