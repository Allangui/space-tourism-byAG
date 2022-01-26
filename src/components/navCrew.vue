<template>
    <nav>
        <router-link to="/crew/douglas"></router-link>
        <router-link to="/crew/mark" ></router-link>
        <router-link to="/crew/victor" ></router-link>
        <router-link to="/crew/anousheh" ></router-link>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

nav{
    display: flex;
    column-gap: 20px;
    a{
        width:10px;
        height: 10px;
        border-radius: 5px;
        background-color: rgba(255,255,255,.5);
        &:hover{
        background-color: rgba(255,255,255,1);
        }
    }
        .router-link-exact-active{
        background-color: rgba(255,255,255,1);
        }
}
</style>