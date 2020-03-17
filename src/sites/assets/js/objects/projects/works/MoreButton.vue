<template>
    <button @click="clickMoreButton" type="button" class="mjpc-button mjpc-button--primaryBase">{{ text }}</button>
</template>

<script lang="ts">
    export default {
        props: ['text'],
        methods: {
            clickMoreButton() {
                this.$emit('moreLoad');
            }
        }
    }
</script>