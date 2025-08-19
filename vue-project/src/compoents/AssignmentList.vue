<script>
import Assignment from './Assignment.vue';
export default {
    props: {
        assignments: Array,
        title: String
    },
    components: {
        Assignment
    },
};
</script>

<template>
    <div class="flex flex-col items-center justify-center h-auto mb-3" v-show="assignments.length">
        <h2 class="mb-6 font-bold">{{ title }}</h2>
        <ul class="border border-gray-500 divide-ydivide-gray-500 w-full h-full">
            <Assignment
                v-for="assignment in assignments"
                :key="assignment.name"
                :assignment="assignment" />
        </ul>
    </div>
</template>