<template lang="pug">
    // Headers 3
    header
        .container
            nav.navbar.navbar-expand-md
                button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarNav0', aria-controls='navbarNav0', aria-expanded='false', aria-label='Toggle navigation')
                    span.navbar-toggler-icon
                #navbarNav0.collapse.navbar-collapse
                    ul.navbar-nav.mr-auto.ml-auto
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

</template>

<script>
    export default {
        name: "FdbBlock3"
    }
</script>

<style scoped lang="scss">

</style>