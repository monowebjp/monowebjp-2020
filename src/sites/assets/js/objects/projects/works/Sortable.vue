<template>
    <div>
<!--        <ToggleTag :tags="tags"/>-->
        <div v-for="item in items">
            <Year :lv="2" :text="item.year"/>
            <Accordion :items="item.items" :tags="tags"/>
        </div>
<!--        <MoreButton @moreLoad="clickMoreButton" text="前の年を見る"/>-->
    </div>
</template>

<script lang="ts">
    // import ToggleTag from "./ToggleTag.vue";
    import Year from "./Year.vue";
    import Accordion from "./Accordion.vue";
    // import MoreButton from "./MoreButton.vue";

    export default {
        components: {
            Year,
            // ToggleTag,
            Accordion
            // MoreButton
        },
        data: () => ({
            years: [],
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
                // TODO 昨年のファイルの有無を確認
                // TODO あればmoreボタンを表示
                this.fetchItems(`/works/api/lists/list.json`, 'items');
            },
            // TODO moreボタンをクリックしたときの挙動を追加
            // clickMoreButton() {
            //     this.years.push(this.years.slice(-1)[0] - 1);
            //     alert('test');
            // },
            // TODO アコーディオンをクリックしたときの挙動を追加
            fetchItems(apiUrl: string, param: string) {
                fetch(apiUrl)
                    .then(res => {
                        return res.json();
                    })
                    .then(json => {
                        this[param] = json.items;
                    });
            }
        }
    }

</script>