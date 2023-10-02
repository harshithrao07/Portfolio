<template>
    <nav class="d-flex justify-space-between align-center px-16 my-4">
        <div class="left">
            <h2><span class="golden-words">H</span>arshith <span class="golden-words">R</span>ao.</h2>
        </div>
        <div class="right d-flex justify-center">
            <ul v-for="(item, index) in navItems" :key="index" class="mx-3">
                <li>{{ item.name }}</li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
let navItems = ref([
    {
        name: "Home",
        to: "/"
    },
    {
        name: "About",
        to: "/"
    },
    {
        name: "Services",
        to: "/"
    },
    {
        name: "Projects",
        to: "/"
    },
    {
        name: "Contact Me",
        to: "/"
    }
])
</script>

<style scoped>
nav {
    height: 80px;
}

.left {
    font-size: 1.5rem
}
</style>