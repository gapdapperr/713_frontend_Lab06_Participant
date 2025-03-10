<script setup lang="ts">
import { ref } from 'vue';
import ParticipantCard from '@/components/ParticipantCard.vue';
const participants = ref([
    {id: 1, name: 'Participant 1'},
    {id: 2, name: 'Participant 2'},
    {id: 3, name: 'Participant 3'}
])
</script>

<template>
    <div v-if="participants.length === 0">No participants</div>
    <div v-else>
        <ParticipantCard v-for="participant in participants" :key="participant.id" />
    </div>
</template>