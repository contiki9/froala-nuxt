<template lang="pug">
    // Headers 10
    header
        .container
            nav.navbar.navbar-expand-md.no-gutters
                .col-3.text-left
                    a(href='https://www.froala.com')
                        img(src='@/node_modules/froala-design-blocks/src/imgs/logo.png', height='30', alt='image')
                button.navbar-toggler(type='button', data-toggle='collapse', data-target='.navbar-collapse-2', aria-controls='navbarNav7', aria-expanded='false', aria-label='Toggle navigation')
                    span.navbar-toggler-icon
                #navbarNav7.collapse.navbar-collapse.navbar-collapse-2.justify-content-center.col-md-6
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
                .collapse.navbar-collapse.navbar-collapse-2
                    ul.navbar-nav.ml-auto.justify-content-end
                        li.nav-item
                            a.nav-link(href='https://www.froala.com') Log In
                    a.btn.btn-primary.ml-md-3(href='https://www.froala.com') Register


</template>

<script>
    export default {
        name: "FdbBlock10"
    }
</script>

<style scoped lang="scss">

</style>