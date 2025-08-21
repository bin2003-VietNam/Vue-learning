<script>
import AssignmentList from './AssignmentList.vue';
import AssignmentCreate from './AssignmentCreate.vue';

export default {
    data() {
        return {
            name: 'John Doe',
            like: 0,
            active: false,
            assignments: [],
            showCompleted: true
        };
    },
    created() {
        fetch("http://localhost:3001/assignments")
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
            });
    },

    methods: {
        likeAndSub() {
            this.like++;
            this.toggle();
        },
        toggle() {
            this.active = !this.active;
        },
        add(name) {
            this.assignments.push(({
                name: name,
                completed: false
            }));
            this.newAssignment = ""
        }

    },

    computed: {
        filters() {
            return {
                completed: this.assignments.filter(assignment => assignment.completed),
                inProgress: this.assignments.filter(assignment => !assignment.completed)
            }
        }
    },

    components: {
        AssignmentList,
        AssignmentCreate
    }
};
</script>

<template>
    <div class="flex flex-row gap-5  justify-center w-full h-auto">
        <AssignmentList :assignments="filters.inProgress" title="inProgress Assignment">
            <AssignmentCreate @add="add" />
        </AssignmentList>

        <div v-show="showCompleted">
            <AssignmentList  :assignments="filters.completed" title="Completed Assignment"
                can-toggle @toggle="showCompleted = !showCompleted">
            </AssignmentList>
        </div>
    </div>
</template>