<template>
    <div class="container">
        <h1>{{title}}</h1>

        <p>发表于 {{date | moment}}</p>
        <p>分享次数  {{shareTimes}}</p>
        <p class="lead">
            {{content}}
        </p>
        <app-author :author="name"></app-author>
        <app-share @shared="parentShare($event,25)"></app-share>
    </div>
    

</template>

<script>
import moment from 'moment'
import Author from './Author.vue'
import Share from "./../share.vue"
export default {
    data () {
        return {
            title:"这是一篇文章",
            date:new Date(),
            content:"四级分数拉发大水酸辣粉降落伞大家发牢骚是否结束了附件三时间浪费是",
            name:"liiul",
            shareTimes:0
        }
    },
    filters: {
        moment:function(value){
            return moment(value).format("MMMM Do");
        }
    },
    components:{
        "app-author":Author,
        "app-share":Share
    },
    methods: {
        parentShare(event,age){
            console.log(event,age);
            this.shareTimes++;
        }
    }

}
</script>

<style scoped>
    *{
        color:red;
    }
</style>


