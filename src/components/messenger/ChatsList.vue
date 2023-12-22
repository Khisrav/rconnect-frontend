<script>
import ChatListItem from './ChatsListItem.vue'

export default {
    data() {
        return {
            currentChatID: 1,
            contactsList: [
                {
                    id: 1,
                    contactName: 'Hulk',
                    lastMessageText: 'Hello buddy',
                    lastMessageTime: '09:20',
                    avatarURL: 'https://randomuser.me/api/portraits/men/11.jpg',
                    isNewMessage: true,
                    isOnline: false,
                },
                {
                    id: 2,
                    contactName: 'Iron Man',
                    lastMessageText: 'Where is Thor?',
                    lastMessageTime: '22:22',
                    avatarURL: 'https://randomuser.me/api/portraits/men/12.jpg',
                    isNewMessage: false,
                    isOnline: true
                },
            ]
        }
    },
    components: {
        ChatListItem,
    }
}

</script>


<template>
    <section class="flex flex-col flex-none overflow-auto w-24 group lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out">
        <div class="header p-4 flex flex-row justify-between items-center flex-none">
            <p class="text-md font-bold hidden md:block group-hover:block">Сообщения</p>
            <a href="#" class="p-2 md:block group-hover:block text-gray-500 dark:bg-gray-800 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17v1a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2M6 1v4a1 1 0 0 1-1 1H1m13.14.772 2.745 2.746M18.1 5.612a2.086 2.086 0 0 1 0 2.953l-6.65 6.646-3.693.739.739-3.692 6.646-6.646a2.087 2.087 0 0 1 2.958 0Z"/></svg>
            </a>
        </div>
        <div class="search-box px-4 pb-2 flex-none">
            <form onsubmit="">
                <div class="relative">
                    <label>
                        <input class="rounded-lg bg-gray-100 border-none py-2 pr-6 pl-10 w-full dark:border-gray-800 dark:focus:border-gray-700 dark:bg-gray-800 dark:focus:bg-gray-900 focus:outline-none dark:text-gray-200 focus:shadow-md transition duration-300 ease-in"
                            type="text" value="" placeholder="Search Messenger"/>
                        <span class="absolute top-0 left-0 mt-2 ml-3 inline-block">
                            <svg viewBox="0 0 24 24" class="w-6 h-6">
                                <path fill="#bbb"
                                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
                            </svg>
                        </span>
                    </label>
                </div>
            </form>
        </div>
        <div class="contacts p-2 flex-1 overflow-y-scroll text-sm">
<!--             
            <div class="flex my-1 justify-between items-center p-3 dark:hover:bg-gray-800 hover:bg-gray-100 rounded-lg relative">
                <div class="w-12 h-12 relative flex flex-shrink-0">
                    <img class="shadow-md rounded-full w-full h-full object-cover"
                        src="https://randomuser.me/api/portraits/women/61.jpg"
                        alt=""
                    />
                </div>
                <div class="flex-auto min-w-0 ml-2 hidden md:block group-hover:block">
                    <p>Angelina Jolie <span class="float-right">11:39</span></p>
                    <div class="flex items-center text-sm text-gray-600">
                        <div class="min-w-0">
                            <p class="truncate">Ok, see you at the subway in a bit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex my-1 justify-between items-center p-3 dark:hover:bg-gray-800 hover:bg-gray-100 rounded-lg relative">
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
            </div>
            <div class="flex my-1 justify-between items-center p-3 dark:hover:bg-gray-800 hover:bg-gray-100 rounded-lg relative bg-gray-100 dark:bg-gray-800">
                <div class="w-12 h-12 relative flex flex-shrink-0">
                    <img class="shadow-md rounded-full w-full h-full object-cover"
                        src="https://randomuser.me/api/portraits/women/33.jpg"
                        alt=""
                    />
                </div>
                <div class="flex-auto min-w-0 ml-2 hidden md:block group-hover:block">
                    <p>Scarlett Johansson <span class="float-right">11:39</span></p>
                    <div class="flex items-center text-sm text-gray-600">
                        <div class="min-w-0">
                            <p class="truncate">You sent a photo.</p>
                        </div>
                    </div>
                </div>
            </div> -->
            <chat-list-item 
                v-for="contact in contactsList" 
                :key="contact.id" 
                :contactName="contact.contactName"
                :lastMessageText="contact.lastMessageText"
                :lastMessageTime="contact.lastMessageTime"
                :avatar="contact.avatarURL"
                :isNewMessage="contact.isNewMessage"
                :isOnline="contact.isOnline"
                :isCurrent="currentChatID == contact.id"
            />
        </div>
    </section>
</template>