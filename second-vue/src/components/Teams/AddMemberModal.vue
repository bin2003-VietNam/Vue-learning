<template>

    <div>
        <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
            :disabled="!team.spotsRemaining" @click="showModal = true">Add Member ({{ team.spotsRemaining }} Spots
            Left)</button>

        <Teleport to="body">
            <Modal :show="showModal" @close="showModal = false">
                <template #default>
                    <p>
                        Need to add a new member to your team ?
                    </p>
                    <form class="mt-4">
                        <div class="flex gap-6">
                            <input type="email" placeholder="email address" class="flex-1 p-2" />
                            <button>Submit</button>
                        </div>
                    </form>
                </template>
                <template #footer>
                    Close
                </template>
            </Modal>
        </Teleport>

    </div>
</template>

<script setup>
import Modal from './Modal.vue';
import { ref } from "vue";
import { useTeamStore } from '@/store/TeamStore';
let showModal = ref(false)
let team = useTeamStore()
</script>