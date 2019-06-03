<template lang="pug">
    // Feature 17
    section.fdb-block
        .container
            .row.justify-content-center
                .col.text-left
                    h1 Froala Design Blocks
                    p.lead
                        | Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            .row.justify-content-center.mb-5
                .col-10
                    img.img-fluid.mt-5(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/draws/android.svg')
            .row.text-left.pt-5
                .col-12.col-md-4
                    .row
                        .col-3
                            img.img-fluid(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/icons/github.svg')
                        .col-9
                            h3
                                strong Feature One
                            p Far far away, behind the word mountains, far from the countries
                .col-12.col-md-4.pt-4.pt-md-0
                    .row
                        .col-3
                            img.img-fluid(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/icons/layers.svg')
                        .col-9
                            h3
                                strong Feature Two
                            p Separated they live in Bookmarksgrove right at the coast
                .col-12.col-md-4.pt-4.pt-md-0
                    .row
                        .col-3
                            img.img-fluid(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/icons/life-buoy.svg')
                        .col-9
                            h3
                                strong Feature Three
                            p A small river named Duden flows by their place and supplies it


</template>

<script>
    export default {
        name: "FdbBlock17"
    }
</script>

<style scoped lang="scss">

</style>