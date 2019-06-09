<template>
    <div class="decoarator">
        <slot name="story"></slot>
    </div>
</template>

<script>
    export default {
        name: 'Decorator'
    }
</script>

<style lang="scss">
    @import "~/assets/scss/style.scss";
</style>