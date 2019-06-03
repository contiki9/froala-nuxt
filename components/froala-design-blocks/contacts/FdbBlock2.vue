<template lang="pug">
    // Contacts 2
    section.fdb-block.bg-dark(style='background-image: url(imgs/hero/blue.svg);')
        .container
            .row.text-center.justify-content-center
                .col-12.col-md-8.col-lg-7
                    h1 Contact Us
                    h2 We love to hear from you!
            .row.pt-4
                .col-12
                    form
                        .row
                            .col-12.col-md
                                input.form-control(type='text', placeholder='Name')
                            .col-12.col-md.mt-4.mt-md-0
                                input.form-control(type='text', placeholder='Email')
                            .col-12.col-md.mt-4.mt-md-0
                                input.form-control(type='text', placeholder='Phone (optional)')
                        .row.mt-4
                            .col
                                input.form-control(type='email', placeholder='Subject')
                        .row.mt-4
                            .col
                                textarea.form-control(name='message', rows='3', placeholder='How can we help?')
                        .row.mt-4
                            .col.text-center
                                button.btn.btn-dark(type='submit') Submit

</template>

<script>
    export default {
        name: "FdbBlock2"
    }
</script>

<style scoped lang="scss">

</style>