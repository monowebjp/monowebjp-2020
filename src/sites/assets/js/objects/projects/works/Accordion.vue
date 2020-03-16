<template>
    <div>
        <div class="mjpp-workAccordion" v-for="(item, index) in items">
            <div aria-expanded="false" :aria-controls="'workAccordionContent' + index" id="'workAccordionTrigger' + index" class="mjpp-workAccordion__trigger">
                <figure class="mjpp-workAccordion__figure"><img :src="item.thumbnail" alt=""></figure>
                <div class="mjpp-workAccordion__text"><h2 class="mjpc-heading mjpc-heading--lv3"><span class="mjpc-heading__text">{{item.title}}</span></h2>
                    <div class="mjpc-tag mjpc-tag--status"><i class="mjpc-icon mjpc-icon--tag">
                        <svg class="mjpc-icon__image" width="16" height="16">
                            <use xlink:href="#mjpc-icon--tag"></use>
                        </svg>
                    </i>
                        <ul class="mjpc-tag__inner">
                            <li class="mjpc-tag__item" v-for="tag in item.tags"><span :class="'mjpc-tag__label ' + tag.active">{{ tags[tag.id].name }}</span></li>
                        </ul>
                    </div>
                    <p class="mjpc-paragraph">{{ item.description }}</p>
                </div>
                <i class="mjpc-icon mjpc-icon--arrowTop">
                    <svg class="mjpc-icon__image" width="16" height="16">
                        <use xlink:href="#mjpc-icon--arrowTop"></use>
                    </svg>
                </i>
            </div>
            <div role="region" aria-labelledby="workAccordionTrigger0" id="workAccordionContent0" class="mjpp-workAccordion__content">
                <div class="mjpp-workAccordion__contentInner">
                    <div class="mjpc-grid">
                        <div class="mjpc-grid__inner">
                            <div class="mjpc-grid__col6">
                                <h3 class="mjpc-heading mjpc-heading--lv3"><i class="mjpc-icon mjpc-icon--team">
                                    <svg class="mjpc-icon__image" width="16" height="16">
                                        <use xlink:href="#mjpc-icon--team"></use>
                                    </svg>
                                </i><span class="mjpc-heading__text">チーム編成</span></h3>
                                <div class="mjpp-tabRuler">
                                    <dl class="mjpp-tabRuler__item">
                                        <dt class="mjpp-tabRuler__title">ディレクター</dt>
                                        <dd class="mjpp-tabRuler__description">1名</dd>
                                    </dl>
                                    <dl class="mjpp-tabRuler__item">
                                        <dt class="mjpp-tabRuler__title">デザイナー<i class="mjpc-mark">参画</i></dt>
                                        <dd class="mjpp-tabRuler__description">1名</dd>
                                    </dl>
                                    <dl class="mjpp-tabRuler__item">
                                        <dt class="mjpp-tabRuler__title">フロントエンド開発<i class="mjpc-mark">参画</i></dt>
                                        <dd class="mjpp-tabRuler__description">1名</dd>
                                    </dl>
                                    <dl class="mjpp-tabRuler__item">
                                        <dt class="mjpp-tabRuler__title">バックエンド開発<i class="mjpc-mark">参画</i></dt>
                                        <dd class="mjpp-tabRuler__description">3名</dd>
                                    </dl>
                                </div>
                            </div>
                            <div class="mjpc-grid__col6">
                                <h3 class="mjpc-heading mjpc-heading--lv3"><i class="mjpc-icon mjpc-icon--laptop">
                                    <svg class="mjpc-icon__image" width="16" height="16">
                                        <use xlink:href="#mjpc-icon--laptop"></use>
                                    </svg>
                                </i><span class="mjpc-heading__text">アプリケーション</span></h3>
                                <div class="mjpc-tag mjpc-tag--images">
                                    <ul class="mjpc-tag__inner">
                                        <li class="mjpc-tag__item"><img src="/assets/img/icon-figma.svg" alt="figma" class="mjpc-tag__image"></li>
                                        <li class="mjpc-tag__item"><img src="/assets/img/icon-xd.svg" alt="Adobe XD" class="mjpc-tag__image"></li>
                                        <li class="mjpc-tag__item"><img src="/assets/img/icon-illustrator.svg" alt="Adobe Illustrator" class="mjpc-tag__image"></li>
                                        <li class="mjpc-tag__item"><img src="/assets/img/icon-intellij.svg" alt="Intellij IDEA" class="mjpc-tag__image"></li>
                                    </ul>
                                </div>
                                <h3 class="mjpc-heading mjpc-heading--lv3"><i class="mjpc-icon mjpc-icon--htmltag">
                                    <svg class="mjpc-icon__image" width="16" height="16">
                                        <use xlink:href="#mjpc-icon--htmltag"></use>
                                    </svg>
                                </i><span class="mjpc-heading__text">言語・フレームワーク</span></h3>
                                <div class="mjpc-tag">
                                    <ul class="mjpc-tag__inner">
                                        <li class="mjpc-tag__item"><span class="mjpc-tag__label">HTML</span></li>
                                        <li class="mjpc-tag__item"><span class="mjpc-tag__label">CSS</span></li>
                                        <li class="mjpc-tag__item"><span class="mjpc-tag__label">EJS</span></li>
                                        <li class="mjpc-tag__item"><span class="mjpc-tag__label">SCSS</span></li>
                                        <li class="mjpc-tag__item"><span class="mjpc-tag__label">Javascript</span></li>
                                        <li class="mjpc-tag__item"><span class="mjpc-tag__label">PHP</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 class="mjpc-heading mjpc-heading--lv3"><i class="mjpc-icon mjpc-icon--pen">
                        <svg class="mjpc-icon__image" width="16" height="16">
                            <use xlink:href="#mjpc-icon--pen"></use>
                        </svg>
                    </i><span class="mjpc-heading__text">概要</span></h3>
                    <p class="mjpc-paragraph">3Dパースモデリングの集客を目的としたランディングページのデザイン。3Dパースモデリングの集客を目的としたランディングページのデザイン。3Dパースモデリングの集客を目的としたランディングページのデザイン。</p></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        props: ['items', 'tags']
    }
</script>