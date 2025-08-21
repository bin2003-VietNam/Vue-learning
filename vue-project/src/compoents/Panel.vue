<script>
export default {
    props:{
        theme: {
            type: String,
            default: 'dark'
        }
    }
}
</script>
<template>
    <div :class="{
        'p-4 rounded-lg ': true,
        'bg-gray-700 border border-gray-600 text-white' : theme == 'dark',
        'bg-white border border-gray-300 text-black' : theme == 'light',
    }">
        <h2 class="font-bold" v-if="$slots.heading">
            <slot name="heading"/>
        </h2>

        <footer v-if="$slots.footer">
            <slot name="footer"/>
        </footer>

        <slot name="default"/>
    </div>
</template>