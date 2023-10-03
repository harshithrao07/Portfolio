<template>
    <nav class="d-flex justify-space-between align-center px-16 mb-4 py-4">
        <div class="left">
            <NuxtLink to="/" style="text-decoration: none;"><h2><span class="golden-words">H</span>arshith <span class="golden-words">R</span>ao.</h2></NuxtLink>
        </div>
        <div class="right d-flex justify-center align-center">
            <ul v-for="(item, index) in navItems" :key="index" class="mx-3">
                <NuxtLink :to="item.to" style="text-decoration: none;">
                    <li class="links mx-2">{{ item.name }}</li>
                </NuxtLink>
            </ul>
            <v-btn class="resume-btn my-auto mx-2"><NuxtLink target="_blank" class="resume-text" to="https://drive.google.com/file/d/15vLARzBD3c7qomQ6YWKEOSc1Fh2Hptcm/view?usp=sharing" style="text-decoration: none;">View Resume</NuxtLink></v-btn>
        </div>
    </nav>
    <div>
        <slot />
    </div>
</template>

<script setup>
let navItems = ref([
    {
        name: "Home",
        to: "/"
    },
    {
        name: "Projects",
        to: "/projects"
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
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
      backdrop-filter: blur(5px) saturate(168%);
    -webkit-backdrop-filter: blur(5px) saturate(168%);
    background-color: rgba(11, 13, 13, 0.38);
    border: 1px solid rgba(233, 225, 225, 0.125);
}
.resume-btn{
    background-color: rgba(11, 13, 13, 0.38);
    border: 1px solid white;
    border-radius: 0px;
}
.resume-btn:hover{
    border: 1px solid #FFB000;
}
.resume-btn:hover .resume-text{
    color: #FFB000;
}
.left {
    font-size: 1.5rem
}
li{
    font-size: 1.1rem;
}
.links:hover{
    color: #FFB000;
}
</style>