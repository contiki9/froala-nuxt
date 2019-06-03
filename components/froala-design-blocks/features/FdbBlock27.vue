<template lang="pug">
    // Feature 27
    section.fdb-block
        .container
            .row.justify-content-center.pb-xl-5
                .col-8.col-sm-8.text-center
                    h1 Froala Design Blocks
                    img.img-fluid.mt-5(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/draws/development.svg')
            .row.text-left.justify-content-center.pt-5
                .col-12.col-md-6.col-lg-5.m-sm-auto
                    .row
                        .col-3
                            img.img-fluid(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/icons/github.svg')
                        .col-9
                            h3
                                strong Feature One
                            p
                                | Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.
                .col-12.col-md-6.col-lg-5.m-sm-auto.pt-3.pt-sm-5.pt-md-0
                    .row
                        .col-3
                            img.img-fluid(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/icons/layers.svg')
                        .col-9
                            h3
                                strong Feature Two
                            p
                                | Separated they live in Bookmarksgrove, right at the coast of the Semantics, a large language ocean.

</template>

<script>
    export default {
        name: "FdbBlock27"
    }
</script>

<style scoped lang="scss">

</style>