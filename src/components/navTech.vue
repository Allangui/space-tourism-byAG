<template>
    <nav :class="mq.s?'nav-s':'nav-xl'">
        <router-link to="/technology/launch">1</router-link>
        <router-link to="/technology/spaceport">2</router-link>
        <router-link to="/technology/capsule">3</router-link>
    </nav>
</template>

<script>
    export default {
        inject:['mq']
    }
</script>

<style lang="scss" scoped>

.nav-xl{
    display:flex;
    flex-direction: column;
    row-gap: 32px;
    margin: 0 70px 0 150px;
    a{
        font-size: 1.5rem;
        font-family: 'Bellefair' , serif;
        text-align: center;
        line-height: 80px;
        width:80px;
        height:80px;
        border-radius:50%;
        background-color: transparent;
        border: solid 1px rgba(255,255,255,.3);
        &:hover{
        background-color: rgba(255,255,255,.5);
        color:black; 
        }
    }
    .router-link-exact-active{
        background-color: rgba(255,255,255,1);
        color:black;
        &:hover{
        background-color: rgba(255,255,255,1);
        color:black;
        }
        }
}
.nav-s{
    display:flex;
    column-gap: 15px;
    margin: 30px auto ;
    justify-content: center;
    a{
        font-size: 1rem;
        font-family: 'Bellefair' , serif;
        text-align: center;
        line-height: 40px;
        width:40px;
        height:40px;
        border-radius:50%;
        background-color: transparent;
        border: solid 1px rgba(255,255,255,.3);
    }
    .router-link-exact-active{
        background-color: rgba(255,255,255,1);
        color:black;
        }
}

</style>