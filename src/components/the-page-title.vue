<script setup lang="ts">
    import { Heading1, Paragraph } from '@theinsideline/common'
</script>

<template>
    <Heading1 class="page-title" text="The Loam Ranger" />
    <Paragraph class="page-description">
        <strong>Ride What Loam Rides — </strong>The Loam Ranger’s go to Bikes, Components, Accessories, and Apparel
    </Paragraph>
</template>

<style scoped lang="scss">
    .page-title {
        :deep(.heading) {
            text-align: center;
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

    .page-description {
        @include mobile {
            margin-top: 15px;
        }

        @include tablet {
            margin-top: 20px;
        }

        @include laptop {
            margin-top: 20px;
        }

        @include desktop {
            margin-top: 20px;
        }

        @include tv {
            margin-top: 30px;
        }
    }
</style>
