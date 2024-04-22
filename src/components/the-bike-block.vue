<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import Galleria from 'primevue/galleria'
    import { useWindowSize } from '@vueuse/core'
    import { computed } from 'vue'
    import { PUBLIC_DOMAIN } from '../constants'

    const { width } = useWindowSize()

    const images = ref([
        {
            itemImageSrc: `${PUBLIC_DOMAIN}/icons/loam-bike.svg`,
            alt: 'loam-bike',
            title: 'Bike',
            button: {
                title: '',
                link: '',
            },
        },
        {
            itemImageSrc: `${PUBLIC_DOMAIN}/icons/loam-ibis.svg`,
            alt: 'loam-ibis',
            title: 'Ibis',
            button: {
                title: 'Ibis',
                link: 'https://www.theinsideline.ca/brands/ibis/',
            },
        },
        {
            itemImageSrc: `${PUBLIC_DOMAIN}/icons/loam-manitou.svg`,
            alt: 'loam-manitou',
            title: 'Manitou',
            button: {
                title: 'Manitou',
                link: 'https://www.theinsideline.ca/components/forks/forks/?mode=grid&limit=24&sort=popular&brand=1842619&min=0&max=3000',
            },
        },
        {
            itemImageSrc: `${PUBLIC_DOMAIN}/icons/loam-hayes-trp.svg`,
            alt: 'loam-hayes-trp',
            title: 'Hayes / TPR',
            button: {
                title: 'Hayes / TPR',
                link: 'https://www.theinsideline.ca/tags/hayes-trp/',
            },
        },
        {
            itemImageSrc: `${PUBLIC_DOMAIN}/icons/loam-sdg.svg`,
            alt: 'loam-sdg',
            title: 'SDG',
            button: {
                title: 'SDG',
                link: 'https://www.theinsideline.ca/brands/sdg-components/',
            },
        },
        {
            itemImageSrc: `${PUBLIC_DOMAIN}/icons/loam-michelin.svg`,
            alt: 'loam-michelin',
            title: 'Michelin',
            button: {
                title: 'Michelin',
                link: 'https://www.theinsideline.ca/brands/michelin/',
            },
        },
        {
            itemImageSrc: `${PUBLIC_DOMAIN}/icons/loam-ride-nf.svg`,
            alt: 'loam-ride-nf',
            title: 'Ride NF',
            button: {
                title: 'Ride NF',
                link: 'https://www.theinsideline.ca/brands/ride-nf/',
            },
        },
    ])
    const responsiveOptions = ref([
        {
            breakpoint: '1300px',
            numVisible: 4,
        },
        {
            breakpoint: '575px',
            numVisible: 1,
        },
    ])

    const indicatorsPosition = computed(() => {
        if (width.value >= 320 && width.value <= 1023) return 'top'
        else return 'left'
    })

    const activeIndex = ref(0)
    const changeIndex = (item: number) => {
        activeIndex.value = item
    }

    onMounted(() => {
        const list = document.querySelectorAll('ul.p-galleria-indicators > li')
        const listArray = Array.from(list)

        listArray[0].remove()
    })
</script>

<template>
    <section class="bike-block">
        <Galleria
            v-model:activeIndex="activeIndex"
            showIndicators
            containerClass="gallery"
            :value="images"
            :responsiveOptions
            :indicatorsPosition
            :showThumbnails="false"
            :transitionInterval="5000"
            :showIndicatorsOnItem="false"
        >
            <template #item="{ item }">
                <img
                    v-if="item.itemImageSrc"
                    :src="item.itemImageSrc"
                    :alt="item.alt"
                    style="width: 100%; display: block; max-height: 549px"
                    fetchpriority="high"
                />
            </template>
            <template #indicator="{ index }">
                <div
                    v-if="images[index].button.link"
                    class="gallery_button"
                    @mouseover="() => changeIndex(index)"
                    @mouseleave="() => changeIndex(0)"
                >
                    <a :href="images[index].button.link">{{ images[index].title }}</a>
                </div>
            </template>
        </Galleria>
    </section>
</template>

<style scoped lang="scss">
    .bike-block {
        :deep(.p-galleria-item-container) {
            width: 100%;
        }

        :deep(.p-galleria-indicators) {
            background: none;

            li {
                display: flex;
                width: 223px;
                margin: 0;
                padding: 0 !important;

                &::before {
                    display: none;
                }
            }

            @include mobile {
                width: 100%;
                display: flex;
                flex-direction: column;

                li {
                    width: 100%;
                }
            }

            @include tablet {
                width: 100%;
                display: flex;
                flex-direction: column;

                li {
                    width: 100%;
                }
            }

            @include laptop {
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-row-gap: 15px;
                grid-column-gap: 15px;

                li {
                    width: 100%;
                }
            }

            @include desktop {
                margin-bottom: 0;

                li:last-child {
                    .gallery_button {
                        padding: 0 !important;
                    }
                }
            }

            @include tv {
                margin-bottom: 0;

                li:last-child {
                    .gallery_button {
                        padding: 0 !important;
                    }
                }
            }
        }

        :deep(.p-galleria-item-wrapper) {
            .p-galleria-item {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            @include mobile {
                display: flex;
                flex-direction: column;
            }

            @include tablet {
                display: flex;
                flex-direction: column;
            }

            @include laptop {
                display: flex;
                flex-direction: column;
            }

            @include desktop {
                display: flex;
                flex-direction: row-reverse;
                align-items: center;
            }

            @include tv {
                display: flex;
                flex-direction: row-reverse;
                align-items: center;
            }
        }

        .gallery {
            width: 100%;
            max-height: 549px;

            @include mobile {
                max-height: none;
            }

            @include tablet {
                width: 100%;
                display: flex;
                flex-direction: column;
                max-height: none;

                li {
                    width: 100%;
                }
            }
        }

        .gallery_button {
            width: 100%;
            display: flex;
            background-color: white;
            padding-bottom: 16px;

            a {
                color: #161616;
                padding-top: 13px;
                padding-bottom: 13px;
                text-align: center;
                width: 100%;
                background-color: #e7e7e7;
                text-decoration: none;
                font-weight: 650;
                font-family: Inter;
                font-size: 18px;
            }

            &:hover {
                a {
                    background-color: #1aae82;
                    color: white;
                    transition: all 0.3s ease-in-out;
                }
            }

            @include mobile {
                padding-bottom: 15px;

                a {
                    font-size: 14px;
                }
            }

            @include tablet {
                padding-bottom: 15px;

                a {
                    font-size: 14px;
                }
            }

            @include laptop {
                padding: 0;

                a {
                    font-size: 14px;
                }
            }
        }

        @include mobile {
            margin-top: 20px;
        }

        @include tablet {
            margin-top: 25px;
        }

        @include laptop {
            margin-top: 25px;
        }

        @include desktop {
            margin-top: 25px;
        }

        @include tv {
            margin-top: 25px;
        }
    }
</style>
