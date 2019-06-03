<template lang="pug">
    // Pricings 8
    section.fdb-block
        .container
            .row.text-center
                .col
                    h1 Pricing Plans
            .row.mt-5.align-items-top
                .col-12.col-md-8.m-auto.col-lg-4.text-center
                    img(alt='image', height='60', src='@/node_modules/froala-design-blocks/src/imgs/icons/cloud.svg')
                    h2
                        strong Startup
                    p.h3.mb-4.mb-lg-5
                        em $9 / month
                    p 10 hours of support
                    p 40MB of storage
                    p Subdomain
                    p.text-center.mt-4.mt-lg-5
                        a.btn.btn-primary(href='https://www.froala.com') Choose Plan
                .col-12.col-md-8.col-lg-4.text-center.m-auto.pt-5.pt-lg-0
                    img(alt='image', height='60', src='@/node_modules/froala-design-blocks/src/imgs/icons/life-buoy.svg')
                    h2
                        strong Advanced
                    p.h3.mb-4.mb-lg-5
                        em $19 / month
                    p 10 hours of support
                    p 40MB of storage
                    p Subdomain
                    p.text-center.mt-4.mt-lg-5
                        a.btn.btn-primary(href='https://www.froala.com') Choose Plan
                .col-12.col-md-8.m-auto.col-lg-4.text-center.pt-5.pt-lg-0
                    img(alt='image', height='60', src='@/node_modules/froala-design-blocks/src/imgs/icons/layers.svg')
                    h2
                        strong Business
                    p.h3.mb-4.mb-lg-5
                        em $29 / month
                    p 10 hours of support
                    p 40MB of storage
                    p Subdomain
                    p.text-center.mt-4.mt-lg-5
                        a.btn.btn-primary(href='https://www.froala.com') Choose Plan


</template>

<script>
    export default {
        name: "FdbBlock8"
    }
</script>

<style scoped lang="scss">

</style>