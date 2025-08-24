<template>
    <transition 
        enter-from-class="opacity-0 scale-160"
        enter-to-class="opacity-100 scale-100"
        enter-active-class="transition duration-300"
        leave-active-class="transition duration-200"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-190"
    >
        <div v-if="show" class="grid place-items-center fixed inset-0 bg-black/60">
            <div class="bg-white p-4 w-5/6 md:w-xl rounded-lg">
                <div class="border-b mb-4 p-4">
                    <slot>default body</slot>
                </div>
                <footer>
                    <button
                        class="cursor-pointer bg-gray-300 rounded-4xl px-2 py-1 transition duration-200 ease-out hover:scale-x-110"
                        @click="$emit('close')">
                        <slot name="footer"></slot>
                    </button>
                </footer>
            </div>
        </div>
    </transition>
</template>

<script setup>
defineProps({
    show: Boolean
})

</script>