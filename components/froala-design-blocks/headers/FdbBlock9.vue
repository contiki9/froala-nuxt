<template lang="pug">
    // Headers 9
    header
        .container
            nav.navbar.navbar-expand-md.no-gutters
                .col-2.text-left
                    a(href='https://www.froala.com')
                        img(src='@/node_modules/froala-design-blocks/src/imgs/logo.png', height='30', alt='image')
                button.navbar-toggler(type='button', data-toggle='collapse', data-target='.navbar-collapse-1', aria-controls='navbarNav6', aria-expanded='false', aria-label='Toggle navigation')
                    span.navbar-toggler-icon
                .collapse.navbar-collapse.justify-content-center.col-md-8.navbar-collapse-1
                    ul.navbar-nav.justify-content-center
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
                        li.nav-item
                            a.nav-link(href='https://www.froala.com') Contact
                .collapse.navbar-collapse.justify-content-end.col-md-2.navbar-collapse-1
                    ul.navbar-nav
                        li.nav-item
                            a.nav-link(href='https://www.froala.com')
                                | Log In
                                i.fas.fa-sign-in-alt

</template>

<script>
    export default {
        name: "FdbBlock9"
    }
</script>

<style scoped lang="scss">

</style>