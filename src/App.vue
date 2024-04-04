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
    <PageTitle />
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import HelloWorld from './components/HelloWorld.vue'
    import PageTitle from './components/page-title.vue'

    export default defineComponent({
        name: 'App',
        components: {
            HelloWorld,
            PageTitle,
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
