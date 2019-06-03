<template lang="pug">
    // Contents 8
    section.fdb-block
        .container
            .row
                .col.text-center
                    h1 Froala Design Blocks
                    p.lead Subtitle text about launch comes here.
                    p.lead
                        a.mx-2(href='https://www.froala.com')
                            | Learn More
                            i.fas.fa-angle-right
                        a.mx-2(href='https://www.froala.com')
                            | Buy
                            i.fas.fa-angle-right
            .row.justify-content-center
                .col-6
                    img.img-fluid.mt-5(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/draws/hosting.svg')

</template>

<script>
    export default {
        name: "FdbBlock8"
    }
</script>

<style scoped lang="scss">

</style>