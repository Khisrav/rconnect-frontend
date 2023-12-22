<script>
export default {
    data() {
        return {
            textareaContent: '',
            minRows: 1, // Minimum number of rows
            maxRows: 5,
        }
    },
    computed: {
        numberOfRows() {
            return 1
        },
    },
}
</script>

<template>
    <div class="flex flex-row items-center p-2 pb-1">
        <button type="button" class="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-5 h-5">
            <svg class="w-full h-full text-gray-600 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
        </button>
        <button type="button" class="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-5 h-5">
            <svg class="w-full h-full text-gray-600 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                <path fill="currentColor" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"/>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"/>
            </svg>
        </button>
        <button type="button" class="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-5 h-5">
            <svg class="w-full h-full text-gray-600 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 3h-2l-.447-.894A2 2 0 0 0 12.764 1H7.236a2 2 0 0 0-1.789 1.106L5 3H3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a2 2 0 0 0-2-2Z"/>
            </svg>
        </button>
        <button type="button" class="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-5 h-5">
            <svg class="w-full h-full text-gray-600 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"/>
            </svg>
        </button>
        <div class="relative flex-grow">
            <label>
                <textarea v-model="textareaContent" :rows="numberOfRows" @input="adjustRows" class="rounded-lg bg-gray-200 border-none py-2 w-full dark:border-gray-800 dark:focus:border-gray-700 dark:bg-gray-800 dark:focus:bg-gray-900 focus:outline-none dark:text-gray-300 focus:shadow-md transition duration-300 ease-in" placeholder="Aa"></textarea>
            </label>
        </div>
        <button type="button" class="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6">
            <svg class="w-full h-full text-gray-600 dark:text-gray-300 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
    <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
  </svg>
        </button>
    </div>
</template>