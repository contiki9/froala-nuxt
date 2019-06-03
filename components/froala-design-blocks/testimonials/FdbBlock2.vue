<template lang="pug">
    // Testimonials 2
    section.fdb-block(style='background-image: url(imgs/hero/red.svg);')
        .container
            .fdb-box
                .row.align-items-center.justify-content-center
                    .col-10.col-sm-6.col-md-4.col-lg-3.col-xl-2.m-auto
                        img.img-fluid.rounded-circle(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/people/3.jpg')
                    .col-12.col-md-8.ml-auto.mr-auto.mt-4.mt-md-0
                        p.lead
                            | "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
                        p.h3.mt-4.mt-lg-5
                            strong Person Name
                        p
                            em Co-founder at Company
</template>

<script>
    export default {
        name: "FdbBlock2"
    }
</script>

<style scoped lang="scss">

</style>