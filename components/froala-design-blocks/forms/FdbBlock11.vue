<template lang="pug">
    // Forms 11
    section.fdb-block
        .container
            .row
                .col-12.col-md-6.m-md-auto.ml-lg-0.col-lg-5
                    img.img-fluid(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/draws/group-chat.svg')
                .col-12.col-md-10.col-lg-6.mt-4.mt-lg-0.ml-auto.mr-auto.ml-lg-auto.text-left
                    .row
                        .col
                            h1 Subscribe
                            p.lead
                                | Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                    .row.mt-4
                        .col
                            .input-group
                                input.form-control(type='text', placeholder='Enter your email address')
                                .input-group-append
                                    button.btn.btn-primary(type='button') Submit
                    .row
                        .col
                            p.h4 * Leave your email address to be notified first.

</template>

<script>
    export default {
        name: "FdbBlock11"
    }
</script>

<style scoped lang="scss">

</style>