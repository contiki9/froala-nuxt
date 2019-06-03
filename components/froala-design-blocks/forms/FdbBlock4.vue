<template lang="pug">
    // Forms 4
    section.fdb-block.py-0
        .container.py-5.my-5(style='background-image: url(imgs/shapes/6.svg);')
            .row
                .col-12.col-md-8.col-lg-7.col-xl-5.text-left
                    .row
                        .col
                            h1 Sign Up
                            p.lead
                                | Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                    .row
                        .col.mt-4
                            input.form-control(type='text', placeholder='Email')
                    .row.mt-4
                        .col
                            input.form-control(type='password', placeholder='Password')
                    .row.mt-4
                        .col
                            button.btn.btn-primary(type='button') Submit

</template>

<script>
    export default {
        name: "FdbBlock4"
    }
</script>

<style scoped lang="scss">

</style>