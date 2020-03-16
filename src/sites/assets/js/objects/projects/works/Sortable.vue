<template>
    <div>
        <ToggleTag :items="tags"/>
        <Year/>
        <Accordion/>
    </div>
</template>

<script lang="ts">
    import ToggleTag from "./ToggleTag.vue";
    import Year from "./Year.vue";
    import Accordion from "./Accordion.vue";

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