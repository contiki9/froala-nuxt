<template lang="pug">
    // Headers 15
    header.bg-dark
        .container
            nav.navbar.navbar-expand-md.no-gutters
                button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarNav10', aria-controls='navbarNav10', aria-expanded='false', aria-label='Toggle navigation')
                    span.navbar-toggler-icon
                .col-4.col-sm-2.text-center.order-lg-6
                    a(href='https://www.froala.com')
                        img(src='@/node_modules/froala-design-blocks/src/imgs/logo.png', height='30', alt='image')
                #navbarNav10.collapse.navbar-collapse.col-12.col-md-5.order-lg-1
                    ul.navbar-nav.col-5
                        li.nav-item.active
                            a.nav-link(href='https://www.froala.com')
                                | Home
                                span.sr-only (current)
                        li.nav-item
                            a.nav-link(href='https://www.froala.com') Features
                        li.nav-item
                            a.nav-link(href='https://www.froala.com') Pricing
                        li.nav-item
                            a.nav-link(href='https://www.froala.com') Team
                ul.navbar-nav.justify-content-end.col-sm-5.order-lg-12.d-none.d-md-flex
                    li.nav-item
                        a.nav-link(href='https://www.froala.com')
                            i.fa.fa-twitter
                    li.nav-item
                        a.nav-link(href='https://www.froala.com')
                            i.fa.fa-github
                    li.nav-item
                        a.nav-link(href='https://www.froala.com')
                            i.fa.fa-slack

</template>

<script>
    export default {
        name: "FdbBlock15"
    }
</script>

<style scoped lang="scss">

</style>