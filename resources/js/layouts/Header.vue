<template>
        <div class="header mb-100">
        <div class="header__logo logo">
            <div class="logo__up">Christina</div>
            <div class="logo__down">Chekhov</div>
        </div>
        <div class="header__nav">
            <ul class="nav">
                <li class="nav__item">
                    <a href="#main" class="nav__item__a">Main</a>
                </li>
                <li class="nav__item">
                    <a href="#portfolio" class="nav__item__a">What I Do</a>
                </li>
                <li class="nav__item">
                    <a href="#works" class="nav__item__a">My Works</a>
                </li>
                <li class="nav__item">
                    <a href="#contacts" class="nav__item__a">Contacts</a>
                </li>
            </ul>
            <div class="header__nav__icon">
                <img src="../../../storage/app/public/shake-hands.svg" class="header__nav__icon__img">
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    @import '/resources/scss/variables';
    
    .header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .header__nav {
        display: flex;

        .nav {
            display: flex;
            .nav__item {
                &:not(:last-child) {
                    margin-right: 35px;
                }
                .nav__item__a {
                    font-weight: 600;
                    letter-spacing: 3.92px;
                    color: $black;
                }
            }
        }
    }
    .header__nav__icon {
        margin-left: 50px;

        .header__nav__icon__img {
            width: 20px;
            height: 20px;
        }
    }
</style>