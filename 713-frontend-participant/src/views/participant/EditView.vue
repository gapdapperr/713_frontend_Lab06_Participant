<script setup lang="ts">
import { toRefs } from 'vue';
import type { Participant } from '@/types';
import { useRouter } from 'vue-router';
import { useMessageStore } from '@/stores/message';
const props = defineProps<{ participant: Participant, id: string }>();
const store = useMessageStore();
const { participant } = toRefs(props);
const router = useRouter();
const edit = () => {
    store.updateMessage('You are successfully registered for ' + props.participant.name); 
    setTimeout(() => {
        store.updateMessage('');
    }, 3000);
    router.push({ name: 'participant-detail-view'});
}
</script>

<template>
           <p>Edit participant here</p>
    <button @click="edit">Edit</button>
</template>