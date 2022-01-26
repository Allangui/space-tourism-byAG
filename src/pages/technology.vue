<template>
    <div >
        <router-view :propTech="this.dataTech"></router-view>
    </div>
</template>

<script>
import data from "../data.json"
export default {
    data() {
        return {
            dataTech : data.technology
        }
    },
}
</script>


<style lang="scss" scoped>

</style>