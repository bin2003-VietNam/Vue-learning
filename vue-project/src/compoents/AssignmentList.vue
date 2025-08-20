<template>
    <div class="flex flex-col items-center justify-center h-auto mb-3" v-show="assignments.length">
        <h2 class="mb-6 font-bold">
            {{ title }}
            <span>({{ assignments.length }})</span>
        </h2>

        <div class="flex gap-2">
            <button v-for="tag in tags" v-bind:key="tag" 
                @click="currentTag = tag"
                class="border rounded px-1 py-px text-xs"
                :class="{
                    'border-blue-500 text-blue-500': tag === currentTag
                }"
                >
                {{ tag }}
            </button>
        </div>

        <ul class="border border-gray-500 divide-ydivide-gray-500 w-full h-full mt-6">
            <Assignment v-for="assignment in filteredAssignment" :key="assignment.name" :assignment="assignment" />
        </ul>
    </div>
</template>

<script>
import Assignment from './Assignment.vue';
export default {
    data() {
        return {
            currentTag: 'all'
        }
    },
    props: {
        assignments: Array,
        title: String
    },
    components: {
        Assignment
    },
    computed: {
        tags() {
            return ['all', ...new Set(this.assignments.map(a => a.tag))]
        },
        filteredAssignment() {
            if (this.currentTag == "all")
                return this.assignments
            return this.assignments.filter(a => a.tag == this.currentTag)
        }
    }
};
</script>