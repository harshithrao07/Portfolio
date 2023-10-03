<template>
    <v-container class="mt-16">
        <div>
            <h1 class="mb-3">About Me</h1>
            <p class="mb-4">
                Greetings! <span class="wave">👋</span><br>
            </p>
            <p class="mb-4">
                I'm currently a fourth-year student majoring in Computer Science and Engineering at NMAM Institute of
                Technology
                (NMAMIT). My main passion lies in web development - it's where I thrive and continuously explore. I bring
                innovation and leadership to the table when needed, but I'm also a dependable team player.
            </p>
            <p class="mb-4">
                Beyond the academic realm, you'll often find me immersed in video games, keeping up with my fitness routine
                at
                the gym, enjoying shows and anime, listening to music or working on intriguing web projects. Maintaining
                that
                balance between work and play is key, don't you think? 😊
            </p>
        </div>
        <v-row class="mt-8">
            <v-btn class="resume-btn ml-3"><NuxtLink target="_blank" to="/projects" style="text-decoration: none;">Check out my projects</NuxtLink></v-btn>
        </v-row>
    </v-container>
</template>

<script setup>

</script>

<style scoped>
.resume-btn {
    background-color: black;
    width: 20%;
    border: 1px solid white;
    border-radius: 0px;
}

.wave {
    animation-name: wave-animation;
    /* Refers to the name of your @keyframes element below */
    animation-duration: 2.5s;
    /* Change to speed up or slow down */
    animation-iteration-count: infinite;
    /* Never stop waving :) */
    transform-origin: 70% 70%;
    /* Pivot around the bottom-left palm */
    display: inline-block;
}

@keyframes wave-animation {
    0% {
        transform: rotate(0.0deg)
    }

    10% {
        transform: rotate(14.0deg)
    }

    /* The following five values can be played with to make the waving more or less extreme */
    20% {
        transform: rotate(-8.0deg)
    }

    30% {
        transform: rotate(14.0deg)
    }

    40% {
        transform: rotate(-4.0deg)
    }

    50% {
        transform: rotate(10.0deg)
    }

    60% {
        transform: rotate(0.0deg)
    }

    /* Reset for the last half to pause */
    100% {
        transform: rotate(0.0deg)
    }
}

h1 {
    display: inline-block;
    border-bottom: 7px solid #FFB000;
}</style>