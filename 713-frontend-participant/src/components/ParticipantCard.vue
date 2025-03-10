<script setup lang="ts">
import type { Participant } from '@/types'

defineProps<{ participant: Participant }>()
</script>

<template>
  <div class="participant-class">
    <div class="participant-card">
        <h2>{{ participant.name }}</h2>
        <p>{{ participant.email }}</p>
    </div>
  </div>
</template>

<style scoped>
.participant-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.participant-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
