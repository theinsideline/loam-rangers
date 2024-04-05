<script setup lang="ts">
    import { PUBLIC_DOMAIN } from '@/constants'
    import { Heading2 } from '@theinsideline/common'
    import { ref } from 'vue'
    import Galleria from 'primevue/galleria'
    import 'primevue/resources/themes/aura-light-green/theme.css'

    const previewUrl = ref(`${PUBLIC_DOMAIN}/images/preview.png`)
    const displayBasic = ref(false)
    const images = ref([
        {
            itemImageSrc: 'https://www.youtube.com/watch?v=ocp5ynefpDk',
        },
    ])
</script>

<template>
    <section class="loam-deal">
        <Heading2 text="The Loam Deal" />

        <div class="loam-deal__content">
            <div class="content content__video" :style="`background-image: url(${previewUrl});`" @click="displayBasic = true">
                <img :src="`${PUBLIC_DOMAIN}/icons/play_button.svg`" alt="play_button" />
            </div>
            <div class="content content__form"></div>
        </div>
        <Galleria
            v-model:visible="displayBasic"
            :value="images"
            :fullScreen="true"
            :circular="true"
            :showItemNavigators="false"
            :showThumbnailNavigators="false"
            :showThumbnails="false"
            containerStyle="max-width: 50%"
        >
            <template #item="slotProps">
                <div>
                    <iframe
                        id="ytplayer"
                        type="text/html"
                        width="1024"
                        height="576"
                        src="https://www.youtube.com/embed/ocp5ynefpDk"
                        frameborder="0"
                        allowfullscreen
                    />
                </div>
            </template>
        </Galleria>
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
