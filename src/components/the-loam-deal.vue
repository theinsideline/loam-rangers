<script setup lang="ts">
    import { Heading2 } from '@theinsideline/common'
</script>

<template>
    <section class="loam-deal">
        <Heading2 text="The Loam Deal" />
    </section>
</template>

<style scoped lang="scss">
    .loam-deal {
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
