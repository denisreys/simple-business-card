<template>
    <div class="works">
        
        <div class="works__content">
            <div class="works__content__item works__content__item--a image image--6">
                <h2 class="works__title h2">My works</h2>
            </div>
            <div class="works__content__item works__content__item--b image image--10"></div>
            <div class="works__content__item works__content__item--c image image--7"></div>
            <div class="works__content__item works__content__item--d image image--8"></div>
            <div class="works__content__item works__content__item--e image image--9"></div>
        </div>
    </div>
</template>
<style lang="scss">
    @import '../../../../resources/scss/variables';

    .works__title {
        position: absolute;
        background-color: #fff;
        padding-bottom: 30px;
        z-index: 1;
        width: 100%;
    }
    .works__content {
        display: grid;
        grid-template-areas: "a b c d"
                             "a b e e";
        grid-template-rows: 3fr 1fr;
        height: 490px;
        gap: 20px;

        .works__content__item {
            position: relative;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
            }
        }
        .works__content__item--a {
            grid-area: a;
        }
        .works__content__item--b {
            grid-area: b;
        }
        .works__content__item--c {
            grid-area: c;
        }
        .works__content__item--d {
            grid-area: d;
        }
        .works__content__item--e {
            grid-area: e;
        }
    }
</style>