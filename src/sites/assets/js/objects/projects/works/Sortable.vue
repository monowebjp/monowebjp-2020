<template>
    <div>
        <ToggleTag :tags="tags"/>
        <Year/>
        <Accordion :items="items"/>
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
        data: () => ({
            items: [],
            tags: []
        }),
        mounted() {
            this.fetchItems('/works/api/tags.json', 'tags');
            this.fetchItems('/works/api/lists/list-2020.json', 'items');
        },
        methods: {
            fetchItems(apiUrl: string, param: string) {
                fetch(apiUrl)
                    .then(res => {
                        return res.json();
                    })
                    .then(json => {
                        console.log(json.items);
                        this[param] = json.items;
                    });
            }
        }
    }

</script>