<template lang="pug">
    // Feature 24
    section.fdb-block
        .container
            .row.align-items-top
                .col-12.col-md-6.col-xl-4.m-auto
                    h2 Learn more about the Froala Design Blocks you love
                .col-12.col-md-6.pt-5.pt-md-0
                    .row.justify-content-left
                        .col-3.m-auto.text-center
                            img.fdb-icon(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/icons/gift.svg')
                            p
                                a(href='https://www.froala.com')
                                    | One
                                    i.fas.fa-angle-right
                        .col-3.m-auto.text-center
                            img.fdb-icon(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/icons/map.svg')
                            p
                                a(href='https://www.froala.com')
                                    | Two
                                    i.fas.fa-angle-right
                        .col-3.m-auto.text-center
                            img.fdb-icon(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/icons/life-buoy.svg')
                            p
                                a(href='https://www.froala.com')
                                    | Three
                                    i.fas.fa-angle-right
                    .row.justify-content-left.mt-4.mt-xl-5
                        .col-3.m-auto.text-center
                            img.fdb-icon(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/icons/layout.svg')
                            p
                                a(href='https://www.froala.com')
                                    | Four
                                    i.fas.fa-angle-right
                        .col-3.m-auto.text-center
                            img.fdb-icon(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/icons/map-pin.svg')
                            p
                                a(href='https://www.froala.com')
                                    | Five
                                    i.fas.fa-angle-right


</template>

<script>
    export default {
        name: "FdbBlock24"
    }
</script>

<style scoped lang="scss">

</style>