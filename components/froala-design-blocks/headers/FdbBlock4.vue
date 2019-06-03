<template lang="pug">
    // Headers 4
    header
        .container
            nav.navbar.navbar-expand-md
                a.navbar-brand(href='https://www.froala.com')
                    img(src='@/node_modules/froala-design-blocks/src/imgs/logo.png', height='30', alt='image')
                button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarNav1', aria-controls='navbarNav1', aria-expanded='false', aria-label='Toggle navigation')
                    span.navbar-toggler-icon
                #navbarNav1.collapse.navbar-collapse
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
                    ul.navbar-nav.justify-content-end.d-none.d-lg-flex.ml-md-auto
                        li.nav-item
                            a.nav-link(href='https://www.froala.com')
                                i.fa.fa-slack
                        li.nav-item
                            a.nav-link(href='https://www.froala.com')
                                i.fa.fa-twitter
                        li.nav-item
                            a.nav-link(href='https://www.froala.com')
                                i.fa.fa-github
                    a.btn.btn-outline-primary.ml-md-3(href='https://www.froala.com') Button

</template>

<script>
    export default {
        name: "FdbBlock4"
    }
</script>

<style scoped lang="scss">

</style>