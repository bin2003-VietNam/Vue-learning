<script setup>
import { inject } from 'vue';
let { name, changeName } = inject('name')
</script>

<template>
    <button @click="changeName">This is my {{ name }}</button>
</template>