import Vue, { VNode } from 'vue';
import ToggleTag from './objects/projects/works/ToggleTag.vue';

new Vue({
    el: '#workSortable',
    render: (h): VNode => h(ToggleTag)
});
