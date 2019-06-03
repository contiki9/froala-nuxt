<template lang="pug">
    // Headers 6
    header
        .container
            nav.navbar.navbar-expand-md
                a.navbar-brand(href='https://www.froala.com')
                    img(src='@/node_modules/froala-design-blocks/src/imgs/logo.png', height='30', alt='image')
                button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarNav3', aria-controls='navbarNav3', aria-expanded='false', aria-label='Toggle navigation')
                    span.navbar-toggler-icon
                #navbarNav3.collapse.navbar-collapse
                    ul.navbar-nav.ml-auto
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
                            a.nav-link(href='https://www.froala.com') About
                    a.btn.btn-outline-primary.ml-md-3(href='https://www.froala.com') Button

</template>

<script>
    export default {
        name: "FdbBlock6"
    }
</script>

<style scoped lang="scss">

</style>