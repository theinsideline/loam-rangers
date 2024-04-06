<script setup lang="ts">
    import { LATEST_VIDEO } from '@/constants'
    import { Heading2, LinkButton, Paragraph } from '@theinsideline/common'
</script>

<template>
    <section class="latest-video">
        <Heading2 text="Latest Video" />

        <div class="lates-video__content">
            <div class="content content__title" :style="`background: ${LATEST_VIDEO.BACKGROUND};`">
                <Heading2 :text="LATEST_VIDEO.TITLE" />
                <Paragraph :text="LATEST_VIDEO.DESCRIPTION" />
                <LinkButton color="white" :link="LATEST_VIDEO.VIDEO_LINK" text="Watch now" />
            </div>
            <div class="content content__preview" :style="`background-image: url(${LATEST_VIDEO.IMAGE_LINK});`"></div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    .latest-video {
        &__content {
            display: flex;
        }

        .content {
            width: 50%;
        }

        .content__preview {
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        @include mobile {
            margin-top: 35px;

            &__content {
                flex-direction: column-reverse;
            }

            .content {
                width: 100%;
                height: 340px;
            }
        }

        @include tablet {
            margin-top: 45px;

            &__content {
                flex-direction: column-reverse;
            }

            .content {
                width: 100%;
                height: 340px;
            }
        }

        @include laptop {
            margin-top: 45px;

            &__content {
                flex-direction: column-reverse;
            }

            .content {
                width: 100%;
            }

            .content__preview {
                height: 500px;
            }

            .content__title {
                height: 350px;
            }
        }

        @include desktop {
            margin-top: 45px;

            &__content {
                flex-direction: column-reverse;
            }

            .content {
                width: 100%;
            }

            .content__preview {
                height: 500px;
            }

            .content__title {
                height: 350px;
            }
        }

        @include tv {
            margin-top: 65px;
        }
    }
</style>
