<script>
import ChatBubbleActions from './ChatBubbleActions.vue';

export default {
    components: {
        ChatBubbleActions
    },
    props: ['messageText', 'messageType']
}
</script>

<template>
    <div class="flex items-center group">
        <p class="px-6 py-3 rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">Shall we go for Hiking this weekend?</p>
        <chat-bubble-actions/>
    </div>
</template>