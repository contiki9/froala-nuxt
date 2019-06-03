<template lang="pug">
    // Feature 8
    section.fdb-block
        .container
            .row.text-center
                .col-12
                    h1 Features
                    img.img-fluid.mt-5(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/draws/email.svg')
            .row.text-center.justify-content-center.mt-5.pt-5
                .col-12.col-sm-4.col-lg-3.m-md-auto
                    img.fdb-icon(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/icons/monitor.svg')
                    h3
                        strong Feature 1
                .col-12.col-sm-4.col-lg-3.m-auto.pt-4.pt-sm-0
                    img.fdb-icon(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/icons/map.svg')
                    h3
                        strong Feature 2
                .col-12.col-sm-4.col-lg-3.m-auto.pt-4.pt-sm-0
                    img.fdb-icon(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/icons/package.svg')
                    h3
                        strong Feature 3

</template>

<script>
    export default {
        name: "FdbBlock8"
    }
</script>

<style scoped lang="scss">

</style>