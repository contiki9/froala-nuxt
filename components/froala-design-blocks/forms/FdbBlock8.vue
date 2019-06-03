<template lang="pug">
    // Forms 8
    section.fdb-block
        .container
            .row.justify-content-center
                .col-12.col-md-8.col-lg-7.col-md-5.text-center
                    .fdb-box.fdb-touch
                        .row
                            .col
                                h1 Register
                        .row
                            .col.mt-4
                                input.form-control(type='text', placeholder='Name')
                        .row.mt-4
                            .col
                                input.form-control(type='text', placeholder='Email')
                        .row.mt-4
                            .col
                                input.form-control.mb-1(type='password', placeholder='Password')
                                p.text-right
                                    a(href='https://www.froala.com') Already have an account?
                        .row.mt-4
                            .col
                                button.btn.btn-primary(type='button') Submit

</template>

<script>
    export default {
        name: "FdbBlock8"
    }
</script>

<style scoped lang="scss">

</style>