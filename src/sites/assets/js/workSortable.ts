import Vue, { VNode } from 'vue';
import Sortable from './objects/projects/works/Sortable.vue';

new Vue({
    el: '#workSortable',
    render: (h): VNode => h(Sortable)
});
