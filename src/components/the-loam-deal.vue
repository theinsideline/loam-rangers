<script setup lang="ts">
    import { PUBLIC_DOMAIN } from '@/constants'
    import { Heading2, Heading3, Paragraph, LinkButton } from '@theinsideline/common'
    import { ref } from 'vue'

    const previewUrl = ref(`${PUBLIC_DOMAIN}/images/preview.png`)

    const open = ref(false)
    const toggleModal = () => {
        open.value = !open.value

        if (open.value) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    }

    const form = ref<HTMLFormElement>()
    const signIn = (e: Event) => {
        if (!form.value) return

        form.value.submit()
    }
</script>

<template>
    <section class="loam-deal">
        <Heading2 text="The Loam Deal" />

        <div class="loam-deal__content">
            <div class="content content__video" @click="toggleModal" :style="`background-image: url(${previewUrl})`">
                <img :src="`${PUBLIC_DOMAIN}/icons/play_button.svg`" alt="play_button" />
            </div>
            <div class="content content__form">
                <Heading3 text="The Loam Ranger x The Inside Line" />

                <Paragraph>A match made in heaven.<br />Subscribe to Our Emailer to get The Loam Deal!</Paragraph>

                <form
                    ref="form"
                    id="mc-embedded-subscribe-form"
                    class="form__content"
                    action="https://theinsideline.us19.list-manage.com/subscribe/post?u=e9725cd77be1f8c021f70bbbf&amp;id=f755cf2c83&amp;f_id=001ab4e4f0"
                    method="post"
                    name="mc-embedded-subscribe-form"
                    target="_self"
                >
                    <div class="mc-field-group">
                        <input
                            id="mce-EMAIL"
                            class="required email loam-email"
                            name="EMAIL"
                            type="email"
                            value=""
                            placeholder="Your Email Address"
                        />
                    </div>
                    <LinkButton type="submit" class="submit-button" text="Subscribe" @click.prevent="signIn" />

                    <div hidden=""><input name="tags" type="hidden" value="6738225" /></div>
                    <div style="position: absolute; left: -5000px" aria-hidden="true">
                        <input tabindex="-1" name="b_e9725cd77be1f8c021f70bbbf_f755cf2c83" type="text" value="" />
                    </div>
                </form>
            </div>
        </div>
        <dialog v-if="open" class="loam-deal__modal" :open @click="toggleModal">
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

            @include mobile {
                width: 100%;
                height: 340px !important;
            }
        }

        &__content {
            display: flex;

            @include mobile {
                flex-direction: column;
            }

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

                    @include mobile {
                        width: 62px;
                        height: 62px;
                    }
                }
            }

            .content__form {
                background-color: #161616;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                padding: 100px;

                @include mobile {
                    padding: 20px;
                }

                :deep(.heading_3) {
                    h3 {
                        color: white;
                    }
                }

                :deep(.paragraph) {
                    margin-bottom: 30px;

                    span {
                        color: white;
                        text-align: center;
                        display: flex;
                        justify-content: center;
                    }
                }

                .form__content {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;

                    .mc-field-group {
                        width: 100%;
                        margin-bottom: 30px;

                        input {
                            width: 100%;
                            font-family: Inter;
                            font-size: 20px;
                        }

                        @include mobile {
                            margin-bottom: 20px;

                            input {
                                padding-left: 20px !important;
                                padding-bottom: 12px !important;
                                padding-top: 13px !important;
                                margin: 0 !important;
                            }
                        }
                    }

                    .submit-button {
                        background-color: white !important;
                        width: 350px;

                        :deep {
                            color: #161616;
                        }

                        @include mobile {
                            width: 100%;
                        }
                    }
                }
            }
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
            background-color: hsla(var(--color-contrast-higher-h), var(--color-contrast-higher-s), var(--color-contrast-higher-l), 0.6);
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>
