<template lang="pug">
    // Forms 6
    section.fdb-block
        .container
            .row.justify-content-center
                .col-12.col-md-8.col-lg-8.col-xl-6
                    .row
                        .col.text-center
                            h1 Register
                            p.lead
                                | Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                    .row.align-items-center
                        .col.mt-4
                            input.form-control(type='text', placeholder='Company Name')
                    .row.align-items-center.mt-4
                        .col
                            input.form-control(type='email', placeholder='Email')
                    .row.align-items-center.mt-4
                        .col
                            input.form-control(type='password', placeholder='Password')
                        .col
                            input.form-control(type='password', placeholder='Confirm Password')
                    .row.justify-content-start.mt-4
                        .col
                            .form-check
                                label.form-check-label
                                    input.form-check-input(type='checkbox')
                                    |                       I Read and Accept
                                    a(href='https://www.froala.com') Terms and Conditions
                            button.btn.btn-primary.mt-4 Submit


</template>

<script>
    export default {
        name: "FdbBlock6"
    }
</script>

<style scoped lang="scss">

</style>