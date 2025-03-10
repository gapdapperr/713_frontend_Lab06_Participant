<script setup lang="ts">
import { ref } from 'vue';
import type { Participant } from '@/types';
import participantService from '@/services/ParticipantService.ts';
const participant = ref<Participant>()
const props = defineProps<{ id: string }>()
const id = Number(props.id)
participantService.getParticipant(id).then((response) => {
    participant.value = response.data
})
.catch((error) => {
    console.log('There was an error!', error)
})
</script>

<template>
    <div v-if="participant">
        <h1>{{ participant.name }}</h1>
        <p>{{ participant.email }}</p>
        <div  v-for="events in participant.events" :key="events.id">
            <p>{{ events.title}}</p>
            <p>{{ events.time }}</p>
            <p>{{ events.date }}</p>
            <p>{{ events.location }}</p>
            <p>{{ events.description }}</p>
            <p>{{ events.petsAllowed }}</p>
        </div>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>