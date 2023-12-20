<script>

</script>

<template>
    <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
            <component :is="Component" :key="$route.path" />
        </transition>
    </router-view>
</template>

<style>
.slide-enter-active, .slide-leave-active {
    transition: opacity .1s;
}
.slide-enter-from, .slide-leave-to {
    opacity: 0;
    /* transform: translateX(-30%); */
}
</style>