<template>
    <v-container class="my-16 px-7">
        <h1 class="mt-8 project-title">Projects</h1>
        <v-row v-for="(item, index) in projects" :key="index">
            <v-card class="bg-black mt-13 card" width="100%">
                <v-col>
                    <v-row>
                        <v-row class="card-title align-center">
                            <v-col cols="12" md="6" sm="6" lg="6" xs="6">
                                <v-card-title class="mb-0 pt-5">
                                    <h2>{{ item.name }}</h2>
                                    <v-card-subtitle class="pl-0 mt-1">{{ item.timeline }}</v-card-subtitle>
                                </v-card-title>
                            </v-col>
                            <v-col cols="12" md="6" sm="6" lg="6" xs="6" class="d-flex justify-md-end justify-sm-start mb-3 mb-md-0 mb-lg-0">
                                <NuxtLink :to="item.src" target="_blank" style="text-decoration: none;">
                                    <v-btn class="link-btn mx-5">
                                        <p class="link-txt">Source Code</p>
                                    </v-btn>
                                </NuxtLink>
                                <NuxtLink :to="item.live" target="_blank" style="text-decoration: none;">
                                    <v-btn class="link-btn mr-5">
                                        <p class="link-txt">Live Site</p>
                                    </v-btn>
                                </NuxtLink>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="12" sm="12" lg="12" xs="12">
                                <v-card-text>
                                    <ul v-for="(list, index) in item.about" :key="index">
                                        <li class="py-1">
                                            {{ list }}
                                        </li>
                                    </ul>
                                </v-card-text>
                            </v-col>
                        </v-row>
                    </v-row>
                    <v-row>
                        <v-card-title>
                            <h4>Technologies:</h4>
                        </v-card-title>
                    </v-row>
                    <v-row class="align-center mt-0 py-0">
                        <v-col v-for="(tech, index) in item.technologies" :key="index" cols="4" md="2"><v-img
                                :src="tech.src" width="35%" class="mx-auto">
                            </v-img>
                            <p>{{ tech.name }}</p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-card>
        </v-row>
    </v-container>
</template>

<script setup>
let projects = ref([
    {
        name: 'Kenfront and SpendControl',
        timeline: 'Jul 2023 - Aug 2023',
        about: [
            'An engaging multi-page landing site for Kenfront Consulting Private Limited and its product , SpendControl with animations using Anime.js.', 'Built using latest technologies which offers enhanced performance resulting in a seamless user experience.'
        ],
        technologies: [
            { name: 'Vue.js', src: '/images/skills/frameworks/vuejs.png' }, { name: 'Nuxt.js', src: '/images/skills/frameworks/nuxt-js-icon.png' }, { name: 'Vuetify', src: '/images/skills/frameworks/vuetify.svg' },
            { name: 'Anime.js', src: '/images/skills/frameworks/animejs.png' }
        ],
        src: 'https://github.com/harshithrao07/Kenfront-Public-Repo',
        live: 'https://kenfront.netlify.app/'

    },
    {
        name: 'Blogr',
        timeline: 'Nov 2022 - Dec 2022',
        about: [
            'Blogr is a user-friendly blogging platform that prioritizes content creation.', 'It also includes features for managing multiple blogs and day-to-day activities with a To-Do List.'
        ],
        technologies: [
            { name: 'Node.js', src: '/images/skills/frameworks/nodejs.png' }, { name: 'Express.js', src: '/images/skills/frameworks/express.png' }, { name: 'EJS', src: '/images/skills/frameworks/ejs.svg' },
            { name: 'MongoDB', src: '/images/skills/frameworks/mongodb.png' }, { name: 'Bootstrap', src: '/images/skills/frameworks/bootstrap.png' }
        ],
        src: 'https://github.com/harshithrao07/Blogr',
        live: 'https://excited-jade-handkerchief.cyclic.app/'
    },
    {
        name: 'Keeper',
        timeline: 'Sep 2023 - Oct 2023',
        about: [
            'Keeper App is a sleek and intuitive note-taking and task management application built using React.', 'It offers a user-friendly interface for creating and organizing notes.'
        ],
        technologies: [
            { name: 'MongoDB', src: '/images/skills/frameworks/mongodb.png' }, { name: 'Express.js', src: '/images/skills/frameworks/express.png' }, { name: 'React.js', src: '/images/skills/frameworks/react.png' },
            { name: 'Node.js', src: '/images/skills/frameworks/nodejs.png' }
        ],
        src: 'https://github.com/harshithrao07/Keeper-MERN-stack',
        live: 'https://keeper-app-mern.netlify.app/'
    },
    {
        name: 'Catadogs',
        timeline: 'Oct 2022 - Nov 2022',
        about: [
            'Catadogs is an animal adoption website that allows users to choose animals for adoption from a list and send adoption requests to the admin', 'It also provides admin capabilities to add or delete animals and their details as needed.'
        ],
        technologies: [
            { name: 'Node.js', src: '/images/skills/frameworks/nodejs.png' }, { name: 'Express.js', src: '/images/skills/frameworks/express.png' }, { name: 'EJS', src: '/images/skills/frameworks/ejs.svg' },
            { name: 'MongoDB', src: '/images/skills/frameworks/mongodb.png' }, { name: 'Bootstrap', src: '/images/skills/frameworks/bootstrap.png' }
        ],
        src: 'https://github.com/harshithrao07/Catadogs',
        live: 'https://frightened-ruby-stockings.cyclic.app/'
    }
])
</script>

<style scoped>
.project-title {
    display: inline-block;
    border-bottom: 7px solid #FFB000;
}

h2{
    white-space: pre-wrap;
}

p {
    font-size: 1rem;
    text-align: center;
}

li {
    font-size: 1.1rem;
    list-style-type: disc;
    color: #b5b8be;
    list-style-position: inside;
    padding: 10px 0 10px 20px;
    text-indent: -1em;
}

h4 {
    font-size: 1.1rem;
    font-weight: 400;
}

.card {
    border: 1px solid #b5b8be;
    border-radius: 0;
}

.link-btn {
    background-color: black;
    border: 1px solid #b5b8be;
    border-radius: 0px;
}

.card-title {
    border-bottom: 1px solid #b5b8be;
}

.link-txt{
    color: white;
}

@media only screen and (max-width: 700px)
{
    li{
        font-size: 1rem;
    }
}
</style>