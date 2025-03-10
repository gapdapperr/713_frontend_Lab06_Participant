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
    <nav>
            <router-link :to="{ name: 'participant-detail-view', params: {id} }">Details</router-link>
            <router-link :to="{ name: 'participant-edit-view', params: {id} }">Edit</router-link>
        </nav>
        <router-view :participant="participant"></router-view>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>