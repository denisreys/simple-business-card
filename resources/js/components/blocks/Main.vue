<template>
    <div class="main__content" id="main">
        <div class="main__content__about">
            <div class="main__content__about__text">
                <h1 class="main__content__about__text__title h1">
                    <span class="main__content__about__text__title__photo">Photo</span>
                    <span class="main__content__about__text__title__video">Video</span>
                </h1>
                <div class="main__content__about__text__desc paragraph">
                    Hi! My name is Christina Chekhov. 
                    I shoot photos all around the world. 
                    I travel and look for inspiration for my work in simple things. 
                    Join me.
                </div>
            </div>
            <div class="main__content__about__location">
                <div class="main__content__about__location__img">
                    <img src="../../../../storage/app/public/image2.png">
                </div>
                <div class="main__content__about__location__text">
                    <span class="main__content__about__location__text__up">
                        My current location
                    </span>
                    <span class="main__content__about__location__text__down">
                        Estonia
                    </span>
                </div>
            </div>
        </div>
        <div class="main__content__images">
            <div class="main__content__images__item main__content__images__item--1">
                <img src="../../../../storage/app/public/image4.png">
            </div>
            <div class="main__content__images__item main__content__images__item--2">
                <img src="../../../../storage/app/public/image11.png">
            </div>
            <div class="main__content__images__item main__content__images__item--3">
                <img src="../../../../storage/app/public/image3.png">
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    @import '/resources/scss/variables';

    .main__content {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        gap: 30px;

        .main__content__about {
            flex-basis: 388px;
            display: flex;
            flex-direction: column;

            .main__content__about__text {
                flex: 1;

                .main__content__about__text__title {
                    .main__content__about__text__title__video {
                        color: $gray;
                        margin-left: 43px;
                    }
                }
                .main__content__about__text__desc {
                    margin: 30px 0;
                }
            }
            .main__content__about__location {
                display: flex;

                .main__content__about__location__text {
                    padding: 25px 20px;
                    text-transform: uppercase;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    .main__content__about__location__text__up {
                        letter-spacing: 0.7px;
                        margin-bottom: 10px;
                    }
                    .main__content__about__location__text__down {
                        display: block;
                        font-weight: 600;
                        letter-spacing: 0.8px;
                        font-size: 16px;
                    }
                }
            }
        }
        .main__content__images {
            display: grid;
            grid-template-areas: "a a c c"
                                 "b b c c";
            gap: $img-gab;

            .main__content__images__item img {
                height: 100%;
                width: 100%;
            }
            .main__content__images__item--1 {
                height: 100%;
                width: 100%;
                grid-area: a;
            }
            .main__content__images__item--2 {
                height: 100%;
                width: 100%;
                grid-area: b;
            }
            .main__content__images__item--3 {
                height: 100%;
                width: 100%;
                grid-area: c;
            }
        }
    }
</style>