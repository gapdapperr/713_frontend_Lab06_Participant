<script setup lang="ts">
import { toRefs } from 'vue';
import type { Participant } from '@/types';
const props = defineProps<{ participant: Participant, id: string }>();
const { participant } = toRefs(props);
</script>

<template>
    
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
    
    
</template>