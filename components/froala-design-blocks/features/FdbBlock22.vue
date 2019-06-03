<template lang="pug">
    // Feature 22
    section.fdb-block
        .container
            .row.justify-content-center.pb-5
                .col-12.text-center
                    h1 Froala Design Blocks
            .row.text-left.align-items-center.pt-5.pb-md-5
                .col-4.col-md-5
                    img.img-fluid(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/draws/designer.svg')
                .col-12.col-md-5.m-md-auto
                    h2
                        strong Feature One
                    p.lead
                        | Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                    p
                        a(href='https://www.froala.com')
                            | Learn More
                            i.fas.fa-angle-right
            .row.text-left.align-items-center.pt-5.pb-md-5
                .col-4.col-md-5.m-md-auto.order-md-5
                    img.img-fluid(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/draws/design-life.svg')
                .col-12.col-md-5
                    h2
                        strong Feature Two
                    p.lead
                        | Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                    p
                        a(href='https://www.froala.com')
                            | Learn More
                            i.fas.fa-angle-right
            .row.text-left.align-items-center.pt-5
                .col-4.col-md-5
                    img.img-fluid(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/draws/design-community.svg')
                .col-12.col-md-5.m-md-auto
                    h2
                        strong Feature Three
                    p.lead
                        | On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn
                        | around.
                    p
                        a(href='https://www.froala.com')
                            | Learn More
                            i.fas.fa-angle-right

</template>

<script>
    export default {
        name: "FdbBlock22"
    }
</script>

<style scoped lang="scss">

</style>