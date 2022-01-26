<template>
  <div :id="mq.s?'sidebar':'topbar'">
    <img src="../assets/shared/logo.svg" alt="logo">
    <button v-if="mq.s && !isMenuOpen" @click="isMenuOpen=true" class="btn-burger"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg></button>
    <button v-if="mq.s && isMenuOpen" @click="isMenuOpen=false" class="btn-close"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg></button>
    <nav v-if="!mq.s ||(mq.s && isMenuOpen)" >
      <router-link to="/home" @click="isMenuOpen=false"><strong>00</strong> home</router-link>
      <router-link to="/destination" @click="isMenuOpen=false"><strong>01</strong> destination</router-link>
      <router-link to="/crew" @click="isMenuOpen=false"><strong>02</strong> crew</router-link>
      <router-link to="/technology" @click="isMenuOpen=false"><strong>03</strong> technology</router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    inject: ["mq"],
    data() {
      return {
        isMenuOpen: false,
      }
    },
  }
</script>

<style lang="scss" scoped>

#topbar{
  display:flex;
  align-items: center;
  padding: 30px 0 0 40px;
  text-transform: uppercase;
  justify-content: space-between;
  
    nav{
      display:flex;
      align-items: center;
      gap:40px;
      -webkit-backdrop-filter: blur(10px); /* assure la compatibilité avec safari */
      backdrop-filter: blur(10px);  
      background-color: rgba(255, 255, 255, 0.1);  
      height:96px;
      padding:37px 150px 0 100px;
      letter-spacing: 2.7px;
      z-index: 100;
      a{
        padding-bottom:37px;
          border-bottom: solid 2px transparent;
        &:hover{
          border-bottom: solid 2px rgba(255, 255, 255, 0.7);
          transition: all .5s;
        }
      }
              .router-link-active{
        border-bottom: solid 2px rgba(255, 255, 255, 0.7); 
        }
      }
      

}
// MQ S
#sidebar{
  display:flex;
  align-items: center;
  padding: 30px 40px 0;
  text-transform: uppercase;
  justify-content: space-between;
  .btn-burger , .btn-close{
    background-color: transparent;
    border:none;
    z-index:200;
  }
  nav{
    position: fixed;
    right:0;
    top:0;
    width:70vw;
    height:100%;
    display:flex;
    flex-direction: column;
    padding:130px 0 0 30px;
    row-gap: 30px;
    backdrop-filter: blur(20px);  
    background-color: rgba(255, 255, 255, 0.1);  
    z-index:190;
    a{
      letter-spacing: 2.7px;
    }
  }
}


</style>