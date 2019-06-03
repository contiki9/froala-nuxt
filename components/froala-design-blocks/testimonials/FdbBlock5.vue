<template lang="pug">
    // Testimonials 5
    section.fdb-block.py-5
        .container.py-5(style='background-image: url(imgs/shapes/2.svg);')
            .row.align-items-center.justify-content-center
                .col-lg-9.col-xl-6
                    .fdb-box
                        .row
                            .col-8.col-sm-6.col-md-4.col-xl-3.ml-auto.mr-auto
                                img.img-fluid.rounded(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/people/6.jpg')
                            .col-md-8.mt-4.mt-md-0
                                p.lead
                                    | "Even the all-powerful Pointing has no control about day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
                                p.h3.mt-4.mt-xl-5
                                    strong Person Name
                                p
                                    em Co-founder at Company
                .col-lg-9.col-xl-6.mt-4.mt-xl-0
                    .fdb-box
                        .row
                            .col-8.col-sm-6.col-md-4.col-xl-3.ml-auto.mr-auto
                                img.img-fluid.rounded(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/people/8.jpg')
                            .col-md-8.mt-4.mt-md-0
                                p.lead
                                    | "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Separated they at the coast of the Semantics, a large language ocean."
                                p.h3.mt-4.mt-xl-5
                                    strong Person Name
                                p
                                    em Co-founder at Company

</template>

<script>
    export default {
        name: "FdbBlock5"
    }
</script>

<style scoped lang="scss">

</style>