<template lang="pug">
    // Contacts 3
    section.fdb-block
        .container
            .row.text-center.justify-content-center
                .col-12.col-md-8.col-lg-7
                    h1 Contact Us
                    p.lead
                        | One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
            .row.pt-4
                .col-12.col-md-6
                    iframe.map(src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656', width='100%', height='300', frameborder='0', style='border:0', allowfullscreen='')
                .col-12.col-md-6.pt-5.pt-md-0
                    form
                        .row
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
        name: "FdbBlock3"
    }
</script>

<style scoped lang="scss">

</style>