<template>
    <div :id="mq.s?'main-s':'main'">
        <class class="leftside">
            <h2><span>02</span> meet your crew</h2>
            <img v-if="mq.s" :src="crew.images.png" :alt="crew.name">
            <navCrew v-if="mq.s"></navCrew>
            <div class="role">{{ crew.role }}</div>
            <div class="name">{{ crew.name }}</div>
            <p>{{ crew.bio }}</p>
            <navCrew v-if="!mq.s"></navCrew>
        </class>
        <class class="rightside" v-if="!mq.s">
            <img :src="crew.images.png" :alt="crew.name">
        </class>
    </div>
</template>

<script>
import NavCrew from "../components/navCrew.vue"
    export default {
        inject:["mq"],
        components: { 
            NavCrew : NavCrew 
            },
            data() {
                return {
                    crew : this.propCrew[3]
                }
            },
            props: {
                propCrew: {
                    type: Object,
                },
            },
    }
</script>

<style lang="scss" scoped>
$marginForNav: 100px;
$myMaxWidth : 600px;
$myWidth : 35vw;
@import '../mylibs/scssCrew.scss';
</style>