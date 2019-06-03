<template lang="pug">
    // Contacts 1
    section.fdb-block.pt-0
        .container-fluid.p-0.pb-md-5
            iframe.map(src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656', width='100%', height='300', frameborder='0', style='border:0', allowfullscreen='')
        .container
            .row.mt-5
                .col-12.col-md-6.col-lg-5
                    h2 Contact Us
                    p.lead
                        | Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                    p.lead
                        | It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                    p.h3.mt-5
                        strong Email:
                        a(href='https://www.froala.com') hello@website.com
                    p.lead
                        strong Phone:
                        a(href='https://www.froala.com') +44 123 123 1232
                .col-12.col-md-6.ml-auto.pt-5.pt-md-0
                    form
                        .row
                            .col
                                input.form-control(type='text', placeholder='First name')
                            .col
                                input.form-control(type='text', placeholder='Last name')
                        .row.mt-4
                            .col
                                input.form-control(type='email', placeholder='Enter email')
                        .row.mt-4
                            .col
                                input.form-control(type='email', placeholder='Subject')
                        .row.mt-4
                            .col
                                textarea.form-control(name='message', rows='3', placeholder='How can we help?')
                        .row.mt-4
                            .col
                                button.btn.btn-primary(type='submit') Submit


</template>

<script>
    export default {
        name: "FdbBlock1"
    }
</script>

<style scoped lang="scss">

</style>