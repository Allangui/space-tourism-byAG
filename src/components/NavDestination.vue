<template>
    <nav>
        <router-link to="/destination/moon">moon</router-link>
        <router-link to="/destination/mars" >mars</router-link>
        <router-link to="/destination/europa" >europa</router-link>
        <router-link to="/destination/titan" >titan</router-link>
    </nav>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
nav{
        align-self: flex-end;
        margin: 0 auto 30px;
        text-transform: uppercase;
        
        a{
        margin:0 15px;
        padding:10px 0;
        font-size:1rem;
        border-bottom: solid 2px transparent;
        color:#D0D6F9;
            &:hover{
                border-bottom: solid 2px rgba(255, 255, 255, 0.7);
                transition: all .5s;
            }
        &:first-child{
            margin-left:0;
        }
        
        }
        .router-link-exact-active{
        border-bottom: solid 2px rgba(255, 255, 255, 0.7); 
        }
    }
</style>