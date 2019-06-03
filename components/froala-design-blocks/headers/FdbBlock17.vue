<template lang="pug">
    // Headers 17
    header.bg-dark
        .container
            nav.navbar.navbar-expand-md.no-gutters
                .col-2.text-left
                    a(href='https://www.froala.com')
                        img(src='@/node_modules/froala-design-blocks/src/imgs/logo.png', height='30', alt='image')
                button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarNav12', aria-controls='navbarNav12', aria-expanded='false', aria-label='Toggle navigation')
                    span.navbar-toggler-icon
                #navbarNav12.collapse.navbar-collapse.justify-content-center.col-md-8
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
                ul.navbar-nav.col-2.justify-content-end.d-none.d-md-flex
                    li.nav-item.active
                        a.nav-link(href='https://www.froala.com')
                            i.fa.fa-facebook
                    li.nav-item
                        a.nav-link(href='https://www.froala.com')
                            i.fa.fa-twitter
                    li.nav-item
                        a.nav-link(href='https://www.froala.com')
                            i.fa.fa-github
                    li.nav-item
                        a.nav-link(href='https://www.froala.com')
                            i.fa.fa-google

</template>

<script>
    export default {
        name: "FdbBlock17"
    }
</script>

<style scoped lang="scss">

</style>