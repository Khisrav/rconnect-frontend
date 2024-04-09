<script>
import UserNavbar from '../components/UserNavbar.vue';

export default {
    data() {
        return {
            avatarSVG: ''
        };
    },
    components: {
        UserNavbar
    }
};

</script>

<template>
<div>
    <UserNavbar></UserNavbar>
    <main class="p-4 md:ml-64 h-auto pt-20 bg-slate-200 dark:bg-gray-900 text-gray-900 dark:text-white">
        hello there
    </main>
</div>
</template>