<template>
    <mainBlock class="mb-100"/>
    <whatido class="mb-100"/>
    <work class="mb-100"/>
    <contacts class="mb-100"/>
</template>
<script>
    import mainBlock from '../blocks/Main.vue';
    import work from '../blocks/Work.vue';
    import whatido from '../blocks/Whatido.vue';
    import contacts from '../blocks/Contacts.vue';

    export default {
        components: {mainBlock, whatido, work, contacts},
        name: 'Index'
    }
</script>