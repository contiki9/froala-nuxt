<template lang="pug">
    // Feature 29
    section.fdb-block
        .container
            .row.justify-content-center
                .col-12col-md-10.col-lg-8.text-center
                    h1 Froala Design Blocks
            .row.justify-content-center.text-center.mt-5
                .col-12.col-sm-6.col-md-5.col-lg-3
                    img.fdb-icon(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/icons/github.svg')
                    h3
                        strong Feature one longer Text
                .col-12.col-sm-6.col-md-5.col-lg-3.pt-4.pt-sm-0
                    img.fdb-icon(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/icons/gift.svg')
                    h3
                        strong Feature two shorter
            .row.justify-content-center.text-center.mt-5.mt-md-4.pt-5
                .col-12.col-md-10.col-lg-8
                    img.img-fluid(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/draws/social-media.svg')
                    p
                        em Coming this fall

</template>

<script>
    export default {
        name: "FdbBlock29"
    }
</script>

<style scoped lang="scss">

</style>