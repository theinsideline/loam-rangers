<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import { Heading2 } from '@theinsideline/common'
    import Galleria from 'primevue/galleria'
    import { useWindowSize } from '@vueuse/core'
    import { computed } from 'vue'

    const { width } = useWindowSize()

    const images = ref([
        {
            itemImageSrc: 'icons/loam-bike.svg',
            alt: 'loam-bike',
            title: 'Bike',
            button: {
                title: '',
                link: '',
            },
        },
        {
            itemImageSrc: 'icons/loam-ibis.svg',
            alt: 'loam-bike',
            title: 'Ibis',
            button: {
                title: 'Ibis',
                link: 'https://www.theinsideline.ca/brands/ibis/',
            },
        },
        {
            itemImageSrc: 'icons/loam-manitou.svg',
            alt: 'loam-bike',
            title: 'Manitou',
            button: {
                title: 'Manitou',
                link: 'https://www.theinsideline.ca/components/forks/forks/?mode=grid&limit=24&sort=popular&brand=1842619&min=0&max=3000',
            },
        },
        {
            itemImageSrc: 'icons/loam-hayes-trp.svg',
            alt: 'loam-bike',
            title: 'Hayes / TPR',
            button: {
                title: 'Hayes / TPR',
                link: 'https://www.theinsideline.ca/tags/hayes-trp/',
            },
        },
        {
            itemImageSrc: 'icons/loam-sdg.svg',
            alt: 'loam-bike',
            title: 'SDG',
            button: {
                title: 'SDG',
                link: 'https://www.theinsideline.ca/brands/sdg-components/',
            },
        },
        {
            itemImageSrc: 'icons/loam-michelin.svg',
            alt: 'loam-bike',
            title: 'Michelin',
            button: {
                title: 'Michelin',
                link: 'https://www.theinsideline.ca/brands/michelin/',
            },
        },
        {
            itemImageSrc: 'icons/loam-ride-nf.svg',
            alt: 'loam-bike',
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
        <Heading2 text="Bike block" />

        <div class="bike-block__content">
            <Galleria
                v-model:activeIndex="activeIndex"
                :value="images"
                :responsiveOptions
                :showThumbnails="false"
                showIndicators
                :showIndicatorsOnItem="false"
                :indicatorsPosition
                containerClass="gallery"
                :transitionInterval="5000"
            >
                <template #item="slotProps">
                    <img
                        :src="slotProps.item.itemImageSrc"
                        :alt="slotProps.item.alt"
                        style="width: 100%; display: block; max-height: 549px"
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
        </div>
    </section>
</template>

<style scoped lang="scss">
    .bike-block {
        &__content {
            :deep(.p-galleria-item-container) {
                width: 100%;
            }

            :deep(.p-galleria-indicators) {
                background: none;

                li {
                    display: flex;
                    width: 223px;
                    margin: 0;
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

                    li {
                        width: 100%;
                    }
                }
            }

            .gallery_button {
                width: 100%;
                display: flex;
                background-color: white;
                padding-bottom: 20px;

                a {
                    color: #161616;
                    padding-top: 14px;
                    padding-bottom: 15px;
                    text-align: center;
                    width: 100%;
                    background-color: #e7e7e7;
                    text-decoration: none;
                    font-weight: bold;
                    font-family: Inter;
                }

                &:hover {
                    a {
                        background-color: #1aae82;
                        color: white;
                        transition: all .3s ease-in-out;
                    }
                }

                @include mobile {
                    padding-bottom: 15px;
                }

                @include tablet {
                    padding-bottom: 15px;
                }

                @include laptop {
                    padding: 0;
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
