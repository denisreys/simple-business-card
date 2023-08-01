<template>
    <div class="wrapper">
        <div class="container">
            <mainBlock/>
            <services/>
            <work/>
            <contacts/>
        </div>
    </div>
</template>
<script>

 import mainBlock from '../blocks/Main.vue';
 import services from '../blocks/Services.vue';
 import work from '../blocks/Work.vue';
 import contacts from '../blocks/Contacts.vue';

export default {
    components: {mainBlock, services, work, contacts},
    name: 'Index'
}
</script>