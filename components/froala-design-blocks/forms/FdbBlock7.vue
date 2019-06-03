<template lang="pug">
    // Forms 7
    section.fdb-block(style='background-image: url(imgs/hero/red.svg);')
        .container
            .row.justify-content-center
                .col-12.col-md-8.col-lg-7.col-xl-5.text-center
                    .fdb-box
                        .row
                            .col
                                h1 Log In
                        .row.mt-4
                            .col
                                input.form-control(type='text', placeholder='Email')
                        .row.mt-4
                            .col
                                input.form-control.mb-1(type='password', placeholder='Password')
                                p.text-right
                                    a(href='https://www.froala.com') Recover Password
                        .row.mt-4
                            .col
                                button.btn.btn-outline-secondary(type='button') Submit


</template>

<script>
    export default {
        name: "FdbBlock7"
    }
</script>

<style scoped lang="scss">

</style>