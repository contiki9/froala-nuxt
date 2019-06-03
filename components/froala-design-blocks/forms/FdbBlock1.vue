<template lang="pug">
    // Forms 1
    section.fdb-block
        .container
            .row.justify-content-center
                .col-12.col-md-8.col-lg-6.text-center
                    h1 Subscribe
                    .input-group.mt-4.mb-4
                        input.form-control(type='text', placeholder='Enter your email address')
                        .input-group-append
                            button.btn.btn-primary(type='button') Submit
                    p.h4
                        | Find us on
                        a(href='https://www.froala.com') Facebook
                        |  and
                        a(href='https://www.froala.com') Twitter
                        | .



</template>

<script>
    export default {
        name: "FdbBlock1"
    }
</script>

<style scoped lang="scss">

</style>