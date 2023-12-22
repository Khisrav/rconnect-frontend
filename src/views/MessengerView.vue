<script>
import UserNavbar from '../components/UserNavbar.vue';
import ChatInputController from '../components/messenger/ChatInputController.vue';
import ChatsList from '../components/messenger/ChatsList.vue';
import ChatBody from '../components/messenger/ChatBody.vue';

export default {
    components: {
        UserNavbar,
        ChatInputController,
        ChatsList,
        ChatBody,
    },
    mounted() {
    }
}
</script>

<template>
    <div>
        <UserNavbar></UserNavbar>
        <main class="md:ml-64 pt-16">
            <div class="mx-auto max-w-6xl">
                <div class="messenger-container w-full flex antialiased text-gray-900 bg-white dark:text-gray-200 dark:bg-gray-900 overflow-hidden">
                    <div class="flex-1 flex flex-col">
                        <div class="flex-grow flex flex-row min-h-0">
                            <!--ALL CHATS-->
                            <chats-list/>

                            <!--CHAT SECTION-->
                            <section class="flex flex-col flex-auto border-l dark:border-gray-800 border-gray-200">
                                <div class="chat-header px-4 py-3 flex flex-row flex-none justify-between items-center">
                                    <div class="flex">
                                        <div class="w-8 h-8 mr-4 relative flex flex-shrink-0">
                                            <img class="shadow-md rounded-full w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/33.jpg" alt=""/>
                                        </div>
                                        <div class="text-sm">
                                            <p class="font-bold">Scarlett Johansson</p>
                                            <p class="text-xs">Active 1h ago</p>
                                        </div>
                                    </div>

                                    <div class="flex">
                                        <a href="#" class="block bg-gray-100 hover:bg-gray-300 rounded-full dark:hover:bg-gray-700 dark:bg-gray-800 w-8 h-8 p-2">
                                            <svg class="w-full h-full fill-current text-gray-800 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z"/></svg>
                                        </a>
                                        <a href="#" class="block bg-gray-100 hover:bg-gray-300 rounded-full dark:hover:bg-gray-700 dark:bg-gray-800 w-8 h-8 p-2 ml-4">
                                            <svg class="w-full h-full fill-current text-gray-800 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14"><path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"/></svg>
                                        </a>
                                        <a href="#" class="block bg-gray-100 hover:bg-gray-300 rounded-full dark:hover:bg-gray-700 dark:bg-gray-800 w-8 h-8 p-2 ml-4">
                                            <svg class="w-full h-full fill-current text-gray-800 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/></svg>
                                        </a>
                                    </div>
                                </div>

                                <!--CHAT BODY-->
                                <chat-body />

                                <div class="chat-footer flex-none">
                                    <chat-input-controller/>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
.messenger-container {
    height: calc(100vh - 64px);
}
</style>