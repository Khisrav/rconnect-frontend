<script>
import HomeHeader from '../components/HomeHeader.vue';
import HomeFooter from '../components/HomeFooter.vue';
import { initFlowbite } from 'flowbite';
export default {
    components: {
        HomeHeader,
        HomeFooter
    },
    mounted() {
        initFlowbite()
    }
}
</script>

<template>
    <HomeHeader/>

    asd

    <HomeFooter/>
</template>