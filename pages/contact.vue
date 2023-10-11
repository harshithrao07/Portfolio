<template>
    <v-container class="my-16">
        <h1 class="mt-8 contact-title">Contact Me</h1>
        <v-row>
            <v-col cols="12" md="6">
                <v-sheet class="bg-black" variant="outlined">
                    <v-form @submit.prevent="sendEmail" ref="form">
                        <v-text-field v-model="from_name" name="from_name" placeholder="Your name" theme="dark" density="compact" hide-details="auto"
                            variant="solo-inverted" class="bg-black my-6" base-color="black">
                        </v-text-field>
                        <v-text-field v-model="email_id" name="email_id" placeholder="Your email" theme="dark" density="compact" hide-details="auto"
                            variant="solo-inverted" class="bg-black my-6" base-color="black">
                        </v-text-field>
                        <v-textarea v-model="message" name="message" placeholder="Your message" theme="dark" density="compact" hide-details="auto"
                            variant="solo-inverted" class="bg-black my-6" base-color="black">
                        </v-textarea>
                        <v-row><v-col class="text-center"><v-btn type="submit" class="bg-black mt-3 btn-submit"
                                    variant="outlined">Submit</v-btn></v-col></v-row>
                    </v-form>
                </v-sheet>
            </v-col>
            <v-col cols="12" md="6" class="text-center mt-7">
                <h1 class="mb-3 rainbow-words">Get in touch!</h1>
                <v-row class="align-center">
                    <v-col v-for="(item, index) in items" :key="index" cols=12 lg="12" md="12" sx="12" xs="12" class="py-1">
                        <NuxtLink :to="item.to" target="_blank" class="link">
                            <p class="contact-links"><span class="mdi my-auto" :class="item.icon"></span>&nbsp;{{ item.name
                            }}</p>
                        </NuxtLink>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
    <Footer />
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
    name: 'ContactUs',
    data() {
        return {
            from_name: '',
            email_id: '',
            message: '',
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
        sendEmail(e) {
            try {
                emailjs.sendForm('service_vod1p0a', 'template_ogmtquc', e.target ,
                    '57cwqyYgGke5oEHhS', {
                    from_name: this.name,
                    email_id: this.email,
                    message: this.message
                })
                console.log('Successfully sent message.')
            } catch (error) {
                console.log({ error })
            }
            // Reset form field
            this.from_name = ''
            this.email_id = ''
            this.message = ''
        },
    }
}
</script>

<style scoped>
.contact-title {
    display: inline-block;
    border-bottom: 7px solid #FFB000;
}

.link {
    text-decoration: none;
}


.contact-links {
    display: inline-block;
}
</style>