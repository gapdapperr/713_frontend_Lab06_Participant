<script setup lang="ts">
import { ref } from 'vue'
import ParticipantCard from '@/components/ParticipantCard.vue'
const participants = ref([
{
    id: 1,
    name: 'Participant 1',
    email: 'username@example.com',
    events: [
        { id: 1, title: 'Event 1', category: 'Category 1', description: 'Description 1', location: 'Location 1', date: '2023-01-01', time: '10:00 AM', petsAllowed: true },
        { id: 2, title: 'Event 2', category: 'Category 2', description: 'Description 2', location: 'Location 2', date: '2023-02-01', time: '02:00 PM', petsAllowed: false },
    ]
},
{
    id: 2,
    name: 'Participant 2',
    email: 'username2@example.com',
    events: [
        { id: 3, title: 'Event 3', category: 'Category 3', description: 'Description 3', location: 'Location 3', date: '2023-03-01', time: '09:00 AM', petsAllowed: true },
]
},
{
    id: 3,
    name: 'Participant 3',
    email: 'username3@example.com',
    events: [
        { id: 4, title: 'Event 4', category: 'Category 4', description: 'Description 4', location: 'Location 4', date: '2023-04-01', time: '11:00 AM', petsAllowed: false },
        { id: 5, title: 'Event 5', category: 'Category 5', description: 'Description 5', location: 'Location 5', date: '2023-05-01', time: '03:00 PM', petsAllowed: true },
    ]
}
])

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