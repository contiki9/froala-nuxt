<template lang="pug">
    // Contacts 8
    section.fdb-block.pt-0(style='background-image: url(./imgs/shapes/8.svg)')
        .bg-gray
            .container
                .row-100
                .row.text-left
                    .col-8
                        h1 Contact Us
                        p.lead
                            | Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                .row-100
        .container.bg-r
            .row-100
            .row
                .col-12.col-md-6.col-lg-5
                    h2 Call or email
                    p.text-large
                        | Support, Sales, and Account Management services are currently available in English
                    p.h3.mt-4.mt-lg-5
                        strong Support
                    p
                        | +800 3005 4300
                    p
                        a(href='https://www.froala.com') Contact Support
                    p
                        | Our technical support is available by phone or email from 11am to 11pm BST, Monday through Friday.
                    p.h3.mt-4.mt-lg-5
                        strong Sales
                    p
                        | +800 3005 4300
                    p
                        a(href='https://www.froala.com') Contact Sales
                    p
                        | Our technical support is available by phone or email from 11am to 11pm BST, Monday through Friday.
                    p.h3.mt-4.mt-lg-5
                        strong General inquiries
                    p
                        a(href='https://www.froala.com') hello@website.com
                .col-12.col-md-6.ml-auto
                    h2 Drop us a line
                    form
                        .row
                            .col
                                input.form-control(type='text', placeholder='First name')
                            .col
                                input.form-control(type='text', placeholder='Last name')
                        .row.mt-4
                            .col
                                input.form-control(type='text', placeholder='Company Name')
                        .row.mt-4
                            .col
                                input.form-control(type='email', placeholder='Email')
                        .row.mt-4
                            .col
                                input.form-control(type='text', placeholder='Phone')
                            .col
                                input.form-control(type='text', placeholder='Country')
                        .row.mt-4
                            .col
                                select.form-control(required='')
                                    option(value='') Select Department
                                    option(value='1') Support
                                    option(value='2') Sales
                                    option(value='3') Accounting
                        .row.mt-4
                            .col
                                textarea.form-control(name='message', rows='5', placeholder='How can we help?')
                        .row.mt-4
                            .col
                                button.btn.btn-primary(type='submit') Submit

</template>

<script>
    export default {
        name: "FdbBlock8"
    }
</script>

<style scoped lang="scss">

</style>