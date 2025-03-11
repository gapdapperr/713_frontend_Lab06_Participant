<script setup lang="ts">
import { toRefs } from 'vue';
import type { Participant } from '@/types';
const props = defineProps<{ participant: Participant, id: string }>();
const { participant } = toRefs(props);
</script>

<template>
    <div class="participant-card">
        <h1>{{ participant.name }}</h1>
        <p>{{ participant.email }}</p>
        <div  v-for="events in participant.events" :key="events.id" class="participant-event-box">
            <p>Event {{ events.id }}</p>
            <p>Title: {{ events.title}}</p>
            <p>Time: {{ events.time }}</p>
            <p>Date: {{ events.date }}</p>
            <p>Location: {{ events.location }}</p>
            <p>Description: {{ events.description }}</p>
            <p>Pet Allowed: {{ events.petsAllowed }}</p>
        </div>
    </div>
    
</template>

<style scoped>
.participant-card {
    padding: 20px;
  width: 350px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  margin: auto;
}

.participant-event-box {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin: auto;
    margin-bottom: 20px;
}
</style>