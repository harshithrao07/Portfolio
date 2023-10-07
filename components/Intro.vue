<template>
    <v-container class="mt-10 fill-height">
        <v-row class="justify-center align-center h-100">
            <v-col>
                <v-row>
                    <h1>Hi, I'm <span class="golden-words">Harshith</span><br>and I am a passionate<br>
                        <span class="typed-text rainbow-words">{{ typeValue }}</span>
                        <span class="cursor rainbow-words" :class="{ 'typing': typeStatus }">&nbsp;</span>
                    </h1>
                </v-row>
                <v-row class="mt-8">
                    <v-col cols="12" md="2" class="pl-0">
                        <NuxtLink to="https://www.linkedin.com/in/harshithrao07/" target="_blank">
                            <span class="mdi mdi-linkedin"></span>
                        </NuxtLink>
                    </v-col>
                    <v-col cols="12" md="2" class="pl-0">
                        <NuxtLink to="https://github.com/harshithrao07/" target="_blank">
                            <span class="mdi mdi-github"></span>
                        </NuxtLink>
                    </v-col>
                    <v-col cols="12" md="2" class="pl-0">
                        <NuxtLink to="https://www.instagram.com/harshith._.rao/" target="_blank">
                            <span class="mdi mdi-instagram"></span>
                        </NuxtLink>
                    </v-col>
                    <v-col cols="12" md="2" class="pl-0">
                        <NuxtLink to="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=harshithrao316@gmail.com"
                            target="_blank">
                            <span class="mdi mdi-gmail"></span>
                        </NuxtLink>
                    </v-col>
                </v-row>
            </v-col>
            <v-col class="py-10">
                <v-img src="/images/harshith_rao1.jpeg" width="55%" class="mx-auto image my-5"></v-img>
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
}</style>