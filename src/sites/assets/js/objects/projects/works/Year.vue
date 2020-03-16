<template>
    <h2 :class="'mjpc-heading mjpc-heading--lv' + lv + ' mjpu-taCenter'">
        <span class="mjpc-heading__text">{{ text }}</span>
    </h2>
</template>

<script lang="ts">
    export default {
        props: ['lv', 'text']
    }
</script>