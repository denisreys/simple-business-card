<template>
    <div class="wrapper">
        <div class="container">
            <headerBlock/>
            <mainBlock/>
            <portfolio/>
            <work/>
            <contacts/>
            <footerBlock/>
        </div>
    </div>
</template>
<script>
    import headerBlock from '../../layouts/Header.vue';
    import footerBlock from '../../layouts/Footer.vue';
    import mainBlock from '../blocks/Main.vue';
    import portfolio from '../blocks/Portfolio.vue';
    import work from '../blocks/Work.vue';
    import contacts from '../blocks/Contacts.vue';

    export default {
        components: {headerBlock, footerBlock, mainBlock, portfolio, work, contacts},
        name: 'Index'
    }
</script>