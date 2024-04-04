<script setup lang="ts">
    import { Heading2 } from '@theinsideline/common'
</script>

<template>
    <section class="bike-block">
        <Heading2 text="Bike block" />
    </section>
</template>

<style scoped lang="scss">
    .bike-block {
        @include mobile {
            margin-top: 20px;
        }

        @include tablet {
            margin-top: 25px;
        }

        @include laptop {
            margin-top: 25px;
        }

        @include desktop {
            margin-top: 25px;
        }

        @include tv {
            margin-top: 25px;
        }
    }
</style>
