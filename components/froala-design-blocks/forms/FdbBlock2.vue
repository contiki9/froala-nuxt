<template lang="pug">
    // Forms 2
    section.fdb-block(style='background-image: url(imgs/hero/blue.svg);')
        .container
            .fdb-box
                .row.justify-content-center.align-items-center
                    .col-12.col-lg-6
                        h2 Join us!
                        p.lead
                            | Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                    .col-12.col-lg-5.text-center
                        .input-group.mt-4
                            input.form-control(type='text', placeholder='Enter your email address')
                            .input-group-append
                                button.btn.btn-primary(type='button') Submit


</template>

<script>
    export default {
        name: "FdbBlock2"
    }
</script>

<style scoped lang="scss">

</style>