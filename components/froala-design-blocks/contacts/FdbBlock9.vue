<template lang="pug">
    // Contacts 9
    section.fdb-block.bg-gray
        .container
            .row.text-center.justify-content-center
                .col-12.col-md-8.col-lg-7
                    p.h2 support@website.com
                    p.lead
                        | Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    p
                        br
                    p.h2
                        a.mx-2(href='https://www.froala.com')
                            i.fa.fa-facebook
                        a.mx-2(href='https://www.froala.com')
                            i.fa.fa-twitter
                        a.mx-2(href='https://www.froala.com')
                            i.fa.fa-instagram
                        a.mx-2(href='https://www.froala.com')
                            i.fa.fa-google
                        a.mx-2(href='https://www.froala.com')
                            i.fa.fa-pinterest
    // Contacts 10
    section.fdb-block
        .container
            .row.text-center.justify-content-center
                .col-12.col-md-8.col-lg-7
                    h1 Contact Us
                    p.lead
                        | Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            .row-70
            .row
                .col-12.col-md-8.col-lg.m-auto
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
                .col-12.col-md-8.col-lg.pt-5.m-auto.pt-lg-0
                    iframe.mb-4(src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656', width='100%', height='200', frameborder='0', style='border:0', allowfullscreen='')
                    p
                        strong Showroom
                    p
                        | 71 Pilgrim Avenue
                        br
                        | Chevy Chase, MD 20815


</template>

<script>
    export default {
        name: "FdbBlock9"
    }
</script>

<style scoped lang="scss">

</style>