<script setup lang="ts">
import { toRefs } from 'vue';
import type { Participant } from '@/types';
import { useRouter } from 'vue-router';
const props = defineProps<{ participant: Participant, id: string }>();
const { participant } = toRefs(props);
const router = useRouter();
const edit = () => {
    router.push({ name: 'participant-detail-view'});
}
</script>

<template>
           <p>Edit participant here</p>
    <button @click="edit">Edit</button>
</template>