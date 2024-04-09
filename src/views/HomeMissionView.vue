<script>
import HomeHeader from '../components/HomeHeader.vue';
import HomeViewBlockFooter from '../components/HomeFooter.vue';
import { initFlowbite } from 'flowbite';

export default {
    components: {
        HomeHeader,
        HomeViewBlockFooter
    },
    mounted() {
        initFlowbite()
    },
    data() {
        return {
        }
    }
}
</script>

<template>
    <HomeHeader/>

    <main>
        <div class="py-16 px-4 mx-auto max-w-screen-xl">asd</div>
    </main>
    <HomeViewBlockFooter/>
</template>