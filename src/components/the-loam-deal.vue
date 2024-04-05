<script setup lang="ts">
    import { PUBLIC_DOMAIN } from '@/constants'
    import { Heading2 } from '@theinsideline/common'
    import { ref } from 'vue'

    const previewUrl = ref(`${PUBLIC_DOMAIN}/images/preview.png`)
</script>

<template>
    <section class="loam-deal">
        <Heading2 text="The Loam Deal" />

        <div class="loam-deal__content">
            <a
                class="content content__video play__wrapper"
                role="button"
                href="#0"
                data-url="https://www.youtube.com/watch?v=ocp5ynefpDk"
                aria-controls="modalFeatureVideo11"
                :style="`background-image: url(${previewUrl});`"
            >
                <img :src="`${PUBLIC_DOMAIN}/icons/play_button.svg`" alt="play_button" />
            </a>
            <div class="content content__form"></div>
        </div>
    </section>
    <div id="modalFeatureVideo11" class="modal modal-video js-modal js-modal-video" data-animation="on">
        <div
            class="modal-video__content max-width-md js-modal-video__content"
            tabindex="-1"
            role="alertdialog"
            aria-describedby="modalVideoDescription1"
        >
            <p id="modalVideoDescription1" class="sr-only">A video is being shown</p>
            <div class="media-wrapper">
                <iframe class="js-modal-video__media" src="" width="640" height="360" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
        <div class="modal-video__loader" aria-hidden="true"> </div>
        <button class="reset modal__close-btn js-modal__close"></button>
    </div>
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
                height: 600px;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;

                img {
                    transition: transform 0.3s linear;
                    cursor: pointer;

                    &:hover {
                        transform: scale(1.1, 1.1);
                        transition: transform 0.3s linear;
                    }
                }
            }

            .content__form {
                background-color: #161616;
            }
        }
    }
</style>
