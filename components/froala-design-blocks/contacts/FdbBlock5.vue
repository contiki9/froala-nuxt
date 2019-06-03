<template lang="pug">
    // Contacts 5
    section.fdb-block.pt-0
        .container-fluid.p-0.pb-3
            iframe.map(src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656', width='100%', height='300', frameborder='0', style='border:0', allowfullscreen='')
        .container
            .row.text-center.justify-content-center.pt-5
                .col-12.col-md-7
                    h1 Contact Us
            .row.justify-content-center.pt-4
                .col-12.col-md-7
                    form
                        .row
                            .col
                                input.form-control(type='text', placeholder='Email')
                        .row.mt-4
                            .col
                                input.form-control(type='email', placeholder='Subject')
                        .row.mt-4
                            .col
                                textarea.form-control(name='message', rows='3', placeholder='How can we help?')
                        .row.mt-4
                            .col.text-center
                                button.btn.btn-primary(type='submit') Submit
            .row-100
        .bg-dark
            .container
                .row-50
                .row.justify-content-center.text-center
                    .col-12.col-md.mr-auto.ml-auto
                        img.mb-2(alt='image', height='40', src='@/node_modules/froala-design-blocks/src/imgs/icons/phone.svg')
                        p.lead +44 (112) 123 752
                    .col-12.col-md.pt-4.pt-md-0.mr-auto.ml-auto
                        img.mb-2(alt='image', height='40', src='@/node_modules/froala-design-blocks/src/imgs/icons/navigation.svg')
                        p.lead
                            | 123 6th St.
                            br
                            | Melbourne, FL 32904
                    .col-12.col-md.pt-4.pt-md-0.mr-auto.ml-auto
                        img.mb-2(alt='image', height='40', src='@/node_modules/froala-design-blocks/src/imgs/icons/mail.svg')
                        p.lead support@website.com
                .row-50
        .container
            .row-70
            .row.text-center
                .col
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

</template>

<script>
    export default {
        name: "FdbBlock5"
    }
</script>

<style scoped lang="scss">

</style>