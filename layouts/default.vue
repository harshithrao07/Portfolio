<template>
    <v-app class="bg-black">
        <div class="desktop">
            <nav class="d-flex justify-space-between align-center px-16 mb-4 py-4">
                <div class="left">
                    <NuxtLink to="/" style="text-decoration: none;">
                        <h1><span class="golden-words">H</span>arshith <span class="golden-words">R</span>ao.</h1>
                    </NuxtLink>
                </div>
                <div class="right d-flex justify-center align-center">
                    <ul v-for="(item, index) in navItems" :key="index" class="mx-3">
                        <NuxtLink :to="item.to" style="text-decoration: none;">
                            <li class="links mx-2">{{ item.name }}</li>
                        </NuxtLink>
                    </ul>
                    <v-btn class="resume-btn my-auto mx-2">
                        <NuxtLink target="_blank" class="resume-text"
                            to="https://flowcv.com/resume/hj7caj6o85"
                            style="text-decoration: none;">View Resume</NuxtLink>
                    </v-btn>
                </div>
            </nav>
        </div>
        <div class="mobile">
            <nav class="d-flex justify-space-between align-center px-7">
                <div>
                    <span class="mdi mdi-menu links" @click="handleClick"></span>
                </div>
                <div>
                    <NuxtLink to="/" style="text-decoration: none;">
                        <h1><span class="golden-words">H</span>arshith <span class="golden-words">R</span>ao.</h1>
                    </NuxtLink>
                </div>
            </nav>
        </div>
        <v-navigation-drawer app temporary location="left" v-model="drawer" class="align-center">
            <ul v-for="(item, index) in navItems" :key="index" class="text-center mb-6 mt-10">
                <NuxtLink :to="item.to" style="text-decoration: none;">
                    <li class="links mx-2">{{ item.name }}</li>
                </NuxtLink>
            </ul>
            <v-btn class="resume-btn my-3">
                <NuxtLink target="_blank" class="resume-text"
                    to="https://flowcv.com/resume/hj7caj6o85"
                    style="text-decoration: none;">View Resume</NuxtLink>
            </v-btn>
        </v-navigation-drawer>
        <div>
            <slot />
        </div>
    </v-app>
</template>

<script setup>
import { handleError } from 'vue';

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
        to: "/contact"
    }
])

let drawer = ref(false);

function handleClick()
{
    drawer.value = !drawer.value;
}
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
    border-bottom: 1px solid rgba(233, 225, 225, 0.125);
}

.resume-btn {
    background-color: rgba(11, 13, 13, 0.38);
    border: 1px solid white;
    border-radius: 0px;
}

.resume-btn:hover {
    border: 1px solid #FFB000;
}

.resume-btn:hover .resume-text {
    color: #FFB000;
}

.links:hover {
    color: #FFB000;
}

.mdi {
    font-size: 1.7rem;
}

.mobile {
    display: none;
}

@media only screen and (max-width:900px) {
    .desktop {
        display: none;
    }

    .mobile {
        display: inline-block;
    }
}
</style>