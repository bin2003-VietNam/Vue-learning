<template>
    <div class="flex flex-col items-center justify-center h-auto mb-3" v-show="assignments.length">
        <h2 class="mb-6 font-bold">
            {{ title }}
            <span>({{ assignments.length }})</span>
        </h2>

        <AssignmentTags 
                        :initial-tags="assignments.map(a => a.tag)" 
                        :currentTag="currentTag"
                        @change="currentTag = $event"
            />

        <ul class="border border-gray-500 divide-ydivide-gray-500 w-full h-full mt-6">
            <Assignment v-for="assignment in filteredAssignment" :key="assignment.name" :assignment="assignment" />
        </ul>
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
        title: String
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