<script setup lang="ts">
    import { onMounted } from 'vue'

    onMounted(() => {
        const headerElement = document.querySelector('h1.margin-bottom-sm')
        if (!headerElement) return

        const header = (headerElement.textContent || '').toLowerCase()
        if (!header.length) return

        if (!header.includes('loam')) return

        headerElement.remove()

        const section = document.querySelector('section.section-control.container')
        if (!section) return

        section.classList.add('padding-top-null')
    })
</script>

<template>
    <ThePageTitle />
    <TheBikeBlock />
    <TheLoamDeal />
    <TheLatestVideo />
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import ThePageTitle from './components/the-page-title.vue'
    import TheBikeBlock from './components/the-bike-block.vue'
    import TheLoamDeal from './components/the-loam-deal.vue'
    import TheLatestVideo from './components/the-latest-video.vue'

    export default defineComponent({
        name: 'App',
        components: {
            ThePageTitle,
            TheBikeBlock,
            TheLoamDeal,
            TheLatestVideo,
        },
    })
</script>

<style lang="scss">
    .padding-top-null {
        padding-top: 0 !important;
    }

    #loam_rangers {
        margin-left: auto;
        margin-right: auto;
    }
</style>
