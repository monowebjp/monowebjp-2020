<template>
    <div>
        <ToggleTag :tags="tags"/>
        <Year :lv="2" :text="2020"/>
        <Accordion :items="items" :tags="tags"/>
        <MoreButton text="前の年を見る"/>
    </div>
</template>

<script lang="ts">
    import ToggleTag from "./ToggleTag.vue";
    import Year from "./Year.vue";
    import Accordion from "./Accordion.vue";
    import MoreButton from "./MoreButton.vue";

    export default {
        components: {
            Year,
            ToggleTag,
            Accordion,
            MoreButton
        },
        data: () => ({
            items: [],
            tags: []
        }),
        mounted() {
            this.getTags();
            this.getItems();
        },
        methods: {
            getTags() {
                this.fetchItems('/works/api/tags.json', 'tags');
            },
            getItems() {
                // TODO 今年の西暦を取得
                // TODO 昨年のファイルの有無を確認
                // TODO あればmoreボタンを表示
                this.fetchItems('/works/api/lists/list-2020.json', 'items');
            },
            // TODO moreボタンをクリックしたときの挙動を追加
            // TODO アコーディオンをクリックしたときの挙動を追加
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