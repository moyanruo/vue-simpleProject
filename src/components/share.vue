<template>
    <div>
        <button class="btn btn-primary" @click="share">分享</button>
        </div>
</template>
<script>
export default {
    methods:{
        share(){
            this.$emit("shared",{
                name:"李"
            });
        }
    }
}
</script>
<style scoped>

</style>

