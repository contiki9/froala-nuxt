<template lang="pug">
    // Forms 9
    section.fdb-block.bg-gray
        .container
            .row.justify-content-center
                .col-12.col-md-10.col-lg-8.col-xl-6.text-center
                    img(alt='image', height='40', src='@/node_modules/froala-design-blocks/src/imgs/icons/layers.svg')
                    h1 Never miss an update
                    p.lead
                        | Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    .input-group.mt-4.mb-4
                        input.form-control(type='text', placeholder='Enter your email address')
                        .input-group-append
                            button.btn.btn-primary(type='button') Submit
                    p.h5
                        em *Your email address is safe with us. We never share your email address.

</template>

<script>
    export default {
        name: "FdbBlock9"
    }
</script>

<style scoped lang="scss">

</style>