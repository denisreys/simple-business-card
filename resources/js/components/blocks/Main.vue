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
            <div class="main__content__images__item image image--4"></div>
            <div class="main__content__images__item image image--11"></div>
            <div class="main__content__images__item image image--3"></div>
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
        height: 60vh;

        .main__content__about {
            max-width: 400px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .main__content__about__text {
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
                align-items: center;

                .main__content__about__location__text {
                    padding: 0 20px;
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
            flex: 1;
            display: grid;
            gap: $img-gab;
            grid-template-areas: "a c"
                                 "b c"
                                 "b c";
            max-width: 500px;

            .main__content__images__item {
                flex: 1;
            }
            .image--3 {
                grid-area: c;
            }
            .image--4 {
                grid-area: a;
            }
            .image--11 {
                grid-area: b;
            }
        }
    }
</style>