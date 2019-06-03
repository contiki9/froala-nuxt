<template lang="pug">
    // Footers 3
    footer.fdb-block.footer-small
        .container
            .row.text-center.align-items-center
                .col-12.col-md-8
                    ul.nav.justify-content-center.justify-content-md-start.align-items-center
                        li.nav-item
                            a.nav-link.active(href='https://www.froala.com')
                                img(alt='image', src='@/node_modules/froala-design-blocks/src/imgs/logo.png', height='40')
                        li.w-100.d-block.d-sm-none
                        li.nav-item
                            a.nav-link(href='https://www.froala.com') Features
                        li.nav-item
                            a.nav-link(href='https://www.froala.com') Terms
                        li.nav-item
                            a.nav-link(href='https://www.froala.com') About
                .col-12.col-md-4.mt-4.mt-md-0.text-md-right
                    | © 2013-2018 Froala

</template>

<script>
    export default {
        name: "FdbBlock3"
    }
</script>

<style scoped lang="scss">

</style>