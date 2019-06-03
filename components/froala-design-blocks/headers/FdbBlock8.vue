<template lang="pug">
    // Headers 8
    header
        .container
            nav.navbar.navbar-expand-lg
                a.navbar-brand(href='https://www.froala.com')
                    img(src='@/node_modules/froala-design-blocks/src/imgs/logo.png', height='30', alt='image')
                button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarNav5', aria-controls='navbarNav5', aria-expanded='false', aria-label='Toggle navigation')
                    span.navbar-toggler-icon
                #navbarNav5.collapse.navbar-collapse
                    ul.navbar-nav.mr-auto
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
                    ul.navbar-nav.justify-content-end.ml-auto
                        li.nav-item
                            a.nav-link(href='https://www.froala.com') Docs
                        li.nav-item
                            a.nav-link(href='https://www.froala.com') Contact
                        li.nav-item
                            a.nav-link(href='https://www.froala.com') Log In
                    a.btn.btn-primary.ml-md-3(href='https://www.froala.com') Button
</template>

<script>
    export default {
        name: "FdbBlock8"
    }
</script>

<style scoped lang="scss">

</style>