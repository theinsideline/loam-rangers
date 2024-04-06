<script setup lang="ts">
    import { LATEST_VIDEO } from '@/constants'
    import { Heading2, Heading3, LinkButton, Paragraph } from '@theinsideline/common'
</script>

<template>
    <section class="latest-video">
        <Heading2 text="Latest Video" />

        <div class="latest-video__content">
            <div class="content content__title" :style="`background: ${LATEST_VIDEO.BACKGROUND};`">
                <Heading3 :text="LATEST_VIDEO.TITLE" />
                <Paragraph class="description" :text="LATEST_VIDEO.DESCRIPTION" />
                <LinkButton class="watch-now__button" color="white" :link="LATEST_VIDEO.VIDEO_LINK" text="Watch now" />
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

        .watch-now__button {
            transition: all 0.3s ease-in-out;

            &:hover {
                background: #747474 !important;
                color: white !important;
                transition: all 0.3s ease-in-out;
            }

            :deep {
                color: #161616;
            }
        }

        .content__title {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            :deep(.heading_3) {
                h3 {
                    color: white;
                }
            }

            :deep(.paragraph) {
                color: white;
                text-align: center;
            }
        }

        .content__preview {
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        @include mobile {
            margin-top: 35px;

            &__content {
                display: flex;
                flex-direction: column-reverse;
            }

            .content {
                width: 100%;
                height: 340px;
            }

            .content__title {
                padding: 20px;

                .description {
                    margin-bottom: 25px;
                }
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

            .content__title {
                padding: 20px;

                .description {
                    margin-bottom: 25px;
                }
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
                padding: 40px;
                height: 350px;

                .description {
                    margin-bottom: 30px;
                }

                .watch-now__button {
                    max-width: 300px;
                }
            }
        }

        @include desktop {
            margin-top: 45px;

            .content__preview {
                height: 500px;
            }

            .content__title {
                height: 500px;
            }
        }

        @include tv {
            margin-top: 65px;
        }
    }
</style>
