<script>

export default {
    data() {
        return {
        }
    },
    props: ['contactName', 'lastMessageText', 'avatar', 'lastMessageTime', 'isNewMessage', 'isOnline', 'isCurrent']
}
</script>

<template>
    <div class="flex my-1 justify-between items-center p-3 dark:hover:bg-gray-800 hover:bg-gray-100 rounded-lg relative" :class="{'dark:bg-gray-800 bg-gray-100': isCurrent }">
        <div class="w-12 h-12 relative flex flex-shrink-0">
            <img class="shadow-md rounded-full w-full h-full object-cover" :src="avatar" alt=""/>
            <div v-if="isOnline" class="absolute bg-white dark:bg-gray-900 p-1 rounded-full bottom-0 right-0">
                <div class="bg-green-500 rounded-full w-3 h-3"></div>
            </div>
        </div>
        <div class="flex-auto min-w-0 ml-2 hidden md:block group-hover:block">
            <p :class="{'font-semibold': isNewMessage}">{{ contactName }} <span class="float-right font-normal">{{ lastMessageTime }}</span></p>
            <p class="truncate" :class="{'dark:text-white text-black': isNewMessage, 'text-gray-500': !isNewMessage}">
                {{ lastMessageText }}
                <span v-show="isNewMessage" class="float-right bg-blue-400 w-3 h-3 mt-1 rounded-full inline-block"></span>
            </p>
        </div>
    </div>





    <!-- <div class="flex my-1 justify-between items-center p-3 dark:hover:bg-gray-800 hover:bg-gray-100 rounded-lg relative">
        <div class="w-12 h-12 relative flex flex-shrink-0">
            <img class="shadow-md rounded-full w-full h-full object-cover"
                src="https://randomuser.me/api/portraits/men/97.jpg"
                alt=""
            />
            <div class="absolute bg-white dark:bg-gray-900 p-1 rounded-full bottom-0 right-0">
                <div class="bg-green-500 rounded-full w-3 h-3"></div>
            </div>
        </div>
        <div class="flex-auto min-w-0 ml-2 hidden md:block group-hover:block">
            <p class="font-semibold">Tony Stark <span class="float-right">11:39</span></p>
            <p class="truncate">Hey, Are you there? <span class="float-right bg-blue-700 w-3 h-3 mt-1 rounded-full inline-block"></span></p>
        </div>
    </div> -->
</template>