<script setup>
import QuizFooter from "@/components/quiz/QuizFooter.vue";
import { provide, ref } from "vue";

defineProps({
    quiz: Object
})

let name = ref("Nguyen Van Bin")

provide('name', {
    name,
    changeName: () => {
        name.value = Math.random()
    }
})

</script>

<template>

    <QuizFooter :quiz="quiz"></QuizFooter>
</template>