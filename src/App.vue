<template>
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <app-Announcement>
                    <p slot="one">这是一个P1 标签，Slot 替换内容</p>
                    <p slot="two">这是一个P2 标签，Slot 替换内容</p>                    
                </app-Announcement>
                <app-article></app-article>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {

};
</script>

<style>
</style>


