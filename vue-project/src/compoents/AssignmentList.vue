<template>
    <div class=" w-70 h-40 mb-3" v-show="assignments.length">
        <div class="flex justify-between items-start">
            <h2 class="mb-6 font-bold ">
                {{ title }}
                <span>({{ assignments.length }})</span>
            </h2>
            <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
        </div>

        <AssignmentTags v-model:currentTag="currentTag" :initial-tags="assignments.map(a => a.tag)" />

        <ul class="border border-gray-500 divide-ydivide-gray-500 w-full h-full mt-6">
            <Assignment v-for="assignment in filteredAssignment" :key="assignment.name" :assignment="assignment" />
        </ul>

        <slot></slot>

    </div>
</template>

<script>
import Assignment from './Assignment.vue';
import AssignmentTags from './AssignmentTags.vue'
export default {
    data() {
        return {
            currentTag: 'all'
        }
    },
    props: {
        assignments: Array,
        title: String,
        canToggle: {type: Boolean, default: false}
    },
    components: {
        Assignment,
        AssignmentTags
    },
    computed: {
        filteredAssignment() {
            if (this.currentTag == "all")
                return this.assignments
            return this.assignments.filter(a => a.tag == this.currentTag)
        }
    },
    methods: {
    }
};
</script>