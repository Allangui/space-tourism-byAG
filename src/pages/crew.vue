<template>
    <div >
        <router-view :propCrew="this.dataCrew"></router-view>
    </div>
</template>

<script>
import data from "../data.json"
export default {
    data() {
        return {
            dataCrew : data.crew
        }
    },
}
</script>


<style lang="scss" scoped>


</style>