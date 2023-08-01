<template>
    <div class="main__header">
        <div class="main__logo">
            <div class="main__logo__up">Christina</div>
            <div class="main__logo__down">Chekhov</div>
        </div>
        <div class="main__nav">
            <ul class="nav">
                <li class="nav__item">
                    <a href="#main" class="nav__item__a">Main</a>
                </li>
                <li class="nav__item">
                    <a href="#portfolio" class="nav__item__a">Portfolio</a>
                </li>
                <li class="nav__item">
                    <a href="#services" class="nav__item__a">Services</a>
                </li>
                <li class="nav__item">
                    <a href="#contacts" class="nav__item__a">Contacts</a>
                </li>
            </ul>
            <div class="main__nav__icon">
                <img src="../../../../storage/app/public/shake-hands.svg" class="main__nav__icon__img">
            </div>
        </div>
    </div>
    <div class="main__content"></div>
</template>
<sctipt>
    export default {

    }
</sctipt>
<style lang="scss">
    @import '/resources/scss/variables';
    
    .main__header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .main__logo__up {
        padding-bottom: 3px;
        padding-left: 5px;
        margin-bottom: 3px;
        border-bottom: solid $main 1.5px;
    }
    .main__logo__down {
        padding-left: 10px;
    }
    .main__nav {
        display: flex;

        .nav {
            .nav__item {
                float: left;
                margin-right: 10px;
                

                .nav__item__a {
                    font-weight: 600;
                    color: $black;
                }
            }
        }
    }
    .main__nav__icon__img {
        width: 20px;
        height: 20px;
    }
    
</style>