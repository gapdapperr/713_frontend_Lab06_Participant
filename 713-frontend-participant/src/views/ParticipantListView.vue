<script setup lang="ts">
import { ref } from 'vue'
import type { Participant } from '@/types'
import ParticipantCard from '@/components/ParticipantCard.vue'
import participantService from '@/services/ParticipantService.ts'
const participants = ref<Participant[]>([])
interface ParticipantReponse {
  data: Participant[]
}
participantService.getParticipants().then((response: ParticipantReponse) => {
  participants.value = response.data
})
</script>

<template>
  <h1>All Participants</h1>
  <div class="participants">
    <ParticipantCard v-for="participant in participants" :key="participant.id" :participant="participant"/>
  </div>
</template>

<style scoped>
.participants {
  display: flex;
  flex-direction: column;
  align-items: center;
}</style>