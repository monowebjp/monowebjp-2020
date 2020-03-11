<template>
    <div>
        <ToggleTag :items="tags"/>
        <Year/>
        <Accordion/>
    </div>
</template>

<script lang="ts">
    import ToggleTag from './ToggleTag';
    import Year from './Year';
    import Accordion from './Accordion';

    function test(json) {
        return json;
    }

    export default {
        components: {
            Year,
            ToggleTag,
            Accordion
        },
        data() {
            return {
                tags: null
            }
        },
        mounted() {
            fetch('/works/api/tags.json')
                .then(function (res) {
                    return res.json();
                })
                .then(function (json) {
                    this.tags = json;
                });
        }
    }

</script>