<template>
    <div :id="mq.s?'main-s':'main'">
        <div class="leftside">
            <h2><span>03</span>space launch 101</h2>
            <img v-if="mq.s" :src="tech.images.landscape" :alt="tech.name">
            <div class="flexcontent">
                <navTech></navTech>
                <div class="description">
                    <div class="terminology">the terminology ...</div>
                    <div class="name">{{ tech.name }}</div>
                    <p>{{ tech.description }}</p>
                </div>
            </div>
        </div>
        <div class="rightside" v-if="!mq.s">
            <img :src="tech.images.portrait" :alt="tech.name">
        </div>
    </div>
</template>

<script>
import navTech from "../components/navTech.vue"
    export default {
        inject:['mq'],
        components: { 
            navTech : navTech 
            },
        data() {
            return {
                tech : this.propTech[2]
            }
        },
        props: {
            propTech: {
                type: Object,
            },
        },
}
</script>

<style lang="scss" scoped>
@import "../mylibs/scssTech.scss";
</style>