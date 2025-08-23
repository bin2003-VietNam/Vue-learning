<script setup>
import { inject } from 'vue';
import { state } from '@/store/quizStore'
</script>

<template>
    <div>
        <button>This is my {{ state.name }}</button>
        <div>
            <div v-for="question in state.question" v-bind:key="question">
                {{ question }}
            </div>
        </div>
    </div>
</template>