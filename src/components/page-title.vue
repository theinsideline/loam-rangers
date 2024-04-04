<script setup lang="ts">
    import { Heading1 } from '@theinsideline/common'
</script>

<template>
    <Heading1 class="page-title" text="The Loam Ranger" />
</template>

<style scoped lang="scss">
    .page-title {
        :deep(.heading) {
            text-align: left;
        }

        @include mobile {
            margin-top: 35px;
        }

        @include tablet {
            margin-top: 45px;
        }

        @include laptop {
            margin-top: 45px;
        }

        @include desktop {
            margin-top: 45px;
        }

        @include tv {
            margin-top: 60px;
        }
    }
</style>
