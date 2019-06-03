<template lang="pug">
    // Contacts 7
    section.fdb-block.py-0
        .container.py-5(style='background-image: url(imgs/shapes/6.svg);')
            .row.text-center.justify-content-center
                .col-12.col-md-8.col-lg-7
                    h1 Contact Us
                    p.lead
                        | If you’re already an active user, please
                        a(href='https://www.froala.com') sign in
                        |  before contacting us.
            .row-50
            .row.justify-content-center
                .col-12.col-md-8.col-lg-7
                    form
                        .row
                            .col
                                label Your Email Address
                                input.form-control(type='text')
                        .row.mt-4
                            .col
                                label Subject (optional but helpful)
                                input.form-control(type='email')
                        .row.mt-4
                            .col
                                label How can we help?
                                textarea.form-control(name='message', rows='3')
                        .row.mt-4
                            .col.text-right
                                button.btn.btn-dark(type='submit') Submit
            .row-100
        .container-fluid.p-0
            iframe.map(src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656', width='100%', height='300', frameborder='0', style='border:0', allowfullscreen='')


</template>

<script>
    export default {
        name: "FdbBlock7"
    }
</script>

<style scoped lang="scss">

</style>