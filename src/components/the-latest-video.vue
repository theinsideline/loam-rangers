<script setup lang="ts">
    import { Heading2 } from '@theinsideline/common'
</script>

<template>
    <section class="latest-video">
        <Heading2 text="Latest Video" />
    </section>
</template>

<style scoped lang="scss">
    .latest-video {
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
            margin-top: 65px;
        }
    }
</style>
