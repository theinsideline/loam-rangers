<script setup lang="ts">
    import { PUBLIC_DOMAIN } from '@/constants'
    import { Heading2, Heading3, Paragraph } from '@theinsideline/common'
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
</script>

<template>
    <section class="loam-deal">
        <Heading2 text="The Loam Deal" />

        <div class="loam-deal__content">
            <div class="content content__video" @click="toggleModal" :style="`background-image: url(${previewUrl})`">
                <img :src="`${PUBLIC_DOMAIN}/icons/play_button.svg`" alt="play_button" />
            </div>
            <div class="content content__form">
                <div class="text-loam-deal">
                    <Heading3 text="The Loam Ranger x The Inside Line" />

                    <Paragraph>A match made in heaven.<br />Subscribe to Our Emailer to get The Loam Deal!</Paragraph>

                    <div id="mc_embed_shell">
                        <div id="mc_embed_signup">
                            <form
                                id="mc-embedded-subscribe-form"
                                class="validate"
                                action="https://theinsideline.us19.list-manage.com/subscribe/post?u=e9725cd77be1f8c021f70bbbf&amp;id=f755cf2c83&amp;f_id=001ab4e4f0"
                                method="post"
                                name="mc-embedded-subscribe-form"
                                novalidate=""
                                target="_self"
                            >
                                <div id="mc_embed_signup_scroll">
                                    <div class="mc-field-group">
                                        <!--<label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label>-->
                                        <input
                                            id="mce-EMAIL"
                                            class="required email loam-email"
                                            style="padding: 1rem"
                                            name="EMAIL"
                                            required=""
                                            type="email"
                                            value=""
                                            placeholder="Your Email Address"
                                        />
                                    </div>
                                    <div hidden=""><input name="tags" type="hidden" value="6738225" /></div>
                                    <div id="mce-responses" class="clear">
                                        <div id="mce-error-response" class="response" style="display: none"> </div>
                                        <div id="mce-success-response" class="response" style="display: none"> </div>
                                    </div>
                                    <div style="position: absolute; left: -5000px" aria-hidden="true">
                                        <input tabindex="-1" name="b_e9725cd77be1f8c021f70bbbf_f755cf2c83" type="text" value="" />
                                    </div>
                                    <div class="clear">
                                        <input
                                            id="mc-embedded-subscribe"
                                            class="button button-loam"
                                            name="subscribe"
                                            type="submit"
                                            value="Subscribe"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
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
            border: none;

            &[open] {
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
                display: flex;
                align-items: center;
                justify-content: center;

                :deep(.heading_3) {
                    h3 {
                        color: white;
                    }
                }

                :deep(.paragraph) {
                    span {
                        color: white;
                    }
                }
            }
        }
    }
</style>
