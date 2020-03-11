<template>
    <div class="mjpc-tag mjpc-tag--toggle">
        <ul class="mjpc-tag__inner">
            <li class="mjpc-tag__item" v-for="(item, index) in items">
                <input type="checkbox" name="mjplTag" :id="'mjpIdTag' + index" class="mjpc-tag__input">
                <label :for="'mjpIdTag' + index" class="mjpc-tag__label">{{ item.name }}</label>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        data: () => {
            return {
                items: [
                    {name: 'Webデザイン'},
                    {name: 'フロントエンド構築'},
                    {name: 'バックエンド構築'},
                    {name: 'ロゴデザイン'},
                    {name: '名刺デザイン'}
                ]
            };
        },
    })
</script>