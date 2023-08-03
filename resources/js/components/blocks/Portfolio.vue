<template>
    <div class="portfolio">
        <h2 class="portfolio__header h2">What i do</h2>
        <!-- <h3 class="portfolio__content__title h3">Photo shooting</h3>
        <div class="portfolio__content portfolio__content--collage portfolio__content--photo">
            <div class="portfolio__content__images">
                <div class="portfolio__content__images__item image image--12"></div>
                <div class="portfolio__content__images__item image image--13"></div>
                <div class="portfolio__content__images__item image image--14"></div>
                <div class="portfolio__content__images__item image image--15"></div>
            </div>
        </div> -->
        <div class="portfolio__content portfolio__content--text-and-img portfolio__content--photo">
            <div class="portfolio__content__text">
                <h2 class="portfolio__content__title h3">Photo shooting</h2>
                <div class="portfolio__content__text__desc paragraph">
                    Drone filming is a technique used to capture aerial footage using unmanned aerial vehicles (drones). It offers a unique perspective and allows for stunning aerial shots in various industries such as filmmaking, real estate, sports, and events.
                </div>
            </div>
            <div class="portfolio__content__images">
                <div class="portfolio__content__images__item image image--12"></div>
                <div class="portfolio__content__images__item image image--15"></div>
                <div class="portfolio__content__images__item image image--14"></div>
                <div class="portfolio__content__images__item image image--12"></div>
                <div class="portfolio__content__images__item image image--13"></div>
            </div>
        </div>
        <div class="portfolio__content portfolio__content--reverse portfolio__content--text-and-img portfolio__content--video">
            <div class="portfolio__content__text">
                <h2 class="portfolio__content__title h3">Video shooting</h2>
                <div class="portfolio__content__text__desc paragraph">
                    When you’re creating a marketing video, 
                    the words you use have to work with the photos
                     and videos you choose. That doesn’t just mean 
                     what the words are — it also means how you place
                      them. Take a look at some tips for how to shoot 
                      text-friendly photos and video clips for marketing 
                      videos, and how to make the ones you already 
                      have work better in your video.
                      
                </div>
            </div>
            <div class="portfolio__content__images">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ipf7ifVSeDU?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        <div class="portfolio__content portfolio__content--text-and-img portfolio__content--dron">
            <div class="portfolio__content__text">
                <h2 class="portfolio__content__title h3">Drone filming</h2>
                <div class="portfolio__content__text__desc paragraph">
                    Drone filming is a technique used to capture aerial footage using unmanned aerial vehicles (drones). It offers a unique perspective and allows for stunning aerial shots in various industries such as filmmaking, real estate, sports, and events.
                </div>
            </div>
            <div class="portfolio__content__images">
                <div class="portfolio__content__images__item image image--12"></div>
                <div class="portfolio__content__images__item image image--14"></div>
                <div class="portfolio__content__images__item image image--13"></div>
            </div>
        </div>
        <div class="portfolio__content portfolio__content--text-and-img portfolio__content--reverse portfolio__content--stalking">
            <div class="portfolio__content__text">
                <h2 class="portfolio__content__title h3">Location stalking</h2>
                <div class="portfolio__content__text__desc paragraph">
                    Location stalking refers to the act of tracking or monitoring someone's physical location without their consent or knowledge. It involves using various methods such as GPS tracking devices, mobile phone tracking apps, or social media geolocation data to gather information about a person's whereabouts.
                </div>
            </div>
            <div class="portfolio__content__images">
                <div class="portfolio__content__images__item image image--14"></div>
                <div class="portfolio__content__images__item image image--13"></div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    @import '/resources/scss/variables';

    .portfolio__header {
        text-align: center;
    }
    .portfolio__content {
        display: flex;
        position: relative;
        gap: 50px;
        align-items: center;
        
        .portfolio__content__images {
            align-self: stretch;
            display: flex;
            gap: $img-gab;
            flex: 1;
            height: 50vh;
            
            .portfolio__content__images__item {
                flex: 1;
            }
        }
        &:not(:last-child){
            margin-bottom: 100px;
        }
    }
    .portfolio__content--collage {
        .portfolio__content__images {
            height: 200px;
        }
    }
    .portfolio__content--text-and-img { 
        .portfolio__content__text {
            max-width: 450px;
        }
        .portfolio__content__images {
            justify-content: flex-end; 
        }
    }
    .portfolio__content--reverse {
        flex-direction: row-reverse;
        
        .portfolio__content__images {
            justify-content: flex-start; 
        }
    }
    .portfolio__content__title {
        color: $main;
    }
</style>