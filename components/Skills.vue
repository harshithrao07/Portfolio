<template>
    <v-container class="my-16 skill-container px-7">
        <h1 class="my-16">Skills</h1>
        <div class="skills-parent">
            <div>
                <h2 class="mb-7">Languages</h2>
                <v-row class="justify-center align-center">
                    <v-col v-for="(item, index) in languages" :key="index" cols="4" md="2">
                        <v-img :src="item.src" width="50%" class="mx-auto mb-2 skill-pics"></v-img>
                        <p>{{ item.name }}</p>
                    </v-col>
                </v-row>
            </div>
            <v-divider class="mt-16"></v-divider>
            <div class="mt-16">
                <h2 class="mb-7">Frameworks and Libraries</h2>
                <v-row class="justify-center align-center">
                    <v-col v-for="(item, index) in frameworks" :key="index" cols="4" md="2">
                        <v-img :src="item.src" width="50%" class="mx-auto mb-2 skill-pics"></v-img>
                        <p>{{ item.name }}</p>
                    </v-col>
                </v-row>
            </div>
            <v-divider class="mt-16"></v-divider>
            <div class="mt-16">
                <h2 class="mb-7">Tools and Tech</h2>
                <v-row class="justify-center align-center">
                    <v-col v-for="(item, index) in tools" :key="index" class="mb-3" cols="4" md="2">
                        <v-img :src="item.src" width="50%" class="mx-auto mb-2 skill-pics"></v-img>
                        <p>{{ item.name }}</p>
                    </v-col>
                </v-row>
            </div>
        </div>
    </v-container>
</template>

<script setup>
let languages = ref([
    {
        name: 'C',
        src: '/images/skills/languages/c.png'
    },
    {
        name: 'C++',
        src: '/images/skills/languages/c-.png'
    },
    // {
    //     name: 'Java',
    //     src: '/images/skills/languages/java.png'
    // },
    {
        name: 'HTML',
        src: '/images/skills/languages/html.png'
    },
    {
        name: 'CSS',
        src: '/images/skills/languages/css-3.png'
    },
    {
        name: 'JavaScript',
        src: '/images/skills/languages/js.png'
    },
])
let frameworks = ref([
    {
        name: 'React.js',
        src: '/images/skills/frameworks/react.png'
    },
    {
        name: 'Vue.js',
        src: '/images/skills/frameworks/vuejs.png'
    },
    {
        name: 'Nuxt.js',
        src: '/images/skills/frameworks/nuxt-js-icon.png'
    },
    {
        name: 'Node.js',
        src: '/images/skills/frameworks/nodejs.png'
    },
    {
        name: 'Express.js',
        src: '/images/skills/frameworks/express.png'
    },
    {
        name: 'EJS',
        src: '/images/skills/frameworks/ejs.svg'
    },
    {
        name: 'MySql',
        src: '/images/skills/frameworks/mysql.png'
    },
    {
        name: 'MongoDB',
        src: '/images/skills/frameworks/mongodb.png'
    },
    {
        name: 'Bootstrap',
        src: '/images/skills/frameworks/bootstrap.png'
    },
    {
        name: 'Vuetify',
        src: '/images/skills/frameworks/vuetify.svg'
    },
    // {
    //     name: 'Tailwind CSS',
    //     src: '/images/skills/frameworks/tailwind.png'
    // },
])
let tools = ref([
    {
        name: 'Git',
        src: '/images/skills/tools/git.png'
    },
    {
        name: 'GitHub',
        src: '/images/skills/tools/github.png'
    },
    // {
    //     name: 'Postman',
    //     src: '/images/skills/tools/postman-icon.png'
    // },
    {
        name: 'Netlify',
        src: '/images/skills/tools/netlify.png'
    },
    {
        name: 'Vercel',
        src: '/images/skills/tools/vercel.png'
    },
])
</script>

<style scoped>
h1 {
    display: inline-block;
    border-bottom: 7px solid #FFB000;
}

h2 {
    font-weight: 600;
    display: inline-block;
}

.skills-parent {
    text-align: center;
}
.skill-pics:hover{
    transform: scale(1.1);
}
</style>