<template>
    <v-container class="mt-16 px-7">
        <h1 class="title mb-10">Experiences</h1>
        <v-card class="card">
            <v-card-title class="mt-3 pb-4 card-title">
                <h1 class="ml-2">Exelon Circuits Pvt. Ltd.
                    <NuxtLink to="https://exeloncircuits.com/" target="_blank">
                        <MdiIcon icon="mdiLinkVariant"></MdiIcon>
                    </NuxtLink>
                </h1>
                <h5 class="rainbow-words ml-2">Frontend Web Developer</h5>
                <v-card-subtitle class="px-0 ml-2">Jul 2023 - Aug 2023</v-card-subtitle>
            </v-card-title>
            <v-card-text class="mb-0 mt-5">
                <ul class="py-1">
                    <li>Worked on building a multi page landing site for a US client, <NuxtLink target="_blank"
                            to="https://www.kenfront.com/" style="text-decoration: none;"><span class="golden-words"
                                >Kenfront Consulting Private
                                Limited</span></NuxtLink> and its product, <NuxtLink target="_blank"
                            to="https://main--remarkable-cannoli-dbdc73.netlify.app/" style="text-decoration: none;"><span
                                class="golden-words">SpendControl</span></NuxtLink>
                        using the latest technologies such as
                        <span class="golden-words">Nuxt 3</span> and <span class="golden-words">Vue 3</span>.
                    </li>
                    <li>Planning and developing Interactive Static websites with Animations using <span
                            class="golden-words">Anime.js</span></li>
                    <li>Involved in designing, building & optimizing pages, with <span
                            class="golden-words">performance</span>, <span class="golden-words">user experience</span> and
                        <span class="golden-words">SEO</span> in mind.
                    </li>
                </ul>
            </v-card-text>
            <v-btn class="ml-10 mb-10 certificate">
                <NuxtLink style="text-decoration: none;"
                    to="https://drive.google.com/file/d/1ExALBSUU37tgpmQmStKxYJBSch5oeA6y/view" target="_blank"><span
                        class="btn-text">Certificate</span></NuxtLink>
            </v-btn>
        </v-card>
    </v-container>
</template>

<script setup>

</script>

<style scoped>
.title{
    display: inline-block;
    border-bottom: 7px solid #FFB000;
}

h1{
    white-space: pre-wrap;
}

h2,
h5 {
    font-weight: 600;
    white-space: pre-wrap;
}

.card-title {
    border-bottom: 1px solid rgba(255, 255, 255, 0.125);
}


.card {
    backdrop-filter: blur(4px) saturate(120%);
    -webkit-backdrop-filter: blur(4px) saturate(120%);
    background-color: rgba(7, 7, 7, 0.38);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    border-radius: 0px;
}



li {
    font-size: 1.1rem;
    list-style-type: disc;
    color: #b5b8be;
    list-style-position: inside;
    padding: 10px 0 10px 20px;
    text-indent: -1em;
}

.certificate {
    border: 1px solid rgba(255, 255, 255, 0.125);
    border-radius: 0px;
    background-color: rgba(7, 7, 7, 0.38) ;
}
.certificate:hover{
    border: 1px solid #FFB000;
}

.certificate:hover .btn-text{
    color: #FFB000;
}

@media only screen and (max-width: 700px)
{
    li{
        font-size: 1rem;
    }
}
</style>