<template lang="pug">
    // Forms 3
    section.fdb-block
        .container
            .row.justify-content-center
                .col-12.col-lg-10.col-xl-8.text-center
                    .row
                        .col
                            h1 Register
                            p.lead
                                | When she reached the first hills, she had a last view back on the skyline of her hometown.
                    .row.align-items-center
                        .col-12.col-md-5.mt-4
                            input.form-control(type='text', placeholder='Email')
                        .col-12.col-md-5.mt-4
                            input.form-control(type='password', placeholder='Password')
                        .col-12.col-md-2.mt-4
                            button.btn.btn-secondary(type='button') Submit

</template>

<script>
    export default {
        name: "FdbBlock3"
    }
</script>

<style scoped lang="scss">

</style>