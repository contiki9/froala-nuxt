<template lang="pug">
    // Feature 25
    section.fdb-block
        .container
            .row.text-center
                .col-12
                    h1 There is a feature for everyone
                    p.lead
                        a(href='https://www.froala.com')
                            | See all features
                            i.fas.fa-angle-right
            .row.text-center.justify-content-center.mt-5
                .col-10.col-sm-3
                    img.img-fluid.rounded(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/hero/blue.svg')
                    h3
                        strong Feature One
                .col-10.col-sm-3.pt-5.pt-sm-0
                    img.img-fluid.rounded(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/hero/red.svg')
                    h3
                        strong Feature Two
                .col-10.col-sm-3.pt-5.pt-sm-0
                    img.img-fluid.rounded(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/hero/purple.svg')
                    h3
                        strong Feature Three
                .col-10.col-sm-3.pt-5.pt-sm-0
                    img.img-fluid.rounded(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/hero/yellow.svg')
                    h3
                        strong Feature Four



</template>

<script>
    export default {
        name: "FdbBlock25"
    }
</script>

<style scoped lang="scss">

</style>