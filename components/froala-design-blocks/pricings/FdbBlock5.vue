<template lang="pug">
    // Pricings 5
    section.fdb-block(style='background-image: url(imgs/shapes/8.svg);')
        .container
            .row.text-center
                .col
                    h1 Pricing Plans
            .row.mt-5.align-items-center.no-gutters
                .col-12.col-sm-10.col-md-8.m-auto.col-lg-4.text-center.shadow
                    .bg-white.pb-5.pt-5.pl-4.pr-4.rounded-left
                        h2.font-weight-light Basic
                        p.h1.mt-5.mb-5
                            strong $19
                            span.h4 /month
                        ul.text-left
                            li Item 1
                            li Item 2
                            li Item 3
                        p.text-center.pt-4
                            a.btn.btn-outline-dark(href='https://www.froala.com') Choose Plan
                .col-12.col-sm-10.col-md-8.ml-auto.mr-auto.col-lg-4.text-center.mt-4.mt-lg-0.sl-1.pt-0.pt-lg-3.pb-0.pb-lg-3.bg-white.fdb-touch.rounded.shadow
                    .pb-5.pt-5.pl-4.pr-4
                        h2.font-weight-light Standard
                        p.h1.mt-5.mb-5
                            strong $49
                            span.h4 /month
                        ul.text-left
                            li Item 1
                            li Item 2
                            li Item 3
                        p.text-center.pt-4
                            a.btn.btn-primary.btn-shadow(href='https://www.froala.com') Choose Plan
                .col-12.col-sm-10.col-md-8.ml-auto.mr-auto.col-lg-4.text-center.mt-4.mt-lg-0.shadow
                    .bg-white.pb-5.pt-5.pl-4.pr-4.rounded-right
                        h2.font-weight-light OEM
                        p.h1.mt-5.mb-5
                            strong $99
                            span.h4 /month
                        ul.text-left
                            li Item 1
                            li Item 2
                            li Item 3
                        p.text-center.pt-4
                            a.btn.btn-outline-dark(href='https://www.froala.com') Choose Plan


</template>

<script>
    export default {
        name: "FdbBlock5"
    }
</script>

<style scoped lang="scss">

</style>