<template>
    <div >
        <router-view :propDestination="this.dataDestination"></router-view>
    </div>
</template>

<script>
import data from "../data.json"
    export default {
        data() {
            return {
                dataDestination : data.destinations
            }
        },

    }
</script>



<style lang="scss" scoped>

</style>
