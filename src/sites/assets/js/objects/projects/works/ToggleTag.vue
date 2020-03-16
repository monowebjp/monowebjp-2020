<template>
    <div class="mjpc-tag mjpc-tag--toggle">
        <ul class="mjpc-tag__inner">
            <li class="mjpc-tag__item" v-for="(item, index) in tags">
                <input type="checkbox" name="mjplTag" :id="'mjpIdTag' + index" class="mjpc-tag__input">
                <label :for="'mjpIdTag' + index" class="mjpc-tag__label">{{ item.name }}</label>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    export default {
        props: ['tags']
    }
</script>