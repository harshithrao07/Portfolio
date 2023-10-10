<template>
    <v-container class="mt-5 fill-height px-7">
        <v-row class="justify-center align-center h-100">
            <v-col class="py-10" cols="12" lg="6" order-md="2" order-lg="2" md="6" sm="12" xs="12">
                <v-img src="/images/harshith_rao1.jpeg" width="55%" class="mx-auto image my-5"></v-img>
            </v-col>
            <v-col cols="12" lg="6" order-md="1" order-lg="1" class="px-5" md="6" sm="12" xs="12">
                <h1 class="mt-5">Hi, I'm <span class="golden-words">Harshith</span><br>and I am a passionate<br>
                    <span class="typed-text rainbow-words">{{ typeValue }}</span>
                    <span class="cursor rainbow-words" :class="{ 'typing': typeStatus }">&nbsp;</span>
                </h1>
                <div class="d-flex mt-7">
                    <div v-for="(item, index) in items" :key="index" class="mr-10">
                        <NuxtLink :to="item.to" target="_blank">
                            <span class="mdi" :class="item.icon"></span>
                        </NuxtLink>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => {
        return {
            typeValue: '',
            typeStatus: false,
            typeArray: ['Web Developer.', 'CSE Student.', 'Tech Enthusiast.'],
            typingSpeed: 200,
            erasingSpeed: 100,
            newTextDelay: 1000,
            typeArrayIndex: 0,
            charIndex: 0,
            items: [
                {
                    to: 'https://www.linkedin.com/in/harshithrao07/',
                    icon: 'mdi-linkedin',
                    name: 'harshithrao07'
                },
                {
                    to: 'https://github.com/harshithrao07/',
                    icon: 'mdi-github',
                    name: 'harshithrao07'
                },
                {
                    to: 'https://www.instagram.com/harshith._.rao/',
                    icon: 'mdi-instagram',
                    name: 'harshith._.rao'
                },
                {
                    to: 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=harshithrao316@gmail.com',
                    icon: 'mdi-gmail',
                    name: 'harshithrao316@gmail.com'
                }
            ]
        }
    },
    methods: {
        typeText() {
            if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
                if (!this.typeStatus)
                    this.typeStatus = true;

                this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
                this.charIndex += 1;

                setTimeout(this.typeText, this.typingSpeed);
            }
            else {
                this.typeStatus = false;
                setTimeout(this.eraseText, this.newTextDelay);
            }
        },
        eraseText() {
            if (this.charIndex > 0) {
                if (!this.typeStatus)
                    this.typeStatus = true;

                this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
                this.charIndex -= 1;
                setTimeout(this.eraseText, this.erasingSpeed);
            }
            else {
                this.typeStatus = false;
                this.typeArrayIndex += 1;
                if (this.typeArrayIndex >= this.typeArray.length)
                    this.typeArrayIndex = 0;

                setTimeout(this.typeText, this.typingSpeed + 1000);
            }
        }
    },
    created() {
        setTimeout(this.typeText, this.newTextDelay + 200);
    }
}
</script>


<style scoped>
.image {
    border-radius: 100% 60% 80% 70%;
    border: 2px solid white;
    outline: 2px dashed #FFB000;
    outline-offset: 5px;
}


.mdi {
    font-size: 2.7rem;
}

.mdi:hover {
    background: linear-gradient(to right, #FFAE00, #FB00B8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

h1 {
    span.typed-text {
        color: #FFB000;
    }

    span.cursor {
        display: inline-block;
        margin-left: 3px;
        width: 4px;
        background-color: #FFB000;
        animation: cursorBlink 1s infinite;
    }

    span.cursor.typing {
        animation: none;
    }
}

@keyframes cursorBlink {
    49% {
        background-color: #FFB000;
    }

    50% {
        background-color: transparent;
    }

    99% {
        background-color: transparent;
    }
}

@media only screen and (max-width:900px) {
    .mdi{
        font-size: 1.7rem;
    }
}
</style>