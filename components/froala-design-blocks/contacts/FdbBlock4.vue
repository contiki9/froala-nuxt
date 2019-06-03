<template lang="pug">
    // Contacts 4
    section.fdb-block.py-0
        .container.py-5.my-5(style='background-image: url(imgs/shapes/9.svg);')
            .row.py-5
                .col.py-5
                    .fdb-box.fdb-touch
                        .row.text-center.justify-content-center
                            .col-12.col-md-9.col-lg-7
                                h1 Contact Us
                                p.lead
                                    | Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.
                        .row.justify-content-center.pt-4
                            .col-12.col-md-8
                                form
                                    .row
                                        .col-12.col-md
                                            input.form-control(type='text', placeholder='Name')
                                        .col-12.col-md.mt-4.mt-md-0
                                            input.form-control(type='text', placeholder='Email')
                                    .row.mt-4
                                        .col
                                            input.form-control(type='email', placeholder='Subject')
                                    .row.mt-4
                                        .col
                                            textarea.form-control(name='message', rows='3', placeholder='How can we help?')
                                    .row.mt-4
                                        .col.text-center
                                            button.btn.btn-primary(type='submit') Submit

</template>

<script>
    export default {
        name: "FdbBlock4"
    }
</script>

<style scoped lang="scss">

</style>