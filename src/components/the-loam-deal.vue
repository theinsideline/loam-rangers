<script setup lang="ts">
    import { PUBLIC_DOMAIN } from '@/constants'
    import { Heading2 } from '@theinsideline/common'
    import { ref } from 'vue'

    const previewUrl = ref(`${PUBLIC_DOMAIN}/images/preview.png`)
    const displayBasic = ref(false)
    const images = ref([
        {
            itemImageSrc: 'https://www.youtube.com/watch?v=ocp5ynefpDk',
        },
    ])
    const open = ref(false)
    const toggleModal = () => {
        open.value = !open.value
    }
</script>

<template>
    <section class="loam-deal">
        <Heading2 text="The Loam Deal" />

        <div class="loam-deal__content">
            <div class="content content__video" @click="toggleModal" :style="`background-image: url(${previewUrl})`">
                <img :src="`${PUBLIC_DOMAIN}/icons/play_button.svg`" alt="play_button" />
            </div>
            <div class="content content__form"></div>
        </div>
        <dialog class="loam-deal__modal" :open @click="toggleModal">
            <iframe
                id="ytplayer"
                type="text/html"
                width="1024"
                height="576"
                src="https://www.youtube.com/embed/ocp5ynefpDk"
                frameborder="0"
                allowfullscreen
            />
        </dialog>
    </section>
</template>

<style scoped lang="scss">
    .loam-deal {
        :deep(.p-galleria-mask) {
            width: 100%;
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
            margin-top: 65px;
        }

        .content {
            width: 50%;
        }

        &__modal {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 9999;
            width: 100vw;
            height: 100vh;
            display: none;
            background-color: hsla(var(--color-contrast-higher-h), var(--color-contrast-higher-s), var(--color-contrast-higher-l), 0.6);

            &[open='true'] {
                display: flex !important;
                align-items: center;
                justify-content: center;
            }
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
