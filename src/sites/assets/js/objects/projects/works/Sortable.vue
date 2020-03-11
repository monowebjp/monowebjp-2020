<template>
    <div>
        <ToggleTag :items=""/>
        <Year :items=""/>
        <Accordion :items=""/>
    </div>
</template>

<script lang="ts">
    import ToggleTag from './ToggleTag';
    import Year from './Year';
    import Accordion from './Accordion';

    export default {
        components: {
            Year,
            ToggleTag,
            Accordion
        },
        data: () => {
            return {}
        }
    }

</script>