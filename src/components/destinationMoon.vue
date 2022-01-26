<template>
    <div :class="mq.s ?'main-s' : 'main'">
        <h2><span>01</span> pick up your destination</h2>
        <div class="content">
            <img class="leftImg" :src="destination.images.png" :alt="destination.name">
            <div class="description">
                <navDest></navDest>
                <h3>{{ destination.name }}</h3> 
                <p>{{ destination.description }}</p>
                <div class="details">
                    <div class="distance">avg. distance <br> <span> {{ destination.distance }}</span></div>
                    <div class="travelTime">est. travel time <br> <span> {{ destination.travel }}</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import navDestination from './NavDestination.vue'
    export default {
        inject: ["mq"],
        components: {
            NavDest: navDestination
        },
        data() {
            return {
                destination: this.propDestination[0]
            }
        },
        props: {
            propDestination: {
                type : Object,
                
            },
        },
    }
</script>

<style lang="scss" scoped>
@import "../mylibs/scssDestination.scss";

</style>