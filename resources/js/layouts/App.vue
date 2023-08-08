<template>
    <div class="wrapper">
        <div class="container">
            <headerBlock class="mb-100"/>
            <router-view></router-view>
            <footerBlock class="mb-100"/>
        </div>
    </div>
</template>
<script>
    import headerBlock from './Header.vue';
    import footerBlock from './Footer.vue';

    export default {
        components: {headerBlock, footerBlock}
    }
</script>