<template>
  <div :class="wichBG" :id="mq.s ? 'main-s' : 'main'">
    <Topbar/>
    <router-view> </router-view>
  </div>
</template>

<script>

  import Topbar from './components/Topbar.vue' 

  export default {
    components :  {
      Topbar : Topbar,
    },
    inject:["mq"],
    computed: {
      wichBG() {
        if(this.$route.path === '/home' || this.$route.path === '/'){
        console.log('path in home :' + this.$route.path)
          if(this.mq.s){
            return 'home-bg-s'
          } else{
            return 'home-bg'
          }
        }else if
        (this.$route.path === '/destination' ||
        this.$route.path === '/destination/moon' ||
        this.$route.path === '/destination/mars' ||
        this.$route.path === '/destination/europa' ||
        this.$route.path === '/destination/titan' ){
        console.log('path in dest :' + this.$route.path)
          if(this.mq.s){
            return 'destination-bg-s'
          } else{
            return 'destination-bg'
          }
        }else if(this.$route.path === '/crew'||
        this.$route.path === '/crew/douglas'||
        this.$route.path === '/crew/mark'||
        this.$route.path === '/crew/victor'||
        this.$route.path === '/crew/anousheh'){
        console.log('path in crew :' + this.$route.path)
          if(this.mq.s){
            return 'crew-bg-s'
          } else{
            return 'crew-bg'
          }
        }else if(this.$route.path === '/technology'||
        this.$route.path === '/technology/launch'||
        this.$route.path === '/technology/spaceport'||
        this.$route.path === '/technology/capsule' ){
        console.log('path in tech :' + this.$route.path)
          if(this.mq.s){
            return 'technology-bg-s'
          } else{
            return 'technology-bg'
          }
        }
        else if(this.$route.path === '/notfound'){
        console.log(' wrong path  : ' + this.$route.path)
        if(this.mq.s){
            return 'home-bg-s'
          } else{
            return 'home-bg'
          }
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
#main{
  min-width:1000px;
  height:100vh;
  min-height:780px;
}
#main-s{
  
}
.home-bg{
    background:center / cover no-repeat url("./assets/home/background-home-desktop.jpg") ;
}
.home-bg-s{
      background:center / cover no-repeat url("./assets/home/background-home-mobile.jpg") ;
}
.destination-bg{
    background:center / cover no-repeat url("./assets/destination/background-destination-desktop.jpg") ;
}
.destination-bg-s{
    background:center / cover no-repeat url("./assets/destination/background-destination-mobile.jpg") ;
}
.crew-bg{
    background:center / cover no-repeat url("./assets/crew/background-crew-desktop.jpg") ;
}
.crew-bg-s{
    background:center / cover no-repeat url("./assets/crew/background-crew-mobile.jpg") ;
}
.technology-bg{
    background:center / cover no-repeat url("./assets/technology/background-technology-desktop.jpg") ;
}
.technology-bg-s{
    background:center / cover no-repeat url("./assets/technology/background-technology-mobile.jpg") ;
}
</style>

<style lang="scss">

* {
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 16px;
  color: #fff;
}
h1,h2,h3,h4{
  font-family: 'Bellefair', serif;
}
a{
  text-decoration: none;
  color: white;
}
</style>