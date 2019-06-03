<template lang="pug">
    // Forms 5
    section.fdb-block.py-0
        .container.py-5.my-5(style='background-image: url(imgs/shapes/4.svg);')
            .row.justify-content-end
                .col-12.col-md-8.col-lg-6.col-xl-5.text-left
                    .fdb-box
                        .row
                            .col
                                h1 Log In
                                p.lead
                                    | Right at the coast of the Semantics, a large language ocean. A small river named Duden.
                        .row
                            .col.mt-4
                                input.form-control(type='text', placeholder='Email')
                        .row.mt-4
                            .col
                                input.form-control(type='password', placeholder='Password')
                        .row.mt-4
                            .col
                                button.btn.btn-secondary(type='button') Submit

</template>

<script>
    export default {
        name: "FdbBlock5"
    }
</script>

<style scoped lang="scss">

</style>