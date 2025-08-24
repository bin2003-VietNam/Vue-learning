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




</script>

<template>
    <div class="">
        <TeamHeader @add="showModal = true" />


        <div class="place-self-center flex flex-col gap-y-3">
            <TeamMembers :team="team" />
        </div>
        <TeamFooter :team="team" />

    </div>
</template>

<style></style>