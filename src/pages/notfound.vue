<template>

    <div>
        <h1>Page introuvable</h1>
        <h2 v-if="$route.params.pathMatch" >"{{ $route.params.pathMatch }}"</h2>
        <!-- wrongPath = variable dynamique correspondant au chemin inexistant 
        Le v-if pour ne pas afficher les guillemets si "wrongPath" n'existe pas-->
        <el-button @click="$router.back()" >
            Revenir en arrière
        </el-button>
    </div>

</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>