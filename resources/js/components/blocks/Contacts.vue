<template>
    <div class="contacts" id="contacts">
        <h2 class="contacts__title h2">Stay in touch</h2>
        <div class="contacts__content">
            <div class="contacts__content__values">
                <div class="contacts__content__values__phone">+372-53-024816 </div>
                <div class="contacts__content__values__email">hi@chekhov.com</div>
            </div>
            <div class="contacts__content__me">
                <div class="contacts__content__me__img">
                    <img src="../../../../storage/app/public/image1.png">
                </div>
                <div class="contacts__content__me__text">
                    <div class="contacts__content__me__text__tagline">
                        Beauty is hidden everywhere. Let's find it together!
                    </div>
                    <div class="contacts__content__me__text__logo logo">
                        <div class="logo__up">Christina</div>
                        <div class="logo__down">Chekhov</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .contacts__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 50px;
    }
    .contacts__content__values {
        display: flex;
        flex: 1;
        justify-content: space-between;
        font-size: 22px;
        text-transform: uppercase;
    }
    .contacts__content__me {
        display: flex;
        flex: 1;
    }
    .contacts__content__me__text {
        padding-left: 30px;
    }
    .contacts__content__me__text__tagline {
        font-size: 15px;
        text-transform: uppercase;
        font-style: italic;
        letter-spacing: 0.75px;
        line-height: 130%;
        margin-bottom: 15px;
    }
    .contacts__content__me__text__logo {
        float: right;
    }
</style>