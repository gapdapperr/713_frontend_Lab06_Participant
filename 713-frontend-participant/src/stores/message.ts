import type { MessageState } from "@/types";
import { defineStore } from "pinia";
export const useMessageStore = defineStore('message', {
    state: (): MessageState => ({
        message: '',
    }),
    actions: {
        resetMessage() {
            this.message = '';
        },
        updateMessage(message: string) {
            this.message = message;
    }
    }});
