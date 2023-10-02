<template>
    <v-container class="mt-16">
        <h1 class="mb-10">Education</h1>
        <v-card class="card mb-10" v-for="(item, index) in items" :key="index">
            <div class="mt-3">
                <v-card-title>
                    <h3>{{ item.name }} <NuxtLink :to="item.link" target="_blank">
                            <MdiIcon icon="mdiLinkVariant"></MdiIcon>
                        </NuxtLink>
                    </h3>
                    <v-card-subtitle class="px-0">{{ item.timeline }}</v-card-subtitle>
                </v-card-title>
                <v-card-text class="mt-2">
                    <p>{{ item.subject }}</p>
                    <p>{{ item.score }}</p>
                </v-card-text>
            </div>
        </v-card>
    </v-container>
</template>

<script setup>
let items = ref([
    {
        name: 'NMAM Institute of Technology',
        timeline: '2020-present',
        subject: 'Computer Science & Engineering',
        score: 'CGPA: 9.10',
        link: 'https://nmamit.nitte.edu.in/'
    },
    {
        name: 'Boscoss PU College',
        timeline: '2018-2020',
        subject: 'Higher Secondary Education (PCMC)',
        score: 'Aggregate Percentage: 95.83%',
        link: 'https://www.boscoss.com/'
    },
    {
        name: 'Canara High School',
        timeline: '2013-2018',
        subject: 'Secondary Education',
        score: 'Aggregate Percentage: 95.68%',
        link: 'https://canaracbse.com/'
    }
])
</script>

<style scoped>
h1 {
    display: inline-block;
    border-bottom: 7px solid #FFB000;
}

p {
    font-size: 1rem;
    margin-bottom: 7px;
}

h3 {
    color: #b5b8be;
}

.card {
    background-color: black;
    border-left: 2px solid rgb(151, 147, 147);
    border-radius: 0px;
}

.card:hover {
    background-color: rgb(25, 25, 25);
    border-left: 2px solid #FFB000;
}

.card:hover h3 {
    color: white;
}</style>