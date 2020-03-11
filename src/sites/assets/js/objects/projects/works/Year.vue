<template>
    <h1 :class="'mjpc-heading mjpc-heading--lv' + lv + ' mjpu-taCenter'">
        <span class="mjpc-heading__text">{{ text }}</span>
    </h1>
</template>

<script>
    export default {
        props: ['lv', 'text']
    }
</script>