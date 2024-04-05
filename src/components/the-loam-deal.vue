<script setup lang="ts">
    import { Heading2 } from '@theinsideline/common'
</script>

<template>
    <section class="loam-deal">
        <Heading2 text="The Loam Deal" />

        <div class="loam-deal__content">
            <div class="content content__video">
                <img src="/icons/play_button.svg" alt="play_button" />
            </div>
            <div class="content content__form"></div>
        </div>
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

        .content {
            width: 50%;
        }

        &__content {
            display: flex;

            .content__video {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: green;
                height: 600px;
                // background-image: url("/images/preview.png");
            }

            .content__form {
                background-color: #161616;
            }
        }
    }
</style>
