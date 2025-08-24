<script setup>
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamHeader from "@/components/Teams/TeamHeader.vue"
import TeamFooter from "@/components/Teams/TeamFooter.vue"
// import team from "@/team.json"
import { useTeamStore } from "@/store/TeamStore";
import Modal from "@/components/Teams/Modal.vue";
import { ref } from "vue";

let team = useTeamStore();

team.fill()

let showModal = ref(false)


</script>

<template>
    <div class="">
        <TeamHeader @add="showModal = true" />


        <div class="place-self-center flex flex-col gap-y-3">
            <TeamMembers :team="team" />
        </div>
        <TeamFooter :team="team" />

        <Modal :show="showModal" @close="showModal = false">
            <template #default>
                <p>
                    Need to add a new member to your team ?
                </p>
                <form class="mt-4">
                    <div class="flex gap-6">
                        <input type="email" placeholder="email address" class="flex-1 p-2"/>
                        <button>Submit</button>
                    </div>
                </form>
            </template>
            <template #footer>
                Close
            </template>
        </Modal>

    </div>
</template>

<style></style>