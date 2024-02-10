<script>
import HomeHeader from '../components/HomeHeader.vue';
import HomeViewBlock0 from '../components/HomeViewBlocks/HomeViewBlock0.vue';
import HomeViewBlock1 from '../components/HomeViewBlocks/HomeViewBlock1.vue';
import HomeViewBlock2 from '../components/HomeViewBlocks/HomeViewBlock2.vue';
import HomeViewBlock3 from '../components/HomeViewBlocks/HomeViewBlock3.vue';
import HomeViewBlockFooter from '../components/HomeViewBlocks/HomeViewBlockFooter.vue';
import { initFlowbite } from 'flowbite';

export default {
    components: {
        HomeHeader,
        HomeViewBlock0,
        HomeViewBlock1,
        HomeViewBlock2,
        HomeViewBlock3,
        HomeViewBlockFooter
    },
    mounted() {
        initFlowbite()
    }
} 
</script>

<template>
<div>
    <HomeHeader/> 
    
    <HomeViewBlock0/>

    <HomeViewBlock1/>
    
    <HomeViewBlock3/>

    <HomeViewBlock2/>

    <HomeViewBlockFooter/>
</div>
</template>
