<script>
export default {
    props: {
        assignment: Object,
    }
};
</script>
<template>
    <li>
        <label>
            {{ assignment.name }}
            <input type="checkbox" v-model="assignment.completed" />
        </label>
    </li>
</template>