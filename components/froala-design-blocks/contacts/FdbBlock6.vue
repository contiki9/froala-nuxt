<template lang="pug">
    // Contacts 6
    section.fdb-block.pt-0
        .container-fluid.p-0.pb-5
            iframe.map(src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656', width='100%', height='300', frameborder='0', style='border:0', allowfullscreen='')
        .container
            .row.pt-5
                .col-12
                    form
                        .row
                            .col-12.col-md
                                label First Name
                                input.form-control(type='text')
                            .col-12.col-md.mt-4.mt-md-0
                                label Last Name
                                input.form-control(type='text')
                        .row.mt-4
                            .col
                                label Your Email
                                input.form-control(type='email')
                        .row.mt-4
                            .col
                                label Subject (optional but helpful)
                                input.form-control(type='email')
                        .row.mt-4
                            .col
                                label How can we help?
                                textarea.form-control(name='message', rows='3')
                        .row.mt-4.text-center
                            .col
                                button.btn.btn-primary(type='submit') Submit


</template>

<script>
    export default {
        name: "FdbBlock6"
    }
</script>

<style scoped lang="scss">

</style>